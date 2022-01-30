/*CMD
  command: VERIFY
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id-1})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var PhoneV = User.getProperty("PhoneV")
var forward = request.forward_from
if(forward){
Bot.runCommand("Ban",
{is_reply: true})
return
}

 if (request.contact){
if(request.contact.phone_number[0] == "1"){
Bot.runCommand("Ban")
}else{
User.setProperty("PhoneV",1, "integer")
    Bot.runCommand("CHAN")
}}
