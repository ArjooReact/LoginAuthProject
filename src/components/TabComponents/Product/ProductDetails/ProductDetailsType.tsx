import React from 'react'
import { ProductListType } from "../ProductType"
import { View,Text,StyleSheet } from 'react-native'
export interface ProductDetailType{
    title?:string
    data:ProductListType
}

export interface TextSectionType{
    title:string
    value:string|number
}

export const TextSection:React.FC<TextSectionType>=(props)=>{
    return(
     <View style={styles.detailsSectionInnerSubView}>
    <Text style={{fontSize:16,fontWeight:'800',color:'black', marginLeft:8}}>{props.title}</Text>
    <Text style={{fontSize:14,fontWeight:'500',color:'black',marginLeft:8}}>{props.value}</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    detailsSectionInnerSubView:{
        flex:0.5,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems:'center',
    }
})