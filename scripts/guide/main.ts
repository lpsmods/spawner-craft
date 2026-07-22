import { Icon, Pages } from "@lpsmods/mc-common";
import { recipes } from "./recipes";
import { items } from "./items";
import { changelog } from "#changelog";

export const pages: Pages = {
  home: {
    title: "guide.common.guide_book",
    body: "#desc",
    buttons: ["recipes", "items", "creator", "changelog"],
  },
  creator: {
    title: "#creator",
    icon: Icon.Comment,
    body: "#creator.desc",
  },
  ...recipes,
  ...items,
  ...changelog,
};
