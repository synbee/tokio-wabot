function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '918075922832', 'sympai', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
