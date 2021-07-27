import React,{ Component} from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native"
import { count } from "yargs";
import mycolors from "./src/colors/mycolors";
import MyBotton from "./src/utilcomponent/mybotton";
interface mystate {
  count: number
}
class App extends Component<any, mystate> {
  constructor(props: any) {
    super(props);
    this.state = {//inicializamos la variable
      count: 0
    }
    //1:43
  }
  clickOnButton() {
    var c: number = this.state.count + 1;
    this.setState({count: c});
  }
  render() {
    return <View style={styles.container}>
      
      <View>
        <MyBotton title="Botton component" onPressEvent={() => {
          this.clickOnButton();
        }} />
      </View>
      <View style={styles.containertext}>
        <Text style={styles.text}>
          {this.state.count}
        </Text>
        <MyBotton title="Botton opcion" onPressEvent={() => {
          this.clickOnButton();
        }} />
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
    flex: 1,
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
  
});
export default App;

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