import { colors } from "@/constants/colors";
import { moreStyles } from "@/styles/more";
import {
  ArrowCircleRight,
  CloseCircle,
  ExportCurve,
  Ranking,
} from "iconsax-react-nativejs";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./apptext";
import FooterAction from "./footeraction";
interface bookmarkCardProps {
  bookmark: any;
}

const BookmarkCard: React.FC<bookmarkCardProps> = ({ bookmark }) => {
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

      <View style={moreStyles.bookmarkFooter}>
        <FooterAction
          label="Remove"
          style={{ width: "28%" }}
          Icon={{ icon: CloseCircle, variant: "Bulk" }}
          onPress={() => {}}
        />
        {/* <TouchableOpacity
          style={[
            moreStyles.bookmarkFooterAction,
            {
              width: "28%",
            },
          ]}
        >
          <CloseCircle color={colors.textBold} variant="Bulk" size={20} />
          <AppText
            fontFamily="Regular"
            fontSize={15}
            color="textPrimary"
            lineHeight={32}
            style={{ marginLeft: 5 }}
          >
            Remove
          </AppText>
        </TouchableOpacity> */}

        <FooterAction
          label="AI Insights"
          style={{ width: "33%", justifyContent: "center" }}
          Icon={{ icon: Ranking, variant: "Linear" }}
          onPress={() => {}}
        />
        {/* <TouchableOpacity
          style={[
            moreStyles.bookmarkFooterAction,
            {
              width: "33%",
              justifyContent: "center",
            },
          ]}
        >
          <Ranking color={colors.textBold} variant="Linear" size={20} />
          <AppText
            fontFamily="Regular"
            fontSize={15}
            color="textPrimary"
            lineHeight={32}
            style={{ marginLeft: 5 }}
          >
            AI Insights
          </AppText>
        </TouchableOpacity> */}

        <FooterAction
          label="Share"
          style={{ width: "26%", justifyContent: "flex-end" }}
          Icon={{ icon: ExportCurve, variant: "Bulk" }}
          onPress={() => {}}
        />
        {/* <TouchableOpacity
          style={[
            moreStyles.bookmarkFooterAction,
            {
              width: "26%",
              justifyContent: "flex-end",
            },
          ]}
        >
          <ExportCurve color={colors.textBold} variant="Bulk" size={20} />
          <AppText
            fontFamily="Regular"
            fontSize={15}
            color="textPrimary"
            lineHeight={32}
            style={{ marginLeft: 5 }}
          >
            Share
          </AppText>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default BookmarkCard;

const styles = StyleSheet.create({
  //   bookmarkHeader: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     marginBottom: 2,
  //   },
  //   bookmarkFooter: {
  //     flexDirection: "row",
  //     backgroundColor: colors.light,
  //     paddingVertical: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 90,
  //     width: "100%",
  //     justifyContent: "space-evenly",
  //   },
  //   bookmarkFooterAction: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
});
