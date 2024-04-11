import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FixedButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'blue',
    padding: 10,
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  buttonText: {
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FixedButton;