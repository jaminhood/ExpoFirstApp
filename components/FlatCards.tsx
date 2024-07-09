import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const FlatCards = () => {
	return (
		<View style={styles.comtainer}>
			<Text style={styles.headingText}>Flat Cards</Text>
			<View style={styles.flatList}>
				<View style={[styles.card, styles.cardOne]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardTwo]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
				<View style={[styles.card, styles.cardThree]}>
					<Text style={styles.cardText}>Red</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	comtainer: {
		paddingHorizontal: 8,
		marginBottom: 20,
	},
	headingText: {
		fontSize: 24,
		fontWeight: "bold",
		color: `#ffffff`,
	},
	flatList: {
		padding: 8,
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 16,
	},
	card: {
		flex: 1,
		aspectRatio: 1,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
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
