import React from 'react';
import { Leaf, Users, UtensilsCrossed } from 'lucide-react';
import { WasteStats } from '../types';

interface ImpactDashboardProps {
  stats: WasteStats;
}

const ImpactDashboard: React.FC<ImpactDashboardProps> = ({ stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
            <Leaf className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-700">{stats.savedItems}</div>
          <div className="text-sm text-green-600">Items Saved</div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
            <UtensilsCrossed className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-700">{stats.mealsProvided}</div>
          <div className="text-sm text-blue-600">Meals Provided</div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
            <Users className="h-6 w-6 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-700">{stats.donationsMade}</div>
          <div className="text-sm text-orange-600">Donations Made</div>
        </div>
      </div>
      
      <div className="mt-6 relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
              Monthly Goal Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-green-600">
              {Math.min(Math.round((stats.savedItems / 100) * 100), 100)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
          <div style={{ width: `${Math.min(Math.round((stats.savedItems / 100) * 100), 100)}%` }} 
               className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 transition-all duration-500 ease-in-out">
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Goal: Help 100 people this month
        </p>
      </div>
    </div>
  );
};

export default ImpactDashboard;