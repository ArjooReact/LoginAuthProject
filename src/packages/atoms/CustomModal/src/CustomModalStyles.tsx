import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    modalMainContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        bottom: 0,
        flexDirection: 'row',
      },
      modalInnerContainer: {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'skyblue',
        borderTopEndRadius: 14,
        borderTopStartRadius: 14,
      },
      modalHeaderContainer: {
        width: '100%',
        height: 40,
        backgroundColor: 'green',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
      },
      headerLeftContainer:{
        flex: 0.15,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 14,
      },
      headerCenterContainer:{
        flex: 0.7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerRightContainer:{
        flex: 0.15,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 14,
      },
      headerFontStyle:{
        fontSize: 20, 
        fontWeight: '800'
      }
})

export default styles