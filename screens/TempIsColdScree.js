import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class TempIsColdScreen extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('InsideScreen');
                    }}>
                    <Text>
                        Inside?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('OutsideScreen');
                    }}>
                    <Text>
                       Outside?
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}