import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';

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
          <XStack gap="$2">
            {session.result ? <AntDesign name="checkcircle" size={16} color="#99d98c" /> : null}
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {session.title}
            </Text>
          </XStack>
          <Text
            style={{
              fontSize: 12,
            }}>
            {session.date}
          </Text>
        </XStack>
        <Text
          style={{
            fontSize: 12,
          }}>
          {session.description}
        </Text>
        <Text
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
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: 'rgba(0,0,0,0.05)',
    overflow: 'hidden',
  },
  session: {
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1,
    borderRadius: 12,
  },
});
