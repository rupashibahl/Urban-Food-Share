import { createClient } from "npm:@supabase/supabase-js@2.39.0";
import { Supabase } from "@supabase/ai";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const image = formData.get("image");

    if (!image || !(image instanceof File)) {
      throw new Error("No image provided");
    }

    // Convert image to base64
    const buffer = await image.arrayBuffer();
    const base64Image = btoa(String.fromCharCode(...new Uint8Array(buffer)));

    // Initialize Supabase AI
    const model = new Supabase.ai.Session('gte-small');

    // Process image using Supabase AI
    const prompt = `Analyze this image and list all food items visible. Format as a JSON array of strings.`;
    const result = await model.run(base64Image, { prompt });

    // Parse the result to get food items
    let foodItems = [];
    try {
      foodItems = JSON.parse(result.text);
    } catch (e) {
      console.error("Failed to parse AI response:", e);
      foodItems = result.text.split(",").map(item => item.trim());
    }

    return new Response(
      JSON.stringify({ ingredients: foodItems }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing image:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process image" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});