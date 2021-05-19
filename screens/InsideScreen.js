import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class InsideScreen extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('BoardResultScreen');

                    }}
                    >
                    <Text>
                        Board game?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('VideoResultScreen');

                    }}>
                    <Text>
                       Video Game?
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}