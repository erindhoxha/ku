import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { getToken, getTokens, H1, H2, ScrollView, Separator, Text, Theme } from 'tamagui';
import Button from '../../components/Button';

export default function Tab() {
  return (
    <ScrollView background="$black" style={{ backgroundColor: 'rgb(5,5,5)' }}>
      <View style={styles.container}>
        <H1 marginBottom={12} color="$white">
          Ku?
        </H1>
        <Text color="$white">
          Ku? eshte nje Platforme te cilin e boni share me shoke dhe shoqe, dhe votoni ku eshte destinacioni juaj i
          ardhshem.
        </Text>
        <Text
          color="$white"
          style={{
            marginTop: 12,
          }}>
          Zgjedhni nje nga opsionet me poshte:
        </Text>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#fff',
            marginTop: 24,
            marginBottom: 20,
          }}
        />
        <H2 color="$white">Menagjo votimet</H2>
        <Text color="$white">Menagjoni votimet, dhe mund ti nderroni detajet</Text>
        <Link href="./sessions" asChild>
          <Button marginTop={12}>Votimet</Button>
        </Link>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#fff',
            marginTop: 24,
            marginBottom: 20,
          }}
        />
        <H2 color="$white">Krijo nje votim</H2>
        <Text color="$white">Krijo nje votim, dhe pastaj shperndaje me grupin:</Text>
        <Link href="../sessionForm" asChild>
          <Button marginTop={12}>Krijo nje votim</Button>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 24,
    backgroundColor: 'rgb(5, 5, 5)',
  },
});
