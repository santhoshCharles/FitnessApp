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
import { LineChart, Grid, BarChart } from 'react-native-svg-charts'

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           height:155,
           weight:60,
           goals:8000
        };
    }
    handleGoal=()=>{

    }
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50]
        return (
            <View style={styles.screenStyle}>
                <View style={styles.flexDisplay}>
                    <TouchableOpacity>
                        <Image source={require('../images/left-arrow.png')} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Activity</Text>
                </View>
                <View style={styles.cardStyle}>
                    <Text style={styles.headStyle}>
                        {strings.lastStreak}
                    </Text>
                    <View style={styles.lineChartStyle}>
                        <LineChart
                            style={{ height: 150, width: 350 }}
                            data={data}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Grid />
                        </LineChart>
                    </View>
                    <Text style={styles.contentAlign}>{strings.stepsWalked}</Text>
                    <View style={styles.lineChartStyle}>
                        <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                            <Grid />
                        </BarChart>
                </View>
                    <Text style={styles.contentAlign}>{strings.CalBurnt}</Text>
                </View>
                <View style={[styles.flexDisplay, styles.justifyStyle, styles.cardStyledailyActivity]} >
                        <View>
                            <Text style={styles.cardHeaderStyle}>Height</Text>
                            <Text style={styles.cardContentStyle}>155 cms</Text>
                        </View>
                        <View>
                            <Text style={styles.cardHeaderStyle}>Weight</Text>
                            <Text style={styles.cardContentStyle}>60 kgs</Text>
                        </View>
                        <View>
                            <Text style={styles.cardHeaderStyle}>Goal</Text>
                            <Text style={styles.cardContentStyle}>8000</Text>
                        </View>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    screenStyle: {
        backgroundColor: "#f0f2ff",
        height: "85%",
        padding:10
    },
    flexDisplay: {
        flexDirection: "row"
    },
    lineChartStyle:{
        display:"flex",
        justifyContent:"center",
        paddingLeft:10
    },
    headStyle:{
        fontSize:15,
        fontWeight:"bold",
        paddingLeft:10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingTop:10,
        paddingBottom:5,
        paddingLeft:20
    },
    backIconStyle:{
        width: 20,
        height: 20,
        marginTop:13,
        marginLeft:10
    },
    cardStyle: {
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 10,
        padding: 10,
        paddingTop: 5
    },
    contentAlign: {
        display:"flex",
        marginLeft:150,
        fontSize:15
    },
    justifyStyle: {
        justifyContent: "space-evenly"
    },
    cardStyledailyActivity: {
        elevation: 5,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 10,
        padding: 10,
        paddingTop: 5
    },
    cardContentStyle:{
        paddingTop:10
    }
});

export default History;
