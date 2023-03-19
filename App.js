import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/store/store';



export default function App() {
  return (
    <Provider store={store}>
 
<Navigation/>

    
      <StatusBar style="auto" />
   
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
 
});
