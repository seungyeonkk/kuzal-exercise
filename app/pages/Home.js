import React from "react";
import { View, Text, Button } from "react-native";



const Home = ({ navigation }) => {

    return (
        <View>
            <Text>홈 화면입니다.</Text>
            <Button title="운동 설정 화면" onPress={ () => navigation.navigate('TimerSetting')}>
            </Button>
        </View>
    );
}

export default Home;
