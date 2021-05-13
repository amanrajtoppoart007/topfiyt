import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MainHeader from '../components/MainHeader'
import Colors from '../layout/Colors'
import Font from '../layout/Font'
import { Switch } from 'react-native-elements';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainHeader/>

            <View >
                <View style={styles.notification}>
                <Text style={styles.text}>Notifications</Text>
                <Switch value={false} color={Font.primary}></Switch>
                </View>
                <View style={styles.line}/>
            </View>



            <View>
                <Text style={styles.text}>Payments</Text>
                <View style={styles.line}/>
            </View>
            <View>
                <Text style={styles.text}>Change Password</Text>
                <View style={styles.line}/>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    notification : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 8
    },
    text : {
        color : Colors.primary,
        marginVertical :12,
        marginHorizontal : 10,
        fontSize : 12,
        fontFamily : Font.PoppinsRegular
    },
    line : {
        width : '100%',
        height : 1,
        color : Colors.primary,
        borderWidth : 0.3,
        borderColor : Colors.primary,
        marginBottom : 10,
        opacity : 0.6
    }
})