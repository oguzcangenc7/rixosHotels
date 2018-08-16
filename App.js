/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
  
} from 'react-native';


export default class App extends Component{
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

        <View style={styles.formContainer}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>GİRİŞ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>KAYIT OLUN</Text>
            </TouchableOpacity>
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

  },
  formContainer:{
padding:20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.2)',
    marginBottom:20,
    color:'#fff',
    paddingHorizontal: 10
    

  },
  button:{
    backgroundColor:'#0abde3',
    paddingVertical:15,
    marginBottom: 20

  },
  buttonText:{
    textAlign:'center',
    color:'white',
    fontWeight:'800'

  }

 
 
});
