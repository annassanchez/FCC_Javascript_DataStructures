//catch is the method used when your promise has been rejected
//it is exected immediately after a promise's reject method is called
myPromise.catch(error => {
  
});
//example: add the catch method to your promise. use error as the parameter of its callback function and log error to the console
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  makeServerRequest.catch(error => {
    console.log(error);
  });