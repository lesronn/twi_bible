import { colors } from "@/constants/colors";
import { moreStyles } from "@/styles/more";
import { ArrowCircleRight, Brush2, CloseCircle } from "iconsax-react-nativejs";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./apptext";
import FooterAction from "./footeraction";

const NotesCard = () => {
  return (
    <View style={moreStyles.bookmarksCard}>
      <View style={moreStyles.bookmarkHeader}>
        <AppText
          fontFamily="Medium"
          fontSize={17}
          color="textPrimary"
          lineHeight={32}
          style={{ flex: 1 }}
        >
          Genesis 1:1
        </AppText>
        <ArrowCircleRight color={colors.textBold} variant="Bulk" size={25} />
      </View>
      <AppText
        fontFamily="Regular"
        fontSize={16}
        color="textPrimary"
        lineHeight={32}
        style={{ letterSpacing: 0.5, marginBottom: 12 }}
      >
        In the beginning God created the heaven and the earth
      </AppText>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: colors.light,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 90,
          width: "70%",
          justifyContent: "space-evenly",
          marginBottom: 32,
        }}
      >
        <FooterAction
          label="Remove"
          style={{ width: "46%" }}
          Icon={{ icon: CloseCircle, variant: "Bulk" }}
          onPress={() => {}}
        />

        <FooterAction
          label="Edit Note"
          style={{ width: "46%" }}
          Icon={{ icon: Brush2, variant: "Linear" }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default NotesCard;

const styles = StyleSheet.create({});
