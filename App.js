import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/Verification";
import Temp from "./Pages/tempPage";

export default function App() {
	return (
		<View>
			<Verification />
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		height: "100%",
		width: "100%",
		flex: 1,
		backgroundColor: "#ECECEC",
		alignItems: "center",
	},
});
