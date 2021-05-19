import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class BoardResultScreen extends React.Component {
    
    render() {
        return(
            <View>  
                <Header>
                    Here are some board games you can play
                </Header>

                <Text>
                    Puzzle(s)! Puzzles are great board games!
                </Text>

                <Text>
                    Chess! You can play chess with a friend or by yourself!
                </Text>

                <Text>
                    The Seventh Continent is a good game to play!
                </Text>

                <Text>
                    A Feast of Oden is a classic game you can play!
                </Text>
            </View>
        )
    }
}
