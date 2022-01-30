/*CMD
  command: 🟢 JOINED
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var PhoneV = User.getProperty("PhoneV")
if( PhoneV == undefined ){
Bot.sendMessage("⚠️ PLEASE SHARE YOUR CONTACT")
}else{
var chan1 = "@SGlooter";
let id = user.telegramid
Api.getChatMember({ 
chat_id : chan1,
user_id : id,
on_result :"check"})
}

//Bot.runCommand("HOME")
