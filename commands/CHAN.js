/*CMD
  command: CHAN
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

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
Bot.sendKeyboard("🟢 JOINED", "*⛔ MUST JOIN ALL OUR CHANNEL\n\n@sglooter \n\n @lootsbotprovider\n\n@mallu_sky\n\n@MJLOOTTS\n\n@RDLOOTERS\n\n@MRDARK_OFFICIAL\n\n@Vipmodsff\n\n@upstoxearnbyreferral \n\n\n\n🟢AFTER JOINING GIVE 🟢 JOINED")
