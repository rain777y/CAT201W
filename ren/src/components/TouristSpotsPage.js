import React from 'react';

function TouristSpotsPage() {
  const spots = [
    {
      title: 'Street Art in George Town',
      images: [
        'https://i1.wp.com/thesmartlocal.com/wp-content/uploads/2013/03/images_easyblog_images_731_Mirrors-George-Town-Street-Art-01.jpg?resize=1140%2C855&ssl=1',
        'https://i.pinimg.com/736x/9a/d3/3c/9ad33cd3db0558620b49ed1d9e4837c1--the-bard-street-art.jpg',
       ' https://www.anniewilcox.co.uk/wp-content/uploads/2016/12/annie_wilcox_photography_Annie_Wilcox_Photography_travelling_with_a_camera_Malaysia_Penang_George_Town_street_art_men_opening_gate_20161226_0009-1024x683.jpg'
      ], 
      description: 'George Town is famous for its vibrant street art, with murals and iron sculptures scattered throughout the city. These artworks depict the local culture and history, creating a lively and creative atmosphere for visitors to explore.',
    },
    {
      title: 'Penang Hill',
      images: [
        'https://thehabitat.my/wp-content/uploads/2023/04/Sunset-Walk-visual-1-1-1024x1024.jpg',
        'https://wallpapercave.com/wp/wp8263029.jpg',
        'https://wherewouldyougo.com/wp-content/uploads/2016/01/Penang-Hill-view.jpg',
        'https://cj.my/wp-content/uploads/2023/05/Penang_hill_funicular_railway-2-740x518.jpg'
      ],
      description: 'Standing at 833 meters above sea level, Penang Hill is the perfect spot to enjoy a panoramic view of the island. Visitors can take a funicular train to the top, where they can enjoy the cool climate, scenic beauty, cafés, trails, and historical landmarks, making it ideal for a family outing.',
    },
    {
      title: 'Kek Lok Si Temple',
      images: [
        'https://i.redd.it/jnebkqj8kb231.jpg',
        'http://yesnomads.com/wp-content/uploads/2015/02/Photo-Of-The-Week-Kek-Lok-Si-Temple-Penang-Malaysia-Display-of-Lights-Chinese-New-Year.jpg',
        'https://media.thevibes.com/images/uploads/covers/_large/ppgfire2.jpg'
      ],
      description: 'Kek Lok Si is one of the largest Buddhist temples in Southeast Asia, renowned for its grand architecture and intricate carvings. The temple features a towering statue of the Goddess of Mercy and a seven-story pagoda, attracting pilgrims and tourists alike.',
    },
  ];

  const containerStyle = {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
  };

  const itemStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#555',
  };

  const imageStyle = {
    width: '600px',      // Set fixed width
    height: '400px',     // Set fixed height
    objectFit: 'cover',  // Crop image to fit the size
    borderRadius: '10px', // Rounded corners
    marginBottom: '10px', // Add spacing between images
  };

  return (
    <div style={containerStyle}>
      <h1>Tourist Spots</h1>
      {spots.map((spot, index) => (
        <div key={index} style={itemStyle}>
          <div style={titleStyle}>{spot.title}</div>

          {/* Render all images for the current spot */}
          {spot.images.map((image, imgIndex) => (
            <img 
              key={imgIndex}
              src={image}
              alt={`${spot.title} ${imgIndex + 1}`}
              style={imageStyle}
            />
          ))}

          <p style={descriptionStyle}>{spot.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TouristSpotsPage;
