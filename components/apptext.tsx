import { colors } from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
export interface fontFamilyProps {
  fontFamily: "Light" | "Regular" | "Medium" | "Bold";
}
interface AppTextProps extends TextProps {
  children: React.ReactNode;
  color?: keyof typeof colors;
  numberOfLines?: number;
  fontSize?: number;
  fontFamily?: fontFamilyProps["fontFamily"];
  textAlign?: TextStyle["textAlign"];
  lineHeight?: TextStyle["lineHeight"];
}

function AppText({
  children,
  color = "textPrimary",
  numberOfLines,
  fontSize = 17,
  fontFamily = "Light",
  textAlign,
  style,
  lineHeight,
  ...otherProps
}: AppTextProps) {
  return (
    <Text
      numberOfLines={numberOfLines}
      {...otherProps}
      allowFontScaling={false}
      style={[
        styles.text,
        {
          color: colors[color],
          fontSize: fontSize,
          fontFamily: fontFamily,
          ...(textAlign ? { textAlign: textAlign } : {}),
          ...(lineHeight ? { lineHeight: lineHeight } : {}),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 18 },
});

export default AppText;
