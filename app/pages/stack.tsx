import { Link, Stack } from 'expo-router';
import { Text } from 'react-native';
import { useSession } from '../context/AuthContext';
import { useEffect } from 'react';

const StackComponent = () => {
  const { signOut, session } = useSession();

  useEffect(() => {
    console.log('SESSION123', session);
  }, [session]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
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
                fontWeight: 'bold',
              }}>
              Ku.com
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
                }}>
                Log Out
              </Text>
            ) : (
              <Link
                style={{
                  color: 'white',
                  fontSize: 16,
                  marginRight: 16,
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
