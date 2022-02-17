import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState} from "react";
import {StyleSheet, Text, View, Button, Switch, Dimensions, TouchableOpacity, Pressable, ScrollView, FlatList} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import commonStyles from "../../visualComponents/styles"
import { colors, Gradient, GradientText } from "../../visualComponents/colors";
import MaskedView from "@react-native-masked-view/masked-view";
import styles from '../../visualComponents/styles';

const { height, width } = Dimensions.get("window");


const IlgiAlani = props => {
    const goToPrevPage = () => {
        props.navigation.navigate("Foto");
      };
    const goToNextPage = () => {
        props.navigation.navigate("FirstPage");
    };


    const spor = [
        {key: '🏀Basketbol'},
        {key: '🏋️Fitness'},
        {key: '🏐Voleybol'},
        {key: '🧘Yoga'},
        {key: '🎾Tennis'} 
    ];

    const yaraticilik = [
        {key: '🎸Müzik'},
        {key: '💃Dans'},
        {key: '📹Vlog'},
        {key: '📝Yazı'},
        {key: '🎨Resim'},
    ];

    const yemek = [
        {key: '🍷Şarap'},
        {key: '🍺Bira'},
        {key: '🍸Kokteyl'},
        {key: '🥦Vegan'},

    ];

    const film = [
        {key: '🦸Süper Kahraman'},
        {key: '🙀Korku'},
        {key: '🧑‍🚀Bilim Kurgu'},
    ];

    const okumak = [
        {key: '🖊️Klasik'},
        {key: '🏺Tarih'},
        {key: '🔪Suç'},
        {key: '🧝‍♀️Fantastik'},
    ];

    const müzik = [
        {key: '🎹Klasik'},
        {key: '🎷Jazz'},
        {key: '🎸Rock'},
        {key: '🪕Country'},
    ];

    const aktivizm = [
        {key: '💁🏻‍♀️Feminist'},
        {key: '🏳️‍🌈LGBTQ+ destekçisi'},
        {key: '🌲Çevrecilik'},
    ];

    const ozellikler = [
        {key: 'Aile Sevgisi'},
        {key: 'Açık Fikirlilik'},
        {key: 'Alçak Gönüllülük'},
    ];

    return(
        <View style = { commonStyles.Container }>
            <StatusBar style={"dark"} />
            <View style = {commonStyles.Header, {alignSelf: "flex-end"}}>               
                <TouchableOpacity style={{ right: 35, top: 34 }} onPress = {goToNextPage}>
				    <Text style={{ fontSize: 22, color: "#B6B6B6" }}>Atla</Text>
			    </TouchableOpacity>
                
            </View>
            <View name={"PeopleHeader"} style={[commonStyles.Header, { height: height * 0.00001}]}>
    				<GradientText
    					text={"İlgi Alanlarım"}
    					style={{ fontSize: 30, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20, marginRight: 90}}
    				/>
    		</View>
            <View style = {{marginTop:10}}></View>
            <View style = {commonStyles.innerContainer}>
                
                <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle={{paddingBottom: 100}}>
                    <View style = {{flexDirection:"column"}}>
                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 40 }]}
				        >
					        <GradientText
						        text={"Spor"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={spor} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >

					        <GradientText
						        text={"Yaratıcılık"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={yaraticilik} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Yeme & İçme"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={yemek} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Film & Dizi"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={film} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Okumak"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={okumak} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Müzik"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={müzik} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Değerler ve Aktivizm"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={aktivizm} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>

                        <View
					        name={"EventHeader"}
					        style={[commonStyles.Header, { height: height * 0.05, marginTop: 20 }]}
				        >
					        <GradientText
						        text={"Değerler"}
						        style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1.2, marginLeft: 20 }}
					        />
				        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FlatList data={ozellikler} renderItem={({item} ) => <Item item={item} /> } horizontal = {true} />
				        </View>




                    </View>
                </ScrollView>
                <View style = {{marginBottom:40}}></View>


            </View>
        </View>
    );
}


const Item = ({item}) => {
    const [activity, setActivity] = React.useState(false);
    const toggleActivity= () => setActivity(previousState => !previousState);
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
					onPress={() => {toggleActivity()}}
					style={{
						marginHorizontal: width / 50,
						height: width / 8,
						borderRadius: width / 16,
						overflow: "hidden",
					}}
				>
					{ activity ? (
						<Gradient
							style={{
								justifyContent: "center",
									alignItems: "center",
    							}}
						>
								<Text style={{color: colors.white }}>   {item.key}   </Text>
						</Gradient>
					) : (
						<View
	    					style={{
								backgroundColor: colors.white,
		    					height: "100%",
			    				justifyContent: "center",
				    			alignItems: "center",
							}}
						>
							<Text style={{ color: colors.black }}>   {item.key}   </Text>
						</View>
					)}
			</Pressable>
      </View>
    )
}

export default IlgiAlani;