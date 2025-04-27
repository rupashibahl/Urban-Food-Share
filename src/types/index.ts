export interface Ingredient {
  id: string;
  name: string;
  quantity?: string;
  expiryDate?: Date;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  prepTime?: string;
  imageUrl?: string;
}

export interface DonationListing {
  id: string;
  title: string;
  description: string;
  items: Ingredient[];
  location: string;
  contactInfo: string;
  pickupWindow: string;
  status: 'available' | 'pending' | 'completed';
  createdAt: Date;
}

export interface DonationCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  acceptingItems: string[];
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface WasteStats {
  savedItems: number;
  donationsMade: number;
  mealsProvided: number;
}