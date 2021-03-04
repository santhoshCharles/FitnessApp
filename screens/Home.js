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
import Activity from "./Activity";
import strings from '../constant'
import Fitness from '@ovalmoney/react-native-fitness';

const dateFormat = 'YYYY/MM/DD HH:mm:ss';
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
           date:[],
        };
    }
    
    componentDidMount=()=> {
        let date_array=[];
        for(let i=1;i<=5;i++){
            var date= new Date(Date.now() - i * 24 * 60 * 60 * 1000) 
            let list={};
            list.day=moment(date).format('ddd');
            list.date=moment(date).format('D')
            date_array.push(list);
        }
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
       
        this.setState({date:date_array})
    }
    handledailyActivity = (data) => {
        console.log("open",data)
        this.props.changeParticularDate(data)
    }
    render() {
        console.log("this.state",this.state.date)
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
                        <View style={styles.cardStyletodayActivity}>
                            <View style={styles.flexDisplay}>
                                <Image source={require('../images/shoes.png')} style={[styles.imageStyle,styles.cardImgageStyle]} />
                                <Text style={[styles.cardHeaderStyle,styles.contentAlign]}>{strings.steps}</Text>
                            </View>
                        </View>
                        <View style={styles.cardStyletodayActivity}>
                        <View style={styles.flexDisplay}>
                                <Image source={require('../images/calories.png')} style={[styles.imageStyle,styles.cardImgageStyle]} />
                                <Text style={[styles.cardHeaderStyle,styles.contentAlign]}>{strings.calories}</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.dailyActivityStyle}>{strings.dailyActivity}</Text>
                    </View>
                    <View style={[styles.flexDisplay, styles.justifyStyle]}>
                        {this.state.date.length !== 0 && this.state.date.map((element,index) => (
                            <TouchableOpacity onPress={()=>this.handledailyActivity(element)} style={styles.cardStyledailyActivity} key={index}>
                                <Text style={styles.cardHeaderStyle}>{element.day}</Text>
                                <Text style={styles.cardContentStyle}>{element.date}</Text>
                            </TouchableOpacity>
                        )
                        )}
                            </View>
                        </View>
                    </View>
        );
    }
   
};

const styles = StyleSheet.create({
    appStyle: {
        backgroundColor: "#f0f2ff",
        height: "84%",
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
    dailyActivityStyle: {
        paddingTop:25,
        fontSize: 18,
        fontWeight: "bold"
    },
    adImageStyle: {
        width: "100%",
        height: 200,
        marginVertical: 10,
        borderRadius: 5
    },
    imageStyle:{
        width: "100%",
        height: 200,
        borderRadius: 5
    },
    cardStyletodayActivity: {
        elevation: 5,
        width: 140,
        height: 80,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 10,
        padding: 10,
        paddingTop: 5
    },
    cardStyledailyActivity: {
        elevation: 5,
        width: 70,
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
        height: 30,
    },
    cardHeaderStyle:{
        // paddingTop:5,
        fontSize: 15,
        color: "#979ba5"
    },
    cardContentStyle:{
        paddingTop:20
    },
    footerCardStyle:{
        elevation: 5,
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#eff1ff',
        marginTop: 25,
        padding: 10,
        // paddingTop: 20
    },
    contentAlign:{
        display:"flex",
        justifyContent:"center"
    }
});

export default Home;
