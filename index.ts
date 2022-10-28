import DiscordJS, { TextChannel, Client, Events, Channel, Attachment, IntentsBitField, Partials } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.DirectMessageReactions
    ], partials: [Partials.Channel, Partials.Reaction, Partials.Message, Partials.User]
})

client.on('ready', () => {
    console.log("The bot is ready");
})

client.on('messageReactionAdd', async (reaction, user) => {
    
    if (reaction.emoji.identifier == '%E2%AD%90'){
        (client.channels.cache.get(reaction.message.channelId) as TextChannel).messages.fetch(
            reaction.message.id).then(
                message => (client.channels.cache.get('1029104035531337728') as TextChannel ).send({
                    content: message.content + "  -- starred by @" + user.username, 
                    embeds: message.embeds,
                    files: [{attachment: (message.attachments.at(0) as Attachment).proxyURL}]}))
    }
})

client.login(process.env.TOKEN)
