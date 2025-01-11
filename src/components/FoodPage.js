import React from 'react';

function FoodPage() {
  const foods = [
    {
      title: 'Nasi Lemak',
      images: [
        'https://www.thespruceeats.com/thmb/_ffKFPk6Vbi2atqbc3uFGh_xCOo=/5408x3600/filters:fill(auto,1)/nasi-lemak-coconut-pandan-rice-3030254-hero-01-af85709c5e4349ee87a10a295a111c77.jpg',
        'https://images.deliveryhero.io/image/fd-my/LH/dbae-hero.jpg',
        'http://steves-kitchen.com/wp-content/uploads/2016/07/Nasi-Lemak-08.jpg',
      ],
      description: 'National dish in Malaysia, Nasi Lemak, features fragrant coconut rice served with sambal, fried anchovies, peanuts, and a boiled egg, often accompanied by fried chicken or rendang.',
    },
    {
      title: 'Roti Canai',
      images: [
        'https://media.timeout.com/images/104726585/image.jpg',
        'https://daganghalal.blob.core.windows.net/28833/Product/1000x1000__roticanaitelur-1659401986532.jpg',
      ],
      description: 'A flaky, crispy flatbread paired with dhal (lentil curry) or spicy sauces, Roti Canai is a popular breakfast or snack loved for its versatility and taste.',
    },
    {
      title: 'Char Kway Teow',
      images: [
        'https://rasamalaysia.com/wp-content/uploads/2009/11/char-koay-teow1.jpg',
        'https://www.marionskitchen.com/wp-content/uploads/2019/05/Char-Kway-Teow1.jpg',
      ],
      description: 'This iconic Penang dish consists of flat rice noodles stir-fried with prawns, cockles, Chinese sausage, eggs, and bean sprouts in a smoky, flavorful sauce.',
    },
    {
      title: 'Penang’s Multinational Cuisine',
      images: [
        'https://foodcrush.com.my/storage/images/restaurant/gallery/3366/img_1664267678.jpg',
        'https://www.indianveggiedelight.com/wp-content/uploads/2021/05/panang-curry-featured.jpg',
        'https://images.deliveryhero.io/image/fd-sg/LH/jyci-hero.jpg',
      ],
      description: '"You can even taste food from all over the world in Penang"',
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
      <h1>Food</h1>
      {foods.map((food, index) => (
        <div key={index} style={itemStyle}>
          <div style={titleStyle}>{food.title}</div>

          {/* Render all images for the current food */}
          {food.images.map((image, imgIndex) => (
            <img 
              key={imgIndex}
              src={image}
              alt={`${food.title} ${imgIndex + 1}`}
              style={imageStyle}
            />
          ))}

          <p style={descriptionStyle}>{food.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FoodPage;
