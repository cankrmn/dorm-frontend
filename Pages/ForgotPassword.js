import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import commonStyles from "../styles/styles"

export default function ForgotPassword() {
	const [email, onChangeEmail] = React.useState("");
	const [flag, onChangeFlag] = React.useState(false);

	const HandleButton = () => {
		if (email == 'a') {
			onChangeFlag(true);
		}
		else {
			onChangeFlag(false);
		}
	}

	return (
		<View style={commonStyles.Container}>
			<View style={commonStyles.Header}>
				<TouchableOpacity style={{ left: 35 }}>
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>
			</View>
			<View style={commonStyles.innerContainer}>
				<MaskedView
					style={styles.maskedViewStyle}
					maskElement={
						<Text
							style={{
								fontWeight: "bold",
								fontSize: 30,
							}}
						>
							Olur öyle
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
								opacity: 0,
								fontWeight: "bold",
								fontSize: 30,
							}}
						>
							Olur öyle
						</Text>
					</LinearGradient>
				</MaskedView>

				<View style={{ position: "relative", marginTop: 10 }}>
					<Text style={styles.text}>Hangimiz şifremizi unutmadık ki!</Text>
					<Text style={styles.text}>
						Hiç sorun değil, sana mail atacağımız{"\n"}doğrulamaya tıklaman yeterli.
					</Text>
				</View>

				<View style={[commonStyles.inputContainer, { marginTop: 30 }, flag ? commonStyles.InvalidInput : commonStyles.ValidInput]}>
					<TextInput
						style={commonStyles.input}
						onChangeText={onChangeEmail}
						value={email}
						keyboardType="email-address"
						placeholder={"Üniversite Mail Adresin"}
					//onFocus={handleFocus}
					/>
				</View>
				{flag &&
					<View style={{ marginTop: 8}}>
						<Text style={{ color: "#FF4646", fontSize: 14, letterSpacing: 0.3 }}>Bu mail adresi geçersiz.</Text>
					</View>

				}
				<TouchableOpacity style={[commonStyles.button, { marginTop: 30 }]} onPress={HandleButton}>
					{!(email == "") ?
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
							<Text style={commonStyles.buttonText}>Doğrulama Gönder</Text>
						</LinearGradient>
						:
						<Text style={commonStyles.buttonText}>Doğrulama Gönder</Text>
					}
				</TouchableOpacity>

				<View style={{ alignSelf: "center", flexDirection: "row", marginTop: 15 }}>
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
		</View>
	);
}

const styles = StyleSheet.create({
	maskedViewStyle: {
		position: "relative",
		alignItems: "flex-start",
	},
	text: {
		color: "#525A64",
		fontSize: 18,
		alignContent: "flex-start",
		letterSpacing: 0.3,
	},
});
