import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'tamagui';
import { useSession } from '../context/AuthContext';
import { TabBar } from '../../components/TabBar';

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // // need to be able to access the (auth) group and sign in again.
  // if (!session) {
  //   // On web, static rendering will stop here as the user is not authenticated
  //   // in the headless Node process that the pages are rendered in.
  //   return <Redirect href="/sign-in" />;
  // }

  return (
    <Tabs
      tabBar={TabBar}
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "N'shpi",
          headerTitle: "N'shpi",
          tabBarLabel: "N'shpi",
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          title: 'Votimet',
          tabBarLabel: 'Votimet',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="map-pin" color={color} />,
        }}
      />
    </Tabs>
  );
}
