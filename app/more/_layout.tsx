import { Stack } from "expo-router";
import React from "react";

export default function MoreLayout() {
  return (
    <Stack>
      <Stack.Screen name="bookmarks" options={{}} />
      <Stack.Screen name="notes" options={{}} />
    </Stack>
  );
}
