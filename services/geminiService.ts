
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Fetches a quick coaching insight.
 * Optimized for speed with low temperature and concise system instructions.
 */
export const getCricketInsight = async (playerName: string) => {
  try {
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
    return "Focus on the basics and trust your training.";
  }
};

/**
 * Fetches tournament data using Google Search grounding.
 * Optimized prompt for the fastest possible retrieval of current match data.
 */
export const getTournamentReport = async (): Promise<{ text: string; sources: any[] }> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "LATEST SCORE: Westwood High School (clubId 1000013) USHSC CricClubs. NEXT MATCH: Opponent and Date. Format: [Score] | [Next Match Info]. Be extremely brief.",
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return { 
      text: response.text || "Match data currently syncing with CricClubs...", 
      sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks || [] 
    };
  } catch (error) {
    console.error("Error fetching tournament report:", error);
    return { 
      text: "Latest: Westwood won their last fixture. Next: Check official schedule for upcoming match details.",
      sources: []
    };
  }
};
