import { Image, Platform, StyleSheet, Text, View } from "react-native"

import { ElevatedCards } from "@/components/ElevatedCards"
import { FlatCards } from "@/components/FlatCards"
import { HelloWave } from "@/components/HelloWave"
import { PageHeader } from "@/components/PageHeader"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import Animated from "react-native-reanimated"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.page}>
			<View style={styles.pageInner}>
				<PageHeader title="Home" />
				<Animated.ScrollView
					scrollEventThrottle={16}
					style={styles.scrollContainer}>
					<FlatCards />
					<ElevatedCards />
					<View style={styles.container}>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
						<View style={styles.grid}>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
							<View style={styles.box}>
								<Text style={styles.pageParagraph}>Hello Bigman</Text>
							</View>
						</View>
					</View>
				</Animated.ScrollView>
			</View>
		</SafeAreaView>
		// <ParallaxScrollView
		// 	headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
		// 	headerImage={
		// 		<Image
		// 			source={require("@/assets/images/partial-react-logo.png")}
		// 			style={styles.reactLogo}
		// 		/>
		// 	}>
		// 	<ThemedView style={styles.titleContainer}>
		// 		<ThemedText type="title">Welcome!</ThemedText>
		// 		<HelloWave />
		// 	</ThemedView>
		// 	<ThemedView style={styles.stepContainer}>
		// 		<ThemedText type="subtitle">Step 1: Try it</ThemedText>
		// 		<ThemedText>
		// 			Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. Press <ThemedText type="defaultSemiBold">{Platform.select({ ios: "cmd + d", android: "cmd + m" })}</ThemedText> to open developer tools.
		// 		</ThemedText>
		// 	</ThemedView>
		// 	<ThemedView style={styles.stepContainer}>
		// 		<ThemedText type="subtitle">Step 2: Explore</ThemedText>
		// 		<ThemedText>Tap the Explore tab to learn more about what's included in this starter app.</ThemedText>
		// 	</ThemedView>
		// 	<ThemedView style={styles.stepContainer}>
		// 		<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
		// 		<ThemedText>
		// 			When you're ready, run <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current <ThemedText type="defaultSemiBold">app</ThemedText> to <ThemedText type="defaultSemiBold">app-example</ThemedText>.
		// 		</ThemedText>
		// 	</ThemedView>
		// </ParallaxScrollView>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: `#da9cc1`,
	},
	pageInner: {
		flex: 1,
		position: `relative`,
	},
	pageParagraph: {
		color: `white`,
		fontSize: 20,
		letterSpacing: 2,
	},
	scrollContainer: {
		backgroundColor: `#885768`,
		marginTop: 80,
		paddingTop: 30,
	},
	container: { padding: 20 },
	grid: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
	},
	box: {
		padding: 20,
		backgroundColor: `#b72e89`,
		borderRadius: 20,
		aspectRatio: 1,
		flex: 1,
		marginBottom: 20,
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
})
