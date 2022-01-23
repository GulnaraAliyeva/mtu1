import { TouchableOpacity, Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get('window').width

export default function WelcomeScreen(props: any) {
  return (
    <ImageBackground source={require('../background.png')} resizeMode="cover" style={styles.image}>
       <View style={styles.logo}>
      <Image source={require('../logo1.png')} />
      </View>
      <View style={styles.secondContainer}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}>{"Customer"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.buttonText}>{"MTU"}</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    margin: 50,
    flex:1
  },
  secondContainer: {
    flex:2,
    backgroundColor:'transparent', 
  },
  button: {
    backgroundColor: '#fff',
    width: windowWidth * 0.5,
    height: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
