let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? '🧿 Majin'
          : ((user.level >= 10) && (user.level <= 20)) ? '🧚‍♀️ Fairy'
          : ((user.level >= 20) && (user.level <= 30)) ? '♠️ Fallen Angel'
          : ((user.level >= 30) && (user.level <= 40)) ? '💥 Orc Disaster'
          : ((user.level >= 40) && (user.level <= 50)) ? '🛡️ True Hero'
          : ((user.level >= 50) && (user.level <= 60)) ? '🩸 Vampire'
          : ((user.level >= 60) && (user.level <= 70)) ? '⚡ Demon Peer'
          : ((user.level >= 70) && (user.level <= 80)) ? '🔥 Dragon'
          : ((user.level >= 80) && (user.level <= 90)) ? '🧧 Demon Lord'
          : '🐉 True Dragon'
  user.role = role
  return true
}

module.exports = handler
