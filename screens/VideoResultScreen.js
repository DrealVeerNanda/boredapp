import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class VideoResultScreen extends React.Component {
    
    render() {
        return(
            <View>  
                <Header>
                    Here are some video games you can play
                </Header>

                <Text>
                    Minecraft is a great game where you can build!
                </Text>

                <Text>
                    Amoung us is a very fun mystery game.
                </Text>
                    
                <Text>
                    League of Legends is a fun fps game!
                </Text>

                <Text>
                    Terraria is a 2d game similar to Minecraft in many ways.
                </Text>
            </View>
        )
    }
}
