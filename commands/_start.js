/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}
function doTouchOwnLink() {
  Bot.sendMessage("")
}
function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(0.0)
var users = Libs.ResourcesLib.anotherChatRes("users", "global")
  users.add(1)
Bot.sendMessageToChatWithId(refUser.chatId, "🚧 NEW USER ON YOUR INVITE LINK : "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"");
}

function doAlreadyAttracted(){
  Bot.sendMessage("");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions); 
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
 Bot.sendMessageToChatWithId(1917810534,
    "*NEW USER*\n\n*USER = "+user.first_name+"\n\nUSERNAME =* " +
      user_link +
      " \n\n*USER ID =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Bot.runCommand("PVERIFY")
var broadcast = Bot.getProperty("Broadcast") ?
Bot.getProperty("Broadcast") : []
if(!broadcast.includes(user.telegramid)){
broadcast.push(user.telegramid);
Bot.setProperty("Broadcast", broadcast, "json")
/*You can check it is adding users to list or not by this way: Bot.sendMessage("*Done :* "+inspect(Bot.getProperty("Broadcast"))+"")*/
}

