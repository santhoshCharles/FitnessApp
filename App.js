/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home';
import Footer from './screens/Footer';
import Activity from './screens/Activity'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      showHome: true,
      selecteddate: '',
      showParticularDate: false
    }
  }

  changeTab = () => {
    const {showHome} = this.state
    this.setState({showHome: !showHome})
  }

  changeParticularDate = (data) => {
    console.log('data app', data)
    const {showParticularDate} = this.state
    this.setState({showParticularDate: true, selecteddate: data.date, showHome: false})
  }

  changeParticularDateFlase =()=> {
    this.setState({showParticularDate: false, showHome: true})
  }
  
  render() {
    const {showHome, showParticularDate} = this.state
    console.log('showHome', showHome, showParticularDate)
  return (
   <View>
     { !showParticularDate && showHome ? <Home changeParticularDate={(data)=>this.changeParticularDate(data)}/> : <View/>}
     { !showHome && showParticularDate ? <Activity changeParticularDateFlase={()=>this.changeParticularDateFlase()}/> : <View/>}
     <Footer showHome={showHome} changeTab={()=>this.changeTab()}/>
   </View>
  );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
