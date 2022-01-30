/*CMD
  command: set-karo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
let msg = message
var badUsers = Bot.getProperty("num", { list: {} })

if(badUsers.list[msg]){
Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","⚠️ ENTERED PAYTM NUMBER IS ALREADY USING BY ANOTHER USER OF THIS BOT")
}else{
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","⚠️ ENTER A VALID PAYTM NUMBER")
}else{
if (message.length == 10) {
var num = User.setProperty("num", message, "string")
Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","🗂 WALLET ADDRESS SET TO : "+message+"")
}else{
Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","⚠️ "+message+" IS NOT A PAYTM NUMBER")
}

var tgID = message;  
var tbadUsers = Bot.getProperty("num", { list: {} });
tbadUsers.list[tgID] = true;
Bot.setProperty("num", tbadUsers, "json");
}
}
