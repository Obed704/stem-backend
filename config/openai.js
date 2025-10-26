import OpenAI from "openai";

// Only load dotenv locally
if (process.env.NODE_ENV !== "production") {
  import("dotenv/config");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default client;
