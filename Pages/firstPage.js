import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState} from "react";
import {StyleSheet, Text, View, Button, Switch, Dimensions, TouchableOpacity, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {Ionicons, Feather} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import commonStyles from "../visualComponents/styles"
import { colors, Gradient, GradientText } from "../visualComponents/colors";
import MaskedView from "@react-native-masked-view/masked-view";
import styles from '../visualComponents/styles';
const { width, height } = Dimensions.get("window");
import { CustomModal } from "../visualComponents/customComponents";


const FirstPage = props => {
    const goToIlgiAlanlari = () => {
        props.navigation.navigate("Gender");
        //props.navigation.navigate("IlgiAlani");  
    };
    const [direkDondurModal, setDirekDondurModal] = React.useState(false);
    const [hesapDondurModal, setHesapDondurModal] = React.useState(false);
    const [hesapKapatModal, setHesapKapatModal] = React.useState(false);
    const [hesapSilModal, setHesapSilModal] = React.useState(false);
    const [sorunModal, setSorunModal] = React.useState(false);
    const [buldumModal, setBuldumModal] = React.useState(false);
	const [sorun, setSorun] = React.useState([0, 0, 0]);

    return(
        <View style = { commonStyles.Container }>
            <StatusBar style={"dark"} />
			<View style = {commonStyles.Header, {alignSelf: "flex-end"}}>
                <TouchableOpacity style={{ left: 35 }} >
					<Ionicons name="arrow-back-outline" size={32} color="#B6B6B6" />
				</TouchableOpacity>                
                
            </View>
            <View style = {commonStyles.innerContainer}>
                <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 30 }}>Baslangic</Text>}>
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
							Baslangic
						</Text>
					</LinearGradient>
                </MaskedView>

                <View style = {{marginTop:30}}>
                    <Button
                        title="İlgi Alanları"
                        color = "black"
                        onPress = {goToIlgiAlanlari}
                    />
                </View>

                <View style = {{marginTop:30}}>
                    <Button
                        title="Mesajlar"
                        color = "black"
                        onPress = {goToIlgiAlanlari}
                    />
                </View>


                <View style = {{marginTop:30}}>
                    <Button
                        title="Filtre"
                        color = "black"
                        onPress = {goToIlgiAlanlari}
                    />
                </View>

                

                <View style = {{marginTop:30}}>
                    <Button
                        title="Oturumu Kapat"
                        color = "black"
                        onPress = {() => {setHesapKapatModal(true)}}
                    />
                </View>

                <View style = {{marginTop:30}}>
                    <Button
                        title="Hesabımı Dondur"
                        color = "black"
                        onPress = {() => {setDirekDondurModal(true)}}
                    />
                </View>

                <View style = {{marginTop:30}}>
                    <Button
                        title="Hesabımı Sil"
                        color = "black"
                        onPress = {() => {setHesapSilModal(true)}}
                    />
                </View>
            </View>

            {//Oturumu Kapat POP-up'ı
            }
            <CustomModal
				visible={hesapKapatModal}
				dismiss={() => {
					setHesapKapatModal(false);
				}}
			>
				<View
					style={{
                        maxWidth: width* 0.84,
						backgroundColor: colors.white,
						borderRadius: 10,
						alignItems: "center",
						paddingHorizontal: 36,
					}}
				>
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
								alignContent: "center",
                                justifyContent: "center",
								marginVertical: 10,
							}}
						>
                            <Image source={require("../assets/sadFace.png")} />	
						</View>
                        <View
                            style = {{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800"}}>
                                Oturumumu Kapat

                            </Text>

                        </View>
						<View
                            style = {{
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                                paddingLeft:15
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 13, fontWeight: "400"}}>
                                Oturumu kapatmak istediğine emin misin? Profilin kullanıcılara gözükmeye devam edecek.
                            </Text>

                        </View>
					</View>

					<TouchableOpacity
                        onPress={()=> {setHesapKapatModal(false);}}
						style={{
		                    width: width * 0.65,
							height: 60,
							borderRadius: 12,
							overflow: "hidden",
							marginTop: 30,
						}}
					>
						<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
							<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
								Vazgeçtim
							</Text>
						</Gradient>
					</TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {}}
                        style = {{
                            margin: 10,
                            marginBottom: 30,
		                    position: "relative",
		                    width: width * 0.65,
		                    height: 56,
		                    alignItems: "center",
		                    justifyContent: "center",
		                    borderRadius: 10,
                            borderWidth: 4,
                            borderColor: "#B6B6B6",
		                    alignSelf: "center",
                        }}
                    >
                        <Text style = {{fontSize: 18, color: "#B6B6B6"}}>Oturumumu Kapat</Text>

                    </TouchableOpacity>
				</View>
			</CustomModal>






            {//Hesabımı dondur POP-up'ı
            }
            <CustomModal
				visible={direkDondurModal}
				dismiss={() => {
					setDirekDondurModal(false);
				}}
			>
				<View
					style={{
                        maxWidth: width* 0.84,
						backgroundColor: colors.white,
						borderRadius: 10,
						alignItems: "center",
						paddingHorizontal: 36,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setDirekDondurModal(false);
						}}
						style={{
							position: "absolute",
							alignSelf: "flex-end",
							padding: 16,
						}}
					>
						<Text style = {{fontSize: 22, color: colors.medium_gray}}>İptal</Text>
					</TouchableOpacity>
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
								alignContent: "center",
                                justifyContent: "center",
								marginVertical: 10,
							}}
						>
                            <Image source={require("../assets/sadFace.png")} />	
						</View>
                        <View
                            style = {{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800"}}>
                                Hesabımı Dondur

                            </Text>

                        </View>
						<View
                            style = {{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 13, fontWeight: "400", textAlign: "center"}}>
                                Profil bilgilerin silinmeden hesabın dondurulacak. Bu sürede profilin diğer kullanıcılara gözükmeyecek. Geri gelmek istediğinde uygulamaya tekrar giriş yapman yeterli.

                            </Text>

                        </View>
					</View>

					<TouchableOpacity
						style={{
		                    width: width * 0.65,
							height: 60,
							borderRadius: 12,
							overflow: "hidden",
							marginTop: 30,
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
                        style = {{
                            margin: 10,
                            marginBottom: 30,
	                        position: "relative",
	                        width: width * 0.65,
	                        height: 56,
	                        alignItems: "center",
	                        justifyContent: "center",
                            borderRadius: 10,
                            borderWidth: 4,
                            borderColor: "#B6B6B6",
                            alignSelf: "center",
                        }}
                    >
                        <Text style = {{fontSize: 18, color: "#B6B6B6"}}>Görünmez Ol</Text>
                    </TouchableOpacity>
    		    </View>
			</CustomModal>



            {//Hesabımı sil POP-up'ı
            }

            <CustomModal
				visible={hesapSilModal}
				dismiss={() => {
					setHesapSilModal(false);
				}}
			>
                {
                    //Hesabımı Dondur POP-up'ı
                }
                <CustomModal
				    visible={hesapDondurModal}
				    dismiss={() => {
					    setHesapDondurModal(false);
				    }}
			    >
				    <View
					    style={{
                            maxWidth: width* 0.84,
						    backgroundColor: colors.white,
						    borderRadius: 10,
						    alignItems: "center",
						    paddingHorizontal: 36,
					    }}
				    >
					    <TouchableOpacity
						    onPress={() => {
							    setHesapDondurModal(false);
						    }}
						    style={{
							    position: "absolute",
							    alignSelf: "flex-end",
							    padding: 16,
						    }}
					    >
						    <Text style = {{fontSize: 22, color: colors.medium_gray}}>İptal</Text>
					    </TouchableOpacity>
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
								    alignContent: "center",
                                    justifyContent: "center",
								    marginVertical: 10,
							    }}
						    >
                                <Image source={require("../assets/sadFace.png")} />	
						    </View>
                            <View
                                style = {{
                                    flexDirection: "row",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 10,
                                }}
                            >
                                <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800"}}>
                                    Hesabımı Dondur

                                </Text>

                            </View>
						    <View
                                style = {{
                                    flexDirection: "row",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 10,
                                }}
                            >
                                <Text style = {{ color: colors.dark_gray, fontSize: 13, fontWeight: "400", textAlign: "center"}}>
                                    Profil bilgilerin silinmeden hesabın dondurulacak. Bu sürede profilin diğer kullanıcılara gözükmeyecek. Geri gelmek istediğinde uygulamaya tekrar giriş yapman yeterli.

                                </Text>

                            </View>
					    </View>

					    <TouchableOpacity
						    style={{
		                        width: width * 0.65,
							    height: 60,
							    borderRadius: 12,
							    overflow: "hidden",
							    marginTop: 30,
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
                            style = {{
                                margin: 10,
                                marginBottom: 30,
		                        position: "relative",
		                        width: width * 0.65,
		                        height: 56,
		                        alignItems: "center",
		                        justifyContent: "center",
		                        borderRadius: 10,
                                borderWidth: 4,
                                borderColor: "#B6B6B6",
		                        alignSelf: "center",
                            }}
                        >
                            <Text style = {{fontSize: 18, color: "#B6B6B6"}}>Görünmez Ol</Text>

                        </TouchableOpacity>
				    </View>
			    </CustomModal>


                {
                    //Hesabımı sil butonuna basarsa çıkan POP-up
                }
                <CustomModal
				    visible={sorunModal}
				    dismiss={() => {
					    setSorunModal(false);
				    }}
			    >
                    {
                        //Aradığını bulduğuna sevindik
                    }
                    <CustomModal
    				    visible={buldumModal}
				        dismiss={() => {
				    	    setBuldumModal(false);
			    	    }}
		    	    >
	    			    <View
    					    style={{
                                maxWidth: width* 0.84,
                                height: height * 0.85,
						        backgroundColor: colors.white,
					    	    borderRadius: 10,
				    		    alignItems: "center",
			    			    paddingHorizontal: 36,
		    			    }}
	    			    >
					    
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
							    	    alignContent: "center",
                                        justifyContent: "center",
					    			    marginVertical: 10,
				    			    }}
			    			    >
                                    <Image source={require("../assets/waveHand.png")} />	
	    					    </View>
                                <View
                                    style = {{
                                        flexDirection: "row",
                                        width: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginVertical: 10,
                                        marginBottom: 20,
                                    }}
                                >
                                    <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800", textAlign: "center"}}>
                                       Aradığını bulduğuna sevindik

                                    </Text>

                                </View>
				    		    <View
                                    style = {{
                                        flexDirection: "row",
                                        width: "100%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginVertical: 10,
                                        marginBottom: 20,

                                    }}
                                >
                                    <Text style = {{ color: colors.dark_gray, fontSize: 13, fontWeight: "400", textAlign: "center"}}>
                                        Dorm’da senin için yeni deneyimler her zaman var. Eğer özlersen bizi nerede bulacağını biliyorsun :)
                                    </Text>

                                </View>
	    				    </View>

    					    <TouchableOpacity
                                onPress={ () => {setBuldumModal(false);}}
					    	    style={{
		                            width: width * 0.65,
			    				    height: 60,
		    					    borderRadius: 12,
	    						    overflow: "hidden",
    							    marginTop: 30,
                                    marginBottom: 30,
						        }}
					        >
						        <Gradient style={{ justifyContent: "center", alignItems: "center" }}>
							        <Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
								        Hoşça Kal
							        </Text>
						        </Gradient>
					        </TouchableOpacity>
                    
				        </View>
			        </CustomModal>
				    <View
					    style={{
                            maxWidth: width* 0.84,
						    backgroundColor: colors.white,
						    borderRadius: 10,
						    alignItems: "center",
						    paddingHorizontal: 36,
					    }}
				    >
					    <TouchableOpacity
						    onPress={() => {
							    setSorunModal(false);
						    }}
						    style={{
							    position: "absolute",
							    alignSelf: "flex-end",
							    padding: 16,
						    }}
					    >
						    <Text style = {{fontSize: 22, color: colors.medium_gray}}>İptal</Text>
					    </TouchableOpacity>
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
								    alignContent: "center",
                                    justifyContent: "center",
								    marginVertical: 10,
							    }}
						    >
                                <Image source={require("../assets/questionFace.png")} />	
						    </View>
                            <View
                                style = {{
                                    flexDirection: "row",
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginVertical: 10,
                                }}
                            >
                                <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800", marginBottom: 30}}>
                                    Sorun Bende mi ?

                                </Text>

                            </View>
						    
					    </View>

                        <View style ={{
                            alignContent:"center",
                            justifyContent:"center",
                            marginBottom: 80,
                        }}>
                            <TouchableOpacity
					            style={[commonStyles.popupButton, { position: "absolute", marginTop:80}]}
					            onPress={() => {
                                    sorun[0] == 1
                                    ? setSorun([0,0,0])
                                    : setSorun([1,0,0])
                                }}
				            >
					            {sorun[0] == 1 ? (
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
							            <Text style={commonStyles.buttonText}>Aradığımı buldum</Text>
						            </LinearGradient>
					            ) : (
						            <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Aradığımı buldum</Text>}>
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
						        	            Aradığımı buldum
						                    </Text>
					                    </LinearGradient>
                                    </MaskedView>
					            )}
				            </TouchableOpacity>
                        </View>
                        <View style ={{
                            alignContent:"center",
                            justifyContent:"center",
                            marginBottom: 80,
                        }}>
                            <TouchableOpacity
					            style={[commonStyles.popupButton, { position: "absolute", marginTop:80}]}
					            onPress={() => {
                                    sorun[1] == 1
                                    ? setSorun([0,0,0])
                                    : setSorun([0,1,0])
                                }}
				            >
					            {sorun[1] == 1 ? (
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
							            <Text style={commonStyles.buttonText}>Dorm'la ilgili problemim var</Text>
						            </LinearGradient>
					            ) : (
						            <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Dorm'la ilgili problemim var</Text>}>
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
						        	            Dorm'la ilgili problemim var
						                    </Text>
					                    </LinearGradient>
                                    </MaskedView>
					            )}
				            </TouchableOpacity>
                        </View>

                        <View style ={{
                            alignContent:"center",
                            justifyContent:"center",
                            marginBottom: 80,
                        }}>
                            <TouchableOpacity
					            style={[commonStyles.popupButton, { position: "absolute", marginTop:80}]}
					            onPress={() => {
                                    sorun[2] == 1
                                    ? setSorun([0,0,0])
                                    : setSorun([0,0,1])
                                }}
				            >
					            {sorun[2] == 1 ? (
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
							            <Text style={commonStyles.buttonText}>Düşündüğüm gibi değil</Text>
						            </LinearGradient>
					            ) : (
						            <MaskedView style = {styles.MaskedView} maskElement = {<Text style={{ fontWeight: "bold", fontSize: 18 }}>Düşündüğüm gibi değil</Text>}>
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
						        	            Düşündüğüm gibi değil
						                    </Text>
					                    </LinearGradient>
                                    </MaskedView>
					            )}
				            </TouchableOpacity>
                        </View>

					    <TouchableOpacity
                            onPress={ () => {setBuldumModal(true);}}
						    style={{
                                marginBottom: 30,
		                        width: width * 0.65,
							    height: 60,
							    borderRadius: 12,
							    overflow: "hidden",
							    marginTop: 30,
						    }}
					    >
						    <Gradient style={{ justifyContent: "center", alignItems: "center" }}>
							    <Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
								    Hesabımı Sil
							    </Text>
						    </Gradient>
					    </TouchableOpacity>
                    
				    </View>
			    </CustomModal>

                


                {
                    //Hesabımı Sil
                }
				<View
					style={{
                        maxWidth: width* 0.84,
						backgroundColor: colors.white,
						borderRadius: 10,
						alignItems: "center",
						paddingHorizontal: 36,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setHesapSilModal(false);
						}}
						style={{
							position: "absolute",
							alignSelf: "flex-end",
							padding: 16,
						}}
					>
						<Text style = {{fontSize: 22, color: colors.medium_gray}}>İptal</Text>
					</TouchableOpacity>
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
								alignContent: "center",
                                justifyContent: "center",
								marginVertical: 10,
							}}
						>
                            <Image source={require("../assets/sadFace.png")} />	
						</View>
                        <View
                            style = {{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 24, fontWeight: "800"}}>
                                Hesabımı Sil
                            </Text>

                        </View>
						<View
                            style = {{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 10,
                            }}
                        >
                            <Text style = {{ color: colors.dark_gray, fontSize: 13, fontWeight: "400", textAlign: "center"}}>
                                Gittiğini gördüğümüze üzüldük! Onun yerine hesabını dondurmak ister misin?
                            </Text>

                        </View>
					</View>

					<TouchableOpacity
                    onPress = {() => {
                        setHesapDondurModal(true);
                        
                    }}
						style={{
		                    width: width * 0.65,
							height: 60,
							borderRadius: 12,
							overflow: "hidden",
							marginTop: 30,
						}}
					>
						<Gradient style={{ justifyContent: "center", alignItems: "center" }}>
							<Text style={{ color: colors.white, fontSize: 20, fontWeight: "bold" }}>
								Hesabımı Dondur
							</Text>
						</Gradient>
					</TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            setSorunModal(true);
                        }}
                        style = {{
                            margin: 10,
                            marginBottom: 30,
		                    position: "relative",
		                    width: width * 0.65,
		                    height: 56,
		                    alignItems: "center",
		                    justifyContent: "center",
		                    borderRadius: 10,
                            borderWidth: 4,
                            borderColor: "#B6B6B6",
		                    alignSelf: "center",
                        }}
                    >
                        <Text style = {{fontSize: 18, color: "#B6B6B6"}}>Hesabımı Sil</Text>

                    </TouchableOpacity>
				</View>
			</CustomModal>

            
        </View>
    );
}


export default FirstPage;