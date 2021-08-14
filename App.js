import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
import SkiImage from "./assets/ski.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
        <CategoryListItem title="Trượt tuyết" image={SkiImage} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
