import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import commonStyles from "../styles/styles"

import { useFonts } from "@expo-google-fonts/inter";

export default function Login() {
	const [email, onChangeEmail] = React.useState("");
	const [password, onChangePassword] = React.useState("");
	const [flag, onChangeFlag] = React.useState(false);
	const [passwordShown, onChangePS] = React.useState(false)

	const passwordRef = React.createRef();

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
			passwordRef.current.clear()
			onChangePassword("")
		}
		else {
			onChangeFlag(false)
		}
	}

	return (
		<View style={commonStyles.Container}>
			<View style={commonStyles.Header}>
				<TouchableOpacity style={{ left: 35 }}>
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>
			</View>
			<View style={[commonStyles.innerContainer, {marginTop: 60}]}>
				<View style={[commonStyles.inputContainer, flag? commonStyles.InvalidInput : commonStyles.ValidInput]}>
					<TextInput
						style={commonStyles.input}
						onChangeText={onChangeEmail}
						value={email}
						keyboardType="email-address"
						placeholder={"Üniversite Mail Adresin"}
						//onFocus={handleFocus}
					/>
				</View>
				<View style={[commonStyles.inputContainer, { marginTop: 20, alignItems: "center", flexDirection: "row" }, flag? commonStyles.InvalidInput : commonStyles.ValidInput]}>
					<TextInput
						ref={passwordRef}
						style={[commonStyles.input]}
						onChangeText={onChangePassword}
						value={password}
						secureTextEntry={!passwordShown}
						placeholder={"Şifren"}
					/>
					<TouchableOpacity style={{right: 40}} onPress={() => {onChangePS(!passwordShown)}}>
						{passwordShown? 
							<Ionicons  name="eye" size={27} color="#B6B6B6" />
							:
							<Ionicons  name="eye-off" size={27} color="#B6B6B6" />
						}
					</TouchableOpacity>
				</View>
				{flag &&
				<View style={{marginTop: 8, left: 2, position: "relative"}}>
					<Text style={{color: "#FF4646", fontSize: 14, letterSpacing: 0.3}}>Bir yanlışlık olmalı. Lütfen tekrar dene.</Text>
				</View>}
				
				<TouchableOpacity style={{position: "relative", left: 2, marginTop: 12}}>
					<Text style={{ color: "#6B46D2", letterSpacing: 0.3, fontSize: 15, fontWeight: "600" }}>
						Şifreni mi Unuttun?
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[commonStyles.button, {position: "absolute", marginTop: 210}]} disabled={(email == "" || password == "")} onPress={handleLogin}>
					{!(email == "" || password == "") ?
						<LinearGradient
							colors={["#4136F1", "#8743FF"]}
							start={{x: 0, y: 0}}
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
							<Text style={commonStyles.buttonText}>Giriş Yap</Text>
						</LinearGradient> 
						:
						<Text style={commonStyles.buttonText}>Giriş Yap</Text>
					}
				</TouchableOpacity>

				<View style={{ position: "absolute", alignSelf: "center", marginTop: 280, flexDirection: "row" }}>
					<Text style={{ color: "#4A4A4A" }}>Henüz Hesabın Yok mu?</Text>
					<TouchableOpacity style={{ left: 5 }}>
						<Text style={{ color: "#6B46D2", fontWeight: "bold" }}>dorm'a Katıl</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	
});
