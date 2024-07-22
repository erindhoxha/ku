import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { TamaguiProvider, createTamagui } from '@tamagui/core'; // or 'tamagui'
import { config } from '@tamagui/config/v3';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const queryClient = new QueryClient();

import { LogBox } from 'react-native';
import { SessionProvider } from './context/AuthContext';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function AppLayout() {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig}>
          <StatusBar style="light" />
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
                    }}>
                    Ku.com
                  </Text>
                );
              },
            }}
          />
        </TamaguiProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
