import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import rk from '../assets/images/card-images/rk.jpg'
import MainHeader from '../components/MainHeader'
import Colors from '../layout/Colors'
import Font from '../layout/Font'

export default class FeaturedProfessional extends Component {
    render() {
        return (
            <View>
                <MainHeader/>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <View>
                        <Image style={styles.rk} source={rk}/>
                        </View>

                        <View>
                            <Text style={styles.name}>Johnson</Text>
                            <Text style={styles.role}>Actor (Job title)</Text>
                        </View>
                    </View>

                    <View>
                    <Text style={styles.para}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum is simply dummy
                    </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rk : {
        width : 35,
        height : 35,
        borderRadius : 40,
        marginHorizontal : 5,
        marginTop : 4
    },
    card : {
        borderWidth : 1,
        borderRadius : 10,
        borderColor : 'lightgray',
        margin : 20
    },
    cardHeader : {
        flexDirection : 'row',
        marginLeft : 5
    },
    name : {
    fontSize : 14,
    fontFamily : Font.PoppinsRegular,
    // color : Colors.primary
    },
    role : {
    fontSize : 12,
    fontFamily : Font.PoppinsRegular,
    // color : Colors.primary,
    opacity : 0.6
    },
    para : {
    fontSize : 10,
    fontFamily : Font.PoppinsRegular,
    marginLeft : 5,
    marginVertical : 5,
    // marginHorizontal : 20,
    // width : 324
    }
})