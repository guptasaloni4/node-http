import http from 'http'

const appName = process.env.appName || "node-http";
const PORT =process.env.PORT || 8084;

const server = http.createServer((req,res)=>{
    res.write("Hello There!! \nThis is your HTTP website!")
    res.end();
})

server.listen(PORT,()=>{
    console.log(`Server listening on localhost:${PORT}`);

})