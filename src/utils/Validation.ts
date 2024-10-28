import validator from 'is_js';
import { showError,showSuccess } from './HelperFunction';
import { Alert } from 'react-native';
const checkEmpty = (val:string, key:string) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val:string, minLength:number, key:string) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}
// export function isValidData(userName:string,passWord:string){
//     console.log('clicked:::')
//     const error:any = validator({
//       userName,
//       passWord,
//     });
//    console.log('ERROR:::',error)
//     if (error) {
//       showError(error);
//       Alert.alert(error);
//       return false;
//     } else {
//       showSuccess('Success123');
//       return true;
//     }
//   }
export default function (data:any) {
    const { userName, email, passWord } = data

    if (userName !== undefined) {
        let emptyValidationText = checkEmpty(userName, 'Please enter your user name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(userName, 3, 'userName')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }


    if (passWord !== undefined) {
        let emptyValidationText = checkEmpty(passWord, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(passWord, 6, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

}