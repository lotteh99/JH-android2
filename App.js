/*import React, {useState} from "react";
import {SafeAreaView, Button} from "react-native";
import Box from './components/Box'; //Greeting 컴포넌트를 App 컴포넌트에 호출

const App =() => {
const [visible, setvisible] = useState(true);
const onPress= () => { // onPress라는 함수 선언
  setvisible(!visible); // setvisible함수를 호출해서 visible 값을 반전시킴 
};

return(
 <SafeAreaView>
   <Button title="토글" onPress={onPress} />
   {visible ? <Box rounded={true} size="larage" color="blue"/>
   :null}
  </SafeAreaView>
);
};

export default App;*/

import React, {useState}from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Counter from "./components/Counter";



const App = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1)
  const onDecrease = () => setCount(count - 1)
  return ( 
    <SafeAreaView style={styles.full}> 
    <Counter  a={count} b={onIncrease} c={onDecrease} />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;