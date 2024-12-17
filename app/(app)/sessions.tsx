import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H1, ScrollView, YStack } from 'tamagui';
import { Session } from '../../components/Session';

const SESSIONS = [
  {
    title: 'Session 1',
    matched: false,
    description: 'Description 1',
    type: 'Type 1',
    date: '12/07/24',
  },
  {
    title: 'Session 2',
    matched: false,
    description: 'Description 1',
    type: 'Type 1',
    date: '12/07/24',
  },
  {
    title: 'Session 3',
    matched: false,
    description: 'Description 1',
    type: 'Type 1',
    date: '12/07/24',
  },
  {
    title: 'Session 4',
    matched: false,
    description: 'Description 1',
    type: 'Type 1',
    date: '12/07/24',
  },
  {
    title: 'Session 5',
    matched: false,
    description: 'Description 2',
    type: 'Type 2',
    date: '12/07/24',
  },
  {
    title: 'Session 6',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/24',
  },
  {
    title: 'Session 7',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/24',
  },
  {
    title: 'Session 8',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/24',
  },
  {
    title: 'Session 9',
    matched: true,
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/24',
  },
];

const Tab = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <H1 color="$white" marginBottom={24}>
        Sessions
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
