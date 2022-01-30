/*CMD
  command: 🗂 WALLET
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var num = User.getProperty("num")
if( num == undefined ){
var button = [{ title : "🚧 SET INR WALLET 🚧" , command : "setwallet" }]
Bot.sendInlineKeyboard(button, "💡 YOUR CURRENTLY SET INR WALLET IS : 'none' \n\n🗂 IT WILL BE USED FOR FUTURE WITHDRAWALS")
}else{
var buton = [{ title : "🚧 CHANGE INR WALLET 🚧" , command : "setwallet" }]
Bot.sendInlineKeyboard(buton, "💡 YOUR CURRENTLY SET INR WALLET IS : "+num+"\n\n🗂 IT WILL BE USED FOR FUTURE WITHDRAWALS")}
