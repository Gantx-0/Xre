import { Client } from '../Client'
import commands from './commands.json'
import Utils from '../Utils'
import responses from './responses.json'
import { ICommandList } from '../Typings'

export const help = (client: Client, command?: string): string => {
    if (command) {
        for (const category in commands) {
            for (const index of (commands as ICommandList)[category]) {
                if (index.command === command) {
                    return `*📗 Command:* ${index.command}\n📙 *Description:* ${index.description}\n📘 *Usage:* ${client._config.prefix}${index.usage}`
                }
            }
        }
        return responses['invalid-command-short'].replace('{C}', command)
    }

       return `╭────┈ ↷
👋 Konnichiwa! (♥w♥) 

 ──────────────┈ ❁۪۪
🎴 *Bot Prefix*「 ${client._config.prefix} 」
🎴 *Github:* *https://github.com/Gantx-Hckr*
❏  *Cringe-edit* - By Simp Freakin Sama
╰─────────────────┈ ❁ཻུུ۪۪۪۪
🌟 *𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 🌟

📢 *「General-Commands」* 📝
♦ *${client._config.prefix}help*
♦ *${client._config.prefix}info*
♦ *${client._config.prefix}everyone*
♦ *${client._config.prefix}profile*
♦ *${client._config.prefix}issues*
♦ *${client._config.prefix}delete*
♦ *${client._config.prefix}commits*
♦ *${client._config.prefix}profile*
♦ *${client._config.prefix}group*

📢 *「Media-Commands🎬」*
♦ *${client._config.prefix}lyrics*
♦ *${client._config.prefix}wallpaper*
♦ *${client._config.prefix}yts*
♦ *${client._config.prefix}yta*
♦ *${client._config.prefix}ytv*
♦ *${client._config.prefix}gify*
♦ *${client._config.prefix}sticker*
♦ *${client._config.prefix}subred*
♦ *${client._config.prefix}img*

📢 *「Admin-Commands」* 📝
♦ *${client._config.prefix}activate*
♦ *${client._config.prefix}deactivate*
♦ *${client._config.prefix}close*
♦ *${client._config.prefix}open*
♦ *${client._config.prefix}demote*
♦ *${client._config.prefix}promote*
♦ *${client._config.prefix}remove*
♦ *${client._config.prefix}register*
♦ *${client._config.prefix}unregister*
♦ *${client._config.prefix}purge*
♦ *${client._config.prefix}everyone*
╰─────────────────┈ ❁ཻཻུུ۪۪۪۪⸙͎
─────────────────┈ ❁۪۪──
┃□│✎┊ *「Xre-Botto」*
┃□│╭────────╯   
┃□││❏cringe-edit
┃□││❏....
┃□││❏....
╰─────────────────┈ ❁ཻུ۪۪⸙͎║
---ZIM-D4RK-4RMY---
\n📚 Use ${client._config.prefix}help <command_name> to view the full info. \n🔖 _Eg: ${client._config.prefix}help promote_

Hope you have a great day! \n

Synthesized-Infinity-Edit`
}
