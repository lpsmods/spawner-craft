import { StartupEvent, system } from "@minecraft/server";
import { registerItemComponents } from "./registry.js";
import { PROJECT_ID } from "./constants.js";

function startup(event: StartupEvent): void {
  registerItemComponents(event.itemComponentRegistry);
}

system.beforeEvents.startup.subscribe(startup);
