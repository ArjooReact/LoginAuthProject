import React from "react"
import { StyleSheet } from "react-native"

const styles=StyleSheet.create({
    mainContainer:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'skyblue',
    flex:1     
    },
    imageSection:{
       // flex:.6,
        width:'100%',
        backgroundColor:'#ffffff'
    },
    detailsSection:{
        //flex:.4,
        width:'auto',
        height:200,
        backgroundColor:'#ffffff'
    },
    detailSectionFirst:{
       flex:0.2,
       backgroundColor:'green',
       flexDirection:'row',
    },
    detailsSectionSecond:{
      flex:0.2,
      backgroundColor:'skyblue',
      flexDirection:'row',
    },
    detailSectionThird:{
      flex:0.2,
      backgroundColor:'white',
      flexDirection:'row',
    },
    detailsSectionFourth:{
      flex:0.4,
      backgroundColor:'#ffffff',
      flexDirection:'row',
      paddingRight:30
    },
    detailsSectionInnerSubView:{
        flex:0.5,
        flexDirection:'row',
        backgroundColor:'#ffffff',
        alignItems:'center',
    }
})

export default styles