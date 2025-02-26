import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Image, ImageBackground } from "react-native";

function App() {
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        {/* First Container */}
        <View style={styles.container}>
          <View style={[styles.card, { backgroundColor: "blue" }]}>
            <Text style={styles.text}>Country 1</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "red" }]}>
            <Text style={styles.text}>Country 2</Text>
          </View>
          <View style={[styles.card, { backgroundColor: "green" }]}>
            <Text style={styles.text}>Countery 3</Text>
          </View>
        </View>

        <Text style={styles.title}>Trending Places to visit</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container2}>
          <View style={[styles.card2, { backgroundColor: "blue" }]}>
            <Text style={styles.text}>Delhi</Text>
          </View>
          <View style={[styles.card2, { backgroundColor: "red" }]}>
            <Text style={styles.text}>Mumbai</Text>
          </View>
          <View style={[styles.card2, { backgroundColor: "green" }]}>
            <Text style={styles.text}>kokata</Text>
          </View>
          <View style={[styles.card2, { backgroundColor: "yellow" }]}>
            <Text style={styles.text}>Goa</Text>
          </View>
        </ScrollView>
        
        
        <View>
          <Text style={{textAlign:"left",color:'white',fontSize:30,margin:10}}> Most Visited</Text>
          <View style={[styles.Bigcard ,{backgroundColor:'white'}]}>
          <Image source={{ uri: "https://picsum.photos/400/300" }} style={styles.bigImage} />
          <Text style={{fontSize:30,textAlign:"center",backgroundColor:'green'}}>Place to Visit</Text>
          <Text style={{fontSize:20,}}>12 min Away From you</Text>
          </View>
        </View>


        <Text style={styles.title}>Reviews </Text>
        <View>
       
           <View style={[styles.Bigcard2 ,{backgroundColor:'white'}]}>
               <Image source={{ uri: "https://picsum.photos/400/300" }} style={styles.Image2} />
            </View>
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center ",
    margin: 10,
  },
  container2: {
    margin: 2,
  },
  card: {
    height: 120 ,
    width: 120,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  card2: {
    height: 120,
    width: 120,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "600",
    color: "white",
  },
  /* 🔹 Fixed Big Card */
  Bigcard: {
    height: 600,
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    marginVertical: 10,
  },
  Bigcard2: {
    height: 300,
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    marginVertical: 10,
  }
  ,
  bigImage: {
    width: "100%",
    height: "300",
    borderRadius: 10,
  },
  Image2:{
    width: "50",
    height: "50",
    borderRadius: 50,
  },
  bigCardText: {
    // position: "absolute",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent background
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;
