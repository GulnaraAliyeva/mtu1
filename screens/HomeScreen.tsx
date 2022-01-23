import { StyleSheet } from 'react-native';
import { TouchableOpacity, Dimensions, Text, View  } from "react-native";

const windowWidth = Dimensions.get('window').width

const data = [
  {
    "title": "New Repair",
    "data": {
      "engine type": "CFMS6",
      "engine serial number": "...",
      "customer": "...",
      "date": "15/12/2021"
    }
  },
  {
    "title": "Current Repair",
    "data": {
      "engine type": "CFMS6",
      "customer": "...",
      "date": "15/12/2021"
    }
  },
  {
    "title": "Previous Repair",
    "data": {
      "engine type": "CFMS6",
      "customer": "...",
      "date": "15/12/2021"
    }
  }
]


export default function TabTwoScreen(props: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.secondContainer}>
        {data.map((entry, key) => 
          <TouchableOpacity key={key} style={styles.button} onPress={() => props.navigation.navigate("Detail", { screen: entry })}>
            <Text style={styles.buttonText}>{entry.title}</Text>
          </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  secondContainer: {
    flex: 1,
    justifyContent:'center',
  },
  title: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',

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
  }
});
