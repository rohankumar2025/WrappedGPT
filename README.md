# WrappedGPT
WrappedGPT is designed to function similar to other websites out there like favoritemusic.guru which looks through all of your Spotify listens and shows your most listened to tracks and artists over various term lengths. However, what makes it different (apart from its aesthetic interface) is its recommendation engine. WrappedGPT leverages Large Language Models that have been trained on the entire internet (particularly GPT3.5-Turbo) and returns customized song recommendations based on your own listens. Additionally, it provides links for every recommendation it makes. (Note: If you want to use the site without having your listening data sent to OpenAI for whatever reason, this part is entirely optional. You have to click a button to get recommendations otherwise your listening data will not be sent at all.)

<img width="1728" alt="Screenshot 2023-07-15 at 7 45 58 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/fcd0a92f-8808-4038-ad30-f49f2dcffba5">

# Usage
Once you login to your Spotify account, you will be shown your 100 most listened to tracks.

<img width="1728" alt="Screenshot 2023-07-15 at 7 49 22 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/faa02e9c-f64c-4a98-b7a2-604fd3b07def">

Using the menu on the top right of the screen, you can switch between Short Term, Medium Term, and Long Term. Short Term only uses your listening data for the past 4 weeks, while Medium Term and Long Term use your data from the past 3 months and 3 years respectively. You can read Spotify's API Documentation to learn more about this.

<img width="1727" alt="Screenshot 2023-07-15 at 7 49 39 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/f1931369-d9f6-4d3b-b19c-627b1b5e7766">

Similarly, you can view your Short, Medium, and Long Term most listened to artists by clicking the Artists tab on the top left of the screen.

<img width="1728" alt="Screenshot 2023-07-15 at 7 49 54 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/f94c107c-ebe1-407d-bca1-360bd018b6b3">

If you want to get recommendations from GPT3.5-Turbo, you need to click onto the Recommendations tab. Once you open it, you will see an empty list like this:

<img width="1728" alt="Screenshot 2023-07-15 at 7 50 25 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/faf905ad-34a9-4b64-abbc-35eeae4646f5">

Once you click the button, you will need to wait a few seconds (OpenAI's APIs are relatively slow, so it may take up to 30 seconds). Eventually, you will see up to 25 custom recommendations show up one-by-one with their Album Covers and Spotify links.

<img width="1727" alt="Screenshot 2023-07-15 at 7 53 37 PM" src="https://github.com/rohankumar2025/WrappedGPT/assets/91754197/9666c713-e78d-42a6-af3b-2bfbed8985b6">

# Takeaways / Future Changes
Currently, WrappedGPT cannot be deployed publicly, because Spotify has not provided my project public access. This means it only works for a few select accounts that I can assign. In future, when this is resolved (takes up to 6 weeks for each extension request) I will upload this site publicly. Information about how to make a site similar to WrappedGPT (without any of the CSS or front-end decorative code) is available at the following Medium blogpost:

https://medium.com/@rohankumar_75589/using-chatgpt-to-recommend-songs-based-on-your-listening-history-1f73100309ad

Happy Coding!
