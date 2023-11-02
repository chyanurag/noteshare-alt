import { View, Text } from 'react-native'
import { db, auth } from '../firebaseConfig'
import { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'


const Profile = () =>  {
	useEffect(async () => {
		const data = await getDocs(collection(db, "users"))
		data.forEach(doc => {
			console.log(doc)
		})
	}, [])
	return(
		<View>
			<Text>profile page</Text>
		</View>
	)
}

export default Profile;
