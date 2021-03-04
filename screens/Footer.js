import React from 'react';
import moment from 'moment';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import strings from '../constant'
class Footer extends React.Component {
    render() {
        return (
            <View style={styles.footerStyle}>
                <View style={[styles.flexDisplay, styles.justifyStyle]}>
                    <View style={[styles.footerCardStyle, styles.contentAlign]}>
                        <Image source={require('../images/home.png')} style={styles.adImageStyle} style={styles.cardImgageStyle} />
                        <Text>{strings.Home}</Text>
                    </View>
                    <View style={[styles.footerCardStyle, styles.contentAlign]}>
                        <Image source={require('../images/activity.png')} style={styles.adImageStyle} style={styles.cardImgageStyle} />
                        <Text>{strings.Activity}</Text>
                    </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    footerStyle: {
        backgroundColor: "#f0f2ff",
        height: 125
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
