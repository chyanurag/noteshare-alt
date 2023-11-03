import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'
import { storage } from '../firebaseConfig.js'

const New = () => {
	const [title, setTitle] = useState('');
	const [file, setFile] = useState();
	const selectFile = async () => {
		let result = await DocumentPicker.getDocumentAsync({
			type : ['image/*', 'pdf']
		})
		if(result.canceled){
			alert('Please select a file')
			return;
		}
		let filename = String(result.assets[0].uri).split('/')
		filename = filename[filename.length-1]
		alert(filename)
		uploadBytes(ref(storage, filename), file).then(snapshot => {
			return getDownloadURL(snapshot.ref)
		})
		.then(downloadURL => {
			alert(downloadURL)
		})
	}
	return(
		<View style={styles.container}>
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>Add a new note</Text>
			</View>
			<View>
				<View style={styles.inputContainer}>
					<TextInput placeholder="Enter a title" style={styles.input} onChangeText={setTitle}/>
					<TouchableOpacity onPress={selectFile}>
						<Text>Select File</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={() => alert(title)}>
					<Text>Add Note</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 30,
		backgroundColor: 'whitesmoke'
	},
	headingContainer:{
		margin: 10,
		padding: 10,
		borderBottomWidth: 1,
		borderColor: 'black',
	},
	heading:{
		fontSize: 20,
		textAlign: 'center'
	},
	input:{
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,
		margin: 20,
		width: '70%',
	},
	inputContainer:{
		alignItems: 'center'
	},
})

export default New;
