let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`❇️ Mana : ${global.db.data.users[who].exp}`)
}
handler.help = ['Mana [@user]']
handler.tags = ['xp']
handler.command = /^(mana)$/i
module.exports = handler
