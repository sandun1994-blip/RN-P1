import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from './src/data/products';
import ProducrScreen from './src/screens/ProducrScreen';


export default function App() {
  return (
    <View style={styles.container}>
<ProducrScreen/>

    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{width:'100%',aspectRatio:1},
  itemContainer:{
    width:'50%',
    padding:1

  }
});
