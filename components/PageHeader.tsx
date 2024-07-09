import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"

export const PageHeader: FC<{ title: string }> = ({ title }): JSX.Element => {
	return (
		<View style={styles.heading}>
			<Text style={styles.headingText}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	heading: {
		backgroundColor: `#da9cc1`,
		width: `100%`,
		justifyContent: `center`,
		alignItems: `center`,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		position: `absolute`,
		zIndex: 99,
		height: 100,
	},
	headingText: {
		textAlign: `center`,
		color: `#000000`,
		fontWeight: `bold`,
		fontSize: 20,
		letterSpacing: 2,
	},
})
