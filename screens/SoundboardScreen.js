import React from "react";
import { View, StyleSheet } from "react-native";
import SoundButton from "../components/SoundButton";
import AllSoundsPauseButton from "../components/AllSoundsPauseButton";

const rainSound = require("../assets/sounds/rain.mp3");
const chatterSound = require("../assets/sounds/chatter.mp3");
const jazzSound = require("../assets/sounds/jazz.mp3");
const fireplaceSound = require("../assets/sounds/fireplace.mp3");

const SoundboardScreen = () => {
  return (
    <View style={styles.container}>
      <SoundButton soundURI={rainSound} iconName='rainy' iconLabel='Rain' />
      <SoundButton
        soundURI={chatterSound}
        iconName='chatbubbles'
        iconLabel='Chatter'
      />
      <SoundButton
        soundURI={jazzSound}
        iconName='musical-notes'
        iconLabel='Jazz'
      />
      <SoundButton
        soundURI={fireplaceSound}
        iconName='flame'
        iconLabel='Fireplace'
      />

      <AllSoundsPauseButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EF843D",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SoundboardScreen;
