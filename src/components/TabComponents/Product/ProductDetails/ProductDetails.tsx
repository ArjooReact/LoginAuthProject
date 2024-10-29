import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import {ProductDetailType} from './ProductDetailsType';
import {TextSection} from './ProductDetailsType';
const ProductDetails: React.FC<ProductDetailType> = (props: any) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageSection}>
        <Image
          style={{width: '100%', height: 300}}
          source={{
            uri: props.data.thumbnail,
          }}></Image>
      </View>
      <View style={styles.detailsSection}>
        <View style={styles.detailSectionFirst}>
          <TextSection
            title="Category:"
            value={props.data.category}></TextSection>
          <TextSection title="Brand:" value={props.data.title}></TextSection>
        </View>
        <View style={styles.detailsSectionSecond}>
          <TextSection title="Price:" value={props.data.price}></TextSection>
          <TextSection
            title="Discount%:"
            value={props.data.discountPercentage}></TextSection>
        </View>
        <View style={styles.detailSectionThird}>
          <TextSection title="Rating:" value={props.data.rating}></TextSection>
          <TextSection
            title="ReturnPolicy:"
            value={props.data.returnPolicy}></TextSection>
        </View>
        <View style={styles.detailsSectionFourth}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '800',
              color: 'black',
              marginLeft: 8,
            }}>
            Description:
          </Text>
          <Text>{props.data.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    flex: 1,
  },
  imageSection: {
    // flex:.6,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  detailsSection: {
    //flex:.4,
    width: 'auto',
    height: 200,
    backgroundColor: '#ffffff',
  },
  detailSectionFirst: {
    flex: 0.2,
    backgroundColor: 'green',
    flexDirection: 'row',
  },
  detailsSectionSecond: {
    flex: 0.2,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  detailSectionThird: {
    flex: 0.2,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  detailsSectionFourth: {
    flex: 0.4,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    paddingRight: 30,
  },
  detailsSectionInnerSubView: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});

export default React.memo(ProductDetails);
