import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Header from "./components/Header";
import Card from "./components/Card";
import ListILike from "./components/ListOfLikes";
import ViewHelp from "./components/ViewHelp";
import likes from "./data/likes";

export default function App() {
  const [questionMark, setQuestionMark] = useState(false);
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const [isDark, setIsDark] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          setDisplayMyQR={setDisplayMyQR}
          setQuestionMark={setQuestionMark}
        ></Header>
      </View>
      <ImageBackground
        source={require("./assets/backgroundApp.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {questionMark ? (
          <ViewHelp></ViewHelp>
        ) : displayMyQR ? (
          <View style={styles.bodyContainer}>
            <View style={styles.cardContainer}>
              <Card
                description={
                  "Soy un alumno de dam y me gusta mucho la programación, aunque mi ex-tutor no"
                }
              ></Card>
            </View>
            <Text style={styles.title}>Cosas que me gustan mucho:</Text>
            <ListILike lista={likes}></ListILike>
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
    backgroundColor: "#fff",
  },
  topContainer: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 34, 34, 0.9)",
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
  title: {
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowRadius: 10,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: "rgba(34, 34, 34, 0.85)",
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
  centerQRCode: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  cosasQmeGustanMuxoEstails: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
