import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Pressable, Text } from "react-native"
import ProducrScreen from "./screens/ProducrScreen"
import ProductDetailScreen from "./screens/ProductDetailScreen"
import ShoppingCart from "./screens/ShoppingCart"
import { FontAwesome5 } from '@expo/vector-icons'
import { useDispatch, useSelector } from "react-redux"
import { selectNumberOfItems } from "./store/cartSlice"

const Stack = createNativeStackNavigator()

const Navigation = () => {

    const dispatch =useDispatch()

    const numberOfItems =useSelector(selectNumberOfItems)

    return (<NavigationContainer>
        <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:'white'}}}>
            <Stack.Screen name="Products" component={ProducrScreen} options={({ navigation }) => (
                {
                    headerRight: () => <Pressable style={{ flexDirection: 'row' }} onPress={() => { navigation.navigate('Cart') }}>

                        <FontAwesome5 name='shopping-cart' size={18} color='gray' />
                        <Text style={{ marginLeft: 5, fontWeight: '500' }}>{numberOfItems}</Text>
                    </Pressable>
                }
            )} />
            <Stack.Screen name="Product Detail" component={ProductDetailScreen} options={{ presentation: 'modal' }} />
            <Stack.Screen name="Cart" component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>)
}


export default Navigation