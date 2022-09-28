
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable'

const Login = () => {
  return (
    <View style={styles.container}>
        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}> 
            <Text style={styles.message}>Bem-vindo, aventureiro(a)!</Text>
        </Animatable.View> 

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <TextInput 
            placeholder='Digite um Email...'
            style={styles.input}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput 
            placeholder='Sua senha...'
            style={styles.input}
            />
            {/* TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques. Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua intensidade. */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#rgb(32,33,45);"
    },
    containerHeader: {
        marginTop: "14%",
        marginBottom: "8%",
        paddingStart: "5%"
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#fff"
    },
    containerForm: {
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBotton: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: "#rgb(32,33,45);",
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: "#a1a1a1"
    }
})

export default Login