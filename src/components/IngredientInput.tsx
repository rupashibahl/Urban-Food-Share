import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientInputProps {
  onIngredientsSubmit: (ingredients: Ingredient[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onIngredientsSubmit }) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddIngredient = () => {
    if (inputValue.trim()) {
      const newIngredient: Ingredient = {
        id: Date.now().toString(),
        name: inputValue.trim(),
      };
      setIngredients([...ingredients, newIngredient]);
      setInputValue('');
    }
  };

  const handleRemoveIngredient = (id: string) => {
    setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.length > 0) {
      onIngredientsSubmit(ingredients);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Leftover Ingredients</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter an ingredient..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button 
            type="button" 
            onClick={handleAddIngredient}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        
        {ingredients.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Current ingredients:</h3>
            <div className="flex flex-wrap gap-2">
              {ingredients.map(ingredient => (
                <div key={ingredient.id} className="bg-green-50 text-green-700 px-3 py-1 rounded-full flex items-center">
                  <span>{ingredient.name}</span>
                  <button 
                    type="button" 
                    onClick={() => handleRemoveIngredient(ingredient.id)}
                    className="ml-1 text-green-500 hover:text-green-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={ingredients.length === 0}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            ingredients.length > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-300 cursor-not-allowed'
          } transition-colors`}
        >
          Click Here to Donate
        </button>
      </form>
    </div>
  );
};

export default IngredientInput;