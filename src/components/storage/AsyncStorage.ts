import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataInLocalStorage = async (KEY:any, VALUE:any) => {
    let data = JSON.stringify(VALUE);
  try {
    await AsyncStorage.setItem(KEY, data);
  } catch (error) {
    console.error(error);
  }
};

export const getDataFromLocalStorage = async (KEY:any) => {
  try {
    const value = await AsyncStorage.getItem(KEY);
    if (value !== null) {
        //value = JSON.parse(value);
      return value;
      //console.log(value);
    }
  } catch (error) {
    console.error(error);
    return error;
  }
  return 'Value inside localStorage is blank!!';
};

export function clearAsyncStorage() {
	return AsyncStorage.clear();
}

export  async function clearUserSpecificData(REMOVE_KEY:any) {
    try {
        await AsyncStorage.removeItem(REMOVE_KEY);
        return true;
    }
    catch(exception) {
        return false;
    }
}