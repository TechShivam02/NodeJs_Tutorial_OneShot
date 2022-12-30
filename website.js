const http = require("http");

const port = process.env.PORT  || 3000;

const fs = require('fs');

const server = http.createServer((req,res) => {
    
    console.log(req.url);
    res.setHeader('Content-Type' , 'text/html')



    if(req.url == '/'){
        res.statusCode = 200;
        res.end("<h1>This is Base url </h1> <p> hello world Shivam  </p>");
    }

    else if(req.url == '/about'){
        res.statusCode = 200;
         res.end("<h1>This is my About : </h1> <p> My about section </p>");
    }


    else if(req.url == '/hello'){
        res.statusCode = 200;

        const data = fs.readFileSync("index.html");
    
        res.end(data.toString());
    }


    else{

        // res.shivambansal();  // server crash , bca not a function .. 
        res.statusCode = 404;
        res.end("<h1>Page NOT Found on this server : </h1> <p> Bye ..... </p>");
    }

    


   
})

server.listen(port , ()=> {
    console.log( `server is listening at port ${port}` );
});


