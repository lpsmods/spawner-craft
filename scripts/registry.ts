import { AddonUtils, GuideBookComponent } from "@lpsmods/mc-utils";
import { ItemComponentRegistry } from "@minecraft/server";
import { pages } from "./guide/main";

export function registerItemComponents(registry: ItemComponentRegistry): void {
  const id = AddonUtils.makeId("guide_book");
  registry.registerCustomComponent(id, new GuideBookComponent(pages));
  GuideBookComponent.setup(id);
}
