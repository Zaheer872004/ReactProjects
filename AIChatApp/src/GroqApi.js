// const Groq = require('groq-sdk');
import Groq from 'groq-sdk';

const groq = new Groq();

async function main() {
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [],
    "model": "llama3-8b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stream": true,
    "stop": null
  });

  for await (const chunk of chatCompletion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();


// llama-3.2-90b-vision-preview
// GROQ_API_KEY=key here 