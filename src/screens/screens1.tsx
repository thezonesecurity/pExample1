import React,{ Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native"
import { count } from "yargs";
import mycolors from "../colors/mycolors";
import MyBotton from "../utilcomponent/mybotton";
import vectorIcons from 'react-native-vector-icons/AntDesign';
import {NavigationScreenProp} from "react-navigation"
//0:47

interface mystate {
  count: number
}
interface myProps {
  navigation: NavigationScreenProp<any, any>
}
class Screens1 extends Component<myProps, mystate> {
  constructor(props: any) {
    super(props);
    this.state = {//inicializamos la variable
      count: 0
    }
    
  }
  clickOnButton() {
    var c: number = this.state.count + 1;
    this.setState({count: c});
  }
  goScreen1() {
    this.props.navigation.navigate("screen1");//el mismo nomnre de app/render->stackscreen
  }
  goScreen2() {
    this.props.navigation.navigate("screen2", {msm: "mensaje del screnn 1", description: "msm corespondiente del sreens 1"});
  }
  render() {
    return <View style={styles.container}>
      
      <View style={styles.navifationButton}>
        <MyBotton iconname="customerservice" title="ventana 1" onPressEvent={() => {
          this.goScreen1();
        }} />
        <MyBotton iconname="meh" title="ventana 2" onPressEvent={() => {
          this.goScreen2();
        }} />
      </View>
      <View style={styles.containertext}>
        <Text style={styles.text}>
          {this.state.count}
        </Text>
      </View>
      

    </View>
  }
}

var styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: mycolors.primary,
    flex: 1,//ocupa toda la pantalla
    justifyContent: "center"// para el centro d la pantalla
  },
  containertext: {
    padding: 10,//espacio d los lados
    backgroundColor: mycolors.secondary,
    borderRadius: 10,//eliminar las esquinas
    marginTop: 10,
    flexGrow: 1,
    width: "100%"
  },
  text: {
    fontSize: 20, //pa el tamaño d letra
    alignContent: "center",
    textAlign: "center",
    color: mycolors.three,// color d la letra
  },
  containerbuton: {
    padding: 10,//espacio d los lados
    backgroundColor: mycolors.four,
    borderRadius: 10,//eliminar las esquinas
    marginVertical: 15
  },
  navifationButton: {
    flexDirection: "row",
    padding: 5,
  },
  
});
export default Screens1;

/*
sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 32,
    paddingHorizontal: 24,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
  */