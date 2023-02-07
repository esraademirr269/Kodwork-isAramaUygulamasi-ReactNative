import React, { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import styles from './JobsCard.styles';

const JobsCard = ({ mydata, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} style={styles.container}>
            <Text style={styles.title} >{mydata.name.length > 30 ? mydata.name.slice(0, 30) + '..' : mydata.name}</Text>
            <Text>{mydata.company.name}</Text>
            <View style={styles.inner_container} >
                <Text style={styles.location}>{mydata.locations[0].name}</Text>
            </View>
            <Text style={styles.levels}>{mydata.levels[0].name}</Text>
        </TouchableOpacity>
    );
}

export default JobsCard;