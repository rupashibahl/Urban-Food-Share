import React from 'react';
import { Recipe } from '../types';
import { ChefHat, Clock, Users } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  isCommunityKitchen?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isCommunityKitchen = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="h-48 bg-gray-200 relative">
        {recipe.imageUrl ? (
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
            <ChefHat className="h-16 w-16 text-green-500 opacity-50" />
          </div>
        )}
        
        {isCommunityKitchen && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Community Kitchen
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{recipe.title}</h3>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          {recipe.prepTime && (
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.prepTime}</span>
            </div>
          )}
          
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Serves {recipe.servings}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Ingredients:</h4>
          <div className="text-sm text-gray-600">
            {recipe.ingredients.slice(0, 3).join(', ')}
            {recipe.ingredients.length > 3 && '...'}
          </div>
        </div>
        
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
          View Full Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;