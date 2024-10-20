import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLOR_BRIGHT, COLORS_DARK } from "../styles/colors";

type CardProps = {
  description: String;
  isDark: boolean;
};

const Card = ({ description, isDark }: CardProps) => {
  return (
    <>
      <View style={isDark ? styles.cardContainer : styles.cardContainer_bright}>
        <Image
          style={isDark ? styles.avatar : styles.avatar_bright}
          source={require("../assets/f1.jpg")}
        ></Image>
        <View
          style={
            isDark ? styles.descriptionCard : styles.descriptionCard_bright
          }
        >
          <Text
            style={
              isDark ? styles.descriptionTitle : styles.descriptionTitle_bright
            }
          >
            Descripción sobre mí!
          </Text>
          <Text
            style={
              isDark ? styles.descriptionText : styles.descriptionText_bright
            }
          >
            {description}
          </Text>
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
    borderColor: COLORS_DARK.secundary,
  },
  avatar_bright: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLOR_BRIGHT.secundary,
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLORS_DARK.primary,
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: COLORS_DARK.secundary,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  cardContainer_bright: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLOR_BRIGHT.primary,
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: COLOR_BRIGHT.secundary,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  descriptionCard: {
    margin: 10,
    backgroundColor: COLORS_DARK.primary,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLORS_DARK.secundary,
  },
  descriptionCard_bright: {
    margin: 10,
    backgroundColor: COLOR_BRIGHT.primary,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR_BRIGHT.secundary,
  },
  descriptionTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionTitle_bright: {
    color: COLOR_BRIGHT.title,
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
  descriptionText_bright: {
    color: COLOR_BRIGHT.description,
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});

export default Card;
