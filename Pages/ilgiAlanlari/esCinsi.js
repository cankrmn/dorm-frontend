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



const EsCinsi = props => {
    const goToPrevPage = () => {
        props.navigation.navigate("Beklenti");
      };
    const goToNextPage = () => {
        props.navigation.navigate("CinselYönelim");
    };
    
    
	const [escinsi, setEscinsi] = React.useState([0, 0, 0]);

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
                <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 24 }}>İlgi duyduğum</Text>}>
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
							İlgi duyduğum
						</Text>
					</LinearGradient>
                </MaskedView>
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:80}]}
					onPress={() => { setEscinsi([1, 0, 0]); }}
				>
					{escinsi[0]==1 ? (
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
					onPress={() => { setEscinsi([0, 1, 0]); }}
				>
					{escinsi[1]==1 ? (
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
					onPress={() => { setEscinsi([0, 0, 1]); }}
				>
					{escinsi[2]==1 ? (
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
							<Text style={commonStyles.buttonText}>Herkes</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Herkes</Text>}>
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
						        	Herkes
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                <View style={{flexDirection: "row", paddingHorizontal:0, justifyContent: "space-evenly",marginTop: 280, alignContent: "center" }}>
                    <Text style = {{color: "gray", marginTop: 8}}>Seçimini daha sonra değiştirebilirsin  </Text>
                    
                </View>

            </View>
        </View>
    );
}

export default EsCinsi;