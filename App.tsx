import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";
import ListILike from "./components/ListOfLikes";
import ViewHelp from "./components/ViewHelp";
import likes from "./data/likes";
import { COLOR_BRIGHT, COLORS_DARK } from "./styles/colors";

export default function App() {
  const [questionMark, setQuestionMark] = useState(false);
  const [displayMyQR, setDisplayMyQR] = useState(true);

  const [isDark, setIsDark] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={isDark ? styles.topContainer_dark : styles.topContainer_bright}
      >
        <Header
          setDisplayMyQR={setDisplayMyQR}
          setQuestionMark={setQuestionMark}
          setIsDark={setIsDark}
          isDark={isDark}
        ></Header>
      </View>
      <ImageBackground
        source={
          isDark
            ? require("./assets/backgroundApp.jpg")
            : require("./assets/backgroundApp2.jpg")
        }
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {questionMark ? (
          <ViewHelp isDark={isDark} />
        ) : displayMyQR ? (
          <View style={styles.bodyContainer}>
            <View style={styles.cardContainer}>
              <Card
                description={
                  "Soy un alumno de dam y me gusta mucho la programación, aunque mi ex-tutor no"
                }
                isDark={isDark}
              ></Card>
            </View>
            <Text style={isDark ? styles.title_dark : styles.title_bright}>
              Cosas que me gustan mucho:
            </Text>
            <ListILike lista={likes} isDark={isDark}></ListILike>
          </View>
        ) : (
          <View style={styles.bodyContainer}>
            <View style={styles.centerQRCode}>
              <QRCode value="https://github.com/pepenodab" />
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer_dark: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS_DARK.primary,
    paddingTop: 40,
  },
  topContainer_bright: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_BRIGHT.primary,
    color: COLOR_BRIGHT.title,
    paddingTop: 40,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
  },
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title_dark: {
    color: COLORS_DARK.title,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowRadius: 10,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: COLORS_DARK.primary,
    borderRadius: 10,
    margin: 20,
    borderWidth: 2,
    borderColor: "#FF4C4C",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
    width: "95%",
    height: "5%",
    paddingTop: "1%",
  },
  title_bright: {
    color: COLOR_BRIGHT.title,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: COLOR_BRIGHT.primary,
    borderRadius: 10,
    margin: 20,
    borderWidth: 2,
    borderColor: COLOR_BRIGHT.secundary,

    elevation: 10,
    width: "95%",
    height: "5%",
    paddingTop: "1%",
  },
  centerQRCode: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
