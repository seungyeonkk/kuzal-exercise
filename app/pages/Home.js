import React, {useLayoutEffect, useEffect} from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import ExerciseCard from "../components/home/ExerciseCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimerCard from "../components/settings/TimerCard";
import Exercise from "../domains/Exercise";

const Container = styled.View`
    flex: 1;
    padding: 15px;
`;

const Home = ({ navigation }) => {

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
                    navigation.navigate('TimerSetting');
                }}/>
            )
        });
    }, []);

    useEffect( () => {

        // TODO: 조회한 운동목록 화면에 표시 되도록
        async function getExercises() {
            // useEffect에서 async를 하면 sideEffect가 발생하는걸 해결함
            const exercisesFromStorage = await AsyncStorage.getItem('exercises');
            console.log("조회한 목록", exercisesFromStorage);
            setExercises(JSON.parse(exercisesFromStorage));
        }
        getExercises();


        console.log("조회한 목록2 ", exercises);

    }, []);


    return (
        <Container>
            {/*{exercises.map( (exercise, index) => (
                <ExerciseCard title={exercise.name} key={index}></ExerciseCard>
            ))}*/}

        </Container>
    );
}

export default Home;
