import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  Pressable
} from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () => {
  const [diceVal, setDiceVal] = useState('');
  // let diceVal = 0;
  // let diceString = '0';
  // if(diceVal > 0) {
  //   diceString = diceVal.toString;
  // }
  
  return (
    <View>
      <View style={styles.container}>
      <Pressable 
        onPress={() => setDiceVal(() => Math.ceil(Math.random() * 6))}
        // onPress={() => {diceVal = Math.ceil(Math.random() * 6)}}
        // The `style=` is supposed to change the color of the button when pressed, but it doesn't work rn.
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'white'
          },
          styles.button
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>{'d6'}</Text>
        )}
      </Pressable>
      
      <Button
        title="Right button"
        onPress={() => Alert.alert(getRandomInt(6))}
        />
      
      <Button
        title="d12"
        onPress={() => setDiceVal(() => Math.ceil(Math.random() * 12))}
        // onPress={() => {diceVal = Math.ceil(Math.random() * 6)}}
      />
      </View>

      <View style={styles.dicebox}>
        <Text style={styles.text}>{diceVal}</Text>
      </View>
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
    color: 'black',
  },
  dice: {
    marginTop: 30,
    padding: 30,

    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dicebox: {
    flex: 0.3,
    borderWidth: 5,
    backgroundColor: 'blue',
    padding: 8 // This line is only here to make the box long enough to go around number
  }
});

export default App;
