/*CMD
  command: š WALLET
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
var button = [{ title : "š§ SET INR WALLET š§" , command : "setwallet" }]
Bot.sendInlineKeyboard(button, "š” YOUR CURRENTLY SET INR WALLET IS : 'none' \n\nš IT WILL BE USED FOR FUTURE WITHDRAWALS")
}else{
var buton = [{ title : "š§ CHANGE INR WALLET š§" , command : "setwallet" }]
Bot.sendInlineKeyboard(buton, "š” YOUR CURRENTLY SET INR WALLET IS : "+num+"\n\nš IT WILL BE USED FOR FUTURE WITHDRAWALS")}
