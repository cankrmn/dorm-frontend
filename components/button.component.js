import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

import { Gradient, GradientText } from "../visualComponents/colors";

const { width, height } = Dimensions.get("window");

const BUTTON_TYPES = {
	gradient: "gradient",
	inverted: "inverted",
	transparent: "transparent",
	white: "white",
	white_selected: "white_selected",
};

const CustomButton = ({
	text = "",
	buttonType = "gradient",
	onPress = () => {},
	positioning = { marginTop: 10, marginBottom: 0 },
	style = {},
}) => {
	const type = BUTTON_TYPES[buttonType];

	const pressHandler = () => {
		onPress();
	};

	if (type == BUTTON_TYPES.gradient || type == BUTTON_TYPES.white_selected) {
		return (
			<View style={positioning}>
				<Gradient style={[styles.base, { borderRadius: 8 }, style]}>
					<TouchableOpacity style={[styles.base, styles[`${type}`], style]} onPress={pressHandler}>
						{type == BUTTON_TYPES.gradient ? (
							<Text style={[styles.base_text, styles[`${type}_text`]]}>{text}</Text>
						) : (
							<GradientText style={{ fontFamily: "PoppinsSemiBold" }} text={text} />
						)}
					</TouchableOpacity>
				</Gradient>
			</View>
		);
	}

	return (
		<View style={positioning}>
			<TouchableOpacity style={[styles.base, styles[`${type}`], style]} onPress={pressHandler}>
				{type == BUTTON_TYPES.inverted ? (
					<GradientText style={{ fontFamily: "PoppinsSemiBold" }} text={text} />
				) : (
					<Text style={[styles.base_text, styles[`${type}_text`]]}>{text}</Text>
				)}
			</TouchableOpacity>
		</View>
	);
};

export default CustomButton;

const styles = StyleSheet.create({
	base: {
		width: "80%",
		aspectRatio: 4.5 / 1,
		alignSelf: "center",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,

		shadowColor: "rgba(0, 0, 0, 0.3)",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,

		elevation: 10,
	},
	base_text: {
		fontSize: Math.min(24, Math.max(width * 0.03, height * 0.03)),
		fontFamily: "PoppinsSemiBold",
		color: "black",
	},

	gradient: {
		shadowColor: "transparent",
		backgroundColor: "transparent",
	},
	gradient_text: {
		color: "white",
	},

	inverted: {
		// shadowColor: "transparent",
	},
	inverted_text: {},

	transparent: {
		backgroundColor: "transparent",
		shadowColor: "transparent",
		borderWidth: 1.25,
		borderColor: "#828282",
	},
	transparent_text: {
		color: "#828282",
	},

	white: {
		backgroundColor: "white",
		shadowColor: "rgba(0, 0, 0, 0.24)",
	},
	white_text: {
		color: "#B6B6B6",
	},

	white_selected: {
		borderWidth: 2,
		borderColor: "transparent",
	},
	white_selected_text: {},
});

{
	/* <TouchableOpacity
	onPress={() => {
		console.log("Button Pressed...");
		// navigation.replace("MainScreen", {
		// 	screen: "AnaSayfa",
		// 	params: { screen: "Home" },
		// });
	}}
	style={[commonStyles.button, { width: "100%", overflow: "hidden", marginTop: 20 }]}
>
	<Gradient
		style={{
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			height: "100%",
		}}
	>
		<Text
			style={{
				color: colors.white,
				fontSize: 20,
				fontFamily: "PoppinsSemiBold",
				letterSpacing: 1,
			}}
		>
			Ana Sayfaya Dön
		</Text>
	</Gradient>
</TouchableOpacity> */
}
