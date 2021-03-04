import React from 'react';
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
import Fitness from '@ovalmoney/react-native-fitness';

class Home extends React.Component{
    componentDidMount() {
        const permissions = [
            { kind: Fitness.PermissionKinds.Steps, access: Fitness.PermissionAccesses.Write },
          ];
        const getStepsData = {startDate: '2021-03-04', endDate: '2021-03-05', interval: "0.5 minute"} 
          console.log("permissions", permissions)
          setInterval(()=>
          { 
          Fitness.isAuthorized(permissions)
            .then((authorized) => {
              // Do something
              console.log("authorized", authorized)
              if(!authorized){
                Fitness.requestPermissions(permissions).then((data) => {
                    console.log("data", data)
                    Fitness.getSteps(getStepsData).then((data) => {
                        console.log("getSteps", data[0].quantity, getStepsData);
                    })
                })
              } else {
                Fitness.getSteps(getStepsData).then((data) => {
                    console.log("getSteps",  data[0].quantity, getStepsData);
                })
              }
            })
            .catch((error) => {
              // Do something
            });
        }, 3000);
    }
    render() {
    return (
        <View style={styles.appStyle}>
            <View style={styles.containerStyle}>
                <Text style={styles.headerTextStyle}> {`${strings.hello} Santhosh`} </Text>
                <View style={styles.flexDisplay}>
                    <Text style={styles.workOutStyle}>{strings.workOut}</Text>
                    <Text style={styles.workOutStyle}>{strings.find} </Text>
                </View>
                <View>
                    <Image source={require('../images/ad.png')} style={styles.adImageStyle} />
                </View>
                <View >
                    <Text style={styles.todayActivityStyle}>{strings.todayActivity}</Text>
                </View>
                <View style={[styles.flexDisplay, styles.justifyStyle]}>
                    <View style={styles.cardStyle}>
                        <View style={styles.flexDisplay}>
                            <Image source={require('../images/shoes.png')} style={styles.adImageStyle} style={styles.cardImgageStyle} />
                            <Text style={styles.cardHeaderStyle}>{strings.steps}</Text>
                        </View>
                    </View>
                    <View style={styles.cardStyle}>

                    </View>
                </View>
            </View>
        </View>
    );
    }
};

const styles = StyleSheet.create({
    appStyle: {
        backgroundColor: "#f0f2ff",
        height: "100%",
    },
    containerStyle: {
        marginTop: 16,
        marginHorizontal: 16
    },
    headerTextStyle: {
        fontSize: 17,
        color: "#c4cbe8"
    },
    flexDisplay: {
        flexDirection: "row"
    },
    workOutStyle: {
        fontSize: 22,
        fontWeight: "600"
    },
    addStyle: {
        height: 300
    },
    todayActivityStyle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    adImageStyle: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 5
    },
    cardStyle: {
        elevation: 5,
        width: 140,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 10,
        padding: 10,
        paddingTop: 5
    },
    justifyStyle: {
        justifyContent: "space-evenly"
    },
    cardImgageStyle: {
        width: 30,
        height: 30
    },
    cardHeaderStyle:{
        fontSize: 15,
        color: "#979ba5"
    }
});

export default Home;
