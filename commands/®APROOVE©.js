/*CMD
  command: ®APROOVE©
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message == "✅ APPROVE") {
var withamount = User.getProperty("withamount")
var comment =
User.getProperty("comment")
var user_link = "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
var balance = Libs.ResourcesLib.userRes("balance")
var num = User.getProperty("num")
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
balance.add(-withamount)
status.add(+withamount)
var url1 = "https://job2all.xyz/api/index.php?mid=86BEA6B1886B2D36&mkey=C9BF86D5D6FF54EA98234AEF18A1D&guid=BOHlKt2vPe7Fa8itfjILM2uJsN3e50ok&mob="+num+"&amount=1&info=@SG+Paytm+bot+PAYMENT"
HTTP.get({
  url: url1,
  success: ""})
Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","✅ NEW WITHDRAWAL PROCESSED ✅\n\n🚀 AMOUNT : "+withamount+" INR \n🗂 WALLET : "+num+" \n\n💡 BOT: @"+bot.name+"")
} else if (message == "❎ CANCEL") {
  Bot.sendKeyboard(
    "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS","❎ WITHDRAWAL CANCELLED")
}
