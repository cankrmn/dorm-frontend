import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState} from "react";
import {StyleSheet, Text, View, Button, Switch, Dimensions, TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import commonStyles from "../../visualComponents/styles"
import { colors, Gradient } from "../../visualComponents/colors"
import MaskedView from "@react-native-masked-view/masked-view";
import styles from '../../visualComponents/styles';

const { width, height } = Dimensions.get("window");

const Beklenti = props => {
    const goToPrevPage = () => {
        props.navigation.navigate("Gender");
      };
    const goToNextPage = () => {
        props.navigation.navigate("EsCinsi");
    };

	const [beklenti, setBeklenti] = React.useState([0, 0, 0, 0, 0, 0]);
   
    return(
        <View style = { commonStyles.Container }>
            <StatusBar style={"dark"} />
			<View style = {commonStyles.Header}>
                <TouchableOpacity style={{ left: 35 }} onPress = {goToPrevPage}>
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>                
                <TouchableOpacity style={{ right: 35}} onPress = {goToNextPage}>
					<Text style={{ fontSize: 22, color: "#B6B6B6" }}>Atla</Text>
				</TouchableOpacity>
            </View>
            <View style = {commonStyles.innerContainer}>
                <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ alignContent: "flex-start", fontWeight: "bold", fontSize: 24 }}>Dorm'dan Beklentim</Text>}>
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
								fontSize: 24,
							}}
						>
							Dorm'dan Beklentim
						</Text>
					</LinearGradient>
                </MaskedView>
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:70}]}
					onPress={() => { setBeklenti([1, 0, 0, 0, 0, 0]); }}
				>
					{beklenti[0] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Takılmak</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Takılmak</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Takılmak
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", margin: 140}]}
					onPress={() => { setBeklenti([0, 1, 0, 0, 0, 0]); }}
				>
					{beklenti[1] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Kısa Süreli İlişki</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Kısa Süreli İlişki</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Kısa Süreli İlişki
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:210}]}
					onPress={() => { setBeklenti([0, 0, 1, 0, 0, 0]); }}
				>
					{beklenti[2] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Uzun Süreli İlişki</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Uzun Süreli İlişki</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Uzun Süreli İlişki
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:280 }]}
					onPress={() => { setBeklenti([0, 0, 0, 1, 0, 0]); }}
				>
					{beklenti[3] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Yeni Arkadaşlıklar</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Yeni Arkadaşlıklar</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Yeni Arkadaşlıklar
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:350 }]}
					onPress={() => { setBeklenti([0, 0, 0, 0, 1, 0]); }}
				>
					{beklenti[4] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Etkinliklere eşlik edecek biri</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Etkinliklere eşlik edecek biri</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Etkinliklere eşlik edecek biri
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:420 }]}
					onPress={() => { setBeklenti([0, 0, 0, 0, 0, 1]); }}
				>
					{beklenti[5] == 1 ? (
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
							<Text style={commonStyles.buttonText}>Ne istediğimi bilmiyorum</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Ne istediğimi bilmiyorum</Text>}>
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
						        		fontSize: 18,
						        	}}
						        >
						        	Ne istediğimi bilmiyorum
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                
            </View>
        </View>
    );
}

export default Beklenti;