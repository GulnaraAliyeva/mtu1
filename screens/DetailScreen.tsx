import { StyleSheet } from 'react-native';
import { TouchableOpacity, Dimensions, Text, View } from "react-native";

export default function DetailScreen(props: any) {
  const {title, data} = props.route.params.screen
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.tableContainer}>
        {Object.keys(data).map((entry, key) =>
          <View style={styles.tableRow} key={key}>
            <View style={styles.tableColumnClockInOutTimes}>
              <Text style={styles.textLineItem}>{entry}</Text>
            </View>
            <View style={styles.tableColumnTotals}>
              <Text style={styles.textLineItem}>{data[entry]}</Text>
            </View>
          </View>
        )
        }
      </View>
      <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={()=> props.navigation.navigate("Camera")}>
        <Text>
        Take a picture
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  tableColumnClockInOutTimes: {
    alignItems: "center",
    backgroundColor: "#E7E8E8",
    flex: 3,
    justifyContent: "center",
    margin: 1
  },
  tableColumnTotals: {
    alignItems: "center",
    backgroundColor: "#E7E8E8",
    flex: 2,
    justifyContent: "center",
    margin: 1
  },
  tableRow: {
    flex: 5,
    flexDirection: "row",
    maxHeight: 30
  },
  tableRowHeader: {
    flex: 5,
    flexDirection: "row",
    maxHeight: 40
  },
  tableContainer: {
    borderRadius: 5,
    flex: 2,
    marginTop: 0,
    padding: 10,
    justifyContent: 'center'
  },
  textLineItem: {
    color: "#000000"
  }
});
