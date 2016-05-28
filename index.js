const v8 = require('v8');
const os = require('os');
const https = require('https');
const uuid = require('uuid');
const cluster = require('cluster');
const url = require('url');

const instance = uuid.v4();
const tick = (options)=>{
    const data ={};
    const urlInfo = url.parse(options.url);
    data.heapSpaceStatistics = v8.getHeapSpaceStatistics();
    data.memoryUsage = process.memoryUsage();
    data.versions = process.versions;
    data.hostname = os.hostname();
    data.platform = os.platform();
    data.pid = process.pid;
    data.arch = os.arch();
    data.isMaster = !! cluster.isMaster;
    data.isWorker = !! cluster.isWorker;
    data.freemem=os.freemem();
    data.totalmem = os.totalmem();
    data.cpus = os.cpus();
    const request = https.request({
        protocol: 'https:',
        method: 'PUT',
        host: urlInfo.host,
        path: urlInfo.path
    });
    request.write(JSON.stringify(data));
    request.pipe(process.stdout);
    request.end();
};

exports.register= (options)=>{
    const interval = options.interval || 10000;
    tick(options);
    return setInterval(()=>{
        tick(options);
    },interval);
};

