import React from "react";
import { StyleSheet } from "react-native";
import { API } from "aws-amplify";
import Amplify from "aws-amplify";
import awsmobile from "./src/aws-exports";
Amplify.configure(awsmobile);

import Stack from "./Navigators/StackNavigator";
//PAGES end
import Temp from "./Pages/Temp";
import Match from "./Pages/User/Match";

export default function App() {
	// return <Stack />;
	return <Match />;
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
