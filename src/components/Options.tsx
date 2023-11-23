import React, { useState } from 'react';
import '@/tailwind.css';

const Options = () => {
  const [settingOne, setSettingOne] = useState('');
  const [settingTwo, setSettingTwo] = useState(false);

  const handleSave = () => {
    // Logic to save settings
    console.log('Settings saved:', { settingOne, settingTwo });
    // You might want to save these settings using Chrome Storage API
  };

  return (
    <div className="p-4 space-y-4">
      <div className="font-bold text-lg">Extension Settings</div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Setting One
          <input 
            type="text" 
            value={settingOne} 
            onChange={(e) => setSettingOne(e.target.value)}
            className="mt-1 block w-full p-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </label>
      </div>

      <div>
        <label className="inline-flex items-center">
          <input 
            type="checkbox" 
            checked={settingTwo} 
            onChange={(e) => setSettingTwo(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
          />
          <span className="ml-2 text-sm text-gray-900">Setting Two</span>
        </label>
      </div>

      <button 
        onClick={handleSave} 
        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Options;
