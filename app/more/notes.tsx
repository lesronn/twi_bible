import NotesCard from "@/components/notescard";
import { colors } from "@/constants/colors";
import { moreStyles } from "@/styles/more";
import { router } from "expo-router";
import { AddCircle } from "iconsax-react-nativejs";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Notes = () => {
  return (
    <View style={moreStyles.bookmarksContainer}>
      <NotesCard />

      <TouchableOpacity
        onPress={() => router.navigate("/more/addnote")}
        style={{ position: "absolute", bottom: "10%", alignSelf: "center" }}
      >
        <AddCircle color={colors.textBold} size={50} variant="Bold" />
      </TouchableOpacity>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
