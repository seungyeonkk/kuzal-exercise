import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity, StyleSheet} from "react-native";

const CardView = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    shadow-color: #4d4d4d;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.1;
    shadow-radius: 1px;
    margin-top: 10px;
    height: 100px;
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-left: 10px;
    flex:6;
`

const ExerciseCard = props => {
    // title, onPress

    console.log(props.exercise)

    // TODO: 운동 설정 화면 이동

    return (
        <CardView>
            <Title>{props.title}</Title>
        </CardView>
    );
}


export default ExerciseCard;
