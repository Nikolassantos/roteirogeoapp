import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';


const Points = () => {
    const navigation = useNavigation();

    function navigateToDetais(){
        navigation.navigate('Details');
    }
    function navigateToHome(){
        navigation.navigate('Home');
    }
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#a3a3a3"></StatusBar>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Feather name="arrow-left" size={24} color="black" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.title}>Bem Vindo!</Text>
                <Text style={styles.subtitle}>Clique em um dos marcadores para poder acesssar o local desejado.</Text>
            </View>
            <View style={styles.mapcontainer}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude:-7.1144583,
                        longitude: -34.8827545,
                        latitudeDelta:0.009,
                        longitudeDelta:0.009,
                    }}
                >
                    <Marker coordinate={{
                    latitude: -7.1144583,
                    longitude:-34.8827545
                    }}
                    onPress={navigateToDetais}
                    >
                        <View>
                            <Image style={styles.mapMarkerImage} source={{ uri: 'https://roteiro-geoturistico-jp--ssantinho.repl.co/media/aereo.jpg'}} />
                            <Text style={styles.textmap}>Igreja {'\n'} São Francisco</Text>
                        </View>
                </Marker>
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    header:{
        marginTop: 10,
    },
    icon:{
        marginLeft:10,
        width:25,
        textAlign: 'right',
    },
    title:{
        marginTop:10,
        fontSize:18,
        fontFamily: 'Roboto_700Bold',
        marginLeft:20,
    },
    subtitle:{
        fontSize: 15,
        fontFamily: 'Ubuntu_400Regular',
        marginTop:5,
        marginLeft: 20,

    },
    map:{
        flex:1,  

    },
    mapcontainer:{
        width:'100%',
        flex:1,
        paddingRight:9,
        paddingLeft:9,
        marginTop:16,
        marginBottom:10,
    },
    mapMarkerImage:{
        width: 80,
        height: 65,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        marginBottom:0,
            
    },
    textmap:{
        fontSize: 11,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#34CB79',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginTop:0,
        fontWeight: 'bold',

        
    },

})

export default Points;