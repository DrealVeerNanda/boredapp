import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';


export default class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                
                <Header>
                    App name here
                </Header>

                <Text>
                    Select one of the options on every page to know what to do!
                </Text>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('ByYourSelfScreen');

                    }}>
                    <Text>
                        By Yourself?
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity                     
                onPress={() => {
                        this.props.navigation.navigate('WithAFriendScreen');

                    }}>
                    <Text>
                        With A Friend?
                    </Text>

                </TouchableOpacity>

            </View>
        )
    }
}