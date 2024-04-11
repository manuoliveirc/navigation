import { ImageBackground, Text, TextInput, Image, View } from "react-native"
import { styles } from './styles'
import React from "react"


export function Page1() {
    const bg = require('../../assets/background.png')

    
    return (
        <ImageBackground style={styles.container} source={bg} >
            <Text style={styles.text}>Visualizar suas tarefas ativas</Text>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
        </ImageBackground>
    )
}