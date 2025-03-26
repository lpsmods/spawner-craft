# Made by: @Legopitstop
# Desc: runs when the world reloads your you do /reload
#
# Called By: #minecraft:load

scoreboard objectives add spawner_craftInfo trigger
scoreboard players add @a spawner_craftInfo 0
scoreboard players enable @a spawner_craftInfo
