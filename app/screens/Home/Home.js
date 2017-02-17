/**
 * Clusterização Mobile App
 * https://github.com/ecompjr
 * @Cássio Santos
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
export default class HomeScreen extends Component {
    constructor(props){
        super(props);
    }
    
    render () {
        return(
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#bbb'}}>
                    <Text>Teste</Text>
                </View>
        );
    }
}
