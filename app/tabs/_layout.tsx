import AppText from "@/components/apptext";
import { HapticTab } from "@/components/haptictab";
import { colors } from "@/constants/colors";
import { tabScreenOptions } from "@/utils/layoutmethods";
import { Tabs } from "expo-router";
import { ArrowCircleDown, SearchNormal1 } from "iconsax-react-nativejs";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const TabsLayout = () => {
  const bottomInset = useSafeAreaInsets().bottom;
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground,
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: bottomInset + 10,
          borderRadius: 200,
          paddingTop: 6,
        },
        animation: "shift",
        tabBarLabelPosition: "below-icon",
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ ...tabScreenOptions("Discover"), headerShown: false }}
      />
      <Tabs.Screen
        name="bible"
        options={{
          ...tabScreenOptions("Bible"),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: () => {
            return (
              <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
                <AppText
                  fontFamily="Medium"
                  fontSize={21}
                  color="white"
                  lineHeight={32}
                  style={{ marginRight: 5 }}
                >
                  Hebrews 2
                </AppText>
                <ArrowCircleDown
                  color={colors.white}
                  variant="Bulk"
                  size={25}
                />
              </Pressable>
            );
          },
          headerTitleAlign: "center",
          headerTitleAllowFontScaling: false,
          headerRight: () => (
            <Pressable style={{ marginRight: 20 }}>
              <SearchNormal1 color={colors.white} variant="Linear" size={22} />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          ...tabScreenOptions("More"),
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: "More",
          headerTitleAlign: "left",
          headerTitleAllowFontScaling: false,
          headerTitleStyle: {
            fontSize: 21,
            fontFamily: "Medium",
            color: colors.white,
          }, // headerLeft:()=>()
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
