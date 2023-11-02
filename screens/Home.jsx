import { View, Text, TouchableOpacity } from 'react-native'
import { auth } from '../firebaseConfig.js'
import { signOut } from 'firebase/auth'

const Home = () => {
	return(
		<View>
			<Text>Home page</Text>
			<TouchableOpacity onPress={() => signOut(auth)}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Home;
