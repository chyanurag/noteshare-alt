import { View, Text, StyleSheet } from 'react-native'
import { db, auth } from '../firebaseConfig'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'


const Profile = () =>  {
	return(
		<View style={styles.container}>
			<Text>profile page</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 30,
		backgroundColor: 'whitesmoke'
	}
})

export default Profile;
