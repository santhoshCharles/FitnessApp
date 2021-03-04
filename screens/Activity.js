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
import strings from '../constant'
import { ProgressCircle } from 'react-native-svg-charts'

class Activity extends React.Component {
    render() {
        return (
            <View style={styles.screenStyle}>
                <View style={styles.flexDisplay}>
                    <TouchableOpacity onPress={()=>this.props.changeParticularDateFlase()}>
                        <Image source={require('../images/left-arrow.png')} style={styles.backIconStyle} />
                    </TouchableOpacity>
                <Text style={styles.titleStyle}>Daily Activity</Text>
                </View>
                <Text style={styles.dateStyle}>Mon 3</Text>
                <View style={styles.chartCard}>
                    <ProgressCircle style={{ height: 200 }} progress={0.9} progressColor={'rgb(134, 65, 244)'} />
                    <View style={styles.contentAlign}>
                        <Image source={require('../images/shoes.png')} style={[styles.adImageStyle, styles.cardImgageStyle]} />
                        <Text style={styles.contentStyle}>5034</Text>
                    </View>
                    <View style={styles.caloriescontainerStyle}>
                        <View style={[styles.flexDisplay, styles.caloriescontainerStyle]}>
                            <Image source={require('../images/calories.png')} style={[styles.adImageStyle, styles.cardImgageStyle]} />
                            <Text style={styles.textStyle}>{strings.caloriesBurnt}</Text>
                        </View>
                        <Text style={[styles.caloriesStyle, styles.caloriescontainerStyle]}>209  {strings.kcal}</Text>
                    </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: "#f0f2ff",
        height: "83%",
    },
    flexDisplay: {
        flexDirection: "row"
    },
    caloriescontainerStyle:{
        justifyContent:"center"
    },
    caloriesStyle:{
        // paddingTop:10,
        fontSize:20,
        paddingLeft:120
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
        paddingLeft:50
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
        marginLeft:10
    },
    contentAlign: {
        position:"absolute",
        marginTop:55,
        marginLeft:125
    },
    contentStyle:{
        fontWeight:"bold",
        fontSize:23
    },
    textStyle:{
        paddingTop:20,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:10
    }
});

export default Activity;
