# Arma 3 Server Status Checker

This is a simple web application that retrieves the player count and ping for one or more Arma 3 servers and displays the information in a table on a web page.

## How to Use

To use this application, you will need to create a configuration file that specifies the name and ID of each Arma 3 server you want to retrieve status information for. The configuration file should be in YAML format, and it should be named `config.yaml`. Here's an example of what the configuration file might look like:

```yaml
- name: Server 1
  id: 1234567
- name: Server 2
  id: 8901234
```

Once you have created your configuration file, simply open the `index.html` file in a web browser to view the status of your Arma 3 servers. The player count and ping for each server will be displayed in a table.

## How it Works

This application uses the [BattleMetrics API](https://docs.battlemetrics.com/v1/reference#get-servers) to retrieve server status information for Arma 3 servers. The API returns JSON data that contains information such as the player count and ping for each server.

The JavaScript code in the `server-status.js` file retrieves the configuration data from the `config.yaml` file, and then loops through each server specified in the configuration file. For each server, the code builds the URL for the BattleMetrics API, makes a fetch request to retrieve the server status data, and then updates the table on the web page with the player count and ping information.
