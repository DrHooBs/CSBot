import { getHomeworks } from "./getter.js";
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import 'dotenv/config'

const classchartsID = process.env.classchartsID;
const classchartsDOB = process.env.classchartsDOB;
const discordUser = process.env.discordID;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  try {
    const user = await client.users.fetch(discordUser, false);
    const assignmentDict = await getHomeworks(classchartsID, classchartsDOB);
    const CDStamp = (timestamp = assignmentDict[key].due_date) => `<t:${Math.round(timestamp / 1000)}:R>`;
    const embed = new EmbedBuilder()
    .setAuthor({
        name: `Harry's Daily Assignment Overview for ${user.displayName}`,
        url: "https://github.com/DrHooBs",
        })
        
        .setColor("#3f7840");
        for (const key in assignmentDict) {
            embed.addFields(
                {
                  name: `Title: ${assignmentDict[key].title}`,
                  value: `Teacher:${assignmentDict[key].teacher}\nDue Date:<t:${Math.round(assignmentDict[key].due_date / 1000)}:R>\nDescription: ${assignmentDict[key].description}`,
                  inline: false
                })
        }
        
        await user.send({ embeds: [embed] });
    } catch (error) {
        console.error('Error fetching user or sending message:', error);
        } finally {process.exit();}
        });

client.login(process.env.DISCORD_TOKEN);
