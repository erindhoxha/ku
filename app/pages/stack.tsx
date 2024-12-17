import { Link, Stack } from 'expo-router';
import { StatusBar, Text } from 'react-native';
import { useSession } from '../context/AuthContext';
import { useEffect } from 'react';
import { getTokens, Header, View } from 'tamagui';

const StackComponent = () => {
  const { signOut, session } = useSession();

  useEffect(() => {
    console.log('SESSION123', session);
  }, [session]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(12, 12, 12)',
        },
        headerBackTitle: 'Back',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: (props) => {
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Ku?
            </Text>
          );
        },
        headerRight: () => {
          {
            return session ? (
              <Text
                onPress={signOut}
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginRight: 16,
                  fontWeight: '500',
                }}>
                Log Out
              </Text>
            ) : (
              <Link
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginRight: 16,
                  fontWeight: '500',
                }}
                href="../sign-in"
                className="text-white">
                Sign in
              </Link>
            );
          }
        },
      }}
    />
  );
};

export default StackComponent;
