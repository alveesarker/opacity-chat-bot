// node --version # Should be >= 18
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyA6nGI6f16dPnCR65Ln4EH4mNSDLuceEmo";

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [],
  });

  const oc =
    "We **Opacity** **Creatives** crossed all obstacles and traveled thousands of miles in 05 years. We achieved a lot of successes & failures. *We learned a lot and still learning how to become the best.";
  const names =
    "My name is Opacity Chat Bot. I'm glad we could meet! * To learn more about Opacity Creatives <a href='https://opacitycreatives.com/' target='_blank'>click here</a>";
  const inspired =
    "**Afif** and **Nafis** shared a passion for creativity and saw a need for innovative branding solution Bangladesh and beyond, which led to the inception of **Opacity Creatives** in 2018.";
  const awards =
    "**Opacity Creatives** boasts a remarkable collection of awards, including the Metagraphix Grandmaster in Graphic Design, **Finest Creative Agency** Award 2022 **(Italy)**, and SES Talent Part The Year Gold Award in 2022.";

    
  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  if (prompt.includes("OC")) {
    return oc;
  } else if (
    prompt ===
    "What notable awards and recognitions has Opacity Creatives received?"
  ) {
    return awards;
  } else {
    return response.text();
  }
}

export default runChat;
