import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%'
    },
    checkBoxContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-start',
      marginLeft: 20,
      alignItems: 'flex-end',
      alignContent: 'space-between',
      marginTop: 14,
    },
    checkBox:{
      width: 20,
      height: 20,
      backgroundColor: '#ffffff',
      alignSelf: 'flex-start',
    }
  });

  export default style