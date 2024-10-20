import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type CardProps = {
  description: String;
};

const Card = ({ description }: CardProps) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <Image
          style={styles.avatar}
          source={require("../assets/f1.jpg")}
        ></Image>
        <View
          style={{
            margin: 10,
            backgroundColor: "rgba(34, 34, 34, 0.9)",
            padding: 10,
            borderRadius: 10,
            width: "75%",
            borderWidth: 2,
            borderColor: "#FF4C4C",
          }}
        >
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#FF4C4C",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(34, 34, 34, 0.85)",
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: "#FF4C4C",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  descriptionTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    color: "#DDD",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});

export default Card;
