/*CMD
  command: AMÃÃÃT
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
var withamount = User.getProperty("withamount")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var num = User.getProperty("num")
User.setProperty("AMOUNT" ,message ,"string")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    Bot.offCommand("Send Withdraw")
  } else {
  }
  if (message < 1) {
        Bot.sendKeyboard(
    "ð° BALANCE\nðð» INVITE,ð BONUS,ð WALLET\nð³ WITHDRAW,ð STATISTICS","â ï¸ MINIMUM WITHDRAW 1 INR")
  } else {
    if (message > balance.value()) {
     Bot.sendKeyboard(
    "ð° BALANCE\nðð» INVITE,ð BONUS,ð WALLET\nð³ WITHDRAW,ð STATISTICS",
        "â ENTERED AMOUNT IS GREATER THAN YOUR BALANCE"
      )
    } else {
User.setProperty("withamount",message, "integer")
      Bot.sendKeyboard("â APPROVE,â CANCEL", "ð¤ WITHDRAWAL CONFORMATION\n\nð° AMOUNT : "+message+" INR\nð WALLET : "+num+"\n\nâï¸ CONFORM YOUR TRANSACTION BY CLICKING ON 'â APPROVE'")
Bot.runCommand("Â®APROOVEÂ©")
    }
  }
}
