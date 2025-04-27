import React, { useState } from 'react';
import { Clock, MapPin, Phone, Share } from 'lucide-react';
import { Ingredient } from '../types';

interface DonationFormProps {
  ingredients: Ingredient[];
  onDonationCreated: () => void;
}

const DonationForm: React.FC<DonationFormProps> = ({ ingredients, onDonationCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [pickupWindow, setPickupWindow] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to create donation
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setTitle('');
        setDescription('');
        setLocation('');
        setContactInfo('');
        setPickupWindow('');
        setShowSuccess(false);
        onDonationCreated();
      }, 3000);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Donation Created!</h2>
        <p className="text-gray-600 mb-4">
          Your donation has been listed. Local organizations will be notified about your available food items.
        </p>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-green-800 text-sm font-medium">
            You're helping to reduce food waste and support those in need. Thank you!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create Food Donation</h2>
      
      <div className="mb-4 p-3 bg-orange-50 border border-orange-100 rounded-md">
        <p className="text-sm text-orange-800">
          <strong>Items for donation:</strong> {ingredients.map(i => i.name).join(', ')}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Donation Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="E.g., Fresh Vegetables from Local Restaurant"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the food items, quantity, and condition..."
            rows={3}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="location" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <MapPin className="h-4 w-4 mr-1" />
              Pickup Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Address or location description"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div>
            <label htmlFor="contactInfo" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Phone className="h-4 w-4 mr-1" />
              Contact Information
            </label>
            <input
              id="contactInfo"
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Phone number or email"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="pickupWindow" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Clock className="h-4 w-4 mr-1" />
            Pickup Window
          </label>
          <input
            id="pickupWindow"
            type="text"
            value={pickupWindow}
            onChange={(e) => setPickupWindow(e.target.value)}
            placeholder="E.g., Today 5-7pm, Tomorrow morning"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white font-medium flex items-center justify-center ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
          } transition-colors`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Donation...
            </>
          ) : (
            <>
              <Share className="h-5 w-5 mr-2" />
              Create Donation Listing
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;