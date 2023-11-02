import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { auth } from './firebaseConfig.js'
import { onAuthStateChanged } from 'firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import Profile from './screens/Profile'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
	const [logged, setLogged] = useState(auth !== null);
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if(user){
				setLogged(true)
			}
			else{
				setLogged(false)
			}
		})
	}, [])
	return(
		<NavigationContainer>
			{logged
			?
				<Tab.Navigator>
					<Tab.Screen name="home" component={Home}/>
					<Tab.Screen name="profile" component={Profile}/>
				</Tab.Navigator>
			:
				<Stack.Navigator>
					<Stack.Screen name="Register" component={Register}/>
					<Stack.Screen name="Login" component={Login}/>
				</Stack.Navigator>
			}
		</NavigationContainer>
	)
}

export default App;
