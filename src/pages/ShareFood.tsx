import React from 'react';
import IngredientInput from '../components/IngredientInput';
import DonationForm from '../components/DonationForm';
import { Ingredient } from '../types';

const ShareFood: React.FC = () => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [showDonationForm, setShowDonationForm] = React.useState(false);

  const handleIngredientsSubmit = (newIngredients: Ingredient[]) => {
    setIngredients(newIngredients);
    setShowDonationForm(true);
  };

  const handleDonationCreated = () => {
    setIngredients([]);
    setShowDonationForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Share Your Food</h1>
      <p className="text-gray-600 mb-8">
        Help reduce food waste by sharing your surplus ingredients with those in need.
      </p>

      {!showDonationForm ? (
        <IngredientInput onIngredientsSubmit={handleIngredientsSubmit} />
      ) : (
        <DonationForm ingredients={ingredients} onDonationCreated={handleDonationCreated} />
      )}
    </div>
  );
};

export default ShareFood;