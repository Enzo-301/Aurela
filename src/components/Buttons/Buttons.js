import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Buttons.styles';

export function ButtonPrimary({ text, onPress }) {
  return (
    <TouchableOpacity
      style={styles.buttonPrimary}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonPrimaryText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export function ButtonOutline({ text, onPress }) {
  return (
    <TouchableOpacity
      style={styles.buttonOutline}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonOutlineText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}