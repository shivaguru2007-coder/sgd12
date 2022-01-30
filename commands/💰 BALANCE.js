/*CMD
  command: 💰 BALANCE
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
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","🙌🏻 USER = "+user_link+" \n\n💰 BALANCE = "+balance.value().toFixed(2)+" INR\n\n🪢 INVITE TO EARN MORE")
