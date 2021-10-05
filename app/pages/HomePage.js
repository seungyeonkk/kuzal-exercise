import React, {useLayoutEffect, useEffect} from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import ExerciseCard from "../components/home/ExerciseCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';


const ScrollContainer = styled.ScrollView`
    flex: 1;
    padding: 15px;
`;

const HomePage = ({ navigation }) => {
    const isFocused = useIsFocused();
    const [exercises, setExercises] = React.useState([]);

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
                <Button title="추가" color="#ffffff" onPress={() => {
                    navigation.navigate('TimerSettingPage');
                }}/>
            )
        });

    }, []);

    useEffect( () => {

        const getExercises = async () => {
            // useEffect에서 async를 하면 sideEffect가 발생하는걸 해결함
            const exercisesFromStorage = await AsyncStorage.getItem('exercises');
            setExercises(JSON.parse(exercisesFromStorage));
        }

        if(isFocused) getExercises();

    }, [isFocused]);

    // 타이머 화면 이동
    const goTimerPage = (exercise) => {
        navigation.navigate('TimerPage', {exercise: exercise});
    }

    return (
        <ScrollContainer>
            {exercises.map( (exercise, index) => (
                <ExerciseCard title={exercise.name} key={index} onPress={ () => {
                    goTimerPage(exercise);
                }}></ExerciseCard>
            ))}
        </ScrollContainer>
    );
}

export default HomePage;
