import "./styles/app.css";
import {JetApp, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: "my-app",
			version : "1.0",
			router 	: HashRouter,
			debug 	: true,
			start 	: "/top/start"
		};

		super({ ...defaults, ...config });
	}
}

const app = new MyApp();
app.render(document.body);
