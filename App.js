import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import Verification from "./Pages/Verification";

export default function App() {
	return (
		<View>
			<StatusBar style={"auto"} />
			<ForgotPassword />
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
