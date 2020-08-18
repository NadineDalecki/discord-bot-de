const thumbnail = 'https://cdn.discordapp.com/attachments/520584731277000704/540110893166624778/Echoarena-Disc.png';
const welcome = {
  "embed": {
    "url": "https://www.thetimezoneconverter.com/",
    "color": 1,
    "thumbnail": {
      url: thumbnail
    },
    "author": {
      "name": "EchoVR Deutschland 🍻"
    },
    "fields": [
      {
        "name": "\u200B",
        "value": "Herzlich Willkommen in unserer **deutschen Echo VR Community**\n\Von samstäglichen Saufabenden einmal abgesehen, sind wir ein netter und friedlicher Haufen. Scheu dich nicht Fragen zu stellen oder Vorschläge zu machen!",
      },
      {
        "name": "Schnapp dir eine Rolle",
        "value": "Reagiere am Ende dieses Beitrages mit dem Emoji deines Bundeslandes um die entsprechende Rolle zu bekommen!\n\n **Für Deutschland**:\n<:nrw:539850427521564672> NRW\n<:mecklenburg:539850416406659082> Mecklenburg-Vorpommern: \n<:bremen:539850415404089359> Bremen:\n<:brandenburg:539857970880577576> Brandenburg\n<:rheinland:539850415362146320> Rheinland-Pfalz\n<:thueringen:539850414250786826> Thüringen\n<:hessen:539850413214531585> Hessen\n<:schleswig:539850412841238538> Schleswig-Holstein\n<:saarland:539850412400967680> Saarland\n<:berlin:539850410177986580> Berlin\n<:sachsen:539850407992885261> Sachsen\n<:sachsenanhalt:539850399813730304> Sachsen-Anhalt\n<:niedersachsen:539850398962286593> Niedersachsen\n<:hamburg:539850398123556866> Hamburg\n<:bayern:539850364384444418> Bayern\n<:baden:539850361029263371> Baden-Württemberg\n\n Oder nuzte die entsprechenden Emojis für die Schweiz oder Österreich!\n\u200b\n"
      },
      {
        "name": "Ändere deinen Nickname",
        "value": "Da wir unglaublich neugierig sind freuen wir uns, wenn du deinen Nickname änderst. Wir nutzen derzeit dieses Format:\n **Name | Stadt (Bundesland)**\.Deinen Nicknamen änderst du ganz einfach indem du oben auf den Namen dieses Kanals (Echo VR – German Community) klickst und dort Nicknamen ändern auswählst. Das | bekommst du mit 'Alt Gr' + '<'"      
      },
    ]
  }
};
const roleList = require('../info/roles.js');
const emojiList = require('../info/emoji.js');
module.exports = {
  name: 'welcome',
  thumbnail: thumbnail,
  execute(message, args) {
    message.delete().catch(_ => { });
    message.channel.send(welcome).then(async msg => {
      await msg.react(emojiList.get("NRW"))
      await msg.react(emojiList.get("Mecklenburg Vorpommern"))
      await msg.react(emojiList.get("Bremen"))
      await msg.react(emojiList.get("Brandenburg"))
      await msg.react(emojiList.get("Rheinland Pfalz"))
      await msg.react(emojiList.get("Thüringen"))
      await msg.react(emojiList.get("Hessen"))
      await msg.react(emojiList.get("Schleswig Holstein"))
      await msg.react(emojiList.get("Saarland"))
      await msg.react(emojiList.get("Berlin"))
      await msg.react(emojiList.get("Sachsen"))
      await msg.react(emojiList.get("Sachsen Anhalt"))
      await msg.react(emojiList.get("Niedersachsen"))
      await msg.react(emojiList.get("Hamburg"))
      await msg.react(emojiList.get("Bayern"))
      await msg.react(emojiList.get("Baden Württemberg"))
      await msg.react(emojiList.get("Österreich"))
      await msg.react(emojiList.get("Schweiz"))
    })
    // } 
  },
  onReactionAdd(reaction, user, client) {
    switch (reaction.emoji.id || reaction.emoji.name) {
      case emojiList.get("NRW"):
        reaction.message.guild.member(user).addRole(roleList.get("NRW")); 
        break;
      case emojiList.get("Mecklenburg Vorpommern"):
        reaction.message.guild.member(user).addRole(roleList.get("Mecklenburg Vorpommern")); 
        break;
      case emojiList.get("Bremen"):
        reaction.message.guild.member(user).addRole(roleList.get("Bremen")); 
        break;
      case emojiList.get("Brandenburg"):
        reaction.message.guild.member(user).addRole(roleList.get("Brandenburg")); 
        break;
      case emojiList.get("Rheinland Pfalz"):
        reaction.message.guild.member(user).addRole(roleList.get("Rheinland Pfalz")); 
        break;
      case emojiList.get("Thüringen"):
        reaction.message.guild.member(user).addRole(roleList.get("Thüringen")); 
        break;
      case emojiList.get("Hessen"):
        reaction.message.guild.member(user).addRole(roleList.get("Hessen")); 
        break;
      case emojiList.get("Schleswig Holstein"):
        reaction.message.guild.member(user).addRole(roleList.get("Schleswig Holstein")); 
        break;
      case emojiList.get("Saarland"):
        reaction.message.guild.member(user).addRole(roleList.get("Saarland")); 
        break;
      case emojiList.get("Berlin"):
        reaction.message.guild.member(user).addRole(roleList.get("Berlin")); 
        break;
      case emojiList.get("Sachsen"):
        reaction.message.guild.member(user).addRole(roleList.get("Sachsen")); 
        break;
      case emojiList.get("Sachsen Anhalt"):
        reaction.message.guild.member(user).addRole(roleList.get("Sachsen Anhalt")); 
        break;
      case emojiList.get("Niedersachsen"):
        reaction.message.guild.member(user).addRole(roleList.get("Niedersachsen")); 
        break;
      case emojiList.get("Hamburg"):
        reaction.message.guild.member(user).addRole(roleList.get("Hamburg")); 
        break;
      case emojiList.get("Bayern"):
        reaction.message.guild.member(user).addRole(roleList.get("Bayern")); 
        break;
      case emojiList.get("Baden Württemberg"):
        reaction.message.guild.member(user).addRole(roleList.get("Baden Württemberg")); 
        break;
      case emojiList.get("Österreich"):
        reaction.message.guild.member(user).addRole(roleList.get("Österreich")); 
        break;
      case emojiList.get("Schweiz"):
        reaction.message.guild.member(user).addRole(roleList.get("Schweiz")); 
        break;
                                                    }   
  },
  onReactionRemove(reaction, user, client) {
    switch (reaction.emoji.id || reaction.emoji.name) {
      case emojiList.get("NRW"):
        reaction.message.guild.member(user).removeRole(roleList.get("NRW")); 
        break;
      case emojiList.get("Mecklenburg Vorpommern"):
        reaction.message.guild.member(user).removeRole(roleList.get("Mecklenburg Vorpommern")); 
        break;
      case emojiList.get("Bremen"):
        reaction.message.guild.member(user).removeRole(roleList.get("Bremen")); 
        break;
      case emojiList.get("Brandenburg"):
        reaction.message.guild.member(user).removeRole(roleList.get("Brandenburg")); 
        break;
      case emojiList.get("Rheinland Pfalz"):
        reaction.message.guild.member(user).removeRole(roleList.get("Rheinland Pfalz")); 
        break;
      case emojiList.get("Thüringen"):
        reaction.message.guild.member(user).removeRole(roleList.get("Thüringen")); 
        break;
      case emojiList.get("Hessen"):
        reaction.message.guild.member(user).removeRole(roleList.get("Hessen")); 
        break;
      case emojiList.get("Schleswig Holstein"):
        reaction.message.guild.member(user).removeRole(roleList.get("Schleswig Holstein")); 
        break;
      case emojiList.get("Saarland"):
        reaction.message.guild.member(user).removeRole(roleList.get("Saarland")); 
        break;
      case emojiList.get("Berlin"):
        reaction.message.guild.member(user).removeRole(roleList.get("Berlin")); 
        break;
      case emojiList.get("Sachsen"):
        reaction.message.guild.member(user).removeRole(roleList.get("Sachsen")); 
        break;
      case emojiList.get("Sachsen Anhalt"):
        reaction.message.guild.member(user).removeRole(roleList.get("Sachsen Anhalt")); 
        break;
      case emojiList.get("Niedersachsen"):
        reaction.message.guild.member(user).removeRole(roleList.get("Niedersachsen")); 
        break;
      case emojiList.get("Hamburg"):
        reaction.message.guild.member(user).removeRole(roleList.get("Hamburg")); 
        break;
      case emojiList.get("Bayern"):
        reaction.message.guild.member(user).removeRole(roleList.get("Bayern")); 
        break;
      case emojiList.get("Baden Württemberg"):
        reaction.message.guild.member(user).removeRole(roleList.get("Baden Württemberg")); 
        break;
      case emojiList.get("Österreich"):
        reaction.message.guild.member(user).removeRole(roleList.get("Österreich")); 
        break;
      case emojiList.get("Schweiz"):
        reaction.message.guild.member(user).removeRole(roleList.get("Schweiz")); 
        break;
                                                    }   
  }
}
