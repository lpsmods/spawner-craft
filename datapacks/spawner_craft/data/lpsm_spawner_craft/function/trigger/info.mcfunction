# Made by: @Legopitstop
# Desc: Displays info to player
#
# Called By: lpsm_spawner_craft:main_tick

tellraw @s [{"text":"\n\n\n\n\n\n\n\n\n\n\n"}]
tellraw @s [{"text":"\u00A7m                                                                                ","color":"dark_gray"}]
tellraw @s [{"text":"                         Spawner Craft Info","color":"dark_gray"}]
tellraw @s [{"text":"\u00A7m                                                                                ","color":"dark_gray"}]

tellraw @s [{"text":"General Info:","color":"dark_gray"}]
tellraw @s [{"text":"This datapack adds in new recipes that make all of the spawn eggs craftable.\n Use the eggs to customize your mob spawner!\n"}]

tellraw @s [{"text":"Vanilla Spawn Eggs:","color":"dark_gray"}]
tellraw @s [{"text":"You can quickly find all the recipes ","color":"white"},{"text":"here\n","color":"blue","underlined":true,"click_event":{"action":"open_url","url":"https://docs.lpsmods.dev/spawner-craft/"},"hover_event":{"action":"show_text","value":{"text":"Click to go to website","color":"gray"}}}]

tellraw @s [{"text":"\u00A7m                                                                                ","color":"dark_gray"}]

scoreboard players set @s spawner_craftInfo 0
scoreboard players enable @s spawner_craftInfo
