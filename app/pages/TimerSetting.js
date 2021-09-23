import React, { useRef } from "react";

import styled from "styled-components/native";
import { Animated, StyleSheet, TextInput, Text } from 'react-native';
import TimerButton from "../components/buttons/TimerButton";

const Container = styled.View`
    flex: 1;
`;

const BackGroundContainer = styled.View`
    flex: 1;
    background-color: #0080FF;
    padding: 15px;
`;

const ContentContainer = styled.View`
    flex: 1;
    padding: 15px;
`;

const ScrollContainer = styled.ScrollView`
    flex: 3;
    margin-top: 10px;
`;

const ButtonGroupContainer = styled.View`
    flex: 1;
`;

const ButtonGroup = styled.View`
    flex-direction: row;
    justify-content: space-around;
    height: 50px;
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

const ExerciseTitleInput = styled.TextInput.attrs({
    placeholderTextColor: '#D8D8D8'
})`
    color: #000000;
    font-size: 35px;
    font-weight: bold;
`

const TimerSetting = () => {
    const [value, onChangeText] = React.useState('');
    const ContentAnimation = useRef(new Animated.Value(500)).current;

    const showBottomContainer = () => {
        Animated.spring (
            ContentAnimation, {
                toValue : 100,
                friction : 8,
                tension : 70,
                useNativeDriver: false
        }).start();
    };

    showBottomContainer();

    return (
        <Container>
            <BackGroundContainer>
                <Row>
                    <NormalText>오늘은</NormalText>
                </Row>
                <Row>
                    <HighlightText>어떤 운동</HighlightText>
                    <NormalText>을 하세요?</NormalText>
                </Row>
            </BackGroundContainer>
            <Animated.View style={[{top: ContentAnimation}, styles.animatedView]}>
                <ContentContainer>
                    {/* 운동명 입력 input -> 컴포넌트로? */}
                    <ExerciseTitleInput
                        placeholder={"운동명을 입력해주세요."}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <ScrollContainer contentInset={{bottom: 5, top: 5}}>
                        {/* 운동시간, 휴식시간 목록 */}

                    </ScrollContainer>
                    {/* 운동시간, 휴식시간 추가 버튼 그룹 */}
                    <ButtonGroupContainer>
                        <ButtonGroup>
                            <TimerButton title="운동 시간"></TimerButton>
                            <TimerButton title="휴식 시간"></TimerButton>
                        </ButtonGroup>
                    </ButtonGroupContainer>
                </ContentContainer>
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
        backgroundColor: '#f5f5f5'
    }

});

export default TimerSetting;
