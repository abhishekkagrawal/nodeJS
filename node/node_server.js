const http=require('http');

const server = http.createServer((req,res)=>{

    if(req.url=='/'){
        res.write('Hello World from Node JS server');
        res.end();
    }else if(req.url=='/api/employeeData'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }
});

server.listen(3000);
console.log('Server started and Listening to port 3000...');