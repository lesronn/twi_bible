import { colors } from "@/constants/colors";
import { largeScreen } from "@/constants/generalconstants";
import { icons } from "@/constants/icons";
import { Image } from "expo-image";
import React, { FC } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import AppText from "./apptext";

type ButtonProps = {
  textColor: keyof typeof colors;
  title: string;
  btnColor: keyof typeof colors;
  fontSize?: number;
  style?: TouchableOpacityProps["style"];
  loading?: boolean;
  onPress?: () => void;
  borderWidth?: number;
  borderColor?: string;
  height?: number;
  width?: any;
  borderRadius?: number;
  disabled?: boolean;
  icon?: keyof typeof icons;
  iconSize?: number;
  loadingColor?: keyof typeof colors;
};
const AppButton: FC<ButtonProps> = ({
  textColor,
  title,
  btnColor,
  style,
  fontSize = 16,
  onPress,
  loading = false,
  borderWidth = 0,
  borderColor,
  height = largeScreen ? 54 : 48,
  width = "100%",
  borderRadius = 44,
  disabled,
  icon,
  iconSize = 20,
}) => {
  return (
    <TouchableOpacity
      style={[
        style,
        {
          height: height,
          width: width,
          backgroundColor: colors[btnColor],
          justifyContent: "center",
          alignItems: "center",
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderColor: borderColor,
          flexDirection: "row",
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {icon && !loading && (
        <Image
          source={icon}
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: 10,
            tintColor: colors[textColor],
          }}
        />
      )}

      {loading ? (
        <ActivityIndicator
          size={largeScreen ? "large" : "small"}
          color={colors[textColor]}
        />
      ) : (
        <AppText fontSize={fontSize} color={textColor} fontFamily="Medium">
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
