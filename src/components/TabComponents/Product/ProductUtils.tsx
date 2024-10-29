import React, {useState} from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import CustomButton from '../../../packages/atoms/Button/src';
import styles from './ProductStyles';
import {ProductListType} from './ProductType';

interface ProductCardViewType {
  item: ProductListType;
  cardClickHandler: () => {};
}
export const ProductCardView: React.FC<ProductCardViewType> = ({
  item,
  cardClickHandler,
}) => {
  const [passedData, setPassedData] = useState<any>();
  const addToCart: any = (item: any) => {
    console.log('clicked..');
  };
  const buyNow: any = () => {
    console.log('clicked......');
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: item.thumbnail,
          }}></Image>
      </View>
      <View style={styles.cardDetailsContainer}>
        <View style={styles.cardDetailsFirstSection}>
          <Text style={{marginRight: 12, marginLeft: 8}}>Title</Text>
          <Text>{item.title}</Text>
        </View>
        <View style={styles.cardDetailsSecondSection}>
          <Text style={{marginRight: 12, marginLeft: 8}}>Price:</Text>
          <Text>{item.price}</Text>
          <Text style={{marginRight: 12, marginLeft: 8}}>Category</Text>
          <Text>{item.category}</Text>
        </View>
        <View style={styles.cardDetailsThirdSection}>
          <CustomButton
            btnTitle="AddToCart"
            btnColor="yellow"
            btnSize="small"
            titleColor="black"
            clickHandler={addToCart}></CustomButton>

          <CustomButton
            btnTitle="Buy Now"
            btnColor="orange"
            btnSize="small"
            titleColor="black"
            clickHandler={buyNow}></CustomButton>
        </View>
      </View>
    </View>
  );
};

export default ProductCardView;
