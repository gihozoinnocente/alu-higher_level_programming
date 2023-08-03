#!/bin/bash

# Check if URL is provided as an argument
if [ $# -ne 1 ]; then
  echo "Usage: $0 <URL>"
  exit 1
fi

url=$1

# Send request and store the response in a variable
response=$(curl -s -w "%{size_download}" -o /dev/null "$url")

# Display the size of the body in bytes
echo "Size of the body: $response bytes"

