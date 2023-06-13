# openai-nodejs

# OpenAI Node.js API Usage
This repository provides examples of using the OpenAI API with Node.js. It demonstrates how to use three different API endpoints: createEmbedding, createCompletion, and createChatCompletion. Each endpoint serves a specific purpose and has its own usage pattern.

# Prerequisites
Before running the examples, make sure you have the following:

Node.js installed on your machine.
OpenAI API key. You can obtain one from the OpenAI website.
Installation
Clone this repository: https://github.com/vinodnextcoder/openai-nodejs

# add api key

Open the config.js file.

Replace the YOUR_OPENAI_API_KEY sssdsdplaceholder with your actual OpenAI API key.

Usage
The repository includes examples for three different API endpoints: createEmbedding, createCompletion, and createChatCompletion. Here's how you can use each of them:
curl 
curl --location 'http://localhost:3000/createEmbedding' \
--header 'Content-Type: application/json' \
--data '{
    "text":"chat"
}'

curl --location 'http://localhost:3000/chatCompletion' \
--header 'Content-Type: application/json' \
--data '{
    "text":"i am going to pune university"
}'

curl --location 'http://localhost:3000/createCompletion' \
--header 'Content-Type: application/json' \
--data '{
    "text":"Write a tagline for an ice cream shop."
}'