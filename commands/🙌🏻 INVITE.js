/*CMD
  command: šš» INVITE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat=="creator"){
let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","REFER");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var user_link = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
Bot.sendKeyboard(
    "š° BALANCE\nšš» INVITE,š BONUS,š WALLET\nš³ WITHDRAW,š STATISTICS","šš» USER = "+user_link+"\n\n*šš» YOUR INVITE LINK = "+reflink+"\n\nšŖ¢ INVITE TO 0.5 INR PER INVITE*");
}
if (user == "left") {
  Bot.sendMessage("")
}
