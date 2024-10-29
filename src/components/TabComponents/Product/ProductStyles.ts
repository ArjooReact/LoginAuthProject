import React from "react";
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    mainViewContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        flex: 1,
        width: '100%',
        backgroundColor: 'skyblue',
      },
      cardContainer: {
        width: '94%',
        margin: 10,
        height: 120,
        borderRadius: 8,
        backgroundColor: 'sky',
        display: 'flex',
        flexDirection: 'row',
      },
      cardImageContainer: {
        flex: 0.3,
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 12,
        borderTopLeftRadius: 12,
      },
      cardDetailsContainer: {
        flex: 0.7,
        backgroundColor: 'green',
        borderBottomRightRadius: 12,
        borderTopRightRadius: 12,
        flexDirection: 'column',
      },
      imageStyle: {
        width: 110,
        height: 120,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 8,
      },
      cardDetailsFirstSection: {
        flex: 0.3,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        borderTopEndRadius: 12,
      },
      cardDetailsSecondSection: {
        flex: 0.3,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
      },
      cardDetailsThirdSection: {
        flex: 0.4,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 6,
        paddingRight: 6,
        borderBottomEndRadius: 12,
      },
})

export default styles