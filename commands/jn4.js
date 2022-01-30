/*CMD
  command: jn4
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

var chan1 = "@MRDARK_OFFICIAL";
let id = user.telegramid
Api.getChatMember({ 
chat_id : chan1,
user_id : id,
on_result :"check4"})

