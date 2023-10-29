import { client } from "../..";
import { ActivityType } from "discord.js";
import mongoose from "mongoose";

client.once("ready", async () => {
    client.user.setPresence({ activities: [{ name: `in dev`, type: ActivityType.Playing }] })

    console.log(`${client.user.tag} is online`)

    const mongourl = process.env.database

    if (!mongourl) return;

    mongoose.connect(mongourl).then(() => {
        console.log("(DATABASE): online without problems!")
    }).catch(err => console.log("(DATABASE): "+ err))
})