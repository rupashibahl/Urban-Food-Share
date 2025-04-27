import React from 'react';
import { Users, Heart, Calendar, Award } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Community</h1>
      <p className="text-gray-600 mb-8">
        Join our community of food waste warriors and make a difference in your city.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Volunteer</h2>
          <p className="text-gray-600 mb-4">
            Help collect and distribute food to those in need in your community.
          </p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
            Join as Volunteer
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Donate</h2>
          <p className="text-gray-600 mb-4">
            Support our mission to reduce food waste and help feed those in need.
          </p>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
            Make a Donation
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Events</h2>
          <p className="text-gray-600 mb-4">
            Join community events and learn more about reducing food waste.
          </p>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
            View Events
          </button>
        </div>
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <Award className="h-6 w-6 text-green-600 mr-2" />
          <h2 className="text-xl font-semibold">Community Impact</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,234</div>
            <div className="text-gray-600">Active Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">5,678</div>
            <div className="text-gray-600">Meals Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">42</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;