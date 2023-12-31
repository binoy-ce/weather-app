/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react"
import { StyleSheet,SafeAreaView,Text,FlatList } from "react-native" 
import { StatusBar } from "react-native"
import { ImageBackground } from "react-native"
import ListItem from "../components/ListItem"



const  DATA = [
  {
      dt_txt: "2022-08-30 16:00:00",
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: "Rain"
        }
      ]
  },
 {
      dt_txt: "2022-08-30 17:00:00",
      main: {
        temp_min: 296.2,
        temp_max: 296.31,
      },
      weather: [
        {
          main: "Cloudy"
        }
      ]
  },
 {
      dt_txt: "2022-08-30 18:00:00",
      main: {
        temp_min: 292.84,
        temp_max: 294.94,
      },
      weather: [
        {
          main: "Sunny"
        }
      ]
  }
]




const colour = "#71879f"
const UpcommingWeather = () => {
  
  const renderItem = ({item}) => (
    <ListItem
    dt_txt={item.dt_txt} 
    temp_min={item.main.temp_min} 
    temp_max={item.main.temp_max} 
    condition={item.weather[0].main}
  
    />
  )
  const {container,image} =styles
    return (
        <SafeAreaView style={container}>
            <StatusBar
              backgroundColor={colour}
            />
            <ImageBackground
            style={image}
            source={require("../../assets/clouds.jpg")}>
              <Text>Upcomming Weather</Text>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
              />
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: colour
    },
    image: {
      flex: 1,
    },
    date: {
      color:"white",
      fontSize: 15
    },

  
})
export default UpcommingWeather