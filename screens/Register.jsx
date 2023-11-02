import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { auth, db } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Register = ({ navigation }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [college, setCollege] = useState('Shree L.R. Tiwari College')
	const [grade, setGrade] = useState('5th')
	const handleRegister = async () => {
		if(name.trim().length < 3){
			alert('Name can\'t be less than 3 characters')
			return;
		}	
		if(password.trim().length < 8){
			alert('Password must be atleast 8 characters!')
			return;
		}
		createUserWithEmailAndPassword(auth, email, password)
		.then((user) => {
			try{
				addDoc(collection(db, "users"), {
					uid: user.user.uid,
					name: name,
					email: email,
					college: college,
					grade: grade
				})
			}catch(e){
				alert(`Something went wrong! ${e.message}`)
			}
			alert('your account has been created successfully!')
		})
		.catch(err => {
			alert(err.message)
			return;
		})
	}
	return(
		<View style={styles.container}>
			<View>
				<Text style={styles.heading}>NoteShare</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput style={styles.input} onChangeText={setName} placeholder={"Enter your full name"}/>
				<TextInput style={styles.input} onChangeText={setEmail} keyboardType="email-address" placeholder={"Enter your email"}/>
				<TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true} placeholder={"Choose a password"}/>
				<Picker style={styles.input} mode="dialog" selectedValue={college} onValueChange={(itemValue, itemIndex) => setCollege(itemValue)}>
					<Picker.Item label="Shree L.R. Tiwari College" value="Shree L.R Tiwari College"/>
					<Picker.Item label="Thakur College of Engineering" value="Thakur College of Engineering"/>
					<Picker.Item label="D.J. Sangvi College of Engineering" value="D.J. Sangvi College of Engineering"/>
				</Picker>
				<Picker style={styles.input} mode="dialog" mode="dialog" selectedValue={grade} onValueChange={(itemValue, itemIndex) => setGrade(itemValue)}>
					<Picker.Item label="5th" value="5"/>
					<Picker.Item label="6th" value="6"/>
					<Picker.Item label="7th" value="7"/>
					<Picker.Item label="8th" value="8"/>
					<Picker.Item label="9th" value="9"/>
					<Picker.Item label="10th" value="10"/>
					<Picker.Item label="11th" value="11"/>
					<Picker.Item label="12th" value="12"/>
					<Picker.Item label="B.E" value="13"/>
					<Picker.Item label="M.E" value="17"/>
				</Picker>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={handleRegister}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
				<Text>
					Already registered? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{color: 'blue'}}>Login</Text></TouchableOpacity>
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	heading:{
		fontSize: 20,
		padding: 20,
		width: '100%',
		textAlign : 'center',
		marginTop: 50,
		marginBottom: 50,
	},
	container:{
		flex: 1,
		marginTop: 30,
		backgroundColor: 'whitesmoke'
	},
	input:{
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		margin: 10,
		width: '70%',
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
})

export default Register;
