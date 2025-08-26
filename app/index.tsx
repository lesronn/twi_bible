// import Slider from "@react-native-community/slider";
// import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
// import React from "react";
// import { Button, Text, View } from "react-native";
// export default function Index() {
//   const AUDIO_URL =
//     "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

//   const player = useAudioPlayer(AUDIO_URL);
//   const status = useAudioPlayerStatus(player);

//   const togglePlayPause = async () => {
//     if (status.playing) {
//       player.pause();
//     } else {
//       player.play();
//     }
//   };

//   // const onSeek = async (value: number) => {
//   //   player.seekTo(value);
//   // };

//   const onSeek = async (value: number) => {
//     const wasPlaying = status.playing;
//     await player.seekTo(value);
//     if (wasPlaying) {
//       player.play();
//     }
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 20,
//       }}
//     >
//       <Text style={{ fontSize: 18, marginBottom: 20 }}>
//         🎵 Simple Audio Player
//       </Text>

//       <Button
//         title={status.playing ? "Pause" : "Play"}
//         onPress={togglePlayPause}
//       />

//       <Slider
//         style={{ width: "100%", height: 40, marginTop: 20 }}
//         minimumValue={0}
//         maximumValue={status.duration || 1}
//         value={status.currentTime || 0}
//         onSlidingComplete={onSeek}
//       />

//       <Text style={{ marginTop: 10 }}>
//         {Math.floor((status.currentTime || 0) / 1000)}s /{" "}
//         {Math.floor((status.duration || 0) / 1000)}s
//       </Text>
//     </View>

//   );
// }
import AppButton from "@/components/appbutton";
import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import { images } from "@/constants/images";
import { userStore } from "@/stores/userstore";
import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Index = () => {
  const bottomInset = useSafeAreaInsets().bottom;
  return (
    <ImageBackground
      source={images.cross}
      imageStyle={{
        width: "100%",
        height: "100%",
      }}
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#111223",
        paddingBottom: bottomInset,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: colors.white,
          paddingHorizontal: 14,
          paddingVertical: 20,
          borderRadius: 24,
        }}
      >
        <View
          style={{ paddingTop: 8, paddingBottom: 46, paddingHorizontal: 6 }}
        >
          <AppText
            fontFamily="Medium"
            fontSize={24}
            color="textBold"
            style={{ marginBottom: 5 }}
          >
            Get the Best of the App
          </AppText>

          <AppText
            fontFamily="Light"
            fontSize={18}
            color="textBold"
            lineHeight={32}
            style={{ marginBottom: 20 }}
          >
            To enjoy the app at its best, we recommend allowing this. You’ll
            still be able to continue without it.
          </AppText>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <AppText
              fontFamily="Regular"
              fontSize={17}
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
              // value={formik.values.is_anonymous}
              // onValueChange={(value) => {
              //   formik.setFieldValue("is_anonymous", value);
              // }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText
              fontFamily="Regular"
              fontSize={17}
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
              // value={formik.values.is_anonymous}
              // onValueChange={(value) => {
              //   formik.setFieldValue("is_anonymous", value);
              // }}
            />
          </View>
        </View>

        <AppButton
          title="Accept and Go to Bible "
          textColor="white"
          btnColor="buttonPrimary"
          onPress={() => {
            userStore.setState({ firstTimer: true });
          }}
          style={{ marginBottom: 10 }}
        />

        {/* <AppButton
          title="Decline"
          textColor="white"
          btnColor="buttonPrimary"
          onPress={() => {}}
          style={{ marginBottom: 10 }}
        /> */}
      </View>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({});
