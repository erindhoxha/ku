import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { TamaguiProvider, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const queryClient = new QueryClient();

import { LogBox } from 'react-native';
import { SessionProvider, useSession } from './context/AuthContext';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function AppLayout() {
  const { signOut } = useSession();
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
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Ku.com
                  </Text>
                );
              },
              headerRight: () => {
                return (
                  <Text
                    style={{
                      color: 'white',
                      marginRight: 12,
                    }}
                    onPress={() => {
                      signOut();
                    }}>
                    Sign out
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
