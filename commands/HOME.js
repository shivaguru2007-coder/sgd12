/*CMD
  command: HOME
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")
let wdinfo = Bot.getProperty("wdInfo")
if (stat == "ban") {
  Bot.runCommand("KEYBOARD")
} else {
  var userstat = User.getProperty("status")
  var referbonus = User.getProperty("referbonus")
  if (
    (userstat == "member") |
    (userstat == "administrator") |
    (userstat == "creator")
  ) {
    var balance = Libs.ResourcesLib.userRes("balance")
    Bot.sendKeyboard(
      "💰 BALANCE\n🙌🏻 INVITE,🎁 BONUS,🗂 WALLET\n💳 WITHDRAW,📊 STATISTICS",
      "🏡 WELCOME TO MAIN MENU"
    )

    if (referbonus == undefined) {
      let refUser = Libs.ReferralLib.currentUser.attractedByUser()
      if (refUser) {
        var balanceref = Libs.ResourcesLib.anotherUserRes(
          "balance",
          refUser.telegramid
        )
        balanceref.add(0.5)
        Bot.sendInlineKeyboard(
          [[{ title: "✅ CHECK", command: "checkr " + refUser.chatId + "" }]],
          "💹 TO CHECK WHO INVITED YOU , CLICK ON ✅ CHECK"
        )
        Bot.sendMessageToChatWithId(
          refUser.chatId,
          "💰 0.5 INR ADDED TO YOUR BALANCE "
        )
        User.setProperty("referbonus", user.telegramid, "integer")
      }
    }
    var balance = Libs.ResourcesLib.userRes("balance")
    var withdrawn = Libs.ResourcesLib.userRes("withdrawn")
    var ref = Libs.ResourcesLib.userRes("referral")
    var msgid = User.getProperty("msgid")
    Api.deleteMessage({
      message_id: msgid
    })
  }
/*
  if (user == "left") {
    Bot.runCommand("/start.")
  }

*/
}
