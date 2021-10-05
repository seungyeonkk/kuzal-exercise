import React, {useLayoutEffect, useEffect} from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #0080FF;
`;

const Row = styled.View`
    flex-direction: row;
`;

// TODO: 아이콘 버튼 컴포넌트 만들기, 타이머 시작 기능 만들기

const TimerPage = ({ navigation }) => {

    return (
        <Container>
           <Button title='뒤로가기' color="#ffffff" onPress={ () => {
               navigation.goBack();
           }}/>
        </Container>
    );
}

export default TimerPage;
