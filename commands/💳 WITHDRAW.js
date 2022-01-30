/*CMD
  command: 💳 WITHDRAW
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
if (status.value() > 2000) {
  Bot.sendMessage("⛔ WITHDRAWAL IS CURRENTLY OFF")
} else {
  let stat = Bot.getProperty("" + user.telegramid + "")
  let wdinfo = Bot.getProperty("wdInfo")
  if (stat == "ban") {
    Bot.runCommand("KEYBOARD")
  } else {
    let balance = Libs.ResourcesLib.userRes("balance")
    let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
    var num = User.getProperty("num")
    if (num == undefined) {
      Bot.sendMessage("⚠️ SET YOUR WALLET USING : 🗂 WALLET`")
    } else {
      if (balance.value() < 1) {
        Bot.sendMessage("⚠️ MUST OWN ATLEAST 1 INR TO MAKE WITHDRAWAL")
      } else {
        Bot.sendKeyboard("⛔ CANCEL ", "📤 ENTER AMOUNT TO WITHDRAW")
        Bot.runCommand("AMØÜÑT")
      }
    }
  }
}

