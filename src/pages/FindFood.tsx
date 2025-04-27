import React from 'react';
import DonationMap from '../components/DonationMap';
import { donationCenters } from '../data/mockData';

const FindFood: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Food</h1>
      <p className="text-gray-600 mb-8">
        Locate nearby donation centers and available food resources in your community.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DonationMap centers={donationCenters} />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Need Assistance?</h2>
          <p className="text-gray-600 mb-4">
            If you're in need of food assistance, our network of community partners is here to help.
          </p>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindFood;