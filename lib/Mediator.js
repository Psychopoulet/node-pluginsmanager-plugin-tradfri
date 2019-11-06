"use strict";

// deps

	// natives
	const { join } = require("path");
	const { mkdir, readFile, writeFile } = require("fs");

	// externals
	const { Mediator } = require("node-pluginsmanager-plugin");
	const { discoverGateway, TradfriClient } = require("node-tradfri-client");

// module

module.exports = class TradfriMediator extends Mediator {

	constructor (opt) {

		super(opt);

		// protected

			this._tradfri = null;

			this._ip = "";
			this._identity = "";
			this._psk = "";

	}

	_readConf () {

		return new Promise((resolve, reject) => {

			readFile(join(this._externalRessourcesDirectory, "conf.json"), "utf8", (err, content) => {
				return err ? reject(err) : resolve(content);
			});

		}).then((conf) => {

			return Promise.resolve(JSON.parse(conf));

		});

	}

	_saveConf () {

		return new Promise((resolve, reject) => {

			mkdir(this._externalRessourcesDirectory, (err) => {
				return err ? reject(err) : resolve();
			});

		}).then(() => {

			writeFile(join(this._externalRessourcesDirectory, "conf.json"), "utf8", (err, content) => {
				return err ? reject(err) : resolve(content);
			});

		}).then((conf) => {

			return Promise.resolve(JSON.parse(conf));

		});

	}

	_initWorkSpace () {

	}

	_releaseWorkSpace () {

	}

	// public

		getAllDevices () {

		}

		getIP () {

			return Promise.resolve(this._ip);

		}

		setIP (urlParameters, bodyParameters) {

		}

};
