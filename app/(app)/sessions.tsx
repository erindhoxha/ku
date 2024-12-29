import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H1, ScrollView, YStack } from 'tamagui';
import { Session } from '../../components/Session';

const SESSIONS = [
  {
    title: 'Votimi 1',
    matched: false,
    description: 'lorem ipsum dolor sit amet',
    type: 'Restaurants/Bar/Nightlife',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 2',
    matched: false,
    description: 'lorem ipsum dolor sit amet',
    type: 'Restaurants/Bar/Nightlife',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 3',
    matched: false,
    description: 'lorem ipsum dolor sit amet',
    type: 'Restaurants/Bar/Nightlife',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 4',
    matched: false,
    description: 'lorem ipsum dolor sit amet',
    type: 'Restaurants/Bar/Nightlife',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 5',
    matched: false,
    description: 'Description 2',
    type: 'Type 2',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 6',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 7',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 8',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/2024',
  },
  {
    title: 'Votimi 9',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/2024',
  },
];

const Tab = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <H1 color="$white" marginBottom={24}>
        Votimet
      </H1>
      <YStack gap="$1">
        {SESSIONS.map((session, index) => (
          <Session key={index} session={session} />
        ))}
      </YStack>
    </ScrollView>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: 'rgb(5, 5, 5)',
  },
  contentContainer: {
    paddingBottom: 72,
  },
});
