import { View, Text, TouchableOpacity } from 'react-native'
import { auth, db } from '../firebaseConfig.js'
import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'


const Home = () => {
	const [name, setName] = useState('')
	useEffect(() => {
		getDocs(collection(db, "users"))
		.then(docs => {
			docs.forEach(doc => {
				if(doc.data().uid === auth.currentUser.uid){
					setName(doc.data().name)
				}
			})
		})
		.catch(err => {
			alert(err.message)
		})
	}, [])
	return(
		<View>
			<Text>Hello {name}</Text>
			<Text>Home page</Text>
			<TouchableOpacity onPress={() => signOut(auth)}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Home;
