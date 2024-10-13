import React from "react";
import { StyleSheet,SafeAreaView,Text } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";

const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
return(<SafeAreaView>
    <Text>{title}</Text>
    </SafeAreaView>)
}

export default DashBoardScreen