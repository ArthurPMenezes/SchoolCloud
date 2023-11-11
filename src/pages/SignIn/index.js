import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Linking,

} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { useState } from 'react';


export default function SignIn() {
    const openLink = () =>
        Linking.openURL('https://schoolcloudev.my.canva.site/');
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const handleLogin = async () => {
        try {
          const response = await fetch('http://10.0.0.176:3000/api/login', {
            meqthod: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              nome,
            }),
          });
      
          if (response.ok) {
            // Login bem-sucedido, pode navegar para a próxima tela
            navigation.navigate('homePage');
            setEmail("");
            setNome("");

          } else {
            // Tratar erro de login aqui
            console.error('Este usuário não existe');
          }
        } catch (error) {
          console.error('Erro ao realizar o login', error);
        }
      };
      

    return (
        <View style={styles.container}>
            <Animatable.View 
            animation="fadeInLeft" 
            delay={500} 
            style={styles.containerHeader}
            >
                
                <Text style={styles.message}> Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View 
            animation="fadeInUp" 
            delay={200} 
            style={styles.containerForm}
            >

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

<               Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegister} 
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Não possui uma conta? Registre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.creditsButton} onPress={openLink}>
                    <Text style={styles.creditsText}>@SchoolCloud</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1C8ADB'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#1C8ADB',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color:'#A1A1A1'
    },
    creditsButton:{
        alignSelf: 'center',
        marginTop: 300,
    },
    creditsText:{
        color: '#a1a1a1',
    }
})