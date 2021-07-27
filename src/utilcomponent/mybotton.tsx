import React, {Component} from "react";
import {View, Text, StyleSheet,TouchableHighlight} from "react-native"
import mycolors from "../colors/mycolors";

interface MyProps {
    title: string,
    onPressEvent: Function
}
class MyBotton extends Component<MyProps, any>{
 constructor(props: MyProps){
    super(props);
 }
 clickOnButton() {
    this.props.onPressEvent();
 }

 render() {
     return <View>
         <TouchableHighlight onPress={() => {
          this.clickOnButton();
        }}>
          <View style={styles.containerbuton}>
            <Text>
              {this.props.title}
            </Text>
          </View>
        </TouchableHighlight>
     </View>
 }
}
var styles = StyleSheet.create({
    containerbuton: {
        padding: 10,//espacio d los lados
        backgroundColor: mycolors.four,
        borderRadius: 10,//eliminar las esquinas
        marginVertical: 15
      },
})
export default MyBotton;