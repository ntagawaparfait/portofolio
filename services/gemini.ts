
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getNtagawaResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are acting as a "Portfolio Assistant" for Ntagawa Parfait.
          Ntagawa is a Remote Chat Support Agent with 2 years of experience.
          He lives in Rwanda, works remotely, and is currently a student at the University of Kigali (Bachelor's ongoing).
          His key skills: Chat/Email support, Issue Resolution, CRM systems, Written communication.
          He is fluent in English and Kinyarwanda.
          He holds certifications in Communication Science (U. Amsterdam) and Philosophy (U. Edinburgh).
          
          Respond to visitors in Ntagawa's actual professional tone: 
          - Empathetic, clear, professional, and efficient.
          - Use a structured format when listing information.
          - If they ask about hiring him, guide them to the contact form or mention his email: ntagawaparfait123@gmail.com.
          - If they have a "support issue", simulate how Ntagawa would resolve it with high-quality writing.
          
          Keep responses concise (max 3 paragraphs).
        `,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again or reach out directly via the contact form.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is currently resting. Please feel free to email Ntagawa directly!";
  }
};
