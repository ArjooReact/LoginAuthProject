import React from 'react';
import {StyleSheet, SafeAreaView, View,Modal,Button,Text} from 'react-native';
import {CustomModalType} from './CustomModalType';

const CustomModal: React.FC<CustomModalType> = props => {
  const {title, isModalVisible, onClickModal, children} = props;
  return <SafeAreaView>
        {isModalVisible ? (
        //  <View style={styles.modalParentContainer}>
          <Modal
          animationType='slide'
          hardwareAccelerated
          transparent={true}
          statusBarTranslucent={true}
          >
   
            {/* <View style={[styles.modalContainer,styles[`modal${type}`]]}> */}
           
            {/* <View style={styles.centerModalContainer}> */}
            <View style={styles.bottomModalContainer}>
                {/* <View style={{width:'90%',height:'auto',justifyContent:'center',alignItems:'center',backgroundColor:'#87CEEB',borderColor:'red',borderRadius:10}}> */}
                <View style={{width:'100%',height:'auto',position:'absolute',bottom:0,backgroundColor:'skyblue',borderTopEndRadius:14,borderTopStartRadius:14}}>
                  <View style={{width:'100%',height:40,backgroundColor:'green',display:'flex',flex:1,flexDirection:'row',borderTopRightRadius:14,borderTopLeftRadius:14}}>
                    <View style={{flex:0.15,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',borderTopLeftRadius:14}}></View>
                    <View style={{flex:.7,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'800'}}>{props.title}</Text>
                    </View>
                    <View style={{flex:0.15,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center',borderTopRightRadius:14}}>
                    <Button
                title='close'
                onPress={onClickModal}
                ></Button>
                    </View>
                  </View>
               
                 
                <View>
                    {children}
                </View>
            </View>
            </View>
          </Modal>
        //  </View>
      ) : null}
  </SafeAreaView>;
};

const styles = StyleSheet.create({
    mainContainer: {
      flex:0,
      justifyContent: 'flex-end',
    },
    button: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      width: '90%',
      height: 30,
      backgroundColor: '#ffbb00',
      borderRadius: 4,
    },
    modalContainer: {
      flex:1,
      width: '100%',
      backgroundColor: 'yellow',
     position:'absolute',
     bottom:0
    
    },
    centerModalContainer:{
     flex:1,
     height:'100%',
     backgroundColor:'rgba(0,0,0,0)',
     justifyContent:'center',
     alignItems:'center'
    },
    bottomModalContainer:{
      flex:1,
      height:'100%',
      backgroundColor:'rgba(0,0,0,0)',
      bottom:0,
      flexDirection:'row'
    },
   modalCloseButton:{
      width:'60%',
      height:0
    },
  modalWrapperContent:{
  height:'auto'
  },modalCenteredView:{
  height:'60%'
  }
  });

export default React.memo(CustomModal);
