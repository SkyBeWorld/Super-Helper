import { client } from "../..";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

export default new client.command({
    structure: new SlashCommandBuilder()
    .setName("help")
    .setDescription("help prompt"),
    run: async (client, interaction) => {
        await interaction.deferReply()

        const embed = new EmbedBuilder()
        .setTitle("Help")
        .setDescription("# Commands\n\n\`\`/ping\`\` -> Get ping of the bot")
        .setColor("Green")

        await interaction.editReply({ embeds: [embed] })
    }
})