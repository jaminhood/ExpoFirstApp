import { TabBarIcon } from "@/components/navigation/TabBarIcon"
import TabBarItem from "@/components/navigation/TabBarItem"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Tabs } from "expo-router"
import React from "react"
import { StyleSheet } from "react-native"

export default function TabLayout() {
	const colorScheme = useColorScheme()

	const TabRoutes = [
		{ route: `index`, icon: `home`, iconActive: `home-outline`, title: `Home` },
		{ route: `explore`, icon: `code-slash`, iconActive: `code-slash-outline`, title: `Explore` },
	]

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
				headerShown: false,
				tabBarStyle: styles.tabStyle,
			}}>
			{TabRoutes.map(_tab => (
				<Tabs.Screen
					key={_tab.route}
					name={_tab.route}
					options={{
						title: "Home",
						tabBarShowLabel: false,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								name={focused ? "home" : "home-outline"}
								color={color}
							/>
						),
						tabBarButton: props => (
							<TabBarItem
								{...props}
								item={_tab}
							/>
						),
					}}
				/>
			))}
		</Tabs>
	)
}

const styles = StyleSheet.create({
	tabStyle: {
		height: 60,
		position: "absolute",
		bottom: 16,
		left: 16,
		right: 16,
		borderRadius: 16,
		backgroundColor: `#da9cc1`,
	},
})
