# Tripago App

"Tripago App" is a simple Web App project created by me, Guilherme Rocha, to understand more the process of creating a React Application from the ground up, utilizing many of the React features, such as "React Hooks", and more about local databases with 'json-server'

# How to run the app correctly?

After you download and extract all the source code on the zip file to it's own folder, you can run the following commands in order on the project directory terminal to install the necessary dependencies to run the application without any issues:

### `npm install`

After the installation, to run the 'json-server' local database, you need to run the following command in a terminal:

### `json-server --watch data/db.json`

And then, access the database in the following local URL:
[http://localhost:3000/trips](http://localhost:3000/trips)

After that, in a new terminal, you can start the React Application with the following command:

### `npm run start`

Press "Y" to accept to host the application on a new local port, and then, open:
[http://localhost:3001](http://localhost:3001) to view it in your browser.

The project is about a simple Trip List Web App that let users add new trips to their list.
They can add a new trip on the 'db.json' file, located on the "data" folder, and filter it by one of the three categories, such as: "European", "North America", and "All" Trips.

You can also delete trips from the "db.json" file, so it only appears the trips that you want to see at the moment.

## App Features

- A list containing the trips you've added to the database
- A filter that can show trips based on their category, such as: "European Trips", "North America Trips" and "All Trips"
- You can add new trips directly in the "db.json" file, located on the 'data' folder, so it can show the new trips
  you've added.

## Technologies used in this project

- HTML5
- CSS3
- Javascript
- React.js
- Json-server (Local Database)

### Final Considerations

You <b>MUST</b> run the command to watch the json-server file before you run the React Application, so you can see all the trips listed on the web page. Otherwise, it will appear an error while trying to fetch the data.