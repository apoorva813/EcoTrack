import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ travel: '', energy: '', waste: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/calculate', data);
    setResult(res.data);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">🌱 EcoTrack - Personal Sustainable Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="travel" placeholder="Travel (km/week)" onChange={handleChange} className="p-2 border rounded w-full" />
        <input name="energy" placeholder="Energy use (kWh/month)" onChange={handleChange} className="p-2 border rounded w-full" />
        <input name="waste" placeholder="Waste (kg/week)" onChange={handleChange} className="p-2 border rounded w-full" />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Calculate</button>
      </form>

      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Your Estimated Carbon Footprint</h2>
          <p>{result.total} kg CO₂ per month</p>
          <p className="mt-2 text-sm text-gray-600">🌿 Tip: {result.tip}</p>
        </div>
      )}
    </div>
  );
}

export default App;
