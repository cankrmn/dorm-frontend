import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Verification() {
	let email = "tcan@sabanciuniv.edu";	
	const password = React.useRef([-1, -1, -1, -1]);

	const [flag, onChangeFlag] = React.useState(false);
	const [isAllEntered, onChangeInput] = React.useState(false);

	const input0 = React.createRef();
	const input1 = React.createRef();
	const input2 = React.createRef();
	const input3 = React.createRef();


	const handleButton = () => {
		input0.current.clear();
		input1.current.clear();
		input2.current.clear();
		input3.current.clear();

		input0.current.focus();

		console.log(password.current)

		if(password.current[0] == 0) {
			onChangeFlag(true)
		}
		else {
			onChangeFlag(false)
		}

		password.current = [-1, -1, -1, -1];
	}

	const checkIfDone = () => {
		if(!(password.current.includes(-1) || password.current.includes(""))) {
			onChangeInput(true)
		}
		else {
			onChangeInput(false)
		}
	}

	return (
		<View style={styles.Container}>
			<TouchableOpacity
				style={{ position: "absolute", top: 60, left: 35, alignSelf: "flex-start" }}
			>
				<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
			</TouchableOpacity>
			<TouchableOpacity style={{ position: "absolute", top: 62, right: 35, alignSelf: "flex-end" }}>
				<Text style={{ fontSize: 20, color: "#B6B6B6" }}>Atla</Text>
			</TouchableOpacity>

			<MaskedView
				style={{ top: 110, left: 36, height: 42 }}
				maskElement={
					<Text
						style={{
							alignSelf: "flex-start",
							fontWeight: "bold",
							fontSize: 36,
						}}
					>
						Doğrulama Kodun
					</Text>
				}
			>
				<LinearGradient
					colors={["#4136F1", "#8743FF"]}
					end={{ x: 0.5, y: 0.5 }}
					locations={[0, 1]}
					style={{ height: 42, width: 261 }}
				/>
			</MaskedView>

			<View style={{ top: 115, left: 40 }}>
				<Text style={[styles.text, { fontWeight: "bold" }]}>{email}</Text>
				<Text style={styles.text}>
					mail adresine gönderdiğimiz doğrulama{"\n"}kodunu bizimle paylaş
				</Text>
			</View>

			<View style={{ flexDirection: "row" }}>
				<View style={[styles.inputContainer, flag? styles.InvalidInput : styles.ValidInput, { marginLeft: 25 }]}>
					<TextInput
						ref={input0}
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
						selectTextOnFocus={true}
						selectionColor={"rgb(146, 99, 230)"}
						onChangeText={(text => {password.current[0] = text; checkIfDone(); if(text !='') input1.current.focus();})}

						autoFocus={true}
					/>
				</View>
				<View style={[styles.inputContainer, flag? styles.InvalidInput : styles.ValidInput]}>
					<TextInput
						ref={input1}
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
						selectTextOnFocus={true}
						selectionColor={"rgb(146, 99, 230)"}
						onChangeText={(text => {password.current[1] = text; checkIfDone(); if(text !='') input2.current.focus(); else input0.current.focus()})}
					/>
				</View>
				<View style={[styles.inputContainer, flag? styles.InvalidInput : styles.ValidInput]}>
					<TextInput
						ref={input2}
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
						selectTextOnFocus={true}
						selectionColor={"rgb(146, 99, 230)"}
						onChangeText={(text => {password.current[2] = text; checkIfDone(); if(text !='') input3.current.focus(); else input1.current.focus()})}
					/>
				</View>
				<View style={[styles.inputContainer, flag? styles.InvalidInput : styles.ValidInput, { marginRight: 25 }]}>
					<TextInput
						ref={input3}
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
						selectTextOnFocus={true}
						selectionColor={"rgb(146, 99, 230)"}
						onChangeText={(text => {password.current[3] = text; checkIfDone(); if(text !='') input3.current.blur(); else input2.current.focus()})}
					/>
				</View>
			</View>

			{flag && 
				<View style={{top: 160, left: 35}}>
					<Text style={{color: "#FF4646", fontSize: 14, letterSpacing: 0.3}}>Bu mail adresi geçersiz.</Text>
				</View>

			}

			<TouchableOpacity style={styles.button} disabled={!isAllEntered} onPress={handleButton}>
				{isAllEntered? 
				<LinearGradient
				colors={["#4136F1", "#8743FF"]}
				end={{ x: 0.5, y: 0.5 }}
				locations={[0, 1]}
				style={{
					height: "100%",
					width: "100%",
						borderRadius: 8,
						justifyContent: "center",
						alignItems: "center",
					}}
					>
					<Text style={styles.buttonText}>Doğrula</Text>
				</LinearGradient>
				:
				<Text style={styles.buttonText}>Doğrula</Text>
				}
			</TouchableOpacity>
			<TouchableOpacity style={{ top: 220, alignSelf: "center" }}>
				<Text style={{ color: "#6B46D2", letterSpacing: 0.3, fontSize: 16, fontWeight: "bold" }}>
					Tekrar Gönder
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	Container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#ECECEC",
	},
	inputContainer: {
		flex: 1,
		marginHorizontal: 10,
		width: 80,
		height: 70,
		backgroundColor: "#F8F8F8",
		borderRadius: 8,
		top: 150,
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
		fontSize: 60,
	},

	button: {
		backgroundColor: "#B6B6B6",
		position: "relative",
		width: 327,
		height: 56,
		top: 200,
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
	text: {
		color: "#525A64",
		fontSize: 18,
		alignContent: "flex-start",
		letterSpacing: 0.3,
	},
});
