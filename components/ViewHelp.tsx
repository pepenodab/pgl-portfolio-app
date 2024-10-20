import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { sources } from "../data/routeSource";
import { Video } from "expo-av";

const ViewHelp = () => {
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
      <View style={styles.helpBox}>
        <Text style={styles.helpText}>
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
          <Text style={styles.button}>Anterior</Text>
        </Pressable>
        <Pressable onPress={handleNext}>
          <Text style={styles.button}>Siguiente</Text>
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
    borderColor: "#FF4C4C",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    backgroundColor: "rgba(34, 34, 34, 0.85)",
    marginBottom: "5%",
  },
  helpText: {
    color: "white",
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
    color: "white",
    textAlign: "center",
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    paddingVertical: 10,
    backgroundColor: "#383636",
    borderRadius: 5,
    alignItems: "center",
    borderColor: "#db0f35",
    borderWidth: 2,
  },
});
