import * as React from 'react';
import {View , Text, TextInput , StyleSheet, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import BarterSystem from '../component/BarterSystem';

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }
    userSignup = (emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User successfully signedUp')
        })
        .catch(function(error){
            var errorCode = error.errorCode
            var errorMessage = error.errorMessage
            return Alert.alert(errorMessage)
        })
    }
    userLogin = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User Login Successful')
        })
        .catch(function(error){
            var errorCode = error.errorCode
            var errorMessage = error.errorMessage
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                    <BarterSystem/>
                    <Text style = {styles.title}>Barter System</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TextInput style = {styles.loginBox}
                    placeholder = {'Username'}
                    keyboardType = {'email-address'}
                    onChangeText = {(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}/>

                    <TextInput style = {styles.loginBox}
                    placeholder = {'enter password'}
                    secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>

                    <TouchableOpacity style = {styles.button} 
                    onPress={()=>{
                        this.userLogin(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.buttontext}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}
                    onPress={()=>{
                        this.userSignup(this.state.emailId,this.state.password)
                    }}>
                        <Text style = {styles.buttontext}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        flex:1, 
        backgroundColor:'#F8BE85' 
    }, 
        profileContainer:{ 
            flex:1, 
            justifyContent:'center', 
            alignItems:'center', 
        }, 
        title :{ 
            fontSize:55, 
            fontWeight:'300', 
            paddingBottom:30, 
            color : '#ff3d00' 
        }, 
        loginBox:{ 
            width: 300, 
            height: 40, 
            borderBottomWidth: 1.5, 
            borderColor : 'black', 
            fontSize: 20, 
            margin:10, 
            paddingLeft:10 
        },
        button:{
            width:300, 
            height:50, 
            justifyContent:'center', 
            alignItems:'center', 
            borderRadius:25, 
            backgroundColor:"#ff9800", 
            shadowColor: "#000", 
            shadowOffset: { width: 0, height: 8, }, 
            shadowOpacity: 0.30, 
            shadowRadius: 10.32, 
            elevation: 16,
            marginBottom:10 
        }, 
        buttontext:{ 
            color:'#ff5722', 
            fontSize:18, 
            fontWeight:'bold' 
        }, 
        buttonContainer:{ 
            flex:1, 
            alignItems:'center' 
        }
})