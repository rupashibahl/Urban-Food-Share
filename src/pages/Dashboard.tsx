import React from 'react';
import IngredientInput from '../components/IngredientInput';
import RecipeCard from '../components/RecipeCard';
import DonationForm from '../components/DonationForm';
import ImpactDashboard from '../components/ImpactDashboard';
import DonationMap from '../components/DonationMap';
import { Ingredient } from '../types';
import { sampleRecipes, donationCenters, initialWasteStats } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [showRecipes, setShowRecipes] = React.useState(false);
  const [showDonationForm, setShowDonationForm] = React.useState(false);
  const [wasteStats, setWasteStats] = React.useState(initialWasteStats);

  const handleIngredientsSubmit = (newIngredients: Ingredient[]) => {
    setIngredients(newIngredients);
    setShowRecipes(true);
    setShowDonationForm(false);
  };

  const handleDonationCreated = () => {
    setWasteStats({
      ...wasteStats,
      savedItems: wasteStats.savedItems + ingredients.length,
      savedWeight: wasteStats.savedWeight + (ingredients.length * 0.4),
      donationsMade: wasteStats.donationsMade + 1,
      mealsProvided: wasteStats.mealsProvided + Math.floor(ingredients.length * 1.2)
    });
    
    setIngredients([]);
    setShowRecipes(false);
    setShowDonationForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
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
                  Donate These Items Instead
                </button>
              </div>
              
              <p className="text-gray-600 mb-4">
                Here are some recipes that can be prepared with your ingredients for community kitchens:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sampleRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} recipe={recipe} isCommunityKitchen={true} />
                ))}
              </div>
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
            
            <button className="w-full mt-4 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-md transition-colors text-sm font-medium">
              Learn More About Food Waste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;