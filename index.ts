import DiscordJS, { Client, IntentsBitField } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages
    ]
})

client.on('ready', () => {
    console.log("The bot is ready")
})

client.on('messagreCreate', (message) => {
    if (message.content === 'ping'){
        console.log("Replying pong")
        message.reply({
            content: 'pong',
        })
    }
})

client.login(process.env.TOKEN)
