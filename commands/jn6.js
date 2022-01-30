/*CMD
  command: jn6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chan1 = "@Vipmodsff";
let id = user.telegramid
Api.getChatMember({ 
chat_id : chan1,
user_id : id,
on_result :"check6"})
