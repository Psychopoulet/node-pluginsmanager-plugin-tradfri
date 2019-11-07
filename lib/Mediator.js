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

		return new Promise((resolve) => {

			lstat(file, (err, stats) => {
				return resolve(Boolean(!err && stats.isFile()));
			});

		}).then((isFile) => {

			return !isFile ? Promise.resolve() : new Promise((resolve, reject) => {

				readFile(join(this._externalRessourcesDirectory, "conf.json"), "utf8", (err, content) => {
					return err ? reject(err) : resolve(content);
				});

			}).then((conf) => {

				return Promise.resolve(JSON.parse(conf));

			}).then((conf) => {

				this._ip = conf.ip;
				this._identity = conf.identity;
				this._psk = conf.psk;

				return Promise.resolve();

			});

		});

	}

	_saveConf () {

		return new Promise((resolve, reject) => {

			mkdir(this._externalRessourcesDirectory, (err) => {
				return err ? reject(err) : resolve();
			});

		}).then(() => {

			writeFile(join(this._externalRessourcesDirectory, "conf.json"), JSON.stringify({
				"ip": this._ip,
				"identity": this._identity,
				"psk": this._psk
			}), "utf8", (err) => {
				return err ? reject(err) : resolve();
			});

		});

	}

	_initWorkSpace () {

		return this._readConf().then(() => {

			return !this._ip ? Promise.resolve() : this.discover().then((gateway) => {

				return this._ip !== gateway.addresses[0] ? Promise.resolve() : Promise.resolve().then(() => {

					this._tradfri = new TradfriClient(this._ip);

					return !this._identity && !this._psk ? Promise.resolve() : Promise.resolve().then(() => {

						return this._tradfri.connect(this._identity, this._psk);

					});

				});

			});

		});

	}

	_releaseWorkSpace () {

		return Promise.resolve().then(() => {

			return this._tradfri ? this._tradfri.destroy() : Promise.resolve();

		}).then(() => {

			this._tradfri = null;

			this._ip = "";
			this._identity = "";
			this._psk = "";

		});

	}

	// public

		getAllDevices () {

		}

		getIP () {

			return Promise.resolve(this._ip);

		}

		setIP (urlParameters, bodyParameters) {

			return Promise.resolve().then(() => {

				return this._tradfri ? this._releaseWorkSpace() : Promise.resolve();

			}).then(() => {

				return this.discover().then((gateway) => {

					return bodyParameters.ip !== gateway.addresses[0] ? Promise.reject(new Error(
						"This IP is not detectable"
					)) : Promise.resolve();

				});

			}).then(() => {

				this._ip = bodyParameters.ip;

				this._tradfri = new TradfriClient(this._ip);

				return _tradfri.authenticate(bodyParameters.code).then((authenticate) => {

					this._identity = authenticate.identity;
					this._psk = authenticate.psk;

					return this._saveConf();

				});

			});

		}

};
