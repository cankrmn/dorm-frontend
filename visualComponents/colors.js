import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Animated,
	ProgressViewIOS,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export const colors = {
	white: "#F8F8F8",
	light_gray: "#ECECEC",
	gray: "#B6B6B6",
	cool_gray: "#D0D0D0",
	medium_gray: "#9D9D9D",
	dark_gray: "#4A4A4A",
	black: "#343434",
	soft_red: "#F9EAEC",
	red: "#EB5E6C",
	soft_green: "#BEFFA8",
	green: "#7BFF4D",
};

export const Gradient = (props) => {
	return (
		<LinearGradient
			// colors={props.colors}
			colors={props.colors || ["#4136F1", "#8743FF"]}
			start={props.start || { x: 0, y: 0 }}
			end={props.end || { x: 1, y: 1 }}
			locations={props.locations || [0, 1]}
			style={[{ height: "100%", width: "100%" }, props.style]}
		>
			{props.children}
		</LinearGradient>
	);
};

export const GradientText = (props) => {
	return (
		<MaskedView
			style={{ alignContent: "center" }}
			maskElement={<Text style={props.style}>{props.text}</Text>}
		>
			<Gradient style={{ height: props.style.fontSize * 1.2 }}>
				<Text
					style={[
						{
							opacity: 0,
						},
						props.style,
					]}
				>
					{props.text}
				</Text>
			</Gradient>
		</MaskedView>
	);
};
