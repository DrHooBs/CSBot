# Classcharts-Daily-Discord

  

Classcharts-Daily-Discord is a utility designed to be run once a day to fetch classcharts assignments and send them to a user on discord. I created this as the lack of notifications and reminders from the classcharts app frustrated me. As many of my peers also use discord this was a suitable solution

  

## Features

  

-  **Assignemnt Fetching**: Fetch assignments using classcharts api and send a DM to the user defined in `.env`

  

## Getting Started

  

### Prerequisites

  

Ensure you have the following installed:

- Node.js

- npm

  

### Installation

  

1. Clone the repository:

```bash

git clone https://github.com/DrHooBs/CSBot.git

```

2. Navigate to the project directory:

```bash

cd CSBot

```

3. Install the dependencies:

```bash

npm install

```

  

### Configuration

  

1. Create a `.env` file from the template:

```bash

cp .envtemplate .env

```

2. Edit the `.env` file to include your specific settings.

  

### Usage

#### Run Once

Start the bot with:

```bash

npm  start

```

#### Automation

This script works best when run daily at either 08:00 or 16:30. Please follow the relevant section for automating on different platforms

  

<details>
	<summary>Linux</summary>

First, create a new **systemd** timer unit file with a `.timer` extension.

```console

foo@bar:~$ sudo nano /etc/systemd/system/assignment.timer

```

Whilst in the nano editor add the following content:

```txt

[Unit]
Description=Discord Assignment Fetcher.

[Timer]
OnCalendar=Mon,Fri *-*-* 08:00:00

[Install]
WantedBy=timers.target

```

Next, create a service unit file that will correspond to the `.timer`. This should be in the same directory

```console

foo@bar:~$ sudo nano /etc/systemd/system/assignment.service

```

Whilst in the nano editor add the following content:

```txt

[Unit]
Description=Discord Assignment Fetcher.

[Service]
ExecStart=/path/to/repo/start.sh

[Install]
WantedBy=multi-user.targer

```

Finally, enable and start the timer

```console

foo@bar:~$ sudo systemctl enable assignment.timer
foo@bar:~$ sudo systemctl start assigment.timer

```

</details>

<details> 
<summary>Windows</summary>

1.  Open  **Start**.
2.  Search for  **Task Scheduler**, and click the top result to open the app.
3.  Right-click the "Task Scheduler Library" branch and select the  **New Folder**  option.
4. Type a name for the folder – for example, MyTasks. (This step isn't required, but it's recommended to keep your tasks separate from the system and apps tasks.)
5.  Click the  **OK**  button.
6.  Expand the "Task Scheduler Library" branch and select the  **MyTasks**  folder.
7.  Click the  **Action**  menu.
8.  Select the **"Create Basic Task"**  option.
9. In the "Name" setting, write `assignment getter`.
10. Click the **Next** button 
11. Select the **Monthly** Option
12. Click the **Next** Button
13. Use the **Months** drop-down to select which months to exlude. e.g. August (Hopefully you won't have assignments then)
14. Use the **Days** drop-down to select whether you recieve the service runs on weekends or if you would only like the service to run on particlar day(s)
15. Click the **Next** button
16. Select the **Start a program** option
17. In the "Program/Script" setting specify the path. `C:\path\to\repo\start.bat`
18. Click the **Finish** button


</details>

  
  

## Files

  

-  **getter.js**: Handles data fetching from the classcharts api wrapper.

-  **index.js**: Main entry point for the bot.

-  **package.json**: Contains metadata and dependencies for the project.

  

## License

  

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

  

## Contact
For issues, please open a issue on the GitHub repository.
