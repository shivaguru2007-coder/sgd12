/*CMD
  command: 📊 STATISTICS
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


Bot.sendMessage("📊 BOT LIVE STATS 📊\n\n📤 TOTAL PAYOUTS : "+withdraw+" INR [] OVER\n\n💡 TOTAL USERS: "+users.value().toFixed(0)+" \n\n🔎 CODES BY : [@SGKING27]",{disable_web_page_preview: true}
)
