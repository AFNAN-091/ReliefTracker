import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text style= {styles.text}>Home Screen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:
    {
        fontSize: 30,
        fontWeight: "900",
        color: "#06b6d4",
        textAlign: "center",
        marginTop: 300,
        
    }
})