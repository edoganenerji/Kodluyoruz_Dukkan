import { StyleSheet, Dimensions } from "react-native";

const dimension = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        margin:3,
        flexDirection:"row",
        backgroundColor:`#fff8dc`,
    },
    imageContainer:{
        justifyContent:"center",
        backgroundColor:"white"
    },
    image:{
        width:dimension.width/3,
        minHeight:100,
        backgroundColor:"white",
        resizeMode:"contain"
    },
    bodyContainer:{
        backgroundColor:`#fff8dc`,
        flex:1,
        padding:5
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom:3,
    },
    price:{
        flex:1,
        fontStyle:"italic",
        fontWeight:"bold",
        fontSize:18,
        textAlign:"right",
        textAlignVertical:"center",
    },
    seperator:{
        borderWidth:0.5,
        borderColor:`#6a5acd`

    }
})