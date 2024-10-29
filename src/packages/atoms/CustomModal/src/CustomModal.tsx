import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  Button,
  Text,
} from 'react-native';
import {CustomModalType} from './CustomModalType';
import styles from './CustomModalStyles';
const CustomModal: React.FC<CustomModalType> = props => {
  const {title, isModalVisible, onClickModal, children} = props;
  return (
    <SafeAreaView>
      {isModalVisible ? (
        <Modal
          animationType="slide"
          hardwareAccelerated
          transparent={true}
          statusBarTranslucent={true}>
          <View style={styles.modalMainContainer}>
            <View style={styles.modalInnerContainer}>
              <View style={styles.modalHeaderContainer}>
                <View style={styles.headerLeftContainer}></View>
                <View style={styles.headerCenterContainer}>
                  <Text
                    style={styles.headerFontStyle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {props.title}
                  </Text>
                </View>
                <View style={styles.headerRightContainer}>
                  <Button title="close" onPress={onClickModal}></Button>
                </View>
              </View>

              <View>{children}</View>
            </View>
          </View>
        </Modal>
      ) : //  </View>
      null}
    </SafeAreaView>
  );
};

export default React.memo(CustomModal);
