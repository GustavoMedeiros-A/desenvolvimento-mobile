
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container_home}>
        <Text onPress={ ()=> navigation.navigate('Login')}>Main Page</Text>
    </View>

  )
}

const styles = StyleSheet.create({
   
})

export default Home