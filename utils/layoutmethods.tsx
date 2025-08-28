import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import {
  ArrowCircleLeft,
  Book1,
  IconProps,
  Magicpen,
  MoreCircle,
} from "iconsax-react-nativejs";
import { Pressable } from "react-native";

export function stackHeader(title: string): any {
  return {
    statusBarStyle: "dark",
    headerTitleAlign: "left",
    headerTitle: title,
    headerTitleStyle: {
      fontSize: 18,
      fontFamily: "SemiBold",
      color: colors.textHeader,
    },
    headerStyle: { backgroundColor: colors.backgroundPrimary },
    headerShadowVisible: false,
    headerLeft: () => (
      <Pressable
        onPressIn={() => {
          router.back();
        }}
        style={{ marginRight: 12, alignSelf: "center", marginBottom: 5 }}
      >
        <ArrowCircleLeft color={colors.textBold} variant="Bulk" size={32} />
      </Pressable>
    ),
  };
}

export function tabScreenOptions(tabLabel: string) {
  const tabIcons: Record<string, React.FC<IconProps>> = {
    Discover: Magicpen,
    Bible: Book1,
    More: MoreCircle,
  };

  const tabLabels: Record<string, string | null> = {
    Discover: ``,
    Bible: "",
    More: tabLabel,
  };

  const label = tabLabels[tabLabel];
  const TabIcon = tabIcons[tabLabel];
  const isFeed = tabLabel === "Feed";
  const isGive = tabLabel === "Give";

  return {
    headerShown: true,
    title: "",
    headerShadowVisible: false,

    tabBarIcon: ({ focused }: { focused: boolean }) => (
      <TabIcon
        color={focused ? colors.tabBarActive : colors.tabBarInactive}
        variant="Bulk"
        size={25}
      />
    ),

    // headerLeft: () => {
    //   return (

    //   );
    // },

    // headerRight: () => {
    //   return (

    //   );
    // },
    tabBarLabel: ({ focused }: { focused: boolean }) => (
      <AppText
        fontSize={13}
        color={focused ? "tabBarActive" : "tabBarInactive"}
        fontFamily={"Medium"}
        numberOfLines={1}
      >
        {tabLabel}
      </AppText>
    ),
  };
}
