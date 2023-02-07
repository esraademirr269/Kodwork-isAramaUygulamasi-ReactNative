import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.styles';

import Icon from 'react-native-vector-icons/MaterialIcons';


const Button = ({ name, onSelect, icon }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSelect}  >
            <Text><Icon style={styles.icon} name={icon} size={19} /></Text>
            <Text style={styles.name}> {name}</Text>
        </TouchableOpacity>
    );
}

export default Button;