import { GoogleGenAI } from "@google/genai";

// Initialize AI lazily to prevent top-level process.env access errors in browser
const getAIClient = () => {
  const apiKey = process.env.API_KEY || "";
  return new GoogleGenAI({ apiKey });
};

/**
 * Fetches a quick coaching insight.
 */
export const getCricketInsight = async (playerName: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Quickly generate a 1-sentence inspirational coaching tip for ${playerName}.`,
      config: {
        systemInstruction: "You are a professional cricket coach. Keep it under 15 words.",
        temperature: 0.3,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Insight error:", error);
    return "Focus on the basics and trust your training.";
  }
};

/**
 * Fetches tournament data using Google Search grounding.
 */
export const getTournamentReport = async (): Promise<{ text: string; sources: any[] }> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Search for 'Westwood High School Cricket' on CricClubs. Find the most recent match score and the next scheduled match. Output format: [Recent Result] | [Next Match Date and Opponent]. Be extremely brief.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return { 
      text: response.text || "Match data currently syncing with CricClubs...", 
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || [] 
    };
  } catch (error) {
    console.error("Tournament report error:", error);
    return { 
      text: "Syncing Live | See official schedule for upcoming details.",
      sources: []
    };
  }
};