import { Ingredient, Recipe } from '../types';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function findRecipesByIngredients(ingredients: Ingredient[]): Promise<Recipe[]> {
  const ingredientList = ingredients.map(i => i.name).join(', ');
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a creative chef who specializes in creating recipes from available ingredients. Generate recipes that are suitable for community kitchens and can serve multiple people."
      }, {
        role: "user",
        content: `Create 3 unique recipes using some or all of these ingredients: ${ingredientList}. 
        Format the response as JSON array with objects containing:
        - id (string)
        - title (string)
        - ingredients (array of strings)
        - instructions (array of strings)
        - servings (number)
        - prepTime (string)
        - imageUrl (leave empty string)`
      }]
    });

    const recipes: Recipe[] = JSON.parse(completion.choices[0].message.content || '[]');
    
    // Add random stock photos from a curated list
    const stockPhotos = [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
      'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg',
      'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg'
    ];

    return recipes.map((recipe, index) => ({
      ...recipe,
      imageUrl: stockPhotos[index % stockPhotos.length]
    }));
  } catch (error) {
    console.error('Error generating recipes:', error);
    return [];
  }
}