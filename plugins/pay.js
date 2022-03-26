let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag one'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Enter the amount of mana to be given'
  if (isNaN(txt)) throw 'only numbers'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  let username = conn.getName(who)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (exp > users[m.sender].exp) throw 'You dont have enough mana to transfer'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`You gave ${xp} mana to ${username} ❇️`)
 
}
handler.help = ['givemana @user <amount>']
handler.tags = ['xp']
handler.command = /^givemana$/
handler.rowner = true

module.exports = handler

