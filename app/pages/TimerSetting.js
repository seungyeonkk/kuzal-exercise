import React, { useRef, useLayoutEffect } from "react";

import styled from "styled-components/native";
import { Animated, StyleSheet, Button, Alert } from 'react-native';
import TimerButton from "../components/buttons/TimerButton";
import TimerCard from "../components/settings/TimerCard";
import Timer from "../domains/Timer";
import Exericse from "../domains/Exercise";
import AlertUtil from "../utils/AlertUtil";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    flex: 5;
    margin-top: 10px;
`;

const ButtonGroupContainer = styled.View`
    flex: 2;
    padding-top: 20px;
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
    margin-top: 10px;
`

const TimerSetting = ({ navigation }) => {
    const [value, onChangeText] = React.useState('');
    const [timers, setTimers] = React.useState([ new Timer('EXERCISE')]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: '',
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: '#0080FF',
                borderBottomColor: '#0080FF',
                borderBottomWidth: 0,
                shadowColor: 'transparent'
            },
            headerRight: () => (
                <Button title="완료" color="#ffffff" onPress={() => {
                    save();
                }}/>
            )
        });
    }, [timers, value]);

    const ContentAnimation = useRef(new Animated.Value(800)).current;

    const showBottomContainer = () => {
        Animated.sequence([
            Animated.delay(200),
            Animated.spring (
                ContentAnimation, {
                    toValue : 100,
                    friction : 10,
                    tension : 70,
                    useNativeDriver: false
                })
        ]).start();
    };

    showBottomContainer();

    // 타이머 추가
    const addTimer = type => {
        let newTimer = new Timer(type);
        timers.push(newTimer);
        setTimers([...timers]);
    }

    // 타이머 삭제
    const removeTimer = id => {
        for(let i = 0; i < timers.length; i++) {
            if(timers[i].id == id) {
                timers.splice(i, 1);
            }
        }
        setTimers([...timers]);
    }

    // 운동 저장
    const save = () => {
        Alert.alert(
            "알림",
            "저장하시겠습니까?",
            [{ text: "취소", style: "cancel" },
                { text: "확인", onPress: async () => {

                    try {
                        const newExercise = new Exericse(value, timers);
                        let exercises = JSON.parse(await AsyncStorage.getItem('exercises'));

                        if(exercises == null) {
                            const newExercises = [newExercise];
                            await AsyncStorage.setItem('exercises', JSON.stringify(newExercises));
                        }else {
                            exercises.push(newExercise);
                            await AsyncStorage.setItem('exercises', JSON.stringify(exercises));
                        }
                    } catch (e) {
                        AlertUtil.show('타이머 등록을 실패하였습니다.');
                    }
                }}
            ],
            { cancelable: false }
        );
    }

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
                    {/* 운동명 입력 input */}
                    <ExerciseTitleInput
                        placeholder={"운동명을 입력해주세요."}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <ScrollContainer contentInset={{bottom: 15, top: 15}}>
                        {/* 운동시간, 휴식시간 목록 */}
                        {timers.map( (timer, index) => (
                            <TimerCard title={timer.title} key={index} timer={timer} onPress={removeTimer}></TimerCard>
                        ))}
                    </ScrollContainer>
                    {/* 운동시간, 휴식시간 추가 버튼 그룹 */}
                    <ButtonGroupContainer>
                        <ButtonGroup>
                            <TimerButton title="운동 시간" onPress={ () => {
                                addTimer('EXERCISE');
                            }}></TimerButton>
                            <TimerButton title="휴식 시간" onPress={ () => {
                                addTimer('REST');
                            }}></TimerButton>
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
