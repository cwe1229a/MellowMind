import React from "react";
import { Button } from "react-native";
import { Audio } from "expo-av";

const AllSoundsPauseButton = () => {
  const pauseAll = async () => {
    await Audio.setIsEnabledAsync(false);
    await Audio.setIsEnabledAsync(true);
  };

  return <Button title='Pause All' onPress={pauseAll} color='#4016b4' />;
};

export default AllSoundsPauseButton;
