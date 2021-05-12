import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../layout/Colors'
import Font from '../layout/Font'
import tick from '../assets/images/logo/tick.png'

export default class SuccessfullyApplied extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text/>
                <Text/>
                <Text/>
                <Text/>
                <View style={styles.tickView}>
                    <Image style={styles.tick} source={tick}/>
                </View>

                <View>
                    <Text style={styles.successText}>SUCCESS !</Text>
                </View>

                <Text style={styles.text}>
                    You have successfully applied for the Job position. 
                    Our representative will contact you shortly.
                </Text >

                <Text style={styles.text}>Want to apply for another job?</Text>

                <TouchableOpacity style={styles.homeView}>
                    <Text style={styles.home}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        height : '100%',
        backgroundColor : 'white',
        // alignSelf : 'center'

    },
    tickView : {
        alignSelf : 'center',
        marginTop : 30,
        borderWidth : 2,
        borderRadius : 360,
        borderStyle : 'dashed',
        borderColor : Colors.primary,
        height : 150,
        width : 150
    },
    tick : {
        alignSelf : 'center',
        marginVertical : 38
    },
    successText : {
        alignSelf : 'center',
        fontSize : 25,
        marginTop : 30,
        marginBottom : 10,
        marginLeft : -20,
        letterSpacing : 1,
        color : Colors.primary
    },
    text : {
        fontSize : 14,
        textAlign : 'center',
        marginVertical : 10,
        marginHorizontal : 20,
        fontFamily : Font.PoppinsRegular
    },
    homeView : {
        alignSelf : 'center',
        // borderWidth : 1,
        backgroundColor : Colors.primary,
        marginTop : 20,

    },
    home : {
        margin : 10,
        marginHorizontal : 25,
        color : 'white',
    }
})