import React from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import commonStyles from "../visualComponents/styles";
import { colors, Gradient, GradientText } from "../visualComponents/colors";
import { CustomModal, Switch } from "../visualComponents/customComponents";
import { url } from "../connection";

import { AuthContext } from "../nonVisualComponents/Context";

const { width, height } = Dimensions.get("window");

const SignOutModal = ({ visible, dismiss, signOut }) => {
	return (
		<CustomModal visible={visible} dismiss={dismiss}>
			<View
				style={{
					width: width * 0.75,
					maxHeight: height * 0.6,
					backgroundColor: colors.white,
					borderRadius: 10,
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: width * 0.025,
				}}
			>
				<Image
					source={require("../assets/sadFace.png")}
					style={{ height: "20%", aspectRatio: 1 }}
					resizeMode={"contain"}
				/>
				<Text style={{ color: colors.dark_gray, fontSize: 24, fontWeight: "bold" }}>
					Oturumumu Kapat
				</Text>
				<Text
					style={{
						marginTop: "5%",
						paddingHorizontal: "5%",
						color: colors.dark_gray,
						fontSize: 16,
						fontWeight: "400",
						textAlign: "center",
					}}
				>
					Oturumu kapatmak istediğine emin misin? Profilin kullanıcılara gözükmeye devam edecek.
				</Text>

				<TouchableOpacity
					onPress={dismiss}
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 20,
					}}
				>
					<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>Vazgeçtim</Text>
					</Gradient>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={signOut}
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 10,
						alignItems: "center",
						justifyContent: "center",
						borderWidth: 2,
						borderColor: "#B6B6B6",
					}}
				>
					<Text style={{ fontSize: 20, color: "#B6B6B6", fontWeight: "bold" }}>
						Oturumumu Kapat
					</Text>
				</TouchableOpacity>
			</View>
		</CustomModal>
	);
};

const FreezeAccountModal = ({ visible, dismiss }) => {
	return (
		<CustomModal visible={visible} dismiss={dismiss}>
			<View
				style={{
					width: width * 0.75,
					maxHeight: height * 0.6,
					backgroundColor: colors.white,
					borderRadius: 10,
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: width * 0.025,
				}}
			>
				<TouchableOpacity
					onPress={dismiss}
					style={{
						position: "absolute",
						paddingTop: 10,
						paddingRight: 16,
						top: 0,
						right: 0,
					}}
				>
					<Text style={{ fontSize: 22, color: colors.medium_gray }}>İptal</Text>
				</TouchableOpacity>
				<Image
					source={require("../assets/sadFace.png")}
					style={{ height: "20%", aspectRatio: 1 }}
					resizeMode={"contain"}
				/>
				<Text style={{ color: colors.dark_gray, fontSize: 24, fontWeight: "bold" }}>
					Hesabımı Dondur
				</Text>
				<Text
					style={{
						marginTop: "5%",
						paddingHorizontal: "5%",
						color: colors.dark_gray,
						fontSize: 16,
						fontWeight: "400",
						textAlign: "center",
					}}
				>
					Profil bilgilerin silinmeden hesabın dondurulacak. Bu sürede profilin diğer kullanıcılara
					gözükmeyecek. Geri gelmek istediğinde uygulamaya tekrar giriş yapman yeterli.
				</Text>

				<TouchableOpacity
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 20,
					}}
				>
					<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
							Hesabımı Dondur
						</Text>
					</Gradient>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {}}
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 10,
						alignItems: "center",
						justifyContent: "center",
						borderWidth: 2,
						borderColor: "#B6B6B6",
					}}
				>
					<Text style={{ fontSize: 20, color: "#B6B6B6", fontWeight: "bold" }}>Görünmez Ol</Text>
				</TouchableOpacity>
			</View>
		</CustomModal>
	);
};

const DeleteAccountModal = ({ visible, dismiss }) => {
	return (
		<CustomModal visible={visible} dismiss={dismiss}>
			<View
				style={{
					width: width * 0.75,
					maxHeight: height * 0.6,
					backgroundColor: colors.white,
					borderRadius: 10,
					alignItems: "center",
					justifyContent: "center",
					paddingHorizontal: width * 0.025,
				}}
			>
				<TouchableOpacity
					onPress={dismiss}
					style={{
						position: "absolute",
						paddingTop: 10,
						paddingRight: 16,
						top: 0,
						right: 0,
					}}
				>
					<Text style={{ fontSize: 22, color: colors.medium_gray }}>İptal</Text>
				</TouchableOpacity>
				<Image
					source={require("../assets/sadFace.png")}
					style={{ height: "20%", aspectRatio: 1 }}
					resizeMode={"contain"}
				/>
				<Text style={{ color: colors.dark_gray, fontSize: 24, fontWeight: "bold" }}>
					Hesabımı Sil
				</Text>
				<Text
					style={{
						marginTop: "5%",
						paddingHorizontal: "10%",
						color: colors.dark_gray,
						fontSize: 16,
						fontWeight: "400",
						textAlign: "center",
					}}
				>
					Gittiğini gördüğümüze üzüldük!{"\n"}Onun yerine hesabını dondurmak ister misin?
				</Text>

				<TouchableOpacity
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 20,
					}}
				>
					<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
						<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
							Hesabımı Dondur
						</Text>
					</Gradient>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => {}}
					style={{
						maxWidth: "90%",
						height: "15%",
						maxHeight: 60,
						aspectRatio: 9 / 2,
						borderRadius: 12,
						overflow: "hidden",
						marginTop: 10,
						alignItems: "center",
						justifyContent: "center",
						borderWidth: 2,
						borderColor: "#B6B6B6",
					}}
				>
					<Text style={{ fontSize: 20, color: "#B6B6B6", fontWeight: "bold" }}>Hesabımı Sil</Text>
				</TouchableOpacity>
			</View>
		</CustomModal>
	);
};

