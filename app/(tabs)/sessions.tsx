/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, type ImageSourcePropType } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import { H1, H2, SizableText, Stack, Text } from 'tamagui';
import { AvatarDemo } from '../../components/Avatar';

const SESSIONS = [
  {
    title: 'Session 1',
    description: 'Description 1',
    type: 'Type 1',
  },
  {
    title: 'Session 2',
    description: 'Description 2',
    type: 'Type 2',
  },
  {
    title: 'Session 3',
    description: 'Description 3',
    type: 'Type 3',
  },
];

const Tab = () => {
  return (
    <View style={styles.container}>
      <H1>Sessions</H1>
      {SESSIONS.map((session, index) => (
        <View key={index}>
          <Text>{session.title}</Text>
          <Text>{session.description}</Text>
          <Text>{session.type}</Text>
        </View>
      ))}
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
