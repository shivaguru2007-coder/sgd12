/*CMD
  command: B24
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Sg
  keyboard: 
  aliases: 
CMD*/

var users = Bot. getProperty("Broadcast")
if(user.telegramid == 1299920908){
for(var i in users){
Api.sendMessage({
  chat_id: users[i], 
  text: "*š Broadcast Message From Admin !!\nāāāāāāāāāāāāāā\n\n"+message+"*",
  parse_mode: "markdown"
})
}
Bot.sendMessage("*ā Broadcast Process Is On! Soon The Bot Will Send Message To All Peoples...*")
}
