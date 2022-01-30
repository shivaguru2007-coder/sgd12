/*CMD
  command: check7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("jn8")
User.addToGroup("user")
}

if (user=="left"){
Bot.runCommand("CHAN")
}
