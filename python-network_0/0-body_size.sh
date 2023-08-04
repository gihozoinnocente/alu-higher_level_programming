#!/bin/bash
# Check if URL is provided as an argument
if [ $# -ne 1 ]; then echo "Usage: $0 <URL>"; exit 1; fi
url=$1; response=$(curl -s -w "%{size_download}" -o /dev/null "$url"); echo "Size of the body: $response bytes"

