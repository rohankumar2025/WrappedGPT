require("dotenv").config();
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
const axios = require("axios");
const express = require("express");
const app = express();
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 4000;


const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);


// POST OPEN_AI -- MAKE REQUEST TO CHATGPT API
app.get('/ask-open-ai', async (req, res) => {
    const prompt = req.query.prompt;
  
    try {
      if (prompt == null) {
        throw new Error("No prompt provided.");
      }

      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "assistant",
            content: prompt
          },
        ],
      });

      const completion = response.data.choices[0].message.content;

      return res.status(200).json({
        success: true,
        message: completion,
      });

    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message
        });
    }
});

// POST SPOTIFY -- GET USER MOST LISTENED TO DATA
app.get('/ask-spotify', async (req, res) => {
    const search_query = req.query.search_query;
    const access_token = req.query.access_token;
    const time_range = req.query.time_range;
    const offset = req.query.offset;

    try {
        if (access_token == null) {
            throw new Error("No access token provided.");
        }

        if (search_query !== 'tracks' && search_query !== 'artists') {
            throw new Error("Invalid search query provided.");
        }

        if (time_range !== 'short_term' && time_range !== 'medium_term' && time_range !== 'long_term') {
            throw new Error("Invalid time range provided.");
        }

        if (offset == null) {
            throw new Error("No offset provided.");
        }

        const response = await axios.get(`https://api.spotify.com/v1/me/top/${search_query}?`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            params: {
                limit: 50,
                offset: offset,
                time_range: time_range
              }
        });

        completion = response.data.items
        return res.status(200).json({
            success: true,
            message: completion,
        });


    } catch (error) {
        console.log(error.message)
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

app.get('/search-spotify', async (req, res) => {
    const search_query = req.query.search_query;
    const access_token = req.query.access_token;

    try {
        if (access_token == null) {
            throw new Error("No access token provided.");
        }

        if (search_query == null) {
            throw new Error("No search query provided.");
        }

        const response = await axios.get(`https://api.spotify.com/v1/search?q=${search_query}&type=track&limit=1`, {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        completion = response.data.tracks.items[0]
        return res.status(200).json({
            success: true,
            message: completion,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
})

app.listen(port, () => console.log(`Server is running on port ${port}`));