import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TamaguiProvider, createTamagui } from '@tamagui/core'; // or 'tamagui'
import { config } from '@tamagui/config/v3';
import Button from './components/Button';

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  // or 'tamagui'
  interface TamaguiCustomConfig extends Conf {}
}

export default () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
