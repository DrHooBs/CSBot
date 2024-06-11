import { getHomeworks } from "./getter.js";
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";

//Load variables from .env file
import 'dotenv/config'
const classchartsID = process.env.classchartsID;
const classchartsDOB = process.env.classchartsDOB;
const discordUser = process.env.discordID;

//Initialise Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//On ready, fetch user and send assignment message
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  try {
    //Fetch user object from ID
    const user = await client.users.fetch(discordUser, false);

    //Get assignment data from ClassCharts
    const assignmentDict = await getHomeworks(classchartsID, classchartsDOB);

    //Create a timestamp for the due date
    const CDStamp = (timestamp = assignmentDict[key].due_date) => `<t:${Math.round(timestamp / 1000)}:R>`;

    //Create an embed with the assignment data
    const embed = new EmbedBuilder()
    .setAuthor({
        name: `Harry's Daily Assignment Overview for ${user.displayName}`,
        url: "https://github.com/DrHooBs",
        })
        
        .setColor("#3f7840");

        //Check if there are any assignments
        if (assignmentDict.length != 0) {
        //Iterate through the assignment data and add it to the embed
            for (const key in assignmentDict) {
                embed.addFields(
                    {
                    name: `Title: ${assignmentDict[key].title}`,
                    value: `Teacher:${assignmentDict[key].teacher}\nDue Date:<t:${Math.round(assignmentDict[key].due_date / 1000)}:R>\nDescription: ${assignmentDict[key].description}`,
                    inline: false
                    }
                )
            }
        } else {
            embed.addFields({
                name: "No Assignments, Congrats 😼",
                value: "Check back tomorrow.",
                inline: false
            })}
        
        await user.send({ embeds: [embed] });

    } catch (error) {
        console.error('Error fetching user or sending message:', error);
        } 
        //kill instance
        finally {process.exit();}
        });

client.login(process.env.DISCORD_TOKEN);
