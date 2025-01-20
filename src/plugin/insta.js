import fetch from 'node-fetch';
import { igdl } from "ruhend-scraper";

const instagramDownloader = async (m, bot) => {
  const prefixMatch = m.body.match(/^[\\/!#.]/);
  const prefix = prefixMatch ? prefixMatch[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const validCommands = ['instagram', 'igdl', 'ig', 'insta'];

  if (validCommands.includes(cmd)) {
    const args = m.body.split(' ').slice(1);
    const url = args[0];

    // Validate URL
    if (!url || !url.includes('https://www.instagram.com/')) {
      return m.reply(`Please provide a valid public Instagram video link!`);
    }

    try {
      await bot.sendMessage(m.from, { text: "NEXUS-XD LOADING YOUR IG VIDEO..." }, { quoted: m });

      // Fetch Instagram video data using igdl
      const downloadData = await igdl(url);

      if (downloadData && downloadData.data && downloadData.data.length > 0) {
        const videos = downloadData.data.slice(0, 20); // Limit to first 20 videos

        for (const video of videos) {
          if (video?.url) {
            const caption = `Instagram Video Downloaded by NEXUS MD`;

            await bot.sendMessage(m.from, {
              video: { url: video.url },
              caption,
            }, { quoted: m });
          }
        }
      } else {
        throw new Error('No video found at the provided Instagram link.');
      }
    } catch (error) {
      console.error("Error fetching Instagram video:", error);
      m.reply('Nexus SAYS: 💀 An error occurred while fetching the video. Please try again later.');
    }
  }
};

export default instagramDownloader;
