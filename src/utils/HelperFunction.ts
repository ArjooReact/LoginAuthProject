import {showMessage} from "react-native-flash-message";

export const showError = (message:any) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message
    })
}

export const showSuccess = (message:any) => {
    showMessage({
        type: 'success',
        icon: 'success',
        message
    })
}