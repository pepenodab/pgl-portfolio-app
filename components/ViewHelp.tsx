import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { sources } from "../data/routeSource";
import { Video } from "expo-av";
import { COLOR_BRIGHT, COLORS_DARK } from "../styles/colors";

type ViewProps = {
  isDark: boolean;
};

const ViewHelp = ({ isDark }: ViewProps) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((lastIndex) =>
      lastIndex == sources.length - 1 ? 0 : lastIndex + 1
    );
  };

  const handleBack = () => {
    setIndex((lastIndex) =>
      lastIndex == 0 ? sources.length - 1 : lastIndex - 1
    );
  };

  const currentSource = sources[index];

  return (
    <View style={styles.container}>
      <View style={isDark ? styles.helpBox : styles.helpBox_bright}>
        <Text style={isDark ? styles.helpText : styles.helpText_bright}>
          Esto es una ayuda para la gente que no tenga un gran IQ y necesita VER
          mis gustos y no solo es suficiente con leer
        </Text>
      </View>
      {currentSource.type == "video" ? (
        <Video
          source={currentSource.src}
          style={styles.media}
          useNativeControls
          shouldPlay
          isLooping
        />
      ) : (
        <Image
          source={currentSource.src}
          style={styles.media}
          resizeMode="contain"
        />
      )}

      <View style={styles.buttonContainer}>
        <Pressable onPress={handleBack}>
          <Text style={isDark ? styles.button : styles.button_bright}>
            Anterior
          </Text>
        </Pressable>
        <Pressable onPress={handleNext}>
          <Text style={isDark ? styles.button : styles.button_bright}>
            Siguiente
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ViewHelp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  helpBox: {
    borderRadius: 10,
    width: "70%",
    borderColor: COLORS_DARK.secundary,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    backgroundColor: COLORS_DARK.primary,
    marginBottom: "5%",
  },
  helpBox_bright: {
    borderRadius: 10,
    width: "70%",
    borderColor: COLOR_BRIGHT.secundary,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    backgroundColor: COLOR_BRIGHT.primary,
    marginBottom: "5%",
  },
  helpText: {
    color: COLORS_DARK.description,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
  helpText_bright: {
    color: COLOR_BRIGHT.description,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
  media: {
    width: 300,
    height: 500,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    color: COLORS_DARK.title,
    textAlign: "center",
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingVertical: 10,
    backgroundColor: "#383636",
    borderRadius: 5,
    alignItems: "center",
    borderColor: COLORS_DARK.secundary,
    borderWidth: 2,
  },
  button_bright: {
    color: COLOR_BRIGHT.title,
    textAlign: "center",
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingVertical: 10,
    backgroundColor: "#f0efe7",
    borderRadius: 5,
    alignItems: "center",
    borderColor: COLOR_BRIGHT.secundary,
    borderWidth: 2,
  },
});
