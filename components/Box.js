import React from "react";
import {View, StyleSheet} from "react-native";

function Box (props) {
    return (
    <View 
    style={[
        styles.Box,
        props.rounded && styles.rounded,
         sizes [props.size],
         {
             backgroundColor:props.color,
         },
        ]}
    />
    );
}
Box.defaultProps={
    size: 'medium',
    color: 'black',
};
const styles = StyleSheet.create({
    Box: {
        width:64,
        height:64,
        backgroundColor: 'pink',
    },
    rounded: {
        borderRadius: 16,
    },
    small:{
        width:32,
        height:32,
    },
    medium:{
        width:64,
        height:64,
    },
    larage:{
        width:128,
        height:128,
    },
});

const sizes={
    small: styles.small,
    medium: styles.medium,
    larage: styles.larage,
};

export default Box;