import React from "react"; //제일 먼저 리액트를 불러오는 일
import { View,Text } from "react-native";

function Greeting(props){
    return(
      <>
        <View>
          <Text>안녕하세요 {props.name}!</Text>  
        </View>
          <Text>Extra Text!</Text>
        </>
        
    );
}

Greeting.defaultProps={
  name: '리액트 네이티브'
};
export default Greeting;// 다른파일에서 외부 컴포넌트 호출