import AppButton from "@/components/appbutton";
import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import { largeScreen } from "@/constants/generalconstants";
import { images } from "@/constants/images";
import { userStore } from "@/stores/userstore";
import { Image, ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Index = () => {
  const bottomInset = useSafeAreaInsets().bottom;
  const topInset = useSafeAreaInsets().top;

  return (
    <ImageBackground
      source={images.cross}
      imageStyle={styles.welcomeBgImage}
      priority={"high"}
      contentFit="cover"
      style={styles.welcomeBgImageContainer}
    >
      <View style={styles.overlay} />
      <View
        style={{
          zIndex: 2,
          marginTop: topInset + 10,
          alignSelf: "center",
        }}
      >
        <Image
          source={images.logoDark}
          style={{
            height: largeScreen ? 150 : 100,
            width: largeScreen ? 150 : 100,
            alignSelf: "center",
            zIndex: 2,
          }}
        />
        <AppText
          fontFamily="Bold"
          fontSize={25}
          color="white"
          textAlign="center"
        >
          <AppText
            fontFamily="Bold"
            fontSize={25}
            color="secondary"
            textAlign="center"
          >
            TWI{"  "}
          </AppText>
          Bible
        </AppText>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <View
          style={[
            styles.welcomeModalWrapper,
            {
              paddingBottom: bottomInset,
            },
          ]}
        >
          <View style={styles.welcomeModalContainer}>
            <View style={styles.welcomeModalContent}>
              <AppText
                fontFamily="SemiBold"
                fontSize={23}
                color="textBold"
                style={{ marginBottom: 5 }}
              >
                Get the Best of the App
              </AppText>

              <AppText
                fontFamily="Regular"
                fontSize={16}
                color="textBold"
                lineHeight={32}
                style={{ marginBottom: 20 }}
              >
                To enjoy the app at its best, we recommend allowing this. You’ll
                still be able to continue without it.
              </AppText>
              <View
                style={[
                  styles.welcomeModalContentRow,
                  {
                    marginBottom: 24,
                  },
                ]}
              >
                <AppText
                  fontFamily="Regular"
                  fontSize={16}
                  color="textSecondary"
                  style={{ flex: 1 }}
                >
                  Allow Notification for Daily Verse
                </AppText>
                <Switch
                  trackColor={{
                    false: colors.buttonSecondary,
                    true: colors.buttonSecondary,
                  }}
                  value={false}
                  thumbColor={colors.buttonPrimary}
                  ios_backgroundColor={colors.buttonSecondary}
                />
              </View>
              {/* 
              <View style={styles.welcomeModalContentRow}>
                <AppText
                  fontFamily="Regular"
                  fontSize={16}
                  color="textSecondary"
                  style={{ flex: 1 }}
                >
                  Download AI Model for Offline Use
                </AppText>
                <Switch
                  trackColor={{
                    false: colors.buttonSecondary,
                    true: colors.buttonSecondary,
                  }}
                  value={false}
                  thumbColor={colors.buttonPrimary}
                  ios_backgroundColor={colors.buttonSecondary}
                />
              </View> */}
            </View>

            <AppButton
              // title="Accept and Go to Bible"
              title="Accept & Open Bible"
              textColor="white"
              btnColor="buttonPrimary"
              onPress={() => {
                userStore.setState({ firstTimer: true });
              }}
              style={{ marginBottom: 10 }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  welcomeBgImage: {
    width: "100%",
    height: "100%",
  },
  welcomeBgImageContainer: {
    backgroundColor: "#111223",
    width: "100%",
    height: "100%",
  },
  welcomeModalWrapper: {
    paddingHorizontal: 10,
    width: "100%",
  },
  welcomeModalContainer: {
    width: "100%",
    backgroundColor: colors.white,
    paddingHorizontal: 14,
    paddingVertical: 20,
    borderRadius: 24,
  },
  welcomeModalContent: {
    paddingTop: 8,
    paddingBottom: 46,
    paddingHorizontal: 6,
  },
  welcomeModalContentRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(16, 19, 35, 0.3)",
    zIndex: 1,
  },
});
