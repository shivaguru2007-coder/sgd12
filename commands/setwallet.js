/*CMD
  command: setwallet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: ENTER YOUR PAYTM NUMBER
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
Bot.sendKeyboard("⛔ CANCEL","✏️ NOW SEND YOUR INR WALLET ADDRESS TO USE IT FOR FUTURE WITHDRAWALS\n\n⚠️ THIS WALLET WILL BE USED FOR FUTURE WITHDRAWALS !!")
Bot.runCommand("set-karo")
