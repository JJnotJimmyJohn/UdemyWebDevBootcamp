var request = require("request");
request('https://jsonplaceholder.typicode.com/todos/1',function(error,response,body){
    if (error) {
        console.log('something went wrong!');
        console.log(error);
    } else {
       if (response.statusCode==200) {
           var parsedData = JSON.parse(body)
           console.log(typeof body);
           console.log(body);
           console.log(typeof parsedData);
           console.log(parsedData);
       } 
    }
});