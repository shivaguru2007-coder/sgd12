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
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","ā ļø ENTERED PAYTM NUMBER IS ALREADY USING BY ANOTHER USER OF THIS BOT")
}else{
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
Bot.sendKeyboard(
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","ā ļø ENTER A VALID PAYTM NUMBER")
}else{
if (message.length == 10) {
var num = User.setProperty("num", message, "string")
Bot.sendKeyboard(
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","š WALLET ADDRESS SET TO : "+message+"")
}else{
Bot.sendKeyboard(
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","ā ļø "+message+" IS NOT A PAYTM NUMBER")
}

var tgID = message;  
var tbadUsers = Bot.getProperty("num", { list: {} });
tbadUsers.list[tgID] = true;
Bot.setProperty("num", tbadUsers, "json");
}
}
