// Load the configuration file
fetch('config.yaml')
  .then(response => response.text())
  .then(yaml => {
    const config = jsyaml.load(yaml);

    // Loop through each server in the configuration file
    for (const server of config) {
      // Build the URL for the Arma 3 server status API
      const url = `https://api.battlemetrics.com/servers/${server.id}`;

      // Make a fetch() request to the server status API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Update the player count and ping for the current server
          const playerCount = data.data.attributes.players;
          const ping = data.data.attributes.rank;
          const tableRow = document.getElementById(server.name);
          tableRow.innerHTML = `<td>${server.name}</td><td>${playerCount}</td><td>${ping} ms</td>`;
        })
        .catch(error => {
          console.error(`Failed to retrieve status for ${server.name}: ${error}`);
        });
    }
  })
  .catch(error => {
    console.error(`Failed to load configuration: ${error}`);
  });
