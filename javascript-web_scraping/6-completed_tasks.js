#!/usr/bin/node
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Send a GET request to the API to retrieve tasks
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else {
    try {
      // Parse the JSON response into an array of tasks
      const tasks = JSON.parse(body);

      // Create an object to store the number of completed tasks for each user
      const completedTasksByUser = {};

      // Iterate through the tasks
      tasks.forEach((task) => {
        if (task.completed) {
          // If the task is completed, increment the count for the user
          const userId = task.userId.toString(); // Convert userId to a string
          if (completedTasksByUser[userId]) {
            completedTasksByUser[userId]++;
          } else {
            completedTasksByUser[userId] = 1;
          }
        }
      });

      // Print the number of completed tasks for each user as a JSON object
      console.log(JSON.stringify(completedTasksByUser, null, 2));
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});
