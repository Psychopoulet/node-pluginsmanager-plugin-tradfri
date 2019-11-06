"use strict";

// deps

	// natives
	const { join } = require("path");

	// externals
    const { Orchestrator } = require("node-pluginsmanager-plugin");

// module

module.exports = class TradfriOrchestrator extends Orchestrator {

	constructor (options) {

		const opt = options || {};

			opt.packageFile = join(__dirname, "..", "package.json");
			opt.descriptorFile = join(__dirname, "Descriptor.json");
			opt.mediatorFile = join(__dirname, "Mediator.js");
			opt.serverFile = join(__dirname, "Server.js");

		super(opt);

	}

};
