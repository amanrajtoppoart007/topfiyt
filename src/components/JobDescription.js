import React, { Component } from 'react'
import { Image, Text, View, StyleSheet} from 'react-native'
import logo from '../assets/images/logo/logo.png'
import Colors from '../layout/Colors'
import action from '../assets/images/card-images/action.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'
import greendot from '../assets/images/logo/greendot.png'

export default class JobDescription extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={logo} />
                <Image style={styles.action} source={action} />

                <View style={styles.upperText}>
                <Text style={{fontSize : 19, textAlign : 'center', color : 'white'}}>JOB TITLE WILL COME HERE</Text>
                <Text style={{fontSize : 10, textAlign : 'center', color : 'white'}}>BRAND PVT. LTD.</Text>
                </View>


                <View style={styles.applyView}>
                    <Text style={styles.apply}>Apply Now</Text>
                </View>



                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Icon style={styles.icon} name="location-on" />
                        <Text style={styles.iconText}>Canada</Text>
                    </View>
                    <View style={styles.btn}>
                        <Icon style={styles.icon} name="location-on" />
                        <Text style={styles.iconText}>3-6 years</Text>
                    </View>
                    <View style={styles.btn}>
                        <Icon style={styles.icon} name="location-on" />
                        <Text style={styles.iconText}>1000k - 1500k</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.jobDesc}>Job Description</Text>
                    <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consetetur sadipcing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluqtua. At vero eos et accusam et justo duo dolorea et ea rebum 
                    </Text>
                    <Text style={styles.paraText}>Lorem ipsum dolor sit amet, consetetur sadipcing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluqtua. At vero eos et accusam et justo duo dolorea et ea rebum 
                    </Text>
                    <Text style={styles.paraText}>
                    Lorem ipsum dolor sit amet, consetetur sadipcing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluqtua. At vero eos et accusam et justo duo dolorea et ea rebum 
                        Lorem ipsum dolor sit amet, consetetur sadipcing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluqtua. At vero eos et accusam et justo duo dolorea et ea rebum 
                    </Text>
                </View>

                <View style={{marginLeft : 12}}>
                    <Text style={styles.skillsText}>Skills Required</Text>

                    <View style={{flexDirection : 'row', flexWrap : 'wrap'}}>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>
                    <View style={styles.dot}>
                        <Image style={{marginTop : 2}} source={greendot}/>
                        <Text>Skill Set 1</Text>
                    </View>


                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        height : '100%'
    },
    img : {
        alignSelf : 'center',
        marginTop : 2,
        height : 40,
        width : 30
    },
    action : {
        alignSelf : 'center',
        marginTop : 2,
        height : 120,
        width : 375
    },
    upperText : {
        // display : 'none',
        position: 'relative',
        // left : '1%',
        top : -80
    },
    applyView : {
        position: 'relative',
        left : '30%',
        top : -60,
        justifyContent : 'center',
        borderWidth : 1,
        borderColor : 'lightgray',
        borderRadius : 7,
        backgroundColor : 'white',
        width : 134,
        height : 37
    },
    apply : {
        textAlign : 'center',
        color : Colors.primary
    },
    btnContainer : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        marginTop : -30
    },
    btn : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : 'lightgray',
        width : 107,
        height : 32
    },
    icon : {
        // display : 'none',
        // alignSelf : 'center'
        // alignItems : 'center'   
        marginRight : 5,
        opacity : 0.7
    },
    iconText : {
        textAlign : 'center',
        fontSize : 13,
        opacity : 0.9
    },
    jobDesc : {
        fontSize : 15,
        marginLeft : 14,
        // textAlign : 'justify',
        flexDirection: 'column', //its children will be in a row
        alignItems: 'center',
        marginVertical : 7,
        opacity : 0.8
    },
    paraText : {
        marginLeft : 14,
        fontSize : 12,
        // textAlign : 'justify',
        marginBottom : 20
    },
    skillsText : {
        opacity : 0.9,
        fontSize : 16,
        marginBottom : 5,
        marginLeft : 10
    },
    dot : {
        flexDirection : 'row',
        // marginLeft : 3
        // flex : 0.5

        // alignItems : 'center'
    }
})