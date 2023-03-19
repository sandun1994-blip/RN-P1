import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectSubtotal } from '../store/cartSlice'
export default function ShoppingCart() {


    const cartItems =useSelector(state=>state.cart.item)






const ShoppingCartTotals =()=>{

    
const subTotal =useSelector(selectSubtotal)

    return (   <View style={styles.totalContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>{subTotal} US$</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>270 US$</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>{subTotal+270} US$</Text>
        </View>
    </View>)
}

    const addCard =()=>{
        console.log('add to cart')
      }
    return (<>
        <FlatList data={cartItems} renderItem={(({ item }) => <CartListItem cartItem={item} />)}

            ListFooterComponent={() => (
                <ShoppingCartTotals/>
            )}
        />

        <Pressable style={styles.button} onPress={addCard}>
  <Text style={styles.buttonText}>CHECKOUT</Text>
</Pressable>
</>
    )
}

const styles = StyleSheet.create({
    totalContainer: {
        paddingTop: 10,
        margin: 20,
        borderColor: 'gainsboro',
        borderTopWidth: 1

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:2
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        color: 'gray',
        fontWeight:'500'
    }
    ,
  button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width:'90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:'center'

  },
  buttonText:{
    color:'white',
    fontWeight:'500',
    fontSize:16
  }
})