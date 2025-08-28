import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import { moreLinks } from "@/constants/generalconstants";
import { images } from "@/constants/images";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowCircleRight } from "iconsax-react-nativejs";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const More = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  const bottomInset = useSafeAreaInsets().bottom;
  const paddingBottom = bottomTabBarHeight + bottomInset + 20;
  return (
    <View style={styles.moreContainer}>
      <View style={styles.supportContainer}>
        <ImageBackground
          source={images.bmcBg}
          style={styles.supportBg}
          contentFit="cover"
          priority={"high"}
          imageStyle={styles.supportBg}
        >
          <LinearGradient
            colors={["#FDB022", "rgba(247, 221, 136, 0)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.98, y: 0.17 }}
            locations={[0.01, 1.04]}
            style={[StyleSheet.absoluteFillObject, { borderRadius: 24 }]}
          />
          <View style={styles.supportContent}>
            <AppText
              fontFamily="SemiBold"
              fontSize={17}
              color="textSupport"
              lineHeight={28}
              style={{ marginBottom: 6 }}
            >
              Support this App
            </AppText>

            <AppText
              fontFamily="Regular"
              fontSize={13}
              color="textSupport"
              lineHeight={16}
              style={{ marginBottom: 24 }}
            >
              Thank you for using this Bible app. If you’d like to support the
              work, you can buy me a coffee.
            </AppText>

            <TouchableOpacity style={styles.supportButton}>
              <AppText
                fontFamily="SemiBold"
                fontSize={15}
                color="textBold"
                lineHeight={24}
                style={{ marginRight: 15 }}
              >
                Buy us coffee
              </AppText>
              <ArrowCircleRight
                color={colors.textBold}
                variant="Bulk"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.moreLinksContainer,
          {
            paddingBottom: paddingBottom,
          },
        ]}
      >
        {moreLinks.map((link, index) => (
          <View
            style={[
              styles.moreLinkSection,
              {
                borderBottomWidth: index === 2 ? 0 : 1,
              },
            ]}
            key={index}
          >
            <AppText
              fontFamily="Regular"
              fontSize={13}
              color="formLabelText"
              lineHeight={20}
              style={{ marginBottom: 8 }}
            >
              {link.section}
            </AppText>
            {link.links.map((link, index) => (
              <Pressable
                style={styles.moreLink}
                key={index}
                onPress={() => {
                  link.onPress();
                }}
              >
                <AppText
                  fontFamily="Regular"
                  fontSize={16}
                  color="textPrimary"
                  lineHeight={28}
                  style={{ flex: 1 }}
                >
                  {link.title}
                </AppText>
                {link.title === "Verse of the Day Notifications" ? (
                  <Switch
                    trackColor={{
                      false: colors.buttonSecondary,
                      true: colors.buttonSecondary,
                    }}
                    value={true}
                    thumbColor={colors.buttonPrimary}
                    ios_backgroundColor={colors.buttonSecondary}
                    // value={formik.values.is_anonymous}
                    // onValueChange={(value) => {
                    //   formik.setFieldValue("is_anonymous", value);
                    // }}
                  />
                ) : (
                  <ArrowCircleRight
                    color={colors.textBold}
                    variant="Bulk"
                    size={25}
                  />
                )}
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  moreContainer: { flex: 1, backgroundColor: colors.backgroundPrimary },
  supportContainer: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingHorizontal: 25,
    paddingBottom: 19,
  },
  supportBg: {
    height: 192,
    width: "100%",
    borderRadius: 24,
  },
  supportContent: { paddingLeft: 20, paddingTop: 30 },
  supportButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  moreLinksContainer: { paddingHorizontal: 24, paddingTop: 33 },
  moreLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  moreLinkSection: {
    marginBottom: 16,
    borderBottomColor: colors.grey,
  },
});
