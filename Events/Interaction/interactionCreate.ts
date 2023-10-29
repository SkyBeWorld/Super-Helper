import { client } from "../.."

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName)

    if (!command) {
        interaction.reply({ content: "Outdated command!" })
        return
    } 

    try {
        command?.run(client, interaction)
    } catch (error) {
        await interaction.reply({ content: "An error has occur" })
        console.log(error)
    }
})