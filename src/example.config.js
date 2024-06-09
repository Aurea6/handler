const config = {
    database: {
        path: './database.yml' // The database path.
    },
    development: {
        enabled: false, // If true, the bot will register all application commands to a specific guild (not globally).
        guildId: 'Your bot development guild ID',
    },
    commands: {
        prefix: 't!', // For message commands, prefix is required. This can be changed by a database.
        message_commands: true, // If true, the bot will allow users to use message (or prefix) commands.
        application_commands: {
            chat_input: true, // If true, the bot will allow users to use chat input (or slash) commands.
            user_context: true, // If true, the bot will allow users to use user context menu commands.
            message_context: true // If true, the bot will allow users to use message context menu commands.
        }
    },
    users: {
        ownerId: '1177953362717704232', // The bot owner ID, which is you.
        developers: ['1177953362717704232', '976413539076026388'] // The bot developers, remember to include your account ID with the other account IDs.
    },
    messages: { // Messages configuration for application commands and message commands handler.
        NOT_BOT_OWNER: 'Well it seems like you are unauthorized to use this command 🤷🏻‍♀️',
        NOT_BOT_DEVELOPER: 'Well it seems like you are unauthorized to use this command 🤷🏻‍♀️ ',
        NOT_GUILD_OWNER: 'Well it seems like you are not the owner of this guild',
        CHANNEL_NOT_NSFW: 'You cannot run this command in a non-NSFW channel!',
        MISSING_PERMISSIONS: 'You do not have the permission to run this command, missing permissions.',
        COMPONENT_NOT_PUBLIC: 'You are not the author of this button!',
        GUILD_COOLDOWN: 'You are currently in cooldown, you have the ability to re-use this command again in \`%cooldown%s\`.'
    }
}

module.exports = config;