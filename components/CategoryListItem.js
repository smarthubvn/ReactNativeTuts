import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import SkiImage from '../assets/ski.png';

export default CategoryListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={styles.categoryImage} source={props.image} />
      {/* <Image style={{width: 64, height: 64}} source={SkiImage} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFE",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
