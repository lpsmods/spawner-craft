package dev.lpsmods.spawnercraft.core;

import dev.lpsmods.spawnercraft.Constants;
import net.minecraft.resources.ResourceLocation;

public class ModUtils {
    public static ResourceLocation makeId(String path) {
        return ResourceLocation.fromNamespaceAndPath(Constants.MOD_ID, path);
    }
}
