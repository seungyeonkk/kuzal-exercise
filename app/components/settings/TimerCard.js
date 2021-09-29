import React from "react";
import styled from "styled-components/native";
import {TouchableOpacity, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
    margin-left: 10px;
    flex:6;
`

const TimeInput = styled.TextInput.attrs({
    placeholderTextColor: '#D8D8D8',
    textAlign: 'center'
})`
    color: #000000;
    font-size: 30px;
    font-weight: bold;
    flex:2;
`;

const TimerCard = props => {
    // title, icon, onPress

    const [time, setTime] = React.useState(props.timer.sec);

    const onChangeTime = text => {
        props.timer.sec = text.replace(/[^0-9]/g, '')
        setTime(props.timer.sec);
    }

    return (
        <CardView>
            <Title>{props.title}</Title>
            <TimeInput
                placeholder="초"
                maxLength={3}
                keyboardType='numeric'
                onChangeText={onChangeTime}
                value={props.timer.sec}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                props.onPress(props.timer.id);
            }}>
                <Icon name='close-outline' size={30} color={'#000000'}/>
            </TouchableOpacity>
        </CardView>
    );
}

const styles = StyleSheet.create({

    button: {
       flex: 1
    }

});

export default TimerCard;
