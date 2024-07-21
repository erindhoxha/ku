import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Button, H1, H2, XStack } from 'tamagui';

export default function Tab() {
  return (
    <View style={styles.container}>
      <H1 marginBottom={12}>Ku?</H1>
      <Text>Platforme te cilin e boni share me shoke dhe shoqe, dhe votoni ku eshte destinacioni juaj i ardhshem.</Text>
      <Text
        style={{
          marginTop: 12,
        }}>
        Zgjedhni nje nga opsionet me poshte:
      </Text>

      <H2 marginTop={24}>Menagjo sesionet</H2>
      <Text
        style={{
          marginTop: 8,
        }}>
        Menagjoni sessionet, dhe mund ti nderroni detajet
      </Text>
      <Link href="./sessions" asChild>
        <Button theme="blue" marginTop={12}>
          Shiko sessionet
        </Button>
      </Link>
      <H2 marginTop={24}>Krijo nje sesion</H2>
      <Text
        style={{
          marginTop: 8,
        }}>
        Krijo nje session, dhe pastaj shperndaje me grupin:
      </Text>
      <Link href="../sessionForm" asChild>
        <Button theme="green" marginTop={12}>
          Krijo nje session
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
