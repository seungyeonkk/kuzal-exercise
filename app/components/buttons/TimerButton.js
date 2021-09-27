import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ButtonView = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    shadow-color: #4d4d4d;
    shadow-offset: 2px 2px;
    shadow-opacity: 0.3;
    shadow-radius: 2px;
`;

const Title = styled.Text`
    font-size: 17px;
    color: #000000;
    margin-left: 10px;
`;

const TimerButton = props => {

    // title, onPress

    return (
        <TouchableOpacity onPress={props.onPress}>
            <ButtonView>
                <Icon name='add' size={30} color={'#000000'}/>
                <Title>{props.title}</Title>
            </ButtonView>
        </TouchableOpacity>
    );
}

export default TimerButton;
