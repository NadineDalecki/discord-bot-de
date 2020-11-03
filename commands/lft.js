module.exports = {
  name: "lft",
  execute(message, args) {
    const names = message.guild.roles.cache
      .get("549925842646597651")
      .members.map(m => m.user.tag.replace(/_/g, "\\_"));
    if (names === "") {
      message.channel.send("Nah. No motivation. Bother someone else.");
    } else {
      message.channel.send(names);
    }
  }
};
