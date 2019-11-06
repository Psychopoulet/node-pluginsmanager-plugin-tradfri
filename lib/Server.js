"use strict";

// deps

	// externals
	const { Server } = require("node-pluginsmanager-plugin");

// module

module.exports = class TradfriServer extends Server {

	_initWorkSpace () {

		this._Mediator.on("error", (err) => {

			this.push("error", {
				"code": err.code ? err.code : "UNKNOWN",
				"message": err.message ? err.message : err
			});

		}).on("initialized", () => {
			this.push("initialized");
		}).on("released", () => {
			this.push("released");
		});

		return Promise.resolve();

	}

};
