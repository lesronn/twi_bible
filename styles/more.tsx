import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const moreStyles = StyleSheet.create({
  bookmarksContainer: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 24,
    paddingVertical: 15,
  },

  bookmarkFooterAction: {
    flexDirection: "row",
    alignItems: "center",
  },

  bookmarkHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },

  bookmarkFooter: {
    flexDirection: "row",
    backgroundColor: colors.light,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 90,
    width: "100%",
    justifyContent: "space-evenly",
    marginBottom: 32,
  },
  bookmarksCard: {
    marginBottom: 29,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
});
