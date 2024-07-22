/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { H1, Text, XStack, YStack } from 'tamagui';
import { Link } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const SESSIONS = [
  {
    title: 'Session 1 / Ongoing',
    description: 'Description 1',
    type: 'Type 1',
    date: '12/07/24',
  },
  {
    title: 'Session 2 / Ongoing',
    description: 'Description 2',
    type: 'Type 2',
    date: '12/07/24',
  },
  {
    title: 'Session 3 / Matched',
    result: 'Drymades beach',
    description: 'Description 3',
    type: 'Type 3',
    date: '12/07/24',
  },
];

const Tab = () => {
  return (
    <View style={styles.container}>
      <H1 marginBottom={24}>Sessions</H1>
      <YStack gap="$3">
        {SESSIONS.map((session, index) => (
          <Link
            key={session?.description}
            href="/session"
            style={{
              borderColor: 'rgba(0,0,0,0.1)',
              borderWidth: 1,
              borderRadius: 12,
            }}>
            <YStack
              key={index}
              gap="$1"
              style={{
                padding: 12,
              }}>
              <XStack justifyContent="space-between" width="100%">
                <XStack gap="$2">
                  {session.result ? <AntDesign name="checkcircle" size={16} color="#99d98c" /> : null}
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: session.result ? 'rgba(0,0,0,0.5)' : 'black',
                    }}>
                    {session.title}
                  </Text>
                </XStack>
                <Text
                  style={{
                    fontSize: 12,
                    color: session.result ? 'rgba(0,0,0,0.5)' : 'black',
                  }}>
                  {session.date}
                </Text>
              </XStack>
              <Text
                style={{
                  fontSize: 12,
                  color: session.result ? 'rgba(0,0,0,0.5)' : 'black',
                }}>
                {session.description}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: session.result ? 'rgba(0,0,0,0.5)' : 'black',
                }}>
                {session.type}
              </Text>
            </YStack>
          </Link>
        ))}
      </YStack>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    aspectRatio: 1,
    backgroundColor: 'gray',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  successButton: {
    backgroundColor: 'green',
  },
  dangerButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '100%',
    height: '75%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
