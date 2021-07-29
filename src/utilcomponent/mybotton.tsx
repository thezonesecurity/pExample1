import React, {Component} from "react";
import {View, Text, StyleSheet,TouchableHighlight} from "react-native"
import mycolors from "../colors/mycolors";
import Icons from "react-native-vector-icons/AntDesign";


interface MyProps {
    title: string,
    onPressEvent: Function,
    iconname: string
}
class MyBotton extends Component<MyProps, any>{
 constructor(props: MyProps){
    super(props);
 }
 clickOnButton() {
    this.props.onPressEvent();
 }

 render() {
     return <TouchableHighlight onPress={() => {
          this.clickOnButton();
        }} style={styles.containerbuton} >
          <View style={styles.buttonStyle}>
            <View>
                <Icons name={this.props.iconname} size={20} color={mycolors.three} />              
            </View>
            <Text>
              {this.props.title}
            </Text>
          </View>
        </TouchableHighlight>

 }
}
var styles = StyleSheet.create({
    containerbuton: {
        padding: 10,//espacio d los lados
        backgroundColor: mycolors.four,
        borderRadius: 10,//eliminar las esquinas
        marginVertical: 15,
        justifyContent: "center",
        margin: 5,//espacio dentro d los botons
        
      },
      buttonStyle: {
        flexDirection: "row"
      }
})
export default MyBotton;