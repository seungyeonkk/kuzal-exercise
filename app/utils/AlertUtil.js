import { Alert } from 'react-native';

export default class AlertUtil {

    constructor() {
    }

    static show (content, buttons = [ {text: "확인"} ]) {
        Alert.alert(
            '알림',
            content,
            buttons,
            { cancelable: false }
        );
    }
}
