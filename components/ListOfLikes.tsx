import React from "react";

import { ScrollView, StyleSheet, Text } from "react-native";
import { COLOR_BRIGHT, COLORS_DARK } from "../styles/colors";

type ListProps = {
  lista: Array<String>;
  isDark: boolean;
};

const ListILike = ({ lista, isDark }: ListProps) => {
  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        {lista.map((gusto) => (
          <Text style={isDark ? styles.thingsilike : styles.thingsilike_bright}>
            {gusto}
          </Text>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  thingsilike: {
    borderColor: COLORS_DARK.secundary,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: COLORS_DARK.title,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLORS_DARK.primary,
  },
  thingsilike_bright: {
    borderColor: COLOR_BRIGHT.secundary,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: COLOR_BRIGHT.title,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLOR_BRIGHT.primary,
  },
});

export default ListILike;
