/*╔═══════════════════════════════════════╗
    ALL BOTS
  ╚═══════════════════════════════════════╝*/
const Discord = require("discord.js")
const Prefix = "?"
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] })
const functions = require("./functions.js")

process.on("error", error => functions.Error(client, error))
process.on("uncaughtException", error => functions.Error(client, error))
process.on("unhandledRejection", error => functions.Error(client, error))

client.once("ready", () => {
	console.log("Ready!")
})
client.on("error", error => functions.Error(client, error))
client.on("messageDelete", async message => {
	functions.DeletedMessage(client, message)
})
client.on("messageReactionAdd", async (reaction, user) => {
	functions.RoleAdd(reaction, user, "546262541370654720")
})
client.on("messageReactionRemove", async (reaction, user) => {
	functions.RoleRemove(reaction, user, "546262541370654720")
})
client.on("message", async message => {
     if(message.content.includes(`Stay the fuck online!`)){
        message.channel.send("Kyllä ​​herra!")
    }
	else if (!message.content.startsWith(Prefix) || message.author.bot) return
	functions.Command(client, message, Prefix)
})
client.login(process.env.BOT)
