import * as React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Pressable
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dice}>
        6-D
        
        <Pressable style={styles.button} onPress={Alert.alert(getRandomInt(6))}>
      <Text style={styles.text}>{'Left'}</Text>
    </Pressable>
        
        
        <Button
          title="Right button"
          onPress={() => Alert.alert(getRandomInt(6))}
        />
        
      </Text>
    </View>
  );
}

function getRandomInt(max) {
  var a = Math.floor(Math.random() * max) + 1;
  var b = a.toString()
  return b;
}

const styles = StyleSheet.create({
  container: {
    //padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  dice: {
    marginTop: 30,
    padding: 30,

    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
