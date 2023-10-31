import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'


const Search = () => {
	const [search, setSearch] = useState('');
	const handleSearch = () => {
		alert(search)
	}
	return(
		<View style={styles.container}>
			<View style={styles.search}>
				<TextInput style={styles.searchInput} onChangeText={text => setSearch(text)} placeholder="Search notes.."/>
				<TouchableOpacity onPress={handleSearch}>
					<Ionicons name="search" size={28} color="black" style={styles.icon}/>
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.result}>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: 'whitesmoke',
	},
	search:{
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchInput:{
		padding: 5,
		fontSize: 15,
		borderWidth: 1,
		borderColor: 'black',
		width: '90%'
	},
	icon:{
		marginLeft: 10
	},
	result:{
		padding: 10
	}
})

export default Search;
