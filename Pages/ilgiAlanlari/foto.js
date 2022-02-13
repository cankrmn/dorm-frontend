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




const Foto = props => {
    const goToPrevPage = () => {
        props.navigation.navigate("CinselYönelim");
      };
    const goToNextPage = () => {
        props.navigation.navigate("IlgiAlani");
    };
    
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
            <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 24 }}>En güzel fotoğraflarım</Text>}>
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
							En güzel fotoğraflarım
						</Text>
					</LinearGradient>
                </MaskedView>
        </View>
    </View>
    );
}

export default Foto;