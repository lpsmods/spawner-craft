import { GuideBookComponent } from "@lpsmods/mc-utils";
import { ItemComponentRegistry } from "@minecraft/server";
import { pages } from "./guide/main";
import { makeId } from "./utils";

export function registerItemComponents(registry: ItemComponentRegistry): void {
  const id = makeId("guide_book");
  registry.registerCustomComponent(id, new GuideBookComponent(pages));
  GuideBookComponent.setup(id);
}
