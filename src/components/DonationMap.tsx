import React from 'react';
import { DonationCenter } from '../types';
import { MapPin, Clock, Phone } from 'lucide-react';

interface DonationMapProps {
  centers: DonationCenter[];
}

const DonationMap: React.FC<DonationMapProps> = ({ centers }) => {
  // In a real application, we would use a mapping library like Google Maps, Mapbox, or Leaflet
  // For this example, we'll just display the donation centers as cards
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Nearby Donation Centers</h2>
      
      {/* <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> In a real application, this would display an interactive map 
          with markers for each donation center. For now, we're showing the centers as a list.
        </p>
      </div> */}
      
      <div className="space-y-4 mt-4">
        {centers.map((center) => (
          <div key={center.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <h3 className="font-medium text-lg text-gray-900">{center.name}</h3>
            
            <div className="mt-2 space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-700">{center.address}</span>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gray-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-700">{center.phone}</span>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-500 mr-2 shrink-0 mt-0.5" />
                <span className="text-gray-700">{center.hours}</span>
              </div>
            </div>
            
            <div className="mt-3">
              <h4 className="text-sm font-medium text-gray-700 mb-1">Accepting:</h4>
              <div className="flex flex-wrap gap-1">
                {center.acceptingItems.map((item, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
              Get Directions
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationMap;