
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');
const settings = require('./settingss');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: settings.SESSION_ID || process.env.SESSION_ID || "CYBER PANDA MD~H4sIAAAAAAAAA5VWXVPiSBT9L3m1a0x3+itWTdUCKjAsYo2Ao1vzEEmDEQwxCTA45X/fczuo87A761ZB0el07j33nHNv+Bnk66xyA7cPTn4GRZltk9rRst4X+A3am/nclQEL0qROgpO/eKSZiCSzEX5iFhsmpGLNHg8jxg1+I+xGnMWR36KlCC3jUjI8zWWMS8GEED6EMUwbxoVmcciUZjL0welBzpkJv7+woNjcrbLZb2EphlgIYpHIGv98TCFCn4RLAWiWCRUyHkskB7bYemxc4FnD6ITAlcUTHE8YfAmutizGLY0HQ80UIOEKdfPQfH8hbElWZvnirLh3j65MVqDyElsfpBPMyYgppLWoFZmNx6cBTwElklqUJQ0jXsO42cIHpBPjPGJUFbBHIa24pk2EI86BXupGAiWY8csPsRmRMpahZKoVOsV4lkhQiiESD5FAAajVZAAVN6QRlaFkkns8XEFt7KA6yEmWwBkQDxOgGks+wBegtPI0Vtkid2k/dXmd1fsP+5GMBZ0pIdlNR40TIVPo+eKQkogAp5w0xxZyCqpAWBbhOH5kc8aTFwIc0SzpJkcxnOxjvL04irfmQxQK2JiIIRURA9b28CyDASGlADuUFforb0BuIi88jgOd9A0jItPIryJPJ5GoARMhYpKa7M6hkBa/MHhZvjbz8n8ZUUpvd0ExpfW6UZd6/mgNP/iGEbFXWQCaOixJW1+iJNyc4biBCahuahztTYvY8DfXsW9rogfG+lhvQxK4TTajBlak5gCbqNy3i5JeT3GYMiEjGTVowQXHEgPG+4IfZg9vhCBQptkiI3uy4XhYXOo3PpN6U/6ONviCCKE6KQa33iqUyTZ6eQQwHkGnk/TVni8akmDPgiXlPUyeI7AUADciailw6oeTjxrHnj9OBicDgENBvmf61SM0dxuvEL8YpjQXyVokH+zemFkdmiTUjRYgRPhcXnwSmWglNJzMyDTJBDf10+CEY1m6RVbVZVJn69zvYQgESbq9crPS1d59Qad4WM7m497o7Hmpr+P20ai4Hl+O+6fj1upR9q+Wg6fhnwP51XxbfgadRbmeuapyaQ+R1+V+iItk4SpQ/J0FuftRN76mdJgqwTwrq3qSb4rVOklfTf96M5nN1pu8vtrnsw4tINhJ+L7t6hrzuiJVN3lSzu6zrevcJzV25smqcm8VutIhYl1u3NuU76xTskGrfT4aheYKyB+9PTIcDGJpQmGsiKU+4eaP6tOOoiZF8Sl3NY6u/Cl0eRxqvGKsgSqWTtKNlzeAFC91dZKtKiJyuOebu1b77MtoKoe2222dLVqdRSt4L+jVpw3zN/lT1Zttjm5Pl4nVt730+Ed717u5tM/t7ng0L3bd48HD81O1nA4//0MQRNje7uT6yyLt5z1+1n2w90e7gbzbh5Obc7G5fpjVNu2MpvXCjDWP2k+ZieqJKvrR5Ep8a4meujnNjtXzzcPDU3zxVE9PpRqFrd1nypa6bTZzvybLtt+cib9cX3Qncnh7VA3i4XRSji/2eT25vrvazcV0Mdiuyx/Trd7uu/b24jw7n7ruPR+6+q7aHaf9mZrJ8uZWX8YXWTEpThedFpK9dvDq8E7JvJtIKrqcZ85PxjwhAf9TugY3GSxE3PcQh1H7L9NB+TlNPUqzKvZ/SmhO8jCkiSaalz9NSMxLP2nxgtGqedfSLFH+gPR/Dei15d/q0eE+bwY0/X2wPgP9KbB4w7+gZYpVUs/X5SNQJXlaruEw2Hq9Iev38/n6N6hpUmAG+BlFnb9Kqrr13lLj7NFVdfJYoPGNMVZHkbAvfwMwpqFFSAoAAA==",
  PREFIX: getConfig("PREFIX") || "." || settings.PREFIX,
  CHATBOT: getConfig("CHATBOT") || "on",
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "ᴢᴀɴᴅɪʟᴇ-ᴍᴋ",
  MODE: getConfig("MODE") || process.env.MODE || "public",
  REPO: process.env.REPO || "https://github.com/Joshuamambo1/ZANDILE-MK",
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: settings.OWNER_NUMBER || process.env.OWNER_NUMBER || "263738403205",
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "ᴊᴏsʜᴜᴀᴍᴀᴍʙᴏ𝟭 ᴛᴇᴄʜ",
  DEV: process.env.DEV || "+94702782946",
  DEVELOPER_NUMBER: '+94702782946@s.whatsapp.net',

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆 🤖*",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/dnjqau.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs 🤖『 ᴢᴀɴᴅɪʟᴇ-ᴍᴋ 』™️🇿🇼🇿🇦🫡👑🥰🇿🇲🇳🇬 ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴢᴀɴᴅɪʟᴇ ᴍᴋ✦ ғʀᴏᴍ ᴊᴏsʜᴜᴀᴍᴀᴍʙᴏ𝟭 ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Joshuamambo1/ZANDILE-MK",

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "true",
  OWNER_REACT: process.env.OWNER_REACT || "true",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  STICKER_NAME: process.env.STICKER_NAME || "ᴍɪʟᴅʀᴇᴅ-ᴀɪ-ᴍᴅ",
  AUTO_STICKER: process.env.AUTO_STICKER || "true",

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "true",
  MENTION_REPLY: process.env.MENTION_REPLY || "true",
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/jog59s.jpg",

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_VV: process.env.ANTI_VV || "true",
  DELETE_LINKS: process.env.DELETE_LINKS || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  PM_BLOCKER: process.env.PM_BLOCKER || "true",

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀɴᴅɪʟᴇ-ᴍᴋ*",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_BIO: process.env.AUTO_BIO || "false",
  WELCOME: process.env.WELCOME || "false",
  GOODBYE: process.env.GOODBYE || "false",
  ADMIN_ACTION: process.env.ADMIN_ACTION || "true",
  version: process.env.version || "4.2.1",
  TIMEZONE: process.env.TIMEZONE || "Africa/Gweru",

  // ===== CATEGORY-SPECIFIC IMAGE URLs =====
  MENU_IMAGES: {
    '1': process.env.DOWNLOAD_MENU_IMAGE || "https://files.catbox.moe/jog59s.jpg", // Download Menu
    '2': process.env.GROUP_MENU_IMAGE || "https://files.catbox.moe/gun7jv.jpg",   // Group Menu
    '3': process.env.FUN_MENU_IMAGE || "https://files.catbox.moe/qoqeoi.jpg",       // Fun Menu
    '4': process.env.OWNER_MENU_IMAGE || "https://files.catbox.moe/ifbd7q.jpg",   // Owner Menu
    '5': process.env.AI_MENU_IMAGE || "https://files.catbox.moe/jog59s.jpg",         // AI Menu
    '6': process.env.ANIME_MENU_IMAGE || "https://files.catbox.moe/qoqeoi.jpg",   // Anime Menu
    '7': process.env.CONVERT_MENU_IMAGE || "https://files.catbox.moe/dnjqau.jpg", // Convert Menu
    '8': process.env.OTHER_MENU_IMAGE || "https://files.catbox.moe/jw8h57.jpg",   // Other Menu
    '9': process.env.REACTION_MENU_IMAGE || "https://files.catbox.moe/cik12y.jpg", // Reaction Menu
    '10': process.env.MAIN_MENU_IMAGE || "https://files.catbox.moe/ifbd7q.jpg",    // Main Menu
    '11': process.env.LOGO_MAKER_MENU_IMAGE || "https://files.catbox.moe/ifbd7q.jpg", // Logo Maker Menu
    '12': process.env.SETTINGS_MENU_IMAGE || "https://files.catbox.moe/jog59s.jpg", // Settings Menu
    '13': process.env.AUDIO_MENU_IMAGE || "https://files.catbox.moe/ifbd7q.jpgg",  // Audio Menu
    '14': process.env.PRIVACY_MENU_IMAGE || "https://files.catbox.moe/jog59s.jpg" // Privacy Menu
  }
};
