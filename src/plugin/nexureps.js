import config from '../../config.cjs';

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "repo") {
    const start = new Date().getTime();
    await m.React('📌');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄❐
┊☻ ɴᴇxᴜs xᴍᴅ ʙᴏᴛ
┊☻ ᴠɪsɪᴏɴ (3) 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈❑
╭┈┈┈┈❐
┋https://github.com/kingmalvn/NEXUS-XMD
┋𝑚𝑎𝑑𝑒 𝑏𝑦 𝑀𝑎𝑙𝑣𝑖𝑛 𝐾𝑖𝑛𝑔
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈❑
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈❏
┋https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
╰┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉❑`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
