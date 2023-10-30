import React, { useState } from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Linking,
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const [turma, setTurma] = useState(""); // Adicione o estado "turma" com useState
    const openLink = () =>
        Linking.openURL('https://schoolcloudev.my.canva.site/');

    const navigation = useNavigation();

    const handleInputChange = (selectedTurma, stateKey) => {
        // Esta função atualizará o estado "turma" com o valor selecionado
        setTurma(selectedTurma);
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Registre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={200} style={styles.containerForm}>
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                />

                <Text style={styles.title}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                />

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            turma === "1" && styles.checkboxSelected,
                        ]}
                        onPress={() => handleInputChange("1", "turma")}
                    >
                        <Text style={styles.checkboxText}>1º</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            turma === "2" && styles.checkboxSelected,
                        ]}
                        onPress={() => handleInputChange("2", "turma")}
                    >
                        <Text style={styles.checkboxText}>2º</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            turma === "3" && styles.checkboxSelected,
                        ]}
                        onPress={() => handleInputChange("3", "turma")}
                    >
                        <Text style={styles.checkboxText}>3º</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.buttonRegister} 
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.registerText}>Já possui uma conta? Faça login</Text>
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
        marginTop: 10,
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
    },
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 35,
        marginBottom: 30,
        alignItems: "center",
        alignSelf: 'center'
      },
      checkboxLabel: {
        marginRight: 10,
        fontSize: 18,
      },
      checkbox: {
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#888",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20,
      },
      checkboxSelected: {
        backgroundColor: "#35AAFF",
      },
      checkboxText: {
        color: "#888",
        fontSize: 16,
      }
})