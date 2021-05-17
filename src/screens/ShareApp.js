import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import facebook from '../assets/images/shareApp/facebook.png'
import gplus from '../assets/images/shareApp/gplus.png'
import gmail from '../assets/images/shareApp/gmail.png'
import twitter from '../assets/images/shareApp/twitter.png'
import linkedin from '../assets/images/shareApp/linkedin.png'
import drive from '../assets/images/shareApp/drive.png'
import fbmessenger from '../assets/images/shareApp/fbmessenger.png'
import insta from '../assets/images/shareApp/insta.png'
import green from '../assets/images/shareApp/green.png'
import comma from '../assets/images/shareApp/comma.png'
import skype from '../assets/images/shareApp/skype.png'
import bluetooth from '../assets/images/shareApp/bluetooth.png'
import chain from '../assets/images/logo/chain.png'
import Colors from '../layout/Colors'
import Font from '../layout/Font'

export default class ShareApp extends Component {
    render() {
        return (
            <View style={styles.container}>
            
        <View style={styles.header}>
            
            <View style={styles.lineContainer}>
            <Text style={styles.line1} />
            <Text style={styles.line2} />
            <Text style={styles.line3} />
            </View>

            <Text style={styles.shareText}>Share App</Text>

        </View>

        <Text/>
            

            <View style={styles.imgContainer}>
                <View style={styles.imgContainer2}>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img1} source={facebook} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img1} source={gplus} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img1} source={gmail} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={twitter} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={linkedin} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={drive} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={fbmessenger} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={insta} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={green} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={comma} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={skype} />
                    </TouchableOpacity>
                <TouchableOpacity style={styles.imgView}>
                    <Image style={styles.img} source={bluetooth} />
                    </TouchableOpacity>
                    {/* </View> */}


                <TouchableOpacity style={styles.chainView}>
                    <Image style={styles.chain} source={chain}/>
                    <Text style={styles.url}>Copy URL</Text>
                </TouchableOpacity>
                </View>

            </View>

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container : {
        backgroundColor : Colors.primary,
        height : '100%',
    },
    header : {
        // borderWidth : 1,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        borderBottomLeftRadius : 50
    },
    lineContainer : {
        alignItems: 'flex-end',
         justifyContent : 'flex-start',
          alignSelf : 'flex-start',
          marginTop : 20,
          marginLeft : 15
    },
    line1: {
        width: 25,
        height: 1,
        borderWidth: 1,
        marginLeft: 10,
        marginBottom: 3,
        borderColor : Colors.white
      },
    line2: {
        width: 18,
        height: 1,
        borderWidth: 1,
        marginLeft: 10,
        marginBottom: 3,
        borderColor : Colors.white
      },
    line3: {
        width: 10,
        height: 1,
        borderWidth: 1,
        marginLeft: 10,
        marginBottom: 3,
        borderColor : Colors.white
      },
      shareText :  {
          color : Colors.white,
          fontSize : 24,
          fontFamily : Font.PoppinsRegular,
          marginLeft : 18,
          marginTop : 15
      },
    imgContainer : {
        // flexDirection : 'row',
        // flexWrap : 'wrap',
        // height : '100%',
        // justifyContent : 'center',
        backgroundColor : Colors.white,
        // marginTop : 10,
        borderTopLeftRadius : 45,
        borderTopRightRadius : 45,
    },
    imgContainer2 : {
        // flex : 0.1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        height : '100%',
        backgroundColor : Colors.white,
        marginTop : 10,
        borderTopLeftRadius : 45,
        borderTopRightRadius : 45,
    },
    imgView : {
        marginTop : 7,
        marginLeft : 14
    },
    img1 : {
        marginTop : 20
    },
    chain : {
        borderWidth : 1,
    },
    chainView : {
        flexDirection : 'row',
        alignItems : 'center',
        marginLeft : 15,
        marginTop : 15
    },
    url : {
        fontSize : 18,
        color : Colors.primary,
        marginLeft : 7,
        fontFamily : Font.PoppinsRegular
    }
})