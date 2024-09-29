//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "shuaibemmanuel7@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaGJAMAAO7RR0PxFEk3e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaGJAMAAO7RR0PxFEk3e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348167574039";
global.sudo = process.env.SUDO || "2348100835767,2347018486818";
global.owner = process.env.OWNER_NUMBER || "2348167574039";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZxeDExY0FYbXQ5VytPVHRPcnFsQk5MV21FcE5wV3pBVWVpanh1cXVIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUS9iUlQwK3grRTMrM2g4bXFWV2lybHJ0SS9jQmEreGZBK21EMmVxRUdIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSFVLeVlqS0Q2ckVSR3hxRHR3UHpycXdIcWJjWnU4MUxHMnV5azVXblYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoWitNUzlISUNwVXVYcWxkRC9wVkppTVFFQkYrZDBMY0dyQXpDanBib1FRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVKTndPSER1aU9RWjdHd1dZUTZtV0JNWlZQWlRoVGQ1OEkyMG9iT1NNSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFxN2k5OGdGQ3JkV1NmM0NiKzhrcWt1d0NuK3ZTS0hnb2lqZEJtRHAzSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZ6SFdEbENxa0RsS2Q0NHlMTk1XMUhuVjlyV3R1eU1JMWdGdUFaUXRIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmRRVjBQbXZEcEMxMW0yWGJET0NuWnZ1MzQ2SWVnSDZ4TWZTalRqRjZXTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNCR1hzbWtmd3N3M1FTTlN3enFkSmJiU3NUdTRBVmRJdEJOa2MxZnZmVUltNWsxdVR4Y25aVnVMU2pJVVVkS2RmY2swTG5nNDFqT1VSVXd2VTREeWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkQrYkkwWUt4ajVoSldNdnBYZUd5NVRLTWtMVG5qNGpzTjlUZ3Voc2pSdVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlsOER3VGNxVEhLTmdORldRb2JWcXciLCJwaG9uZUlkIjoiNTBmODkzYmYtZjkxNC00OTcyLTllMTItODg2NTE5ZDM4YmQ4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhlYnNudkNlZ255QkxIU2J1S1Zwd3ZPWHJocz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSC9YWnRWVVh2TWtkNlZUL00wUlZWMEtFVGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTlBR01CUkciLCJtZSI6eyJpZCI6IjIzNDgxNjc1NzQwMzk6NjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ052Z3Rjb0VFS1h2NWJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZSZHFyUmdIL1RzRGt5cUlIcVhHZUxiaW80VVlSTXlqUWlhVUlZN1Z4SE09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1sVkN2Rk1WMTY1SlF6MVZPR29pRGRzalZ4NnBmbktzV2Yxenc4N2U0M3pxUk1raGw2ZVJmOHhSckpTdis5N0xudTgvbS9Tb0JGVytvRnNBMUdWd0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJJb0NQaERBZHdSclQvVm5QTldEQ3g5YjFVOVBod3IvVzd2SFZlWDl2ZlloR0ZSdStEYVJPcjV6TXduYmtzZkRwVk5kQVlsMnlTUTdZN0Y5T1VLdW9ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjc1NzQwMzk6NjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlVYYXEwWUIvMDdBNU1xaUI2bHhuaTI0cU9GR0VUTW8wSW1sQ0dPMWNSeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzYyNTEzOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdzAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "EMMA NUEL",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
