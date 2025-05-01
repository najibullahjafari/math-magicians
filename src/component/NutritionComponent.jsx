import React, { useState } from 'react';
import '../css/nutrition.css';

const FOOD_OPTIONS = [
  '1lb brisket and fries',
  'banana',
  'apple',
  'grilled chicken breast',
  'salmon fillet',
  'avocado',
  'cheeseburger',
  'pizza slice',
  'caesar salad',
  'oatmeal',
  'scrambled eggs',
  'steak',
  'rice',
  'spaghetti',
  'ice cream',
];

function NutritionComponent() {
  const [selectedFood, setSelectedFood] = useState('');
  const [nutrition, setNutrition] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchNutrition = async (food) => {
    setIsLoading(true);
    setHasError(false);
    setNutrition([]);
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(food)}`,
        { headers: { 'X-Api-Key': 'XrVqjM1uEDWD3unxglcTsg==qlj5m86gjEcGnwEz' } }
      );
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setNutrition(data);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleSelect = (e) => {
    const food = e.target.value;
    setSelectedFood(food);
    if (food) {
      fetchNutrition(food);
    } else {
      setNutrition([]);
    }
  };

  return (
    <section className="nutrition-con">
      <div className="nutrition-card">
        <h2 className="nutrition-title">Nutrition Analyzer</h2>
        <form className="nutrition-form" onSubmit={e => e.preventDefault()}>
          <select
            className="nutrition-input"
            value={selectedFood}
            onChange={handleSelect}
          >
            <option value="">Select a food...</option>
            {FOOD_OPTIONS.map(food => (
              <option key={food} value={food}>{food.charAt(0).toUpperCase() + food.slice(1)}</option>
            ))}
          </select>
        </form>
        {isLoading && (
          <div className="nutrition-loading">
            <span className="nutrition-loader" />
            <p>Loading...</p>
          </div>
        )}
        {hasError && (
          <div className="nutrition-error">
            <p>Could not fetch nutrition info. Try again later.</p>
          </div>
        )}
        {!isLoading && !hasError && nutrition.length > 0 && (
          <div className="nutrition-results">
            {nutrition.map((item, idx) => (
              <div className="nutrition-item" key={item.name + idx}>
                <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
                <ul>
                  <li><strong>Calories:</strong> {item.calories}</li>
                  <li><strong>Serving Size:</strong> {item.serving_size_g}g</li>
                  <li><strong>Fat:</strong> {item.fat_total_g}g (Saturated: {item.fat_saturated_g}g)</li>
                  <li><strong>Protein:</strong> {item.protein_g}g</li>
                  <li><strong>Sodium:</strong> {item.sodium_mg}mg</li>
                  <li><strong>Potassium:</strong> {item.potassium_mg}mg</li>
                  <li><strong>Cholesterol:</strong> {item.cholesterol_mg}mg</li>
                  <li><strong>Carbs:</strong> {item.carbohydrates_total_g}g (Fiber: {item.fiber_g}g, Sugar: {item.sugar_g}g)</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NutritionComponent;