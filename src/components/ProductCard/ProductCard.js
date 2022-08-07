import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./ProductCard.style"
const ProductCard = ({products, onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View   style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri:products.image}} />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{products.title}</Text>
                    <View style={styles.seperator}/>
                    {/* <Text style={styles.description}>{products.description}</Text> */}
                    <Text style={styles.price}>{products.price} TL</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ProductCard;