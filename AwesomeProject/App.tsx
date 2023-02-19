import React,{useState} from "react";
import FlateCard from "./components/FlateCard.jsx";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from 'react-native'
// import { Colors } from "react-native/Libraries/NewAppScreen";
const url = { uri: `https://cdn-japantimes.com/wp-content/uploads/2017/01/p10-gates-a-20170130.jpg` }
const App = () => {
  const [count, setcount] = useState(0)
  const onPress = ()=>{
    var value = count;
    
    setcount(++value)
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <View >
        <View style={styles.container}>
          <View style={styles.heading}>
            <Text style={{ marginTop: 5, marginLeft: 10, color: 'white', fontWeight: 800, fontSize: 30 }}>
              GOOD NEWS
            </Text>
          </View>
          <View style={styles.image}>
            <ImageBackground source={url} style={{ width: 386, height: 220 }}>

            </ImageBackground>
          </View>
          <View style={styles.title}>
            <Text style={{ fontSize: 18, marginLeft: 5, marginTop: 3 }}>
              The rules of the asian body in america
            </Text>
          </View>
        </View>
        <FlateCard/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    height: 300,
    width: 390,
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10
  },
  heading: {
    backgroundColor: 'gray',
    height: 50
  },
  image: {
    backgroundColor: 'cyan',
    flex: 2
  },
  title: {
    height: 30,
    width: 390,
  },
  head_text: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 800
  }
})