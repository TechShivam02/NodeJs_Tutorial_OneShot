const http = require("http");

const port = process.env.PORT  || 3000;

const server = http.createServer((req,res) => {
    
    // console.log(req);
    console.log(req.url);
    
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html')

    res.end("<h1>This is shivam </h1> <p> hello world in nodejs lol (: </p>");
})

server.listen(port , ()=> {
    console.log( `server is listening at port ${port}` );
});


