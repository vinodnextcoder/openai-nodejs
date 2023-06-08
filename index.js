// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const {createCompletion} = require('./createcompletion');
const { chatCompletion } = require('./chatCompletion');
const { createEmbedding } = require('./embeding')

// Parse JSON request bodies
app.use(express.json());

// Define a GET route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/createCompletion', async (req, res) => {
  const data = await createCompletion(req.body.text);
  res.json({ message: data });
});

app.post('/chatCompletion', async (req, res) => {
    const data = await chatCompletion(req.body.text);
    res.json({ message: data });
  });

  // createEmbedding

  app.post('/createEmbedding', async (req, res) => {
    const data = await createEmbedding(req.body.text);
    res.json({ message: data });
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
