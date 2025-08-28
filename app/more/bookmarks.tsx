import BookmarkCard from "@/components/bookmarkcard";
import { moreStyles } from "@/styles/more";
import React from "react";
import { View } from "react-native";

const Bookmarks = () => {
  return (
    <View style={moreStyles.bookmarksContainer}>
      <BookmarkCard bookmark={"hello"} />
    </View>
  );
};

export default Bookmarks;
