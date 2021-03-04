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
    TouchableOpacity,
} from 'react-native';
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
import { ProgressCircle } from 'react-native-svg-charts'

class Activity extends React.Component {
    render() {
        return (
            <View style={styles.screenStyle}>
                <View style={styles.flexDisplay}>
                    <TouchableOpacity>
                        <Image source={require('../images/left-arrow.png')} style={styles.backIconStyle} />
                    </TouchableOpacity>
                <Text style={styles.titleStyle}>Daily Activity</Text>
                </View>
                <Text style={styles.titleStyle}>Mon 3</Text>
                <View style={styles.chartCard}>
                    <ProgressCircle style={{ height: 200 }} progress={0.9} progressColor={'rgb(134, 65, 244)'} />
                    <View style={styles.contentAlign}>
                        <Image source={require('../images/shoes.png')} style={[styles.adImageStyle, styles.cardImgageStyle]} />
                        <Text style={styles.contentStyle}>5034</Text>
                    </View>
                    <View>
                        <Image source={require('../images/calories.png')} style={[styles.adImageStyle, styles.cardImgageStyle]} />
                        <Text style={styles.cardHeaderStyle}>209</Text>
                    </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: "#f0f2ff",
        height: "80%",
    },
    flexDisplay: {
        flexDirection: "row"
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop:10,
        paddingBottom:5,
        paddingLeft:20
    },
    dateStyle:{
        fontSize: 18,
        fontWeight: "bold",
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20
    },
    chartCard:{
        // elevation: 5,
        width: 300,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 10,
        marginLeft:50,
        padding: 10,
    },
    adImageStyle: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 5
    },
    cardImgageStyle: {
        width: 40,
        height: 40
    },
    backIconStyle:{
        width: 20,
        height: 20,
        marginTop:13,
        fontWeight:"bold"
    },
    contentAlign: {
        position:"absolute",
        marginTop:55,
        marginLeft:125
    },
    contentStyle:{
        fontWeight:"bold",
        fontSize:23
    }
});

export default Activity;
