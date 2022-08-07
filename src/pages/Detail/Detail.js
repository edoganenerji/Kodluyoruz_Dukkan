import React from "react";
import { Text, Image, View } from "react-native";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.style";

const Detail = ({route}) => {
    const {id} = route.params
    const {error, loading, data} = useFetch(`${Config.API_URL}/${id}`)

    if (loading) {
       return <Loading/>
    }

    if (error) {
        return <Error/>
    }

    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source = {{uri:data.image}}/>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.seperator}></View>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail;