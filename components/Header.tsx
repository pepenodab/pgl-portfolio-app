import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR_BRIGHT, COLORS_DARK } from "../styles/colors";

type HeaderProps = {
  setDisplayMyQR: Function;
  setQuestionMark: Function;
  setIsDark: Function;
  isDark: Boolean;
};

const Header = ({
  setDisplayMyQR,
  setQuestionMark,
  setIsDark,
  isDark,
}: HeaderProps) => {
  const handleDark = () => {
    if (isDark) {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <>
      <Text
        style={
          isDark
            ? styles.firsttoprowContainer
            : styles.firsttoprowContainer_bright
        }
      >
        Mi Portfolio
      </Text>
      <View
        style={
          isDark
            ? styles.rowTopSecondContainer
            : styles.rowTopSecondContainer_bright
        }
      >
        <Pressable
          style={isDark ? styles.routebutton : styles.routebutton_bright}
          onPress={() => {
            setDisplayMyQR(true);
            setQuestionMark(false);
          }}
        >
          <Text
            style={{
              ...{
                color: isDark ? COLORS_DARK.title : COLOR_BRIGHT.title,
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
          style={isDark ? styles.routebutton : styles.routebutton_bright}
          onPress={() => {
            setDisplayMyQR(false);
            setQuestionMark(false);
          }}
        >
          <Text
            style={{
              ...{
                color: isDark ? COLORS_DARK.title : COLOR_BRIGHT.title,
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...styles.shadoxboxing,
            }}
          >
            MI REPO
          </Text>
        </Pressable>
        <Pressable
          style={isDark ? styles.routebutton : styles.routebutton_bright}
          onPress={() => {
            handleDark();
          }}
        >
          <Text
            style={{
              ...{
                color: isDark ? COLORS_DARK.title : COLOR_BRIGHT.title,
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...styles.shadoxboxing,
            }}
          >
            THEME
          </Text>
        </Pressable>
        <Pressable
          style={isDark ? styles.routebutton : styles.routebutton_bright}
          onPress={() => {
            setQuestionMark(true);
          }}
        >
          <Text
            style={{
              ...{
                color: isDark ? COLORS_DARK.title : COLOR_BRIGHT.title,
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...styles.shadoxboxing,
            }}
          >
            ¿?
          </Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  firsttoprowContainer: {
    backgroundColor: COLORS_DARK.primary,
    color: COLORS_DARK.title,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowRadius: 10,
    width: "100%",
    marginTop: "-5%",
  },
  firsttoprowContainer_bright: {
    backgroundColor: COLOR_BRIGHT.primary,
    color: COLOR_BRIGHT.secundary,
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
    backgroundColor: COLORS_DARK.primary,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS_DARK.secundary,
    width: "100%",
  },
  rowTopSecondContainer_bright: {
    flexDirection: "row",
    backgroundColor: COLOR_BRIGHT.primary,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_BRIGHT.secundary,
    width: "100%",
  },
  routebutton: {
    width: "20%",
    paddingVertical: 10,
    backgroundColor: "#383636",
    borderRadius: 5,
    alignItems: "center",
    borderColor: COLORS_DARK.secundary,
    borderWidth: 2,
  },
  routebutton_bright: {
    width: "20%",
    paddingVertical: 10,
    backgroundColor: "#f0efe7",
    borderRadius: 5,
    alignItems: "center",
    borderColor: COLOR_BRIGHT.secundary,
    borderWidth: 2,
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
