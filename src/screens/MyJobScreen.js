import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Header from '../components/Header'

export default class MyJob extends Component {
    render() {
        return (
            <View >
                <Header/>

                <Text>My Jobs</Text>


                <View style={styles.cardContainer}>

                <View style={styles.topContainer}>
                <Text style={styles.name}>Actor</Text>
                <Text style={styles.date}>Applied 22 April 2020</Text>
                </View>

                <View style={styles.btnView}>
                    <Text style={styles.btn}>Pending</Text>
                </View>


                </View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
 cardContainer : {
     borderWidth : 1
 },
 topContainer : {
     flexDirection : 'row'
 },
 
})