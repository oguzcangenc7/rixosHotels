
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
  
} from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require('./image/rixos_hotels.png')} 
        />
        <Text style={styles.text} >HBM Yazılım | İş Takip Yazılımı | Versiyon v1.0</Text>
        </View>
      
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#3498db'
    
  },
  logo:{
    width:200,height:150

  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',
  },
  text:{
    color:'white',
    opacity:0.8,
    marginTop:-20,
    fontSize:10

  }

 
 
});
