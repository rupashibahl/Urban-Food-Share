import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Urban Food Share</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;