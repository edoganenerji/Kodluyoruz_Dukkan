import { StyleSheet, Dimensions } from "react-native";
const dimension = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        margin:3,
    },
    image:{
        height:dimension.height/3,
        width:dimension.width,
        resizeMode:"contain",
        backgroundColor:"white"
    },

    bodyContainer:{
        backgroundColor:`#fff8dc`,
        padding:5,
        flex:1
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
    },
    desc:{
        fontSize:15
    },
    seperator:{
        borderWidth:0.5,
        borderColor:"#64b5f6",
    },
    price:{
        fontSize:15,
        textAlign:"right",
        fontStyle:"italic",
        fontWeight:"bold"
    }

})