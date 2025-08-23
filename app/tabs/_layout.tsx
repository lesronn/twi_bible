import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="bible" />
      <Tabs.Screen name="more" />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
