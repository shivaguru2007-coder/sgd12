/*CMD
  command: checkr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var text = "💹 YOU WERE INVITED BY ["+params+"](tg://user?id="+params+")" 
  if (request.data) {
var message_id = request.message.message_id
Api.editMessageText({
 message_id: message_id,
 text: text,
 parse_mode: "Markdown"
})}
