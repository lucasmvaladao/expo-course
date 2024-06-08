import Card from "./src/pages/dash/components/card";
import WeatherDetail from "./src/pages/dash/components/weather-detail"

import { View } from "react-native";

export default function App() {
  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 500}}>
       <WeatherDetail/>
    </View>
  )
 
}
