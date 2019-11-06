# node-pluginsmanager-plugin-tradfri
A plugin to manage Tradfri stuff for node-pluginsmanager

[![Build status](https://api.travis-ci.org/Psychopoulet/node-pluginsmanager-plugin-tradfri.svg?branch=master)](https://travis-ci.org/Psychopoulet/node-pluginsmanager-plugin-tradfri)
[![Coverage status](https://coveralls.io/repos/github/Psychopoulet/node-pluginsmanager-plugin-tradfri/badge.svg?branch=master)](https://coveralls.io/github/Psychopoulet/node-pluginsmanager-plugin-tradfri)
[![Dependency status](https://david-dm.org/Psychopoulet/node-pluginsmanager-plugin-tradfri/status.svg)](https://david-dm.org/Psychopoulet/node-pluginsmanager-plugin-tradfri)
[![Dev dependency status](https://david-dm.org/Psychopoulet/node-pluginsmanager-plugin-tradfri/dev-status.svg)](https://david-dm.org/Psychopoulet/node-pluginsmanager-plugin-tradfri?type=dev)
[![Issues](https://img.shields.io/github/issues/Psychopoulet/node-pluginsmanager-plugin-tradfri.svg)](https://github.com/Psychopoulet/node-pluginsmanager-plugin-tradfri/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/Psychopoulet/node-pluginsmanager-plugin-tradfri.svg)](https://github.com/Psychopoulet/node-pluginsmanager-plugin-tradfri/pulls)

## Installation

```bash
$ git clone git://github.com/Psychopoulet/node-pluginsmanager-plugin-tradfri.git
```

## Features

  * inheritable parent for node-pluginsmanager's plugin to control Tradfri stuff
  * manage lights & remote controls

## [OpenAPI documentation](./lib/Descriptor.json)

> See "events" to know the push events
> The events respect the [WebSockets node-pluginsmanager-plugin](https://github.com/Psychopoulet/node-pluginsmanager-plugin/blob/master/documentation/Server.md#websockets) conventions

```typescript
{
  "plugin": "node-pluginsmanager-plugin-tradfri";
  "command": string;
  "data"?: any;
}
```

## Tests

```bash
$ git clone git://github.com/Psychopoulet/node-pluginsmanager-plugin-tradfri.git
$ cd ./node-pluginsmanager-plugin-tradfri
$ npm install
$ npm run-script tests
```

## License

  [ISC](LICENSE)
