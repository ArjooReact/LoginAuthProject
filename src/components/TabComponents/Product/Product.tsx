import React, {useState, useEffect} from 'react';
import {ProductType} from './ProductType';
import {
  SafeAreaView,
  Text,
  FlatList,
  ListRenderItem,
  View,
  TouchableOpacity,
} from 'react-native';
import {useGetProductListingQuery} from '../../../rtk/api/ProductApi';
import {ProductResponse, ProductListType} from './ProductType';
import styles from './ProductStyles';
import CustomModal from '../../../packages/atoms/CustomModal/src/CustomModal';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductCardView from './ProductUtils';
const Product: React.FC<ProductType> = () => {
  const {data} = useGetProductListingQuery('');
  const [product, setProduct] = useState<ProductResponse>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [passedData, setPassedData] = useState<any>();
  const [selectData, setSelectedDaa] = useState<any>();

  const onClickModal: any = () => {
    setIsModalVisible(!isModalVisible);
  };
  const cardClick: any = () => {
    setIsModalVisible(true);
  };

  const openModal = (selectData: ProductListType) => {
    setPassedData(selectData);
    setIsModalVisible(true);
  };

  const renderItem: ListRenderItem<ProductListType> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setPassedData(item);
          openModal(item);
        }}
        style={styles.cardContainer}>
        <ProductCardView
          item={item}
          cardClickHandler={cardClick}></ProductCardView>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    if (data) {
      setProduct(data);
      console.log('useeffect is calling.....');
    }
  }, [data, passedData]);
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <CustomModal
        isModalVisible={isModalVisible}
        onClickModal={onClickModal}
        title={selectData?.title}>
        <View>
          <ProductDetails data={passedData}></ProductDetails>
        </View>
      </CustomModal>
      <Text>Welcome To Product</Text>
      <FlatList
        data={product?.products}
        renderItem={renderItem}
        keyExtractor={(data: any) => data.id}></FlatList>
    </SafeAreaView>
  );
};

export default Product;
