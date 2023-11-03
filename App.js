import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { auth } from './firebaseConfig.js'
import { onAuthStateChanged } from 'firebase/auth'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from './screens/Home'
import Register from './screens/Register'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Search from './screens/Search'
import New from './screens/New'
import Leaderboard from './screens/Leaderboard'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
	const [logged, setLogged] = useState(true);
	/*
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
	*/
	return(
		<NavigationContainer>
			{logged
			?
				<Tab.Navigator screenOptions={{headerShown: false}}>	
					<Tab.Screen name="home" component={Home} options={{ tabBarLabel : "Home", tabBarIcon : ({focused, color, size}) => (
						<Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color}/>
					)
					}}/>
					<Tab.Screen name="search" component={Search} options={{ tabBarLabel : "Search", tabBarIcon : ({focused, color, size}) => (
						<Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color}/>
					)
					}}/>
					<Tab.Screen name="new" component={New} options={{ tabBarLabel : "New", tabBarIcon : ({focused, color, size}) => (
						<Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size} color={color}/>
					)
					}}/>
					<Tab.Screen name="leaderboards" component={Leaderboard} options={{ tabBarLabel : "Leaderboards", tabBarIcon : ({focused, color, size}) => (
						<Ionicons name={focused ? 'podium' : 'podium-outline'} size={size} color={color}/>
					)
					}}/>
					<Tab.Screen name="profile" component={Profile} options={{ tabBarLabel : "Profile", tabBarIcon : ({focused, color, size}) => (
						<Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color}/>
					)
					}}/>
				</Tab.Navigator>
			:
				<Stack.Navigator screenOptions={{headerShown: false}}>
					<Stack.Screen name="Register" component={Register}/>
					<Stack.Screen name="Login" component={Login}/>
				</Stack.Navigator>
			}
		</NavigationContainer>
	)
}

export default App;
