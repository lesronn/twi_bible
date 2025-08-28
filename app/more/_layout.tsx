import { stackHeader } from "@/utils/layoutmethods";
import { Stack } from "expo-router";
import React from "react";

export default function MoreLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="bookmarks"
        options={{
          ...stackHeader("Bookmarks"),
        }}
      />
      <Stack.Screen name="notes" options={{ ...stackHeader("Notes") }} />
      <Stack.Screen
        name="addnote"
        options={{
          ...stackHeader("Add Note"),
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
