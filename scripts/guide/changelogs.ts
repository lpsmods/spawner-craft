import { Pages } from "@lpsmods/mc-utils";

export const changelogs: Pages = {
  changelogs: {
    icon: "textures/ui/creative_icon.png",
    title: "guide.common.changelogs",
    body: "guide.common.changelogs.desc",
    buttons: ["v200", "v170", "v160", "v150", "v140", "v130", "v120", "v110", "v100"],
  },
};

if (changelogs.changelogs.buttons) {
  for (const btn of changelogs.changelogs.buttons) {
    if (typeof btn === "string") {
      changelogs[btn] = {
        title: `#changelogs.${btn}`,
        body: `#changelogs.${btn}.desc`,
      };
    }
  }
}
