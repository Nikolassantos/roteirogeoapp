import React from 'react';
import { View, StyleSheet, Text, Image, Linking, ScrollView, StatusBar } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import { FontAwesome5 as Font } from '@expo/vector-icons'; 

const Details = () => {
    const navigation = useNavigation();

    function navigationToPoints(){
        navigation.navigate('Points');
    }
    function URL(){
        Linking.openURL(supportedURL);
    }
    function MapUrl(){
        Linking.openURL(mapurl);
    }
    function UberUrl(){
        Linking.openURL(uberurl);  
    }
    function call(){
        Linking.openURL(`tel:${phonecall}`);
    }
    function openbus(){
        Linking.openURL(openbusurl)
    }
    const supportedURL = "https://roteiro-geoturistico-jp--ssantinho.repl.co/centro-cultural.html";

    const mapurl = "https://www.google.com/maps/dir//Centro+Cultural+S%C3%A3o+Francisco+-+Ladeira+S%C3%A3o+Francisco,+s%2Fn+-+Centro,+Jo%C3%A3o+Pessoa+-+PB,+58010-650/@-7.1516311,-34.905548,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7acdd49465ec499:0xf01081ffe9350fa8!2m2!1d-34.8833222!2d-7.1149127";

    const uberurl = "https://m.uber.com/ul/?client_id=<CLIENT_ID>&pickup=my_location";

    const openbusurl = "https://pointsabusjp.herokuapp.com/";

    const phonecall = 8332210779;
    return(
        <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#a3a3a3"></StatusBar>
        <View style={styles.header}>
            <TouchableOpacity onPress={navigationToPoints} style={styles.icon}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.containerimage}>
                <Image style={styles.image} source={require('../../assets/aereo.jpg')} />
            </View>
            <Text style={styles.title}>Igreja São Francisco</Text>
            <View style={styles.address}>
                <Text style={styles.textaddress}>Endereço:</Text>
                <Text style={styles.containertext}>Ladeira São Francisco, s/n - Centro, João Pessoa - PB, 58010-650</Text>
                <Text style={styles.textphone}>Telefone:</Text>
                <TouchableOpacity onPress={call}>
                    <Text style={styles.containerphone}>(83) 3221-0779</Text>   
                </TouchableOpacity>
                <Text style={styles.textlink}>Nosso link sobre o local:</Text>
                <TouchableOpacity onPress={URL}>
                    <Text style={styles.link}>https://roteiro-geoturistico-jp--ssantinho.repl.co/centro-cultural.html</Text>
                </TouchableOpacity>
                <Text style={styles.comochegada}>Como chegar aqui:</Text>
                <View style={styles.chegada}>
                    <RectButton onPress={MapUrl} style={styles.rotas}>
                    <View style={styles.iconbutton}>
                            <Text>
                                <Font name="map-marker-alt" size={24} color="#fff" />
                            </Text>
                    </View>
                        <Text style={styles.textrotas}>Veja as Rotas!</Text>
                    </RectButton>
                    <RectButton onPress={UberUrl} style={styles.uber}>
                    <View style={styles.iconbutton}>
                            <Text>
                                <Font name="uber" size={24} color="#fff" />
                            </Text>
                    </View>
                    <Text style={styles.textuber}>Pegue um Uber!</Text>
                    </RectButton>
                </View>
                <View style={styles.chegada}>
                    <RectButton onPress={openbus} style={styles.bus}>
                    <View style={styles.iconbutton}>
                            <Text>
                                <Font name="bus-alt" size={24} color="#fff" />
                            </Text>
                        </View>
                        <Text style={styles.textbus}>Vamo de Busão??</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    icon:{
        marginLeft:10,
    },
    header:{
        marginTop: 10,
    },
    title:{
        fontSize: 20,
        fontFamily:'Roboto_700Bold',
        marginTop:15,
        marginLeft: 10,
    },
    iconbutton:{
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,

    },
    image: {
        width: 360,
        height: 179,
        borderRadius:5,
    },
    containerimage:{
        marginTop: 10,
    },
    containertext:{
        fontSize:17,
        paddingLeft:10,
        paddingRight:1,
        fontFamily: 'Ubuntu_400Regular',      
        textAlign: 'justify', 
    },
    address:{
        marginTop:15,
    },
    textaddress:{
        fontWeight: 'bold',
        fontSize:15,
        marginLeft:10,
        marginBottom:8,
    },
    textphone:{
        fontWeight: 'bold',
        fontSize:15,
        marginBottom:8,
        marginTop:10,
        marginLeft:10,

    },
    containerphone:{
        fontSize:17,
        paddingLeft:10,
        paddingRight:1,
        textDecorationLine: 'underline',
        fontFamily: 'Ubuntu_400Regular',      
        textAlign: 'justify', 
        color: '#3249cf',
    },
    textlink:{
        fontWeight: 'bold',
        fontSize:15,
        marginLeft:10,
        marginBottom:8,
        marginTop:10,
    },
    link:{
        fontSize:15,
        marginBottom:8,
        marginLeft:10,
        color: '#3249cf',
        textDecorationLine: 'underline',
    },
    comochegada:{
        fontWeight: 'bold',
        fontSize:15,
        marginLeft:10,
        marginBottom:5,
        marginTop:5,
    },
    chegada:{
        justifyContent:'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight:5,
        marginBottom:5,
    },
    rotas:{
        backgroundColor: '#34CB79',
        height: 60,
        width:250,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    uber:{
        backgroundColor: '#34CB79',
        height: 60,
        width:250,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },

    bus:{
        backgroundColor: '#34CB79',
        height: 60,
        width:250,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    textrotas:{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Ubuntu_400Regular',
        color: '#FFF',
        fontSize: 16,
    },
    textuber:{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Ubuntu_400Regular',
        color: '#FFF',
        fontSize: 16,

    },
    textnine:{
        fontSize:17,
        fontFamily: 'Ubuntu_400Regular',
        lineHeight: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,

    },
    textbus:{
        flex: 1,
        fontFamily: 'Ubuntu_400Regular',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },


})

export default Details;
