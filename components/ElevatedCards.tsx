import React from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"

export const ElevatedCards = () => {
	return (
		<View style={styles.comtainer}>
			<Text style={styles.headingText}>Elevated Cards</Text>
			<ScrollView
				horizontal={true}
				style={styles.flatList}>
				<View style={[styles.card, styles.cardOne]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	comtainer: {
		paddingHorizontal: 8,
	},
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		color: `#ffffff`,
	},
	flatList: {
		padding: 8,
	},
	card: {
		width: 100,
		marginRight: 20,
		aspectRatio: 1,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		elevation: 4,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		// shadowColor: "#ffffff",
		// shadowOpacity: 0.2,
		// shadowRadius: 4,
	},
	cardText: {
		fontSize: 24,
	},
	cardOne: {
		backgroundColor: `#ef5354`,
	},
	cardTwo: {
		backgroundColor: `#50dbb4`,
	},
	cardThree: {
		backgroundColor: `#5da3fa`,
	},
})
