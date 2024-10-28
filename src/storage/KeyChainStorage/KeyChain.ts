import * as Keychain from 'react-native-keychain';
export let GLOBAL_USER_NAME = '';
export let GLOBAL_PIN = '';
export let GLOBAL_TOKEN = '';

export const getCredentialsUsingKeychain = async () => {
  let credentials = await Keychain.getGenericPassword();
  console.log('INNER CRED', credentials);
  try {
    if (credentials) {
      return credentials;
    } else {
      return 'Data Not Stored';
    }
  } catch (error) {
    console.log('Error While Fetching Data From Keychain', error);
  }
};

export const getCredentials = async () => {
  let token_val = await getCredentialsUsingKeychain().then(response => {
    console.log('hhhhh', response);
    return response;
  });
  console.log('TOOOOOOO', token_val);
  if (token_val) {
    let credentialObj = JSON.parse(JSON.stringify(token_val));
    console.log('CREDDUUU', credentialObj);
  } else {
    console.log('KEY CHAIN ACCESS DATA FLUSHED:::::');
  }
};

export const flushCredentials = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('DATA FLUSHED SUCCESSFULLY..');
  } catch (error) {
    console.log('Error While Flushing Data::::', error);
  }
};

export async function saveCredentialsUsingKeychain(
  dataObject: string,
  password: string,
) {
  
    try {
      let credentials = JSON.stringify(dataObject);
      await Keychain.setGenericPassword( dataObject, password);
      console.log('Internet Credentials Data Saved...');
    } catch (error) {
      console.log('Error while save internet credentials:::', error);
    }
 
}