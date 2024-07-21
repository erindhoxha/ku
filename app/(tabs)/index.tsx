import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Button, H1, H2, XStack } from 'tamagui';

export default function Tab() {
  return (
    <View style={styles.container}>
      <H1 marginBottom={12}>Ku</H1>
      <Text>Platforme te cilin e boni share me shoke dhe shoqe, dhe votoni ku eshte destinacioni juaj i ardhshem.</Text>
      <Text
        style={{
          marginTop: 12,
        }}>
        Zgjedhni nje nga opsionet me poshte:
      </Text>
      <XStack gap="$3">
        <Link href="../sessionForm" asChild>
          <Button theme="green" marginTop={12}>
            Krijo nje session
          </Button>
        </Link>
      </XStack>
      <H2 marginTop={24}>Sessions</H2>
      <Text>Keni 3 sessions pa match</Text>
      <Link href="./sessions" asChild>
        <Button theme="blue" marginTop={12}>
          Shiko sessionet
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 24,
  },
});