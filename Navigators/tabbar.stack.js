import { View, Dimensions, Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TabbarButton from "../components/tabbar-button/tabbar-buton.component";

import Profile from "../Pages/User/Profile";
import Messages from "../Pages/User/messages/messages.route";
import HomeStackScreen from "./home-screen.stack";

import { colors } from "../visualComponents/colors";

const profileIcon = require("../assets/TabBarIcons/profile.png");
const homeIcon = require("../assets/TabBarIcons/logoGradient.png");
const messagesIcon = require("../assets/TabBarIcons/messages.png");

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

function Tabbar({ route, navigation }) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={{
				flex: 1,
				paddingTop: insets.top,
				backgroundColor: colors.white,
			}}
		>
			<Tab.Navigator
				backBehavior="initialRoute"
				screenOptions={{
					tabBarStyle: {
						height: height * 0.08 + insets.bottom,
						paddingBottom: height * 0.008 + insets.bottom,
					},
					headerShown: false,
					tabBarShowLabel: false,
					tabBarHideOnKeyboard: true,
				}}
				detachInactiveScreens={true}
				initialRouteName={"AnaSayfa"}
			>
				<Tab.Screen
					name="Profil"
					component={Profile}
					// initialParams={{ photoList: pList }}
					options={{
						tabBarButton: (props) => (
							<Pressable
								{...props}
								style={[props.style, { zIndex: 1 }]}
								onPress={() => {
									navigation.navigate("MainScreen", {
										screen: "Profil",
									});
								}}
							/>
						),
						tabBarIcon: ({ focused }) => (
							<TabbarButton focused={focused} label="Profil" icon={profileIcon} />
						),
					}}
				/>
				<Tab.Screen
					name="AnaSayfa"
					component={HomeStackScreen}
					options={{
						tabBarButton: (props) => (
							<Pressable
								{...props}
								onPress={() => {
									if (
										props?.accessibilityState?.selected &&
										props?.children?.props?.children[0].props?.route.state
									) {
										navigation.navigate("MainScreen", {
											screen: "AnaSayfa",
										});
									} else if (!props?.accessibilityState?.selected) {
										// const jumpToAction = TabActions.jumpTo("AnaSayfa", {
										// 	screen: "Home",
										// });
										// navigation.dispatch(jumpToAction);
										navigation.navigate("MainScreen", {
											screen: "AnaSayfa",
										});
									}
								}}
							/>
						),
						tabBarIcon: ({ focused }) => (
							<TabbarButton focused={focused} label="Ana Sayfa" icon={homeIcon} />
						),
					}}
				/>
				<Tab.Screen
					name="Mesajlar"
					component={Messages}
					options={{
						tabBarIcon: ({ focused }) => (
							<TabbarButton focused={focused} label="Mesajlar" icon={messagesIcon} />
						),
					}}
				/>
			</Tab.Navigator>
		</View>
	);
}

export default Tabbar;

const styles = StyleSheet.create({
	container: {},
});
