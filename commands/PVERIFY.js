/*CMD
  command: PVERIFY
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var keyboard = [
    [{
        text: "💢 SHARE CONTACT",
        request_contact: true
    }]
]
Api.sendMessage({
    text: "© SHARE YOUR CONTACT IN ORDER TO USE THIS BOT , IT'S JUST A PHONE NUMBER VERIFICATION\n\n⚠️ NOTE : WE WILL NEVER SHARE YOUR DETAILS WITH ANYONE",
    parse_mode: "markdown",
    reply_markup: {
        keyboard: keyboard,
        resize_keyboard: true
    }
})
Bot.runCommand("VERIFY")
