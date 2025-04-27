import React, { useState } from 'react';
import Header from './components/Header';
import IngredientInput from './components/IngredientInput';
import RecipeCard from './components/RecipeCard';
import DonationForm from './components/DonationForm';
import ImpactDashboard from './components/ImpactDashboard';
import DonationMap from './components/DonationMap';
import { Ingredient, Recipe } from './types';
import { donationCenters, initialWasteStats } from './data/mockData';
import { findRecipesByIngredients } from './lib/recipeService';

function App() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [wasteStats, setWasteStats] = useState(initialWasteStats);
  const [loading, setLoading] = useState(false);

  // Handle ingredient submission: go directly to DonationForm
  const handleIngredientsSubmit = async (newIngredients: Ingredient[]) => {
    setLoading(true);
    try {
      setIngredients(newIngredients);
      setShowDonationForm(true);
      setShowRecipes(false);
    } catch (error) {
      console.error('Error processing ingredients:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update waste stats after donation
  const handleDonationCreated = () => {
    setWasteStats({
      ...wasteStats,
      savedItems: wasteStats.savedItems + ingredients.length,
      donationsMade: wasteStats.donationsMade + 1,
      mealsProvided: wasteStats.mealsProvided + Math.floor(ingredients.length * 1.2)
    });
    
    setIngredients([]);
    setShowRecipes(false);
    setShowDonationForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Urban Food Share</h1>
          <p className="text-gray-600 max-w-3xl">
            Reducing food waste and supporting the unhoused community by connecting 
            surplus food with those who need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ImpactDashboard stats={wasteStats} />
            
            {!showRecipes && !showDonationForm && (
              <IngredientInput onIngredientsSubmit={handleIngredientsSubmit} />
            )}
            
            {showRecipes && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recipe Suggestions</h2>
                  <button 
                    onClick={() => {
                      setShowDonationForm(true);
                      setShowRecipes(false);
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium"
                  >
                    Click Here to Donate
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Here are some recipes that can be prepared with your ingredients for community kitchens:
                </p>
                
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                  </div>
                ) : recipes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recipes.map(recipe => (
                      <RecipeCard key={recipe.id} recipe={recipe} isCommunityKitchen={true} />
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 py-8">
                    No recipes found for these ingredients. Consider donating them instead!
                  </p>
                )}
              </div>
            )}
            
            {showDonationForm && (
              <DonationForm ingredients={ingredients} onDonationCreated={handleDonationCreated} />
            )}
          </div>
          
          <div className="space-y-6">
            <DonationMap centers={donationCenters} />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Food Waste Facts</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full mr-2 shrink-0 text-sm font-medium">1</span>
                  <p className="text-gray-700">33% of all food produced globally is lost or wasted.</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full mr-2 shrink-0 text-sm font-medium">2</span>
                  <p className="text-gray-700">Food waste in cities contributes significantly to greenhouse gas emissions.</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full mr-2 shrink-0 text-sm font-medium">3</span>
                  <p className="text-gray-700">Feeding the unhoused with surplus food could help address two urban challenges simultaneously.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold mb-2">Urban Food Share</h2>
              <p className="text-green-100 max-w-md">
                Together we can reduce food waste and support those in need in our communities.
              </p>
            </div>
            
            {/* Fixed typo: changed <birthplace> to <div> */}
            <div>
              {/* <h3 className="text-lg font-semibold mb-2">Quick Links</h3> */}
              {/* <ul className="space-y-1"> */}
                {/* <li><a href="#" className="text-green-100 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-green-100 hover:text-white">Resources</a></li>
              </ul> */}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-green-700 text-center text-green-200 text-sm">
            <p>© 2025 Urban Food Share. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;