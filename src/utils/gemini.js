import { GEMINI_KEY } from "./constant";

export const gemini = async (query) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_KEY}`;

  const requestData = {
    prompt: {
       "text" : query
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    console.log("DATA--->",data);
    if(!!data?.error){
        alert(data?.error?.message)
    }
    const textOutput = data?.candidates?.[0]?.output || "";
    
    // Extract movie names (assuming each is on a new line)
    return textOutput.split("\n").map((movie) => movie.trim()).filter(Boolean);
  } catch (error) {
    console.error("Error fetching movie recommendations:", error);
    return [];
  }
};