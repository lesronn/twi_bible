// import * as Device from "expo-device";
import { router } from "expo-router";
import { Dimensions, Platform } from "react-native";

export const isIOS = Platform.OS === "ios";

export const { height, width } = Dimensions.get("window");
export const largeScreen = height > 700;
export const universalBlurhash = "U8PQNp9GIU~W00WBRjoLRj?H%L9G-;s:%2WB";
export const permissionContent = {
  title: "Permission Denied",
  notification:
    "Notification permission is required to use this feature. Kindly enable it in settings to stay updated.",
};
export const appStoreUrl = `https://apps.apple.com/us/app/icgc/id1279799671`;
export const googlePlayUrl = `https://play.google.com/store/apps/details?id=com.asoriba.android.icgc`;
export const moreLinks = [
  {
    section: "Annotations",
    links: [
      {
        title: "Bookmarks",
        onPress: () => router.navigate("/more/bookmarks"),
      },
      {
        title: "Notes",
        onPress: () => router.navigate("/more/notes"),
      },
    ],
  },

  {
    section: "Appearance",
    links: [
      {
        title: "Theme",
        onPress: () => console.log("Navigate to Theme"),
      },
      {
        title: "Font Size",
        onPress: () => console.log("Navigate to Font Size"),
      },
    ],
  },

  {
    section: "Settings",
    links: [
      {
        title: "Verse of the Day Notifications",
        onPress: () =>
          console.log("Navigate to Verse of the Day Notifications"),
      },
      {
        title: "Send feedback",
        onPress: () => console.log("Navigate to Privacy Policy"),
      },

      {
        title: "Privacy Policy",
        onPress: () => console.log("Navigate to Privacy Policy"),
      },

      {
        title: "Rate this App",
        onPress: () => console.log("Navigate to About Developer"),
      },
    ],
  },
];
