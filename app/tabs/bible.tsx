import AppText from "@/components/apptext";
import { colors } from "@/constants/colors";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const Bible = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundPrimary }}>
      <View
        style={{
          // paddingTop: 15,
          paddingBottom: 30,
          backgroundColor: colors.primary,
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: colors.medium,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 16,
          }}
        >
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 20000,
              backgroundColor: colors.inActiveDot,
              marginRight: 6,
            }}
          />
          <AppText
            fontFamily="Regular"
            fontSize={14}
            lineHeight={20}
            color="textBold"
          >
            TWI
          </AppText>
        </Pressable>

        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: colors.secondary,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 16,
          }}
        >
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 20000,
              backgroundColor: colors.white,
              marginRight: 6,
            }}
          />
          <AppText
            fontFamily="Regular"
            fontSize={14}
            lineHeight={20}
            color="white"
          >
            NIV
          </AppText>
        </Pressable>
      </View>

      <View style={{ flex: 1, paddingTop: 12, paddingHorizontal: 20 }}>
        <AppText
          fontFamily="Regular"
          fontSize={16}
          lineHeight={28}
          color="error"
        >
          1{"  "}
          <AppText
            fontFamily="Regular"
            fontSize={17}
            lineHeight={28}
            color="textPrimary"
          >
            We must pay the most careful attention, therefore, to what we have
            heard, so that we do not drift away.
          </AppText>
        </AppText>
      </View>
    </View>
  );
};

export default Bible;

const styles = StyleSheet.create({});
