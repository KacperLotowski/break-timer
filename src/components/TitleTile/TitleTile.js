import { View } from 'react-native';
import React from 'react';
import styles from '../../Styles/Styles'

class TitleTile extends React.Component {

    render() {
        return (
            <View style={styles.TopTile}>
            <Text style={{
            fontSize: 35,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'headline'                  
            }}>Money Break</Text>
        </View>
        )
    }
}

export default TitleTile;