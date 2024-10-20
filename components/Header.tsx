import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  setDisplayMyQR: Function;
  setQuestionMark: Function;
};

const Header = ({ setDisplayMyQR, setQuestionMark }: HeaderProps) => {
  return (
    <>
      <Text style={styles.firsttoprowContainer}>Mi Portfolio</Text>
      <View style={styles.rowTopSecondContainer}>
        <Pressable
          style={styles.routebutton}
          onPress={() => {
            setDisplayMyQR(true);
            setQuestionMark(false);
          }}
        >
          <Text
            style={{
              ...{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...styles.shadoxboxing,
            }}
          >
            Mi info
          </Text>
        </Pressable>
        <Pressable
          style={styles.routebutton}
          onPress={() => {
            setDisplayMyQR(false);
            setQuestionMark(false);
          }}
        >
          <Text
            style={{
              ...{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...styles.shadoxboxing,
            }}
          >
            MI REPO
          </Text>
        </Pressable>
        <Button
          onPress={() => setQuestionMark(true)}
          title="¿?"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  firsttoprowContainer: {
    backgroundColor: "rgba(34, 34, 34, 0.9)",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowRadius: 10,
    width: "100%",
    marginTop: "-5%",
  },
  rowTopSecondContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(34, 34, 34, 0.9)",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    width: "100%",
  },
  routebutton: {
    width: "40%",
    paddingVertical: 10,
    backgroundColor: "#383636",
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#db0f35",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Header;
