import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppHeader from "../components/AppHeader";


export default class HomeScreen extends React.Component{

  GoToBuzzerScreen=(buzzerColor)=>{
    this.props.navigation.navigate("BuzzerScreen",{color:buzzerColor})
  }
  render(){
    return(
      <View>
<AppHeader/>
<TouchableOpacity style={[styles.button,{backgroundColor:"red"}]} 
onPress={()=>this.GoToBuzzerScreen("red")}

>

<Text style={styles.buttonText}>Team 1</Text> 

</TouchableOpacity>

<TouchableOpacity style={[styles.button, {backgroundColor:"green"}]} 
onPress={()=>this.GoToBuzzerScreen("green")}
>


<Text style={styles.buttonText}> Team 2 </Text>

</TouchableOpacity>

<TouchableOpacity style={[styles.button, {backgroundColor:"blue"}]}
onPress={()=>this.GoToBuzzerScreen("blue")}
 >


<Text style={styles.buttonText}> Team 3 </Text>

</TouchableOpacity>


<TouchableOpacity style={[styles.button, {backgroundColor:"orange"}]} 
onPress={()=>this.GoToBuzzerScreen("orange")}
>


<Text style={styles.buttonText}> Team 4 </Text>

</TouchableOpacity>

      </View>
    )

  }
}

const styles=StyleSheet.create({
  button:{
  width:200,
  height:50,
  borderWidth:2,
  marginTop:40,
  justifyContent:"center",
  alignSelf:"center",
  borderRadius:40
  },
buttonText:{
  textAlign:"center",
 
}

})