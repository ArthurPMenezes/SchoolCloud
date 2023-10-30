import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import  * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY" 
                    delay={100}
                    source={require('../../assets/logo1.png')}
                    style={{width: '80%'}}
                    resizeMode='contain'
                
                />
            </View>

            <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Leve sua educação aonde você for</Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity 
                style={styles.button} 
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1C8ADB',
        
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#1C8ADB',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerForm:{
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        marginLeft:  5,
        marginRight:  5,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#1C8ADB',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        height: '15%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',

    }
})