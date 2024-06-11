# CSBot

CSBot is a discord bot designed to be run once a day to fetch classcharts assignments. I created this as the lack of notifications and reminders from the classcharts app frustrated me. As many of my peers also use discord this was a suitable solution

## Features

- **Assignemnt Fetching**: Fetch assignments using classcharts api and send a DM to the user defined in `.env`

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

Start the bot with:
```bash
npm start
```

## Files

- **getter.js**: Handles data fetching from the classcharts api wrapper.
- **index.js**: Main entry point for the bot.
- **package.json**: Contains metadata and dependencies for the project.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.

## Contact

For issues, please open a issue on the GitHub repository.

---
