import React, {useState,useEffect} from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "react-native-config";
import ProductCard from "../../components/ProductCard";
import styles from "./Products.style";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
const Products = ({navigation}) => {
    const {error, loading, data} = useFetch(Config.API_URL)

    if (error) {
        return <Error/>
    }
    if (loading) {
        return <Loading />
    }

    const handleProductSelect = id => {
        navigation.navigate("DetailScreen",{id})
    }

    const renderProduct = ({item}) => <ProductCard products={item} onSelect={()=>handleProductSelect(item.id)}/>;
    return(
        <SafeAreaView>
            <FlatList 
            data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Products;