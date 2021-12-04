import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import commonStyles from "../styles/styles"

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

		if (password.current[0] == 0) {
			onChangeFlag(true)
		}
		else {
			onChangeFlag(false)
		}

		password.current = [-1, -1, -1, -1];
		onChangeInput(false)
	}

	const checkIfDone = () => {
		if (!(password.current.includes(-1) || password.current.includes(""))) {
			onChangeInput(true)
		}
		else {
			onChangeInput(false)
		}
	}

	return (
		<View style={commonStyles.Container}>
			<View style={commonStyles.Header}>
				<TouchableOpacity style={{ left: 35 }}>
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>
				<TouchableOpacity style={{ right: 35, top: 2 }}>
					<Text style={{ fontSize: 22, color: "#B6B6B6" }}>Atla</Text>
				</TouchableOpacity>
			</View>

			<View style={commonStyles.innerContainer}>
				<MaskedView
					style={styles.maskedViewStyle}
					maskElement={
						<Text
							style={{ fontWeight: "bold", fontSize: 30, }}
						>
							Doğrulama Kodun
						</Text>
					}
				>
					<LinearGradient
						colors={["#4136F1", "#8743FF"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						locations={[0, 1]}
					>
						<Text
							style={{
								opacity: 0, fontWeight: "bold", fontSize: 30,
							}}
						>
							Doğrulama Kodun
						</Text>
					</LinearGradient>
				</MaskedView>

				<View style={{ marginTop: 10, }}>
					<Text style={[styles.text, { fontWeight: "bold" }]}>{email}</Text>
					<Text style={styles.text}>
						mail adresine gönderdiğimiz doğrulama{"\n"}kodunu bizimle paylaş
					</Text>
				</View>

				<View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
					<View style={[styles.inputBox, flag ? commonStyles.InvalidInput : commonStyles.ValidInput, {}]}>
						<TextInput
							ref={input0}
							style={styles.input}
							maxLength={1}
							keyboardType={"numeric"}
							textAlign={"center"}
							selectTextOnFocus={true}
							selectionColor={"rgb(146, 99, 230)"}
							onChangeText={(text => { password.current[0] = text; checkIfDone(); if (text != '') input1.current.focus(); })}

							autoFocus={true}
						/>
					</View>
					<View style={[styles.inputBox, flag ? commonStyles.InvalidInput : commonStyles.ValidInput]}>
						<TextInput
							ref={input1}
							style={styles.input}
							maxLength={1}
							keyboardType={"numeric"}
							textAlign={"center"}
							selectTextOnFocus={true}
							selectionColor={"rgb(146, 99, 230)"}
							onChangeText={(text => { password.current[1] = text; checkIfDone(); if (text != '') input2.current.focus(); else input0.current.focus() })}
						/>
					</View>
					<View style={[styles.inputBox, flag ? commonStyles.InvalidInput : commonStyles.ValidInput]}>
						<TextInput
							ref={input2}
							style={styles.input}
							maxLength={1}
							keyboardType={"numeric"}
							textAlign={"center"}
							selectTextOnFocus={true}
							selectionColor={"rgb(146, 99, 230)"}
							onChangeText={(text => { password.current[2] = text; checkIfDone(); if (text != '') input3.current.focus(); else input1.current.focus() })}
						/>
					</View>
					<View style={[styles.inputBox, flag ? commonStyles.InvalidInput : commonStyles.ValidInput]}>
						<TextInput
							ref={input3}
							style={styles.input}
							maxLength={1}
							keyboardType={"numeric"}
							textAlign={"center"}
							selectTextOnFocus={true}
							selectionColor={"rgb(146, 99, 230)"}
							onChangeText={(text => { password.current[3] = text; checkIfDone(); if (text == '') input2.current.focus(); else input3.current.blur() })}
							onChangeText={(text => { password.current[3] = text; checkIfDone(); if (text == '') input2.current.focus();})}
						/>
					</View>
				</View>

				{flag &&
					<View style={{ marginTop: 10 }}>
						<Text style={{ color: "#FF4646", fontSize: 14, letterSpacing: 0.3 }}>Bu mail adresi geçersiz.</Text>
					</View>

				}

				<TouchableOpacity style={[commonStyles.button, { marginTop: 30 }]} disabled={!isAllEntered} onPress={handleButton}>
					{isAllEntered ?
						<LinearGradient
							colors={["#4136F1", "#8743FF"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							locations={[0, 1]}
							style={{
								height: "100%",
								width: "100%",
								borderRadius: 8,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text style={commonStyles.buttonText}>Doğrula</Text>
						</LinearGradient>
						:
						<Text style={commonStyles.buttonText}>Doğrula</Text>
					}
				</TouchableOpacity>
				<TouchableOpacity style={{ marginTop: 16, alignSelf: "center" }}>
					<Text style={{ color: "#6B46D2", letterSpacing: 0.3, fontSize: 16, fontWeight: "bold" }}>
						Tekrar Gönder
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	maskedViewStyle: {
		position: "relative",
		alignItems: "flex-start",
	},
	inputBox: {
		width: 70,
		height: 70,
		backgroundColor: "#F8F8F8",
		borderRadius: 8,
		justifyContent: "center",
	},
	input: {
		width: 70,
		height: 70,
		fontSize: 30,
		borderRadius: 8,
	},
	text: {
		color: "#525A64",
		fontSize: 18,
		alignContent: "flex-start",
		letterSpacing: 0.3,
	},
});
