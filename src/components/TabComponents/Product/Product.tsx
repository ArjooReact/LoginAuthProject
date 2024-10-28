import React,{useState,useEffect} from "react";
import { ProductType } from "./ProductType";
import { SafeAreaView,Text,FlatList,ListRenderItem ,View, StyleSheet,Image,TouchableOpacity, Alert} from "react-native";
import { useGetProductListingQuery } from "../../../rtk/api/ProductApi";
import { ProductResponse,ProductListType } from "./ProductType";
import CustomButton from "../../../packages/atoms/Button/src";
import CustomModal from "../../../packages/atoms/CustomModal/src/CustomModal";
import ProductDetails from "./ProductDetails/ProductDetails";
const Product:React.FC<ProductType>=()=>{
  const {data}=useGetProductListingQuery('')
  //console.log('PRODUCT LISTING DATA......',data)
  const [product,setProduct]=useState<ProductResponse>()
  const[isModalVisible,setIsModalVisible]=useState<boolean>(false)
  const[selectData,setSelectedDaa]=useState<any>()
  const onClickModal:any=()=>{
    setIsModalVisible(!isModalVisible)
  }
  const addToCart:any=()=>{
    console.log('clicked..')
  }
  const buyNow:any=()=>{
    console.log('clicked...')
  }
  function loadDeatails(item:ProductListType){
    return(  <View>
      <ProductDetails
      data={item}
      ></ProductDetails>
     </View>)
  }
  const renderItem:ListRenderItem<ProductListType>=({item})=>{
   return(<TouchableOpacity 
    onPress={()=>{
      console.log('clicked')
      setIsModalVisible(true)
      //Alert.alert(item.title)
      setSelectedDaa(item)
      loadDeatails(item)
    }}
   style={styles.cardContainer}>
    {isModalVisible?( <CustomModal
    isModalVisible={true}
    onClickModal={onClickModal}
    title={selectData?.title}
    >
      <View>
       <ProductDetails
       data={selectData}
       ></ProductDetails>
      </View>
    </CustomModal>):(null)}

    
   
    <View style={styles.cardImageContainer}>
      {/* <Text>{item.thumbnail}</Text> */}
      <Image
            style={styles.imageStyle}
            source={{
                uri: item.thumbnail,
              }}
            >

            </Image>
    </View>
    <View style={styles.cardDetailsContainer}>
   
    <View style={styles.cardDetailsFirstSection}>
      <Text style={{marginRight:12,marginLeft:8}}>Title</Text>
      <Text>{item.title}</Text>
    </View>
    <View style={styles.cardDetailsSecondSection}>
    <Text style={{marginRight:12,marginLeft:8}}>Price:</Text>
    <Text>{item.price}</Text>
    <Text style={{marginRight:12,marginLeft:8}}>Category</Text>
    <Text>{item.category}</Text>
    </View>
    <View style={styles.cardDetailsThirdSection}>
    <CustomButton
    btnTitle='AddToCart'
    btnColor="yellow"
    btnSize="small"
    titleColor="black"
    clickHandler={addToCart}
    >
      </CustomButton> 

      <CustomButton
    btnTitle='Buy Now'
    btnColor="orange"
    btnSize="small"
   titleColor="black"
   clickHandler={buyNow}
    >
      </CustomButton> 
    </View>
    </View>
  
   </TouchableOpacity>)
  }
  //const[listData,setListData]=useState()
  useEffect(()=>{
  if(data){
    setProduct(data)
    console.log('useeffect is calling.....')
  }
  //console.log('LIMITSSSSS.........',data.limit)
  },[data,selectData])
  return(<SafeAreaView style={styles.mainViewContainer}>
   <Text>Welcome To Product</Text>
  <FlatList
 
  data={product?.products}
  renderItem={renderItem}
  keyExtractor={(data:any)=>data.id}
  >
  </FlatList>
  </SafeAreaView>)
}

const styles= StyleSheet.create({
  mainViewContainer:{
   justifyContent:'center',
   alignContent:'center',
   display:'flex',
   flex:1,
   width:'100%',
   backgroundColor:'skyblue'
  },
  cardContainer:{
    width:'94%',
    margin:10,
    height:120,
    borderRadius:8,
    backgroundColor:'sky',
    display:'flex',
    flexDirection:'row',
   
  },
  cardImageContainer:{
    flex:.3,
    backgroundColor:'#ffffff',
    borderBottomLeftRadius:12,
    borderTopLeftRadius:12
  },
  cardDetailsContainer:{
    flex:.7,
    backgroundColor:'green',
    borderBottomRightRadius:12,
    borderTopRightRadius:12,
    flexDirection:'column',
  },
  imageStyle:{
    width:110,
    height:120,
    alignSelf:'center',
    alignContent:'center',
    borderRadius:8
},
cardDetailsFirstSection:{
   flex:.3,
   backgroundColor:'#ffffff',
   alignItems:'center',
   display:'flex',
   flexDirection:'row',
   borderTopEndRadius:12
},
cardDetailsSecondSection:{
  flex:.3,
  backgroundColor:'#ffffff',
  alignItems:'center',
  display:'flex',
   flexDirection:'row',
},
cardDetailsThirdSection:{
  flex:.4,
  backgroundColor:'#ffffff',
  alignItems:'center',
  display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   paddingLeft:6,
   paddingRight:6,
   borderBottomEndRadius:12
}

})
export default Product