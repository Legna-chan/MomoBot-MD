let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `✨ *H O S T I N G P Y - H O S T* 

*¿Quieres un Host de calidad y con bajos precios?*
Pues te presento a *HostingPy*,un hosting de calidad con servidores dedicados y precios de 1 USD, estos servidores están destinados a ofrecerte un Uptime 24/7 para que puedas alojar tus proyectos y qué estos funcionen de manera eficaz.

🌺 \`\`\`Información del Host\`\`\`

🌸 *Dashboard:* 
• https://dahs.hostingpy.shop

🍁 *Panel:*
• https://panel.hostingpy.shop

☘ *Comunidad Oficial:*
• https://chat.whatsapp.com/C92isvspFcXCtqv2PqCfHI

🍂 *Contacto (HostingPy - Asistencia)*
https://wa.me/595976126756

> *Únete a está comunidad y disfruta de un servicio de calidad ✨*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🍄 H O S T I N G PY - H O S T 🍄`,
body: `👑 Hosting 24/7 👑`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/Txgln.jpg', 
sourceUrl: 'https://dahs.hostingpy.shop'}}},
{ quoted: fkontak})
}
handler.tags = ['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'corin', 'corinhost', 'hosting']
export default handler
