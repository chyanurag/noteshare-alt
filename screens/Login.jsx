import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { auth } from '../firebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = async () => {
		if(!validateEmail(email)){
			alert('Please input a valid email')
			return;
		}
		if(password.length === ''){
			alert('Password can\'t be empty')
			return;
		}
		signInWithEmailAndPassword(auth, email, password).then(res => {
			alert('You\'ve been logged in successfully!')
		})
		.catch(err => {
			alert(err.message)
		})
	}
  return (
    <View style={styles.container}>
		<Text style={styles.text}>NoteShare</Text>
	  	<View style={styles.inputContainer}>
	  		<TextInput style={styles.input} keyboardType="email-address" placeholder="Enter your email" onChangeText={setEmail}/>
	  		<TextInput style={styles.input} secureTextEntry={true} placeholder="Enter your password" onChangeText={setPassword}/>
	  	</View>
	  	<View style={styles.buttonContainer}>
	  		<TouchableOpacity onPress={handleLogin} style={styles.button}>
	  			<Text style={styles.buttonText}>Login</Text>
	  		</TouchableOpacity>
			<Text>
				Not yet registered? <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{color: 'blue'}}>Register</Text></TouchableOpacity>
			</Text>
	  	</View>
	  	<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  marginTop: 30,
	  backgroundColor: 'whitesmoke'
  },
	text: {
		fontSize: 20,
		padding: 20,
		width: '100%',
		textAlign : 'center',
		marginTop: 50,
		marginBottom: 50,
	},
	input:{
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		margin: 10,
		width: '70%'
	},
	inputContainer:{
		alignItems: 'center'
	},
	buttonContainer:{
		justifyContent: 'center',
		alignItems: 'center',
		margin: 50
	},
	button:{
		backgroundColor: 'black',
		width: '50%',
		margin: 10
	},
	buttonText:{
		color: 'white',
		fontSize: 20,
		padding: 10,
		textAlign: 'center'
	}
});

export default Login;
