import React,{useEffect,useState} from "react";
import { StyleSheet,SafeAreaView,Text,FlatList, View,ListRenderItem } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import axiosInstance from "../../api/AxiosInstance";

 interface listDataType{
    body:string,
    id:number,
    title:string,
    userId:number
 }
const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
const[data,setData]=useState<any>()

    useEffect(()=>{
        console.log('calling useEffect')
        getData()
    },[])

    const renderItem:ListRenderItem<listDataType>=({item})=>{
        return(<View style={{width:'90%',height:40,backgroundColor:'skyblue',margin:10,borderRadius:10,alignContent:'center',justifyContent:'center'}}>
            <Text>{item.title}</Text>
        </View>)
    }
   

    const getData:any=async()=>{
        const response=await axiosInstance.get('/posts')
        let listData=JSON.parse(JSON.stringify(response)).data
        setData(listData)
       // console.log('RESPONSEww...',JSON.parse(JSON.stringify(response)).data)
       
        return response
    }
return(<SafeAreaView>
    <Text>{title}</Text>
    <FlatList
    data={data}
    keyExtractor={(item:listDataType)=>item.title}
    renderItem={renderItem}
    >

    </FlatList>
    </SafeAreaView>)
}

export default DashBoardScreen