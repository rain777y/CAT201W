import React, { useState, useEffect } from 'react';

function ThingsToDoPage() {
  const [userBudget, setUserBudget] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const suggestions = [
    {
      range: 'Below RM 2000',
      min: 0,
      max: 2000,
      activities: [
        'Explore George Town’s street art and cultural landmarks.',
        'Enjoy local street food such as Laksa and Char Kway Teow.',
        'Relax on Batu Ferringhi Beach.',
      ],
    },
    {
      range: 'RM 2000 - RM 3500',
      min: 2000,
      max: 3500,
      activities: [
        'Take a cable car ride to Penang Hill and visit Kek Lok Si Temple.',
        'Book a half-day cultural tour in George Town.',
        'Stay in a budget-friendly hotel in the city center.',
      ],
    },
    {
      range: 'RM 3500 - RM 6000',
      min: 3500,
      max: 6000,
      activities: [
        'Stay at a beachfront hotel in Batu Ferringhi.',
        'Go island hopping and explore Monkey Beach.',
        'Enjoy a fine dining experience at Ferringhi Grill.',
      ],
    },
    {
      range: 'RM 6000 - RM 8000',
      min: 6000,
      max: 8000,
      activities: [
        'Rent a yacht for a half-day cruise around Penang.',
        'Hire a private guide and car for a luxurious tour.',
        'Enjoy a luxury spa treatment at a 5-star resort.',
      ],
    },
    {
      range: 'Above RM 8000',
      min: 8000,
      max: Infinity,
      activities: [
        'Stay at a presidential suite in a top resort.',
        'Take a helicopter tour to see Penang from above.',
        'Book a private chef for an exclusive dinner.',
      ],
    },
  ];

  const images = [
    'https://www.tripsavvy.com/thmb/B2uiB_e7lXOj8SNGU077e5FP-Qg=/5000x2813/filters:fill(auto,1)/penang-malaysia-b40c38589e794a61ba904d64c0a02c43.jpg',
    'https://a.cdn-hotels.com/gdcs/production141/d26/aa6abbd8-c6b4-4e6e-a105-300699e76a51.jpg',
    'https://images.says.com/uploads/story_source/source_image/524284/b3d4.jpg',
  ];

  const handleBudgetInput = (e) => setUserBudget(e.target.value);

  const filterByBudget = () => {
    const filtered = suggestions.filter(
      (s) => parseInt(userBudget) >= s.min && parseInt(userBudget) <= s.max
    );
    setFilteredSuggestions(filtered);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ margin: '0 auto', maxWidth: '800px', padding: '20px', textAlign: 'center' }}>
      <h1>Things to Do</h1>

      {/* Budget input section */}
      <div>
        <input
          type="number"
          placeholder="Enter your budget (RM)"
          value={userBudget}
          onChange={handleBudgetInput}
          style={{ padding: '10px', marginRight: '10px', fontSize: '16px' }}
        />
        <button onClick={filterByBudget} style={{ padding: '10px 15px', fontSize: '16px' }}>
          Filter
        </button>
      </div>

      {/* Render filtered suggestions */}
      {filteredSuggestions.map((suggestion, index) => (
        <div key={index} style={{ textAlign: 'left', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
            Budget: {suggestion.range}
          </h2>
          {suggestion.activities.map((activity, idx) => (
            <p key={idx} style={{ fontSize: '16px', marginBottom: '10px' }}>
              - {activity}
            </p>
          ))}
        </div>
      ))}

      {/* Image carousel */}
      <img
        src={images[currentImageIndex]}
        alt=""
        style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', marginTop: '30px' }}
      />
      <h2 style={{ color: '#FFD700', marginTop: '20px', animation: 'flash 1s infinite alternate' }}>
        Welcome to Penang!
      </h2>
    </div>
  );
}

export default ThingsToDoPage;
