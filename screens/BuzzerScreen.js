import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import AppHeader from "../components/AppHeader";
import SoundButton from "../components/SoundButton"

export default class BuzzerScreen extends React.Component{
  render(){
    return(
<View>
<AppHeader/>

<SoundButton color={this.props.navigation.getParam("color")}/>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("HomeScreen")}>
<Image source={require("../assets/78-780842_back-button-white-icon-png-transparent-png.png")}
style={{width:50,height:50}}

/>

</TouchableOpacity>

</View>


    )

  }

}




