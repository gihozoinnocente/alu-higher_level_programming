#!/usr/bin/node
#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Check if the URL and file path arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node webpage_to_file.js <URL> <file_path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error(`HTTP Status Code: ${response.statusCode}`);
  } else {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error('Error writing to the file:', writeError.message);
      } else {
        console.log(`Successfully saved the webpage content to ${filePath}`);
      }
    });
  }
});
