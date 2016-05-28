require('./').register({
    url:'https://v8-memory-dashboard.wilddogio.com/60f404683456d38acbff8ff81c4daddd.json'
});

const buffers=[];
require('http').createServer((req,res) => {
    res.end(''+mem.length);
    const buf= new Buffer(1024*1024);
    buf.fill(0);
    buffers.push(buf);
}).listen(8000);