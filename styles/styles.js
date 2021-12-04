import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    Container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#ECECEC",
		alignItems: "center",
	},
	innerContainer: {
		marginTop: 20,
		position: "relative"
	},
    Header: {
		position: "relative",
		width: "100%",
		marginTop: 60,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	inputContainer: {
		position: "relative",
		width: 327,
		height: 56,
		borderRadius: 8,
		alignSelf: "center",
		justifyContent: "center",
	},
	ValidInput: {
		backgroundColor: "#F8F8F8",
	},
	InvalidInput: {
		backgroundColor: "#F9EAEC",
		borderColor: '#FF4646',
		borderWidth: 1.5, 
	},
	input: {
		width: 327,
		height: 56,
		left: 15,
		borderRadius: 8,
	},
    button: {
		backgroundColor: "#B6B6B6",
		position: "relative",
		width: 327,
		height: 56,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		shadowColor: "rgba(58, 41, 106, 0.2)",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		alignSelf: "center",
	},
	buttonText: {
		position: "relative",
		color: "#FFFFFF",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 16,
		textAlign: "center",
		letterSpacing: 1,
	},
});

