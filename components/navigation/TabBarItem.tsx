import React, { useEffect, useRef } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as Animatable from "react-native-animatable"
import { TabBarIcon } from "./TabBarIcon"

export default function TabBarItem(props: any) {
	const { item, onPress, accessibilityState } = props
	const focused = accessibilityState.selected

	const iconRef = useRef(null)
	const iconAnimate = { 0: { scale: 1.2, rotate: `360deg` }, 1: { scale: 0.8, rotate: `0deg` } }
	const iconAnimateFocused = { 0: { scale: 0.5, rotate: `0deg` }, 1: { scale: 1.2, rotate: `360deg` } }
	const textRef = useRef(null)

	useEffect(() => {
		if (focused) {
			iconRef.current.animate(iconAnimateFocused)
			textRef.current.animate({ 0: { opacity: 0, translateX: 100 }, 1: { opacity: 1, translateX: 0 } })
		} else {
			iconRef.current.animate(iconAnimate)
			textRef.current.animate({ 0: { opacity: 1, translateX: 0 }, 1: { opacity: 0, translateX: 100 } })
			// textRef.current.animate({ 0: { opacity: 0, translateX: `100%` }, 1: { opacity: 1, translateX: `0` } })
		}
	}, [focused])

	return (
		<TouchableOpacity
			onPress={onPress}
			style={styles.tabBtn}>
			<Animatable.View
				ref={iconRef}
				duration={1000}>
				<TabBarIcon
					name={focused ? item.iconActive : item.icon}
					color={focused ? `#ffffff` : `#333333`}
					style={styles.tabBtnIcon}
				/>
			</Animatable.View>
			<Animatable.View
				ref={textRef}
				duration={1000}>
				{focused && <Text style={styles.tabBtnText}>{item.title}</Text>}
			</Animatable.View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	tabBtn: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 16,
	},
	tabBtnText: {
		fontSize: 16,
		fontWeight: "bold",
		color: `#ffffff`,
	},
	tabBtnIcon: {
		// alignSelf: "center",
		// justifyContent: "center",
		// alignItems: "center",
	},
})
