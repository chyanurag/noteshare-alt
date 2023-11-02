import { View, Text, StyleSheet, TextInput } from 'react-native'

const New = () => {
	return(
		<View style={styles.container}>
			<Text>You can now add new things on this line</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 30
	}
})

export default New;
