/*CMD
  command: check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var JOINED = User.getProperty("JOINED")
var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
User.setProperty("JOINED",1, "integer")
Bot.runCommand("jn2")
User.addToGroup("user")
}

if (user=="left"){
Bot.runCommand("CHAN")
}
