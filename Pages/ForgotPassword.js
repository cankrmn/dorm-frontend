import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import {MaskedView} from "@react-native-masked-view/masked-view";

export default function ForgotPassword() {
	const [email, onChangeEmail] = React.useState("");
	const [flag, onChangeFlag] = React.useState(false);

	const HandleButton = () => {
		if(email == 'a') {
			onChangeFlag(true);
		}
		else {
			onChangeFlag(false);
		}
	}

	return (
		<View style={styles.Container}>
			<TouchableOpacity
				style={{ position: "absolute", top: 60, left: 35, alignSelf: "flex-start" }}
			>
				<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
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
						Olur öyle
					</Text>
				}
			>
				<LinearGradient
					colors={["#4136F1", "#8743FF"]}
					end={{ x: 0.5, y: 0.5 }}
					locations={[0, 1]}
					style={{ height: 42, width: 130 }}
				/>
			</MaskedView>

			<View style={{ top: 115, left: 40 }}>
				<Text style={styles.text}>Hangimiz şifremizi unutmadık ki!</Text>
				<Text style={styles.text}>
					Hiç sorun değil, sana mail atacağımız{"\n"}doğrulamaya tıklaman yeterli.
				</Text>
			</View>
			<View style={[styles.inputContainer, flag? styles.InvalidInput : styles.ValidInput]}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeEmail}
					value={email}
					keyboardType="email-address"
					placeholder={"Üniversite Mail Adresin"}
					//onFocus={handleFocus}
				/>
			</View>
			{flag && 
				<View style={{top: 175, left: 50}}>
					<Text style={{color: "#FF4646", fontSize: 14, letterSpacing: 0.3}}>Bu mail adresi geçersiz.</Text>
				</View>

			}
			<TouchableOpacity style={[styles.button, flag? {top: 210}:{top: 190}]} onPress={HandleButton}>
			{!(email == "") ?
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
						<Text style={styles.buttonText}>Doğrulama Gönder</Text>
					</LinearGradient> 
					:
					<Text style={styles.buttonText}>Doğrulama Gönder</Text>
				}
			</TouchableOpacity>

			<View style={[{ alignSelf: "center", flexDirection: "row"}, flag? {top:230} : {top:210}]}>
				<Text style={{ color: "#4A4A4A", letterSpacing: 0.3, fontSize: 15 }}>
					Mailine ulaşamıyor musun?
				</Text>
				<TouchableOpacity style={{ left: 5 }}>
					<Text style={{ color: "#6B46D2", fontWeight: "bold", letterSpacing: 0.3, fontSize: 15 }}>
						Bize Ulaş
					</Text>
				</TouchableOpacity>
			</View>
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
		position: "relative",
		width: 327,
		height: 56,
		borderRadius: 8,
		top: 170,
		alignSelf: "center",
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
	text: {
		color: "#525A64",
		fontSize: 18,
		alignContent: "flex-start",
		letterSpacing: 0.3,
	},
});
