import { Link, Stack } from 'expo-router';
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
import { useEffect } from 'react';
import StackComponent from './pages/stack';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function AppLayout() {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig}>
          <StatusBar style="light" />
          <StackComponent />
        </TamaguiProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
