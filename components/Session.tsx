import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, XStack, YStack } from 'tamagui';

export const Session = ({ session }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Link
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      key={session?.description}
      href="/session"
      style={pressed ? styles.sessionActive : styles.session}>
      <YStack
        gap="$1"
        style={{
          padding: 12,
        }}>
        <XStack justifyContent="space-between" width="100%">
          <XStack gap="$1" alignItems="center">
            {session.result ? (
              <AntDesign name="checkcircleo" size={16} color="green" />
            ) : (
              <AntDesign name="folderopen" size={16} color="white" />
            )}
            <Text
              color="$white"
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {session.title}
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  backgroundColor: session.matched ? 'green' : 'orange',
                  color: 'black',
                  borderRadius: 24,
                  padding: 4,
                }}>
                {session.matched ? 'Perfunduar' : 'Pa perfunduar'}
              </Text>
            </View>
          </XStack>
          <Text
            color="$white"
            style={{
              fontSize: 12,
            }}>
            {session.date}
          </Text>
        </XStack>
        <Text
          color="$white"
          style={{
            fontSize: 12,
          }}>
          {session.description}
        </Text>
        <Text
          color="$white"
          style={{
            fontSize: 12,
          }}>
          {session.type}
        </Text>
      </YStack>
    </Link>
  );
};

const styles = StyleSheet.create({
  sessionActive: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    overflow: 'hidden',
  },
  session: {
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderRadius: 12,
  },
});
