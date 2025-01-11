import React from 'react';

function HotelsPage() {
  const hotels = [
    {
      title: 'E&O Hotel',
      images: [
        'https://1.bp.blogspot.com/-pchsCWny8cw/X1aXv1-hkII/AAAAAAABY_s/P9bji0ttEXUpyXbeDran1GTECmhnBEB8ACPcBGAsYHg/w781-h524/HW%2Bfront%2Bfacade.jpg',
        'https://www.easternandoriental.com/wp-content/uploads/2018/11/eo-hotel-09.jpg',
      ],
      description: 'A luxurious and historic hotel in Penang, offering world-class amenities.',
      rating: 4.5, //according to the google map
      stars: 5, 
    },
    {
      title: 'Hard Rock Hotel',
      images: [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/28/bf/9c/hard-rock-hotel-penang.jpg?w=900&h=-1&s=1',
        'https://pix10.agoda.net/hotelImages/154/154808/154808_19011613420071366268.jpg',
      ],
      description: 'A trendy hotel with great vibes and fun, perfect for music lovers.',
      rating: 4.5,// Rating out of 5
      stars: 5,
    },
    {
      title: 'The Prestige Hotel',
      images: [
        'https://1.bp.blogspot.com/-SpJZnDmoII8/XRjLmQQzs9I/AAAAAAAAUY8/W9DV0w_4nnQA8Cea0hukatjM_e9fdWrYACLcBGAs/s1600/DSC_9208.JPG',
        'https://pix10.agoda.net/hotelImages/801/8017463/8017463_19061413020075807345.jpg',
      ],
      description: 'A modern and elegant hotel in George Town, offering top-notch service.',
      rating: 4.6,
      stars: 5,
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
    marginTop: '10px',
  };

  const imageStyle = {
    width: '600px',      // Set fixed width
    height: '400px',     // Set fixed height
    objectFit: 'cover',  // Crop image to fit the size
    borderRadius: '10px', // Rounded corners
    marginBottom: '10px', // Add spacing between images
  };

  const ratingStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
    marginTop: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1>Hotels</h1>
      {hotels.map((hotel, index) => (
        <div key={index} style={itemStyle}>
          <div style={titleStyle}>{hotel.title}</div>

          {/* Render all images for the current hotel */}
          {hotel.images.map((image, imgIndex) => (
            <img 
              key={imgIndex}
              src={image}
              alt={`${hotel.title} ${imgIndex + 1}`}
              style={imageStyle}
            />
          ))}

          {/* Render stars */}
          <div style={ratingStyle}>
            {'★'.repeat(hotel.stars)}{/* Render stars dynamically */}
            {'☆'.repeat(5 - hotel.stars)}{/* Render empty stars dynamically */}
            <span style={{ marginLeft: '10px' }}>({hotel.rating}/5)</span>
          </div>

          <p style={descriptionStyle}>{hotel.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HotelsPage;
