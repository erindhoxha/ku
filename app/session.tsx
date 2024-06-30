/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, type ImageSourcePropType } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';
import { H2, SizableText, Stack, Text } from 'tamagui';
import { AvatarDemo } from '../components/Avatar';

const IMAGES: ImageSourcePropType[] = [require('../assets/1.avif')];

const Tab = () => {
  const ref = useRef<SwiperCardRefType>();

  const renderCard = useCallback((image: ImageSourcePropType) => {
    return (
      <View style={styles.renderCardContainer}>
        <Image source={image} style={styles.renderCardImage} resizeMode="cover" />
      </View>
    );
  }, []);
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'green',
          },
        ]}
      />
    );
  }, []);

  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'red',
          },
        ]}
      />
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
        <H2 marginBottom={12}>Ku po hajme sonte!?</H2>
        <Text>Prishtine, Kosove</Text>
        <Text>
          Type:{' '}
          <SizableText theme="light_surface1" size="$3">
            Restaurant
          </SizableText>
        </Text>
        <AvatarDemo />
      </Stack>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          cardStyle={styles.cardStyle}
          data={IMAGES}
          renderCard={renderCard}
          onSwipeRight={(cardIndex) => {
            console.log('cardIndex', cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
          }}
          onSwipeLeft={(cardIndex) => {
            console.log('onSwipeLeft', cardIndex);
          }}
          disableTopSwipe
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          onSwipeActive={() => {
            console.log('onSwipeActive');
          }}
          onSwipeStart={() => {
            console.log('onSwipeStart');
          }}
          onSwipeEnd={() => {
            console.log('onSwipeEnd');
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.dangerButton]}
          onPress={() => {
            ref.current?.swipeLeft();
          }}>
          <AntDesign name="close" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { height: 60, marginHorizontal: 10 }]}
          onPress={() => {
            ref.current?.swipeBack();
          }}>
          <AntDesign name="reload1" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.successButton]}
          onPress={() => {
            ref.current?.swipeRight();
          }}>
          <AntDesign name="heart" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
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
