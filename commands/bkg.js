/*CMD
  command: bkg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Msg de
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "2129389135"){
Bot.runAll({ 
command: "broadcast1",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*Message Sended To All Users*")
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
