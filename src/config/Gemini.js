
import {
    GoogleGenerativeAI,
    //eslint-disable-next-line no-unused-vars
    HarmCategory,
    //eslint-disable-next-line no-unused-vars
    HarmBlockThreshold,
} from "@google/generative-ai";

// Define the API key safely based on the environment
let apiKey;

if (typeof process !== 'undefined' && process.env) {
  // In Node.js, use process.env to get the API key
  apiKey = process.env.GEMINI_API_KEY;
} else {
  // In the browser, fallback to a default API key or inject it during build time
  apiKey = '/*YOUR_API_KEY*/AIzaSyCqWgcB6PelsXxoWRCY9WAftgxY_28HGnw';  // Replace with a browser-compatible key
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  if (!prompt.trim()) {
    throw new Error('Prompt cannot be empty');
  }

  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());  // Log the response
  return result.response.text();  // Return the response text
}

export default run;
