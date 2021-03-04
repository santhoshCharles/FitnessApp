import React from 'react';
import moment from 'moment';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';
import strings from '../constant'
class Footer extends React.Component {
    constructor() {
        super()
      }
    render() {
        console.log('this', this)
        return (
            <View style={styles.footerStyle}>
                <View style={[styles.flexDisplay, styles.justifyStyle]}>
                    <TouchableOpacity onPress={()=>this.props.changeTab("home")}>
                    <View style={[styles.footerCardStyle, styles.contentAlign]}>
                        <Image source={require('../images/home.png')} style={styles.adImageStyle} style={styles.cardImgageStyle} />
                        <Text>{strings.Home}</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.changeTab("history")}>
                    <View style={[styles.footerCardStyle, styles.contentAlign]}>
                        <Image source={require('../images/activity.png')} style={styles.adImageStyle} style={styles.cardImgageStyle} />
                        <Text>{strings.Activity}</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    footerStyle: {
        backgroundColor: "#f0f2ff",
        height: 100,
    },
    flexDisplay: {
        flexDirection: "row"
    },
    adImageStyle: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 5
    },
    justifyStyle: {
        justifyContent: "space-evenly"
    },
    cardImgageStyle: {
        width: 30,
        height: 30
    },
    footerCardStyle: {
        elevation: 5,
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 25,
        padding: 10,
    },
    contentAlign: {
        alignItems: "center"
    }
});

export default Footer;
