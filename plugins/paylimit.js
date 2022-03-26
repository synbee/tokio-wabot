let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag one'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw 'Enter the amount of Gold to be given'
    if (isNaN(txt)) throw 'only numbers'
    let poin = parseInt(txt)
    let limit = poin
    let pjk = Math.ceil(poin * pajak)
    let username = conn.getName(who)
    limit += pjk
    if (limit < 1) throw 'Minimal 1'
    let users = global.db.data.users
    if (limit > users[m.sender].limit) throw 'You dont have enough gold to transfer'
    users[m.sender].limit -= limit
    users[who].limit += poin

    m.reply(`You gave ${poin} gold to ${username} 🎉`)
    
}
handler.help = ['give @user <amount>']
handler.tags = ['xp']
handler.command = /^give$/
handler.rowner = false

module.exports = handler

