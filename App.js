import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import products from './src/data/products';
import ProducrScreen from './src/screens/ProducrScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';


export default function App() {
  return (
    <View style={styles.container}>
{/* <ProducrScreen/> */}
<ProductDetailScreen/>

    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
 
});
