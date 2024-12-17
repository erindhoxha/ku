import { Link, Stack } from 'expo-router';
import { Platform, Text } from 'react-native';
import { CreateTokens, TamaguiProvider, ThemeProvider, createTamagui, createTokens } from '@tamagui/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LogBox } from 'react-native';
import { SessionProvider } from './context/AuthContext';
import StackComponent from './pages/stack';
import config from '../tamagui.config';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function AppLayout() {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={config}>
          <StatusBar style="light" />
          <StackComponent />
        </TamaguiProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
