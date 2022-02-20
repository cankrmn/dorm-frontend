import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState} from "react";
import {StyleSheet, Text, View, Button, Switch, Dimensions, TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import commonStyles from "../../visualComponents/styles"
import { colors, Gradient, GradientText  } from "../../visualComponents/colors"
import MaskedView from "@react-native-masked-view/masked-view";
import styles from '../../visualComponents/styles';



const CinselYönelim = props => {
    const goToPrevPage = () => {
        props.navigation.navigate("EsCinsi");
      };
    const goToNextPage = () => {
        props.navigation.navigate("Foto");
    };
    
	const [yönelim, setYönelim] = React.useState([0, 0, 0, 0, 0]);
    
    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

   
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
                <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ alignContent: "flex-start", fontWeight: "bold", fontSize: 24 }}>Cinsel Yönelimim</Text>}>
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
							Cinsel Yönelimim
						</Text>
					</LinearGradient>
                </MaskedView>
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:70}]}
					onPress={() => { setYönelim([1, 0, 0, 0 ,0]); }}
				>
					{yönelim[0]==1 ? (
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
							<Text style={commonStyles.buttonText}>Heteroseksüel</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Heteroseksüel</Text>}>
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
						        	Heteroseksüel
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                
                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", margin: 140}]}
					onPress={() => { setYönelim([0, 1, 0, 0 ,0]); }}
				>
					{yönelim[1]==1 ? (
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
							<Text style={commonStyles.buttonText}>Homoseksüel</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Homoseksüel</Text>}>
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
						        	Homoseksüel
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:210}]}
					onPress={() => { setYönelim([0, 0, 1, 0 ,0]); }}
				>
					{yönelim[2]==1 ? (
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
							<Text style={commonStyles.buttonText}>Biseksüel</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Biseksüel</Text>}>
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
						        	Biseksüel
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:280 }]}
					onPress={() => { setYönelim([0, 0, 0, 1, 0]); }}
				>
					{yönelim[3]==1 ? (
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
							<Text style={commonStyles.buttonText}>Panseksüel</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Panseksüel</Text>}>
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
						        	Panseksüel
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>

                <TouchableOpacity
					style={[commonStyles.girisButton, { position: "absolute", marginTop:350 }]}
					onPress={() => { setYönelim([0, 0, 0, 0 ,1]); }}
				>
					{yönelim[4]==1 ? (
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
							<Text style={commonStyles.buttonText}>Aseksüel</Text>
						</LinearGradient>
					) : (
						<MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Aseksüel</Text>}>
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
						        	Aseksüel
						        </Text>
					        </LinearGradient>
                        </MaskedView>
					)}
				</TouchableOpacity>
                <View style={{flexDirection: "row", paddingHorizontal:0, justifyContent: "space-evenly",marginTop: 380, alignContent: "center" }}>
                    <Text style = {{color: "gray", marginTop: 8}}>Profilinde yönelim görünürlüğü  </Text>
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

export default CinselYönelim;