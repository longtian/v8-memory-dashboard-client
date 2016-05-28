const v8 = require('v8');
const os = require('os');
const https = require('https');
const uuid = require('uuid');
const cluster = require('cluster');

const instance = uuid.v4();
const tick = (options)=>{
    const data ={};
    const uid = options.uid;
    const host = options.host;
    data.heapSpaceStatistics = v8.getHeapSpaceStatistics();
    data.memoryUsage = process.memoryUsage();
    data.versions = process.versions;
    data.hostname = os.hostname();
    data.platform = os.platform();
    data.pid = process.pid;
    data.arch = os.arch();
    data.isMaster = !! cluster.isMaster;
    data.isWorker = !! cluster.isWorker;
    const request = https.request({
        protocol:'https:',
        method:'PUT',
        host:host,
        path:`/${uid}/${instance}.json`
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

