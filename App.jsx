import React from "react"
import { View, StyleSheet } from "react-native"
import CurrentWeather from "./src/screens/CurrentWeather"
import UpcommingWeather from "./src/screens/UpcommingWeather"
import City from "./src/screens/City"

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})
export default App