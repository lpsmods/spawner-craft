# Made by: @Legopitstop
# Desc: runs every tick (20 sec)
#
# Called By: #minecraft:tick

execute as @a[scores={spawner_craftInfo=1..}] at @s run function lpsm_spawner_craft:trigger/info
