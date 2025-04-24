const data=require("./data.js")

const http=require("http")

const server=http.createServer((req,res)=>{
    console.log('request recived');
    res.end(`
        Titulo: ${data.title}
        subtitle: ${data.subtitle}
        description:  ${data.description}
        `
    );
})

server.listen(3000,()=>{
    console.log(`server listening on port http://localhost:${server.address().port}`);
    
})
console.log(data.title);