const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Get the dynamic number of servers the bot is in
    const serverCount = client.guilds.cache.size;

    client.user.setPresence({
        activities: [{
            type: ActivityType.Watching,          // Makes it say "Watching..."
            name: 'Over',                         // Combined: "Watching Over"
            details: `${serverCount} Larpers`,    // 2nd Line (underneath)
            state: 'In LARP Central',             // 3rd Line
            assets: {
                largeImage: 'lclogo',         // Your asset key from Dev Portal
                largeText: 'Larp Central Bot'
            }
        }],
        status: 'online',
    });
});

client.login('');
