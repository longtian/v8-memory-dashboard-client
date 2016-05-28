# v8-memory-dashboard-client
[![](https://img.shields.io/npm/v/v8-memory-dashboard-client.svg)](https://www.npmjs.com/package/v8-memory-dashboard-client)
[![](https://img.shields.io/npm/dm/v8-memory-dashboard-client.svg)](http://npm-stat.com/charts.html?package=v8-memory-dashboard-client)
[![](https://img.shields.io/npm/l/v8-memory-dashboard-client.svg)](https://github.com/wyvernnot/v8-memory-dashboard-client/blob/master/LICENSE)

> 使用 `REST API` 上传 `v8` 相关数据到 `野狗`

[](./screenshot.png)

## 系统要求

由于取得堆空间的分布需要依赖于 `v8` 引擎一个最新的 `API`:

[GetHeapSpaceStatistics](https://nodejs.org/dist/latest-v6.x/docs/api/v8.html#v8_v8_getheapspacestatistics)

所以目前只支持 `Node.JS v6.x` 版本。

## 安装

```
npm install v8-memory-dashboard-client
```

## 使用

[如何使用请参考这里](https://github.com/wyvernnot/v8-memory-dashboard)



