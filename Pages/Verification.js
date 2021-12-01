import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Verification() {
	let email = "tcan@sabanciuniv.edu";
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
				<View style={[styles.inputContainer, { marginLeft: 25 }]}>
					<TextInput
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
					/>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
					/>
				</View>
				<View style={[styles.inputContainer, { marginRight: 25 }]}>
					<TextInput
						style={styles.input}
						maxLength={1}
						keyboardType={"numeric"}
						textAlign={"center"}
					/>
				</View>
			</View>

			<TouchableOpacity style={styles.button}>
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
			</TouchableOpacity>
			<TouchableOpacity style={{ top: 275, alignSelf: "center" }}>
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
	input: {
		fontSize: 60,
	},

	button: {
		position: "absolute",
		width: 327,
		height: 56,
		top: 370,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 8,
		shadowColor: "rgba(58, 41, 106, 0.2)",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
		alignSelf: "center",
	},
	buttonText: {
		position: "absolute",
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
