import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'tamagui';

export default function TabLayout() {
  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarBackground: () => {
          return (
            <View
              style={{
                backgroundColor: '#000',
                flexDirection: 'row',
                height: '100%',
              }}
            />
          );
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sessions"
        options={{
          title: 'Sessions',
          tabBarLabel: 'Sessions',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="map-pin" color={color} />,
        }}
      />
    </Tabs>
  );
}
