import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let img = imagen1
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = ` 🌸≺ MOMO BOT - MD \n「 Bienvenido 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Bienvenido/α 」\n「 ${groupMetadata.subject} 」\n\n >  Para ver la lista de comandos utiliza: .menu >`
await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = ` 🌸≺ MOMO BOT - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto 」\n\n  Lҽɠɳα.xyz`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, redes, fkontak)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = ` 🌸≺ MOMO BOT - MD \n「 Adios 」\n「 @${m.messageStubParameters[0].split`@`[0]} 」\n「 Se fue 」\n「 Vuelve pronto 」\n\n  Lҽɠɳα.xyz`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, redes, fkontak)
}}

