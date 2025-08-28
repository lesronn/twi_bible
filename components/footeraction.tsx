import { colors } from "@/constants/colors";
import { moreStyles } from "@/styles/more";
import { IconProps } from "iconsax-react-nativejs";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import AppText from "./apptext";
interface FooterActionProps {
  label: string;
  Icon: { icon: React.FC<IconProps>; variant: "Bulk" | "Linear" };
  onPress?: () => void;
  style?: TouchableOpacityProps["style"];
}
const FooterAction: React.FC<FooterActionProps> = ({
  label,
  Icon,
  onPress,
  style,
}) => (
  <TouchableOpacity
    style={[moreStyles.bookmarkFooterAction, style]}
    onPress={onPress}
  >
    <Icon.icon color={colors.textBold} variant={Icon.variant} size={20} />
    <AppText
      fontFamily="Regular"
      fontSize={15}
      color="textPrimary"
      lineHeight={32}
      style={{ marginLeft: 5 }}
    >
      {label}
    </AppText>
  </TouchableOpacity>
);
export default FooterAction;

const styles = StyleSheet.create({});
