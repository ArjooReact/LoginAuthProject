import axios from "axios";

const axiosInstance= axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    //Inside config will get multiple header parameters like
    //adapter,baseUrl,env,headers,maxBodylength,method,timeOut,transformRequest,transformRespone.etc
    //If we want to change any one of these request parameter before axios call we coould perform here
    //Here i want to add something more inside header params like testarzoo will add here now if we check 
    //config inside header new testArzoo object is added
    //=========In short term we conclude that here we modify our request params before triggered response =========

    Object.assign(config.headers,{testArzoo:'123456'})
   // console.log('Config......',config.headers)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //Initially i got response.data in this format [{},{}....{}], now i want to modified this data befre
    //coming response to UI this method will help to transform data ...will do the same with the help of Object.assign at the bottom
    //I need new response in the format of {userList:[{},{},....{}],message:'modifiedList'}
    //Will get the new response in this format after transform {userList:[{},{},....{}],message:'modifiedList'}

    //===============Important Line comment response transform eg ======================
   // Object.assign(response,{data:{userList:response.data,message:'modifiedUserList'}})
    console.log('RESPONSE PARAMSccc......',response.data)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


// axiosInstance.interceptors.request.use(async req =>{
//     console.log('REQUEST......',req)
// })

export default axiosInstance