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

const Gender = props => {
    const goToNextPage = () => {
        props.navigation.navigate("Beklenti");
        //props.navigation.navigate("IlgiAlani");

        
    };

    const [kadinEntered, kadinInput] = useState(false);
    const [erkekEntered, erkekInput] = useState(false);
    const [nonBinaryEntered, nonBinaryInput] = useState(false);
    const [beyanEtmeEntered, beyanEtmeInput] = useState(false);

    const [isEnabled, setIsEnabled] = useState(true);
    
    const toggleKadin = () => {
        kadinEntered ? (kadinInput(previousState => previousState)) : (kadinInput(previousState => !previousState))
        erkekEntered ? (erkekInput(previousState => !previousState)) : (erkekInput(previousState => previousState))
        nonBinaryEntered ? (nonBinaryInput(previousState => !previousState)) : (nonBinaryInput(previousState => previousState))
        beyanEtmeEntered ? (beyanEtmeInput(previousState => !previousState)) : (beyanEtmeInput(previousState => previousState))
    };
    
    const toggleErkek = () => {
        kadinEntered ? (kadinInput(previousState => !previousState)) : (kadinInput(previousState => previousState))
        erkekEntered ? (erkekInput(previousState => previousState)) : (erkekInput(previousState => !previousState))
        nonBinaryEntered ? (nonBinaryInput(previousState => !previousState)) : (nonBinaryInput(previousState => previousState))
        beyanEtmeEntered ? (beyanEtmeInput(previousState => !previousState)) : (beyanEtmeInput(previousState => previousState))
    };

    const toggleNonBinary = () => {
        kadinEntered ? (kadinInput(previousState => !previousState)) : (kadinInput(previousState => previousState))
        erkekEntered ? (erkekInput(previousState => !previousState)) : (erkekInput(previousState => previousState))
        nonBinaryEntered ? (nonBinaryInput(previousState => previousState)) : (nonBinaryInput(previousState => !previousState))
        beyanEtmeEntered ? (beyanEtmeInput(previousState => !previousState)) : (beyanEtmeInput(previousState => previousState))
    };

    const toggleBeyanEtme = () => {
        kadinEntered ? (kadinInput(previousState => !previousState)) : (kadinInput(previousState => previousState))
        erkekEntered ? (erkekInput(previousState => !previousState)) : (erkekInput(previousState => previousState))
        nonBinaryEntered ? (nonBinaryInput(previousState => !previousState)) : (nonBinaryInput(previousState => previousState))
        beyanEtmeEntered ? (beyanEtmeInput(previousState => previousState)) : (beyanEtmeInput(previousState => !previousState))
    };

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   
    return(
        <View style = { commonStyles.Container }>
            <StatusBar style={"dark"} />
			<View style = {commonStyles.Header, {alignSelf: "flex-end"}}>
                <TouchableOpacity style={{ left: 35 }} >
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>                
                <TouchableOpacity style={{ right: 35, top: 34 }} onPress = {goToNextPage}>
					<Text style={{ fontSize: 22, color: "#B6B6B6" }}>Atla</Text>
				</TouchableOpacity>
            </View>
            <View style = {commonStyles.innerContainer}>
                <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 30 }}>Cinsiyetim</Text>}>
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
							Cinsiyetim
						</Text>
					</LinearGradient>
                </MaskedView>
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:80}]}
					onPress={toggleKadin}
				>
					{kadinEntered ? (
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
							<Text style={commonStyles.buttonText}>Kadın</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Kadın</Text>}>
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
						        	Kadın
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", margin: 160}]}
					onPress={toggleErkek}
				>
					{erkekEntered ? (
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
							<Text style={commonStyles.buttonText}>Erkek</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Erkek</Text>}>
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
						        	Erkek
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:240}]}
					onPress={toggleNonBinary}
				>
					{nonBinaryEntered ? (
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
							<Text style={commonStyles.buttonText}>Non-Binary</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Non-Binary</Text>}>
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
						        	Non-Binary
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:320 }]}
					onPress={toggleBeyanEtme}
				>
					{beyanEtmeEntered ? (
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
							<Text style={commonStyles.buttonText}>Beyan Etmemeyi Tercih Ederim</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Beyan Etmemeyi Tercih Ederim</Text>}>
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
						        	Beyan Etmemeyi Tercih Ederim
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                <View style={{flexDirection: "row", paddingHorizontal:0, justifyContent: "space-evenly",marginTop: 380, alignContent: "center" }}>
                    <Text style = {{color: "gray", marginTop: 8}}>Profilinde cinsiyet görünürlüğü  </Text>
                    <Switch
                        
                        ios_backgroundColor="#D0D0D0"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    );
}

export default Gender;