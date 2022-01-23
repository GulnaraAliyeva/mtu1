import { useEffect } from 'react';
import { Dimensions, Image, View , StyleSheet} from "react-native";

export default function SplashScreen(props: any) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Welcome")
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../logo1.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
