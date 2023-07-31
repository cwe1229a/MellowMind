import React, { useState } from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SoundButton({ soundURI, iconName, iconLabel }) {
  const [soundObj, setSoundObj] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const onPlaybackStatusUpdate = (status) => {
    setIsPlaying(status.isPlaying);
  };

  const playSound = async () => {
    if (soundObj) {
      if (isPlaying) {
        await soundObj.pauseAsync();
      } else {
        await soundObj.playAsync();
      }
    } else {
      try {
        const { sound } = await Audio.Sound.createAsync(
          soundURI,
          { shouldPlay: true, volume },
          onPlaybackStatusUpdate
        );
        setSoundObj(sound);
      } catch (error) {
        console.log("Error loading sound", error);
      }
    }
  };

  const changeVolume = async (value) => {
    setVolume(value);
    if (soundObj) {
      await soundObj.setVolumeAsync(value);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={playSound}>
        <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color='white' />
        <Text style={styles.iconLabel}>{iconLabel}</Text>
      </View>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        minimumTrackTintColor='#008083'
        maximumTrackTintColor='#FFFFFF'
        onValueChange={changeVolume}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#4016b4",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  iconLabel: {
    color: "white",
    marginLeft: 10,
    fontSize: 18
  }
});
