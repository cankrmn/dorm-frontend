import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import commonStyles from "../visualComponents/styles";

import { useFonts } from "@expo-google-fonts/inter";

export default function Login() {
	const [email, onChangeEmail] = React.useState("");
	const [password, onChangePassword] = React.useState("");
	const [flag, onChangeFlag] = React.useState(false);
	const [passwordShown, onChangePS] = React.useState(false);

	const animRef1 = React.useRef(new Animated.Value(0)).current;
	const animRef2 = React.useRef(new Animated.Value(0)).current;

	//prettier-ignore
	let [fontsLoaded] = useFonts({ 'Poppins': require("../assets/Fonts/Poppins/Poppins-Medium.ttf") });

	const handleFocus = (ref) => {
		Animated.timing(ref, {
			useNativeDriver: false,
			toValue: 1,
			duration: 150,
		}).start();
	};

	const handleBlur = (ref) => {
		Animated.timing(ref, {
			useNativeDriver: false,
			toValue: 0,
			duration: 150,
		}).start();
	};

	const handleLogin = () => {
		if (email == "a") {
			onChangeFlag(true);
			// onChangePassword("")
		} else {
			onChangeFlag(false);
		}
	};

	return (
		<View style={commonStyles.Container}>
			<View style={commonStyles.Header}>
				<TouchableOpacity style={{ left: 35 }}>
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>
			</View>
			<View style={[commonStyles.innerContainer, { marginTop: 60 }]}>
				<View
					style={[
						commonStyles.inputContainer,
						flag ? commonStyles.InvalidInput : commonStyles.ValidInput,
					]}
				>
					<Animated.Text
						style={[
							styles.placeHolder,
							{
								transform: [
									{
										translateY: animRef1.interpolate({ inputRange: [0, 1], outputRange: [0, -20] }),
									},
								],
								fontSize: animRef1.interpolate({ inputRange: [0, 1], outputRange: [14, 11] }),
							},
						]}
					>
						Üniversite Mail Adresin
					</Animated.Text>
					<TextInput
						style={commonStyles.input}
						onChangeText={onChangeEmail}
						value={email}
						keyboardType="email-address"
						// placeholder={"Üniversite Mail Adresin"}
						onFocus={() => {
							handleFocus(animRef1);
						}}
						onBlur={() => {
							if (email == "") handleBlur(animRef1);
						}}
					/>
				</View>
				<View
					style={[
						commonStyles.inputContainer,
						{ marginTop: 20, justifyContent: "center" },
						flag ? commonStyles.InvalidInput : commonStyles.ValidInput,
					]}
				>
					<Animated.Text
						style={[
							styles.placeHolder,
							{
								transform: [
									{
										translateY: animRef2.interpolate({ inputRange: [0, 1], outputRange: [0, -20] }),
									},
								],
								fontSize: animRef2.interpolate({ inputRange: [0, 1], outputRange: [14, 11] }),
							},
						]}
					>
						Şifren
					</Animated.Text>
					<TextInput
						style={[commonStyles.input]}
						onChangeText={onChangePassword}
						value={password}
						secureTextEntry={!passwordShown}
						// placeholder={"Şifren"}
						onFocus={() => {
							handleFocus(animRef2);
						}}
						onBlur={() => {
							if (password == "") handleBlur(animRef2);
						}}
					/>
					<TouchableOpacity
						style={{ alignSelf: "flex-end", position: "absolute", right: 15 }}
						onPress={() => {
							onChangePS(!passwordShown);
						}}
					>
						{passwordShown ? (
							<Ionicons name="eye" size={27} color="#B6B6B6" />
						) : (
							<Ionicons name="eye-off" size={27} color="#B6B6B6" />
						)}
					</TouchableOpacity>
				</View>
				{flag && (
					<View style={{ marginTop: 8, left: 2, position: "relative" }}>
						<Text style={{ color: "#FF4646", fontSize: 14, letterSpacing: 0.3 }}>
							Bir yanlışlık olmalı. Lütfen tekrar dene.
						</Text>
					</View>
				)}

				<TouchableOpacity style={{ position: "relative", left: 2, marginTop: 12 }}>
					<Text style={{ color: "#6B46D2", letterSpacing: 0.3, fontSize: 15, fontWeight: "600" }}>
						Şifreni mi Unuttun?
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[commonStyles.button, { position: "absolute", marginTop: 210 }]}
					disabled={email == "" || password == ""}
					onPress={handleLogin}
				>
					{!(email == "" || password == "") ? (
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
							<Text style={commonStyles.buttonText}>Giriş Yap</Text>
						</LinearGradient>
					) : (
						<Text style={commonStyles.buttonText}>Giriş Yap</Text>
					)}
				</TouchableOpacity>

				<View
					style={{
						position: "absolute",
						alignSelf: "center",
						marginTop: 290,
						flexDirection: "row",
					}}
				>
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
	placeHolder: {
		position: "absolute",
		alignSelf: "flex-start",
		color: "#B6B6B6",
		marginLeft: 15,
		fontSize: 14,
	},
});
