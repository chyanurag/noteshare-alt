import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native'
import { auth, db } from '../firebaseConfig.js'
import { signOut } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Post = () => {
	return(
		<View style={styles.post}>
			<Text>CPPL Assignment 5</Text>
		</View>
	)
}

const Home = () => {
	// if(!auth.currentUser) return <View></View>
	const [name, setName] = useState(null)
	/*
	useEffect(() => {
		if(!auth.currentUser) return;
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
	*/
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>NoteShare</Text>
			</View>
			<View>
				<Text style={styles.greeting}>Hello, Anurag</Text>
			</View>
			<View style={styles.topContainer}>
				<Text style={styles.topPost}>Top posts today</Text>
				<ScrollView horizontal={true}>
					<Post />
					<Post />
					<Post />
					<Post />
				</ScrollView>
			</View>
			<View style={styles.topContainer}>
				<Text style={styles.topPost}>Top from your organization</Text>
				<ScrollView horizontal={true}>
				</ScrollView>
			</View>
			<View style={styles.topContainer}>
				<Text style={styles.topPost}>New from your organization</Text>
				<ScrollView horizontal={true}>
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 30,
		backgroundColor: 'whitesmoke'
	},
	greeting:{
		fontSize: 25,
		padding: 10,
	},
	headingContainer:{
		borderColor: 'black',
		borderWidth: 1,
		borderBottom: 1
	},
	heading:{
		textAlign: 'center',
		fontSize: 20,
		padding: 20
	},
	topPost:{
		fontSize: 20
	},
	topContainer:{
		margin: 10
	},
	post:{
		backgroundColor: 'white',
		padding: 10,
		margin: 20,
		borderRadius: 5
	}
})

export default Home;
