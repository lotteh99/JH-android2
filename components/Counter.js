import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter ({count, onIncrease, onDecrease}) {
    return(
        <View style={styles.wrapper}> 
            <View style={styles.numberArea}>
                <Text style={styles.number}>{count}</Text>
            </View>
            <Button title="+1"  onPress={onIncrease}/>
            <Button title="-1"  onPress={onDecrease}/>
        </View>
    );
}
const styles =StyleSheet.create({
    wrapper: {
        flex: 1,  //view가 차지하는 모든 영역
    },
    numberArea: {
        flex: 1, //button컴포넌트를 제외한 모든영역
        alignItems: 'center',  //가로정렬을 하고 중앙에 결과값 표시
        justifyContent: 'center', //세로정렬을 하고 중앙에 결과값 표시
    },
    number: {
        fontSize: 72,
        fontWeight: 'bold',
    },
});
export default Counter;