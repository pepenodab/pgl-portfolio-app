import React from "react";

import { ScrollView, StyleSheet, Text } from "react-native";

type ListProps = {
  lista: Array<String>;
};

const ListILike = ({ lista }: ListProps) => {
  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        {lista.map((gusto) => (
          <Text style={styles.thingsilike}>{gusto}</Text>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  thingsilike: {
    borderColor: "#FF4C4C",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "rgba(34, 34, 34, 0.85)",
  },
});

export default ListILike;
