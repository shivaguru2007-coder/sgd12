/*CMD
  command: š° BALANCE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var user_link = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendKeyboard(
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","šš» USER = "+user_link+" \n\nš° BALANCE = "+balance.value().toFixed(2)+" INR\n\nšŖ¢ INVITE TO EARN MORE")
