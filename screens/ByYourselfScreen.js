import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class ByYourSelfScreen extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('TempIsHotScreen');
                        
                    }}>
                    <Text>
                        Is it hot?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('TempIsMildScreen');
                        
                    }}>
                    <Text>
                       Is it mild?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('TempIsColdScreen');
                    }}>
                    <Text>
                       Is it cold?
                    </Text>

                </TouchableOpacity>
            </View>
        )
    }
}