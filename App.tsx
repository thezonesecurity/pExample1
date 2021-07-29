import React,{Component} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Screens1 from "./src/screens/screens1";
import Screens2 from "./src/screens/screens2";

var stack = createStackNavigator();
class App extends Component<any, any>{
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="screen1" component={Screens1}></stack.Screen>
        <stack.Screen name="screen2" component={Screens2}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  }
}
export default App;