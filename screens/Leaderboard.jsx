import { View, Text, StyleSheet } from 'react-native'

const Leaderboard = () => {
	return(
		<View style={styles.container}>
			<Text>Leaderboards will go here</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		marginTop: 30
	}
})

export default Leaderboard;
