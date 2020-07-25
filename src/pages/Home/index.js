import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';

const Home = () => {
    const navigation = useNavigation();

    function navigateToPoints(){
        navigation.navigate('Points');

    }
    return(
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    <Text style={styles.title}>Bem vindo ao roteiro geoturístico do Centro Histórico de João Pessoa!</Text>
                </View>
                <RectButton onPress={navigateToPoints} style={styles.button}>
                    <View style={styles.iconbutton}>
                        <Text>
                            <Icon name="arrow-right" size={24} color="#FFF"/>
                        </Text>
                    </View>
                    <Text style={styles.textmap}>Ver Mapa</Text>
                </RectButton>
            </View>
        );

    
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e5e5e5',
        padding:25,
    },
    logo:{
        width:150,
        height:150,
    },
    main:{
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        fontSize: 19,
        fontFamily: 'Ubuntu_400Regular',
        textAlign:'left',
        marginLeft:10,
    },
    button:{
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
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
    textmap:{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    }


});

export default Home;