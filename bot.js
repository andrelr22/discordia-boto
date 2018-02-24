const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
  console.log("I am ready!");
});


client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;


  if (message.content.startsWith(config.prefix + "kk")) {
    message.channel.send("eae men!");
  }

  if(message.content.startsWith(config.prefix + "tripe")){
  	message.channel.send("https://www.youtube.com/user/EsorLxaO")
  }

  if(message.conte)

  if(message.content.startsWith(config.prefix + "help")){
  	message.channel.send("comandos:")
  	message.channel.send("tripe - envia link do canal no youtube")
  	message.channel.send("")
  	message.channel.send("comandos:")



  }

});

client.login("config.token");
