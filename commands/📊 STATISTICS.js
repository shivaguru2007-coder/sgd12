/*CMD
  command: š STATISTICS
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

var users = Libs.ResourcesLib.anotherChatRes("users","global");
var withdraw = 62
//var withdraw = Libs.ResourcesLib.anotherChatRes("withdraw", "global")
var status = Libs.ResourcesLib.anotherChatRes("status", "global")


Bot.sendMessage("š BOT LIVE STATS š\n\nš¤ TOTAL PAYOUTS : "+withdraw+" INR [] OVER\n\nš” TOTAL USERS: "+users.value().toFixed(0)+" \n\nš CODES BY : [@SGKING27]",{disable_web_page_preview: true}
)
