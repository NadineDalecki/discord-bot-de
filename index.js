/*╔══════════════════════════════════════╗
    Express
  ╚═══════════════════════════════════════╝*/
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
/*╔═══════════════════════════════════════╗
    Const
  ╚═══════════════════════════════════════╝*/
const Discord = require("discord.js"),
  client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }),
  fs = require("fs"),
  emojiList = require("./info/emoji.json"),
  prefix = "!";
/*╔═══════════════════════════════════════╗
    Bot
  ╚═══════════════════════════════════════╝*/
client.once("ready", () => {
  console.log("Ready!");
});

/*╔═══════════════════════════════════════╗
    Errors
  ╚═══════════════════════════════════════╝*/
process.on("error", error =>
  client.users.cache
    .get("338649491894829057")
    .send("This is an error event:" + error.stack)
);
client.on("error", error =>
  client.users.cache
    .get("338649491894829057")
    .send("This is an error event:" + error.stack)
);
process.on("uncaughtException", error =>
  client.users.cache
    .get("338649491894829057")
    .send("This is an error event:" + error.stack)
);
process.on("unhandledRejection", error =>
  client.users.cache
    .get("338649491894829057")
    .send("This is an error event:" + error.stack)
);

client.on("message", async message => {
  return;
  client.commands = new Discord.Collection();
  const commandFiles = fs
    .readdirSync("./commands")
    .filter(file => file.endsWith(".js"));
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;
  try {
    if (command != "") {
      client.commands.get(command).execute(message, args);
    }
  } catch (error) {
    console.error(error);
  }
});
/*╔═══════════════════════════════════════╗
    Reaction Event
  ╚═══════════════════════════════════════╝*/
client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.partial) {
console.log("Reaction!")
    try {
      await reaction.fetch();
    } catch (error) {
      console.log("Something went wrong when fetching the message: ", error);
      return;
    }
  }
  const emojiId = reaction.emoji.id.toString();
  if (!user.bot && reaction.message.id === "546262541370654720") {
    console.log(emojiId)
    if (
      emojiList.hasOwnProperty(emojiId) ||
      emojiList.hasOwnProperty(reaction.emoji.name)
    ) {
console.log("Role found")
      reaction.message.guild.member(user).roles.add(emojiList[emojiId].role);
    }
  }
});
client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.log("Something went wrong when fetching the message: ", error);
      return;
    }
  }
  const emojiId = reaction.emoji.id.toString();
  if (!user.bot && reaction.message.id === "546262541370654720") {
  
    if (
      emojiList.hasOwnProperty(emojiId) ||
      emojiList.hasOwnProperty(reaction.emoji.name)
    ) {
      reaction.message.guild.member(user).roles.remove(emojiList[emojiId].role);
    }
  }
});

/*╔═══════════════════════════════════════╗
    Deleted Messages
  ╚═══════════════════════════════════════╝*/
client.on("messageDelete", async message => {
  const entry = await message.guild
    .fetchAuditLogs({ type: "MESSAGE_DELETE" })
    .then(audit => audit.entries.first());
  let user = "";
  if (
    entry.extra.channel.id === message.channel.id &&
    entry.target.id === message.author.id &&
    entry.createdTimestamp > Date.now() - 5000 &&
    entry.extra.count >= 1
  ) {
    user = entry.executor.username;
  } else {
    user = message.author.username;
  }
  const delmsg = {
    embed: {
      color: 1,
      description: `${message.content}`,
      timestamp: "",
      author: {
        name: `${user} deleted a message from ${message.author.username} in #${message.channel.name}`
      }
    }
  };

  client.channels.cache.get("718176504437276682").send(delmsg);
});
client.login(process.env.BOT);
