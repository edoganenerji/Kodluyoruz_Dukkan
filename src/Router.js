import React from "react";
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/Products";
import Detail from "./pages/Detail";



const Stack = createNativeStackNavigator();

const Router = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name="ProductScreen" component={Products}
        options={{
          title:'Dükkan',
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTitleAlign:"center"
        }}
        />
        <Stack.Screen name="DetailScreen" component={Detail}
        options={{
          title:'Detay',
          headerStyle:{backgroundColor:"#64b5f6"},
          headerTitleStyle:{color:"white"},
          headerTintColor:"white",
          headerTitleAlign:"center"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;