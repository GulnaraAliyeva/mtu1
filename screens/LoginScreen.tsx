import { useState } from 'react';
import { TouchableOpacity, Dimensions, Image, Text, View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function TabTwoScreen(props: any) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
      <Image source={require('../logo1.png')} style={{marginTop: 50}}/>
      <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.searchSection}>
          <Ionicons name="mail-outline" size={20} color="#fff" />
          <TextInput
            value={username}
            placeholderTextColor="#fff" 
            onChangeText={(value) => setUsername(value)}
            placeholder={'email or username'}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.searchSection}>
          <Ionicons name="lock-closed-outline" size={20} color="#fff" />
          <TextInput
            value={password}
            placeholderTextColor="#fff" 
            onChangeText={(value) => setPassword(value)}
            placeholder={'password'}
            secureTextEntry={true}
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
          <Text style={{color: '#fff'}}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdContainer}>
      <Text>Don't have an account? </Text>
      <Text style={{color: '#003a67'}}>Sign up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  thirdContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstContainer: {
    flex: 2,
    alignItems: 'center'
  },
  secondContainer: {
    width: windowWidth * 0.8,
    height: windowHeight*0.3,
    justifyContent: 'center',
    backgroundColor: '#87B7EC',
    padding: 30,
    marginVertical: 50,
    flex: 2,
  },
  title: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',

  },
  searchSection: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87B7EC',
    marginBottom: 50,
    borderColor: '#fff',
  },
  searchIcon: {
    width: '5%'
  },
  input: {
    color: '#fff',
    width: '95%',
    height: 44,
    paddingLeft: 5,
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    backgroundColor: '#5892F1',
    width: windowWidth * 0.7,
    height: 90,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold'
  },

});
