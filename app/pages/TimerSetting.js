import React, { useRef } from "react";

import styled from "styled-components/native";
import { Animated, StyleSheet } from 'react-native';

const Container = styled.View`
    flex: 1;
`;

const TopContainer = styled.View`
    flex: 1;
    background-color: #0080FF;
    padding: 15px;
`;
const Row = styled.View`
    flex-direction: row;
`;
const HighlightText = styled.Text`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
`;
const NormalText = styled.Text`
    color: #ffffff;
    opacity: 0.5;
    font-size: 30px;
    font-weight: bold;
`;
const ExerciseText = styled.Text`
    color: #000000;
    font-size: 35px;
    font-weight: bold;
`;

const BottomContainer = styled.View`
    flex: 1;
    padding: 15px;
`;

const TimerSetting = () => {

    const flexAnimation = useRef(new Animated.Value(500)).current;

    const showBottomContainer = () => {
       /*
       이것은 따로 정리 예정
       Animated.timing(flexAnimation, {
            toValue: 100,
            duration: 300,
            useNativeDriver: false
        }).start();
        */
        Animated.spring (
            flexAnimation, {
                toValue : 100,
                friction : 8,
                tension : 70,
                useNativeDriver: false
        }).start();
    };

    showBottomContainer();

    return (
        <Container>
            <TopContainer>
                <Row>
                    <NormalText>오늘은</NormalText>
                </Row>
                <Row>
                    <HighlightText>어떤 운동</HighlightText>
                    <NormalText>을 하세요?</NormalText>
                </Row>
            </TopContainer>
            <Animated.View style={[{top: flexAnimation}, styles.animatedView]}>
                <BottomContainer>
                    <ExerciseText>이곳은 설정 영역</ExerciseText>
                </BottomContainer>
            </Animated.View>
        </Container>
    );
}

const styles = StyleSheet.create({

    animatedView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#ffffff'
    }

});

export default TimerSetting;