export default function Settings({ navigation, route }) {
	const {
		invisibility: invis,
		campusGhost: ghost,
		schoolLover: onlyCampus,
		userID,
	} = route.params || { invisibility: true, campusGhost: true, schoolLover: true };

	const { signOut } = React.useContext(AuthContext);

	// SWITCHES
	const [invisibility, setInvisibility] = React.useState(invis);
	const [campusGhost, setCampusGhost] = React.useState(ghost);
	const [schoolLover, setSchoolLover] = React.useState(onlyCampus);
	const [email, setEmail] = React.useState(false);
	const [pushNotifications, setPushNotifications] = React.useState(false);
	////////////

	// MODALS
	const [superdormerModal, setSuperdormerModal] = React.useState(false);
	const [signoutModal, setSignoutModal] = React.useState(false);
	const [freezeAccountModal, setFreezeAccountModal] = React.useState(false);
	const [deleteAccountModal, setDeleteAccountModal] = React.useState(false);
	////////////

	// const oneMonthPrice = 29;
	// const threeMonthPrice = 24.6;
	// const sixMonthPrice = 17.4;

	const handleInvisibility = (value) => {
		setInvisibility(value);

		axios
			.post(url + "/ChangeVisibility", { invisible: value ? "1" : "0", UserId: userID }) // There is a typo (not Change but Chage) TODO: make userID variable
			.then(async (res) => {
				let userStr = await SecureStore.getItemAsync("userData");
				const user = JSON.parse(userStr);
				const newUser = { ...user, Invisible: value ? "1" : "0" };
				userStr = JSON.stringify(newUser);
				SecureStore.setItemAsync("userData", userStr);
			})
			.catch((error) => {
				console.log("Visibility Error: ", error);
			});
	};

	const handleCampusGhost = (value) => {
		setCampusGhost(value);
		axios
			.post(url + "/BlockCampus", { BlockCampus: value ? "1" : "0", UserId: userID }) // There is a typo (not Change but Chage) TODO: make userID variable
			.then(async (res) => {
				let userStr = await SecureStore.getItemAsync("userData");
				const user = JSON.parse(userStr);
				const newUser = { ...user, BlockCampus: value ? "1" : "0" };
				userStr = JSON.stringify(newUser);
				SecureStore.setItemAsync("userData", userStr);
			})
			.catch((error) => {
				console.log("Ghost Error: ", error);
			});
	};

	const handleSchoolLover = (value) => {
		setSchoolLover(value);
		axios
			.post(url + "/OnlyCampus", { OnlyCampus: value ? "1" : "0", UserId: userID }) // There is a typo (not Change but Chage) TODO: make userID variable
			.then(async (res) => {
				let userStr = await SecureStore.getItemAsync("userData");
				const user = JSON.parse(userStr);
				const newUser = { ...user, OnlyCampus: value ? "1" : "0" };
				userStr = JSON.stringify(newUser);
				SecureStore.setItemAsync("userData", userStr);
			})
			.catch((error) => {
				console.log("Only Campus Error: ", error);
			});
	};
	const handleEmail = (value) => {
		setEmail(value);
	};
	const handlePushNotifications = (value) => {
		setPushNotifications(value);
	};

	return (
		<View style={[commonStyles.Container]}>
			<View name={"Header"} style={styles.header}>
				<TouchableOpacity
					name={"backButton"}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Feather name="chevron-left" size={36} color="#4A4A4A" />
				</TouchableOpacity>
				<GradientText
					text={"Ayarlar"}
					style={{ fontSize: 36, fontWeight: "bold", paddingLeft: 0 }}
				/>
			</View>
			<ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
				{/* <TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => {
						setSuperdormerModal(true);
					}}
				>
					<Text style={styles.buttonText}>Superdormer Ol</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Kıvılcım Hakkı Al</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>
				<View style={{ width: "100%", height: 1, backgroundColor: "#DADADA" }} /> */}

				<View style={styles.buttonContainer}>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: "#333333" }}>
						Eşleşme Ayarları
					</Text>
				</View>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Eşleşme Modu</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Filtreleme</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Konum</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<View style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>Görünmezlik</Text>
						<Switch
							value={invisibility}
							onValueChange={(value) => {
								handleInvisibility(value);
							}}
						/>
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						Görünmezken, eşleşme ekranında görünmeyeceksin. Eşleşmelerinle dorm'dan konuşmaya ve
						etkinlik incelemeye devam edebilirsin.
					</Text>
				</View>

				<View style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>Kampüs Hayaleti</Text>
						<Switch
							value={campusGhost}
							onValueChange={(value) => {
								handleCampusGhost(value);
							}}
						/>
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						Bu ayarı açtığında üniversitendeki diğer kullanıcılar seni göremeyecek, sen de onları
						göremeyeceksin.
					</Text>
				</View>

				<View style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>Canım Okulum</Text>
						<Switch
							value={schoolLover}
							onValueChange={(value) => {
								handleSchoolLover(value);
							}}
						/>
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						Bu ayarı açtığında sadece okuduğun üniversitedeki kullanıcıları göreceksin.
					</Text>
				</View>
				<View style={{ width: "100%", height: 1, backgroundColor: "#DADADA" }} />

				<View style={styles.buttonContainer}>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: "#333333" }}>Bildirimler</Text>
				</View>

				<View style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>E-Posta</Text>
						<Switch
							value={email}
							onValueChange={(value) => {
								handleEmail(value);
							}}
						/>
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						Yeni eşleşmeler, mesajlar, super like'lar
					</Text>
				</View>

				<View style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>Anlık Bildirimler</Text>
						<Switch
							value={pushNotifications}
							onValueChange={(value) => {
								handlePushNotifications(value);
							}}
						/>
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						Yeni eşleşmeler, mesajlar, super like'lar, ipuçları, etkinlik anımsatıcısı
					</Text>
				</View>

				<View style={{ width: "100%", height: 1, backgroundColor: "#DADADA" }} />

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Yardım ve Destek</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={{ paddingBottom: 16 }}>
					<View style={[styles.buttonContainer, {}]}>
						<Text style={styles.buttonText}>Bize Ulaş</Text>
						<Feather name="chevron-right" size={20} color="#4A4A4A" />
					</View>
					<Text style={{ paddingHorizontal: 20, color: colors.medium_gray }}>
						İlişki tavsiyesi, yanlış giden bir şeyler ya da sadece selam vermek… İstediğin her şey
						için bize ulaşabilirsin!
					</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Topluluk Kuralları</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Güvenlik İpuçları</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<View style={{ width: "100%", height: 1, backgroundColor: "#DADADA" }} />

				<View style={styles.buttonContainer}>
					<Text style={{ fontSize: 20, fontWeight: "bold", color: "#333333" }}>Yasal</Text>
				</View>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Gizlilik Tercihleri</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Gizlilik Politikası</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Şartlar ve Koşullar</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>Lisanslar</Text>
					<Feather name="chevron-right" size={20} color="#4A4A4A" />
				</TouchableOpacity>

				<View style={{ width: "100%", height: 1, backgroundColor: "#DADADA" }} />

				<TouchableOpacity style={styles.buttonContainer} onPress={() => setSignoutModal(true)}>
					<Text style={[styles.buttonText, { color: colors.red }]}>Oturumu Kapat</Text>
					<Feather name="chevron-right" size={20} color={colors.red} />
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => setFreezeAccountModal(true)}
				>
					<Text style={[styles.buttonText, { color: colors.red }]}>Hesabımı Dondur</Text>
					<Feather name="chevron-right" size={20} color={colors.red} />
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => setDeleteAccountModal(true)}
				>
					<Text style={[styles.buttonText, { color: colors.red }]}>Hesabımı Sil</Text>
					<Feather name="chevron-right" size={20} color={colors.red} />
				</TouchableOpacity>
			</ScrollView>

			<SignOutModal
				visible={signoutModal}
				dismiss={() => setSignoutModal(false)}
				signOut={() => {
					setSignoutModal(false);
					signOut();
				}}
			/>
			<FreezeAccountModal
				visible={freezeAccountModal}
				dismiss={() => setFreezeAccountModal(false)}
			/>
			<DeleteAccountModal
				visible={deleteAccountModal}
				dismiss={() => setDeleteAccountModal(false)}
			/>

			{/* <CustomModal
				visible={superdormerModal}
				dismiss={() => {
					setSuperdormerModal(false);
				}}
			>
				PART: TODO:: make subscription selection part button
				<View
					style={{
						aspectRatio: 1 / 2,
						maxHeight: height * 0.9,
						width: width * 0.9,
						backgroundColor: colors.white,
						borderRadius: 10,
						alignItems: "center",
						paddingVertical: 30,
						paddingHorizontal: 36,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setSuperdormerModal(false);
						}}
						style={{
							position: "absolute",
							alignSelf: "flex-end",
							padding: 16,
						}}
					>
						<Feather name="x" size={32} color={colors.medium_gray} />
					</TouchableOpacity>
					<GradientText text={"Superdormer"} style={{ fontSize: 36, fontWeight: "bold" }} />
					<View
						style={{
							width: "100%",
							marginTop: 20,
						}}
					>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Image
								source={require("../assets/SuperDormerPopup/card.png")}
								style={{ maxWidth: 30, aspectRatio: 1 }}
								resizeMode={"contain"}
							/>
							<View style={{ paddingLeft: 20 }}>
								<Text style={{ color: colors.dark_gray, fontSize: 18, fontWeight: "600" }}>
									Sınırsız Beğenme
								</Text>
								<Text style={{ color: colors.medium_gray, fontSize: 15, fontWeight: "normal" }}>
									İstediğin kadar profili kaydır
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Image
								source={require("../assets/SuperDormerPopup/spark.png")}
								style={{ maxWidth: 30, aspectRatio: 1 / 1 }}
								resizeMode={"contain"}
							/>
							<View style={{ paddingLeft: 20 }}>
								<Text style={{ color: colors.dark_gray, fontSize: 18, fontWeight: "600" }}>
									Günde 5 Kıvılcım
								</Text>
								<Text
									style={{
										color: colors.medium_gray,
										fontSize: 15,
										fontWeight: "normal",
									}}
								>
									Beğendiğin kişilere kendini gösterme{"\n"}şansını kaçırma
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Image
								source={require("../assets/SuperDormerPopup/university.png")}
								style={{ maxWidth: 30, aspectRatio: 1 }}
								resizeMode={"contain"}
							/>
							<View style={{ paddingLeft: 20 }}>
								<Text style={{ color: colors.dark_gray, fontSize: 18, fontWeight: "600" }}>
									Üniversite Filtresi
								</Text>
								<Text style={{ color: colors.medium_gray, fontSize: 15, fontWeight: "normal" }}>
									İstediğin üniversiteden insanlarla eşleş
								</Text>
							</View>
						</View>
					</View>

					<Animated.View
						style={{
							width: "100%",
							marginTop: 30,
							height: 80,
							borderRadius: 12,
							borderWidth: 1,
							borderColor: colors.cool_gray,
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 16,
							justifyContent: "space-between",
						}}
					>
						<View>
							<Text style={{ fontSize: 18, fontWeight: "bold", color: colors.dark_gray }}>
								1 Aylık Üyelik
							</Text>
							<Text style={{ fontSize: 15, fontWeight: "normal", color: colors.medium_gray }}>
								Denemen İçin Başlangıç
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 30, fontWeight: "bold", color: colors.dark_gray }}>
								{Math.floor(oneMonthPrice)}
								<Text style={{ fontSize: 16, fontWeight: "bold", color: colors.dark_gray }}>
									{oneMonthPrice % 1 == 0 ? "" : "." + Math.round((oneMonthPrice * 100) % 100)}
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.dark_gray }}>
									₺
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.medium_gray }}>
									/Aylık
								</Text>
							</Text>
						</View>
					</Animated.View>
					<Animated.View
						style={{
							width: "100%",
							marginTop: 16,
							height: 80,
							borderRadius: 12,
							borderWidth: 1,
							borderColor: colors.cool_gray,
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 16,
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								position: "absolute",
								justifyContent: "center",
								alignItems: "center",
								top: -10,
								right: -10,
							}}
						>
							<Image
								source={require("../assets/SuperDormerPopup/star.png")}
								resizeMode={"contain"}
								style={{ height: 40, aspectRatio: 1 }}
							/>
							<Text
								style={{
									position: "absolute",
									textAlign: "center",
									color: colors.white,
									fontSize: 10,
									transform: [{ rotateZ: "15deg" }],
								}}
							>
								En{"\n"}Polüler
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 18, fontWeight: "bold", color: colors.dark_gray }}>
								3 Aylık Üyelik
							</Text>
							<Text style={{ fontSize: 15, fontWeight: "normal", color: colors.medium_gray }}>
								%15 indirimden yararlanırsın
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 30, fontWeight: "bold", color: colors.dark_gray }}>
								{Math.floor(threeMonthPrice)}
								<Text style={{ fontSize: 16, fontWeight: "bold", color: colors.dark_gray }}>
									{threeMonthPrice % 1 == 0 ? "" : "." + Math.round((threeMonthPrice * 100) % 100)}
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.dark_gray }}>
									₺
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.medium_gray }}>
									/Aylık
								</Text>
							</Text>
						</View>
					</Animated.View>
					<Animated.View
						style={{
							width: "100%",
							marginTop: 16,
							height: 80,
							borderRadius: 12,
							borderWidth: 1,
							borderColor: colors.cool_gray,
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 16,
							justifyContent: "space-between",
						}}
					>
						<View>
							<Text style={{ fontSize: 18, fontWeight: "bold", color: colors.dark_gray }}>
								6 Aylık Üyelik
							</Text>
							<Text style={{ fontSize: 15, fontWeight: "normal", color: colors.medium_gray }}>
								%40 indirimden yararlanırsın
							</Text>
						</View>
						<View>
							<Text style={{ fontSize: 30, fontWeight: "bold", color: colors.dark_gray }}>
								{Math.floor(sixMonthPrice)}
								<Text style={{ fontSize: 16, fontWeight: "bold", color: colors.dark_gray }}>
									{sixMonthPrice % 1 == 0 ? "" : "." + Math.round((sixMonthPrice * 100) % 100)}
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.dark_gray }}>
									₺
								</Text>
								<Text style={{ fontSize: 16, fontWeight: "normal", color: colors.medium_gray }}>
									/Aylık
								</Text>
							</Text>
						</View>
					</Animated.View>

					<TouchableOpacity
						style={{
							width: "80%",
							height: 60,
							borderRadius: 12,
							overflow: "hidden",
							marginTop: 30,
						}}
					>
						<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
							<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
								Superdormer Ol
							</Text>
						</Gradient>
					</TouchableOpacity>
				</View>
			</CustomModal> */}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: colors.white,
		width: "100%",
		height: 100,
		elevation: 20,
		flexDirection: "row",
		alignItems: "flex-end",
		paddingLeft: 10,
		paddingBottom: 10,
	},
	buttonContainer: {
		width: width,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 16,
		paddingHorizontal: 20,
		alignItems: "center",
	},
	buttonText: {
		fontSize: 20,
		color: "#4A4A4A",
		fontWeight: "600",
	},
});
