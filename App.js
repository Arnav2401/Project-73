import * as React from 'react'
import { View,Text,Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Reader from './screens/reader'
import Writer from './screens/writer' 


export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <Text style={styles.head}>Story Hub</Text>
        <Container/>
      </View>
    )
  }
}

const tab = createBottomTabNavigator({
  WriterScreen:{screen:Writer},
  ReaderScreen:{screen:Reader}
},
{defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{
const route = navigation.state.routeName
console.log(navigation)
if(route==='WriterScreen'){
  return(
    <Image source={require('./assets/write.png')} style={{width:30,height:30}}/>
  )
}
else if(route==='ReaderScreen'){
return(
  <Image source={require('./assets/read.png')} style={{width:26,height:26}}/>
)
}

}
})}
)

const Container = createAppContainer(tab)

const styles= StyleSheet.create({
  head:{
    fontSize:30,
    fontWeight:'bold',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    marginTop:50,
    marginBottom:5
  }
})

