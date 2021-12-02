import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "@expo-google-fonts/inter";

export default function Login() {
	const [email, onChangeEmail] = React.useState("");
	const [password, onChangePassword] = React.useState("");
	const [flag, onChangeFlag] = React.useState(false);
	const [passwordShown, onChangePS] = React.useState(false)

	//prettier-ignore
	let [fontsLoaded] = useFonts({ 'Poppins': require("../assets/Fonts/Poppins/Poppins-Medium.ttf") });

	let handleFocus = () => {
		Animated.timing(this.position, {
			toValue: 1,
			duration: 150,
		}).start();
	};

	const handleLogin = () => {
		if(email == 'a') {
			onChangeFlag(true)
		}
		else {
			onChangeFlag(false)
		}
	}

	return (
		<View style={styles.Container}>
			<TouchableOpacity style={{ top: 60, left: 35, alignSelf: "flex-start" }}>
				<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
			</TouchableOpacity>
			<View style={[styles.inputContainer, { top: 124.5 }, flag? styles.InvalidInput : styles.ValidInput]}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeEmail}
					value={email}
					keyboardType="email-address"
					placeholder={"Üniversite Mail Adresin"}
					//onFocus={handleFocus}
				/>
			</View>
			<View style={[styles.inputContainer, { top: 196.5, alignItems: "center", flexDirection: "row" }, flag? styles.InvalidInput : styles.ValidInput]}>
				<TextInput
					style={[styles.input]}
					onChangeText={onChangePassword}
					value={password}
					secureTextEntry={!passwordShown}
					placeholder={"Şifren"}
				/>
				<TouchableOpacity style={{right: 45}} onPress={() => {onChangePS(!passwordShown)}}>
					{passwordShown? 
						<Ionicons  name="eye" size={37} color="#B6B6B6" />
						:
						<Ionicons  name="eye-off" size={27} color="#B6B6B6" />
					}
				</TouchableOpacity>
			</View>
			{flag &&
			<View style={{top: 262.5, left: 55, position: "absolute"}}>
				<Text style={{color: "#FF4646", fontSize: 14, letterSpacing: 0.3}}>Bir yanlışlık olmalı. Lütfen tekrar dene.</Text>
			</View>}
			
			<TouchableOpacity style={[flag? {top: 295} : {top: 262.5}, {left: 55, position: "absolute" }]}>
				<Text style={{ color: "#6B46D2", letterSpacing: 0.3, fontSize: 15 }}>
					Şifreni mi Unuttun?
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.loginButton} disabled={(email == "" || password == "")} onPress={handleLogin}>
				{!(email == "" || password == "") ?
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
						<Text style={styles.loginButtonText}>Giriş Yap</Text>
					</LinearGradient> 
					:
					<Text style={styles.loginButtonText}>Giriş Yap</Text>
				}
			</TouchableOpacity>

			<View style={{ alignSelf: "center", top: 380, flexDirection: "row" }}>
				<Text style={{ color: "#4A4A4A" }}>Henüz Hesabın Yok mu?</Text>
				<TouchableOpacity style={{ left: 5 }}>
					<Text style={{ color: "#6B46D2", fontWeight: "bold" }}>dorm'a Katıl</Text>
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
		alignItems: "center",
	},
	inputContainer: {
		position: "absolute",
		width: 327,
		height: 56,
		borderRadius: 8,
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

	loginButton: {
		backgroundColor: "#B6B6B6",
		position: "absolute",
		width: 327,
		height: 56,
		top: 335.05,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		shadowColor: "rgba(58, 41, 106, 0.2)",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		alignSelf: "center",
	},
	loginButtonText: {
		position: "absolute",
		color: "#FFFFFF",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 16,
		textAlign: "center",
		letterSpacing: 1,
	},
});
