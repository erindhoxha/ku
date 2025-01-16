/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity, View, type ImageSourcePropType } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Swiper, type SwiperCardRefType } from "rn-swiper-list";
import { Avatar, H2, SizableText, Stack, Text, XStack } from "tamagui";
import { AvatarDemo } from "../../components/Avatar";

const IMAGES = [
  {
    url: require("../../assets/1.avif"),
    title: "Kassarita",
    location: "Rruga Leke Dukagjini, 19",
  },
  {
    url: require("../../assets/2.avif"),
    title: "Bon Vivant",
    location: "Sheshi Skenderbeu, 122",
  },
  {
    url: require("../../assets/3.avif"),
    title: "Waffle House",
    location: "Rruga G SU 8, 122",
  },
];

const Tab = () => {
  const ref = useRef<SwiperCardRefType>();

  const renderCard = useCallback((image: { url: ImageSourcePropType; title: string; location: string }) => {
    return (
      <View style={styles.renderCardContainer}>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            width: "100%",
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            right: 0,
            paddingHorizontal: 24,
            paddingVertical: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              zIndex: 2,
              color: "white",
              marginBottom: 6,
            }}>
            {image?.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              zIndex: 2,
              color: "white",
            }}>
            {image?.location}
          </Text>
        </View>
        <Image source={image?.url} style={styles.renderCardImage} resizeMode="cover" />
      </View>
    );
  }, []);

  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "#52b69a",
          },
        ]}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
          }}
          color="white">
          Like
        </Text>
      </View>
    );
  }, []);

  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "#ee6055",
          },
        ]}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
          }}
          color="white">
          Dislike
        </Text>
      </View>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack>
        <H2 color="$white" marginBottom={12}>
          Ku po hajme sonte!?
        </H2>
        <AvatarDemo />
        <XStack gap="$2" marginBottom={12}>
          <Text color="$white">
            Created by:{" "}
            <Text
              color="$white"
              style={{
                fontWeight: "bold",
              }}>
              Erind Hoxha
            </Text>
          </Text>
          {/* <Avatar circular size="$1">
            <Avatar.Image
              accessibilityLabel="Nate Wienert"
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar> */}
        </XStack>
        <Text color="$white">
          Area:{" "}
          <Text
            color="$white"
            style={{
              fontWeight: "bold",
            }}>
            Prishtine, Kosove
          </Text>
        </Text>
        <Text color="$white">
          Type:{" "}
          <Text
            color="$white"
            style={{
              fontWeight: "bold",
            }}>
            Restaurants, Nightlife
          </Text>
        </Text>
      </Stack>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          cardStyle={styles.cardStyle}
          data={IMAGES}
          renderCard={renderCard}
          onSwipeRight={(cardIndex) => {
            console.log("cardIndex", cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          onSwipeLeft={(cardIndex) => {
            console.log("onSwipeLeft", cardIndex);
          }}
          disableTopSwipe
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          onSwipeActive={() => {
            console.log("onSwipeActive");
          }}
          onSwipeStart={() => {
            console.log("onSwipeStart");
          }}
          onSwipeEnd={() => {
            console.log("onSwipeEnd");
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
    overflow: "hidden",
    backgroundColor: "black",
  },
  buttonsContainer: {
    flexDirection: "row",
    bottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    aspectRatio: 1,
    backgroundColor: "#ff9914",
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  successButton: {
    backgroundColor: "#52b69a",
  },
  dangerButton: {
    backgroundColor: "#ee6055",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardStyle: {
    width: "100%",
    height: "85%",
    borderRadius: 15,
  },
  renderCardContainer: {
    borderRadius: 15,
    overflow: "hidden",
  },
  renderCardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayLabelContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
  },
});
