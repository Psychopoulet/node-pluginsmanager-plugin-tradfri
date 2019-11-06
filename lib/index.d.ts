/// <reference types="node" />
/// <reference types="ws" />
/// <reference types="node-pluginsmanager-plugin" />

declare module "node-pluginsmanager-plugin-terminals" {

	import { Orchestrator, Server, Mediator } from "node-pluginsmanager-plugin";

	// interfaces

	type tType = "remote" | "slaveRemote" | "lightbulb" | "plug" | "motionSensor";

	interface iDevice {
		"id": number;
		"name": string;
		"type": tType;
		"alive": boolean;
		"createdAt": Date;
		"lastSeen": Date;
	}

	// classes

	export { Orchestrator, Server };

	export class TradfriMediator extends Mediator {

		// methods

			// public

				public getAllDevices(): Promise<Array<iDevice>>;
				public getIP(): Promise<void>;
				public setIP(code: string): Promise<string>;
				public authenticate(code: string): Promise<void>;

	}

}
