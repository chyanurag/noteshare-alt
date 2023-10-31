import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		alert(email)
	}
  return (
    <View style={styles.container}>
		<Text style={styles.text}>NoteShare</Text>
	  	<View style={styles.inputContainer}>
	  		<TextInput style={styles.input} keyboardType="email-address" placeholder="Enter your email"/>
	  		<TextInput style={styles.input} secureTextEntry={true} placeholder="Enter your password"/>
	  	</View>
	  	<View style={styles.buttonContainer}>
	  		<TouchableOpacity onPress={handleLogin} style={styles.button}>
	  			<Text style={styles.buttonText}>Login</Text>
	  		</TouchableOpacity>
	  		<Text>Not yet registered ?</Text>
	  		<TouchableOpacity style={{ margin: 10, borderWidth: 1, borderColror: 'black', width: '50%' }}>
	  			<Text style={{ fontSize: 20, textAlign: 'center', padding: 8 }}>Register</Text>
	  		</TouchableOpacity>
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
