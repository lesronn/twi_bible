import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import { universalBlurhash } from "@/constants/generalconstants";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowCircleRight, ExportCurve, Ranking } from "iconsax-react-nativejs";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Index = () => {
  const topInset = useSafeAreaInsets().top;
  const bottomTabBarHeight = useBottomTabBarHeight();
  const bottomInset = useSafeAreaInsets().bottom;
  const paddingBottom = bottomTabBarHeight + bottomInset + 20;
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/04/05/03/18/prayer-1308663_1280.jpg",
        }}
        style={styles.vodBg}
        imageStyle={styles.vodBg}
        contentFit="cover"
        placeholder={{ blurhash: universalBlurhash }}
        transition={500}
        priority={"high"}
      >
        <LinearGradient
          colors={["rgba(16,19,35,0)", "#101323"]}
          start={{ x: 0.5, y: -0.082 }}
          end={{ x: 0.5, y: 1 }}
          style={[StyleSheet.absoluteFill, {}]}
        />
        <View style={[styles.vodContainer, { paddingTop: topInset + 13 }]}>
          <AppText fontFamily="SemiBold" fontSize={15} color="secondary">
            Verse of the Day
          </AppText>

          <AppText
            fontFamily="SemiBold"
            fontSize={22}
            color="white"
            lineHeight={32}
            style={{ marginTop: 8, marginBottom: 12 }}
          >
            Hebrews 2:1
          </AppText>

          <AppText
            fontFamily="Medium"
            fontSize={18}
            color="white"
            lineHeight={28}
            style={{ marginBottom: 30 }}
          >
            We must pay the most careful attention, therefore, to what we have
            heard, so that we do not drift away.
          </AppText>
          <View style={styles.vodButtonsContainer}>
            <TouchableOpacity
              style={styles.readMoreButton}
              onPress={() => router.navigate("/tabs/bible")}
            >
              <AppText
                fontFamily="Medium"
                fontSize={16}
                color="secondary"
                lineHeight={24}
                style={{ marginRight: 11 }}
              >
                Read More
              </AppText>

              <ArrowCircleRight
                color={colors.secondary}
                variant="Bulk"
                size={25}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>
              <ExportCurve color={colors.white} variant="Bulk" size={25} />
              <AppText
                fontFamily="Medium"
                fontSize={16}
                color="white"
                lineHeight={24}
                style={{ marginLeft: 5 }}
              >
                Share
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <ScrollView
        style={styles.insightContainer}
        contentContainerStyle={{
          paddingBottom: paddingBottom,
        }}
      >
        <View style={styles.insightHeader}>
          <Ranking variant="Bulk" size={24} color={colors.buttonPrimary} />
          <AppText
            fontFamily="Regular"
            fontSize={16}
            color="textBold"
            lineHeight={24}
            style={{ marginLeft: 12 }}
          >
            AI GENERATED INSIGHTS
          </AppText>
        </View>

        <AppText
          fontFamily="Regular"
          fontSize={16}
          color="textBold"
          lineHeight={32}
          style={{ letterSpacing: 0.5 }}
        >
          Mfiase no Onyankopɔn bɔɔ ɔsoro ne asase. Hebrews chapter 2 emphasizes
          the superiority of Jesus Christ over angels and the importance of
          diligently heeding the salvation offered through Him. It highlights
          Jesus's humanity, His suffering, and His role as a merciful and
          faithful high priest, capable of sympathizing with human
          weaknesses. The chapter also warns against neglecting the salvation
          message, emphasizing the greater consequences of rejecting a message
          delivered by the Son of God compared to one delivered by angels. 
          Here's a more detailed breakdown: 1. Jesus's Superiority over Angels:
          The chapter begins by building on the previous one, which established
          Jesus's divine nature.  It argues that if the message delivered
          through angels was serious enough to warrant punishment for
          disobedience, then neglecting the salvation offered through Jesus, the
          Son of God, carries even greater consequences.  The writer cites Psalm
          8 to show that while humans were initially placed below angels, Jesus,
          in becoming human, temporarily humbled himself to conquer death and
          now sits at the right hand of God, with all things subject to him. 
        </AppText>
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  vodBg: { height: 330, width: "100%" },
  vodContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
  vodButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  readMoreButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.secondary,
    flexDirection: "row",
  },
  shareButton: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.shareBg,
    borderRadius: 100,
    alignItems: "center",
  },
  insightContainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 24,
  },
  insightHeader: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.light,
    borderRadius: 24,
    alignSelf: "flex-start",
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
