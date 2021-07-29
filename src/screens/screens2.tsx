import React,{ Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native"
import mycolors from "../colors/mycolors";
import {NavigationScreenProp} from "react-navigation";
//1:28

interface mystate {
  //count: number
  msm: string
}
interface typeData {
  msm: string,
  description: string
}
interface RouteData {
  key: string,
  name: string,
  params: typeData
}
interface myProps {
  navigation: NavigationScreenProp<any, any>,
  route: RouteData
}
class Screens2 extends Component<myProps, mystate> {
  constructor(props: any) {
    super(props);
    this.state = {//inicializamos la variable
      //count: 0,
      msm: ""
    }
    
  }
  /*clickOnButton() {
    var c: number = this.state.count + 1;
    this.setState({count: c});
  }*/
  componentDidMount() {
    //console.log(this.props.route.params.description);
    this.setState({msm: this.props.route.params.msm});
  }
  render() {
    return <View style={styles.container}>
      <Text> soy screens 2</Text>
      <Text> {this.state.msm} </Text>
    </View>
  }
}

var styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: mycolors.primary,
    flex: 1,//ocupa toda la pantalla
    justifyContent: "center"// para el centro d la pantalla
  }
  
});
export default Screens2;