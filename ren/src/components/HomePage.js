import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  // Styles for the main container
  const containerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
  };

  // Styles for the button container
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Arrange buttons vertically
    alignItems: 'center', // Center-align buttons
    gap: '20px', // Add spacing between buttons
    marginTop: '2rem',
  };

  // Styles for each button
  const buttonStyle = {
    width: '300px', // Button width
    height: '150px', // Button height
    backgroundSize: 'cover', // Ensure the background image covers the button
    backgroundPosition: 'center', // Center the background image
    border: 'none', // Remove button border
    borderRadius: '10px', // Add rounded corners
    color: 'white', // Text color
    fontSize: '20px', // Font size
    fontWeight: 'bold', // Bold text
    textShadow: '2px 2px 4px rgba(0,0,0,0.7)', // Add text shadow for better contrast
    cursor: 'pointer', // Change cursor to pointer on hover
  };

  // Array of sections to display on the homepage
  const sections = [
    {
      title: 'Tourist Spots',
      description: '"Discover iconic landmarks and breathtaking scenery."',
      link: '/tourist-spots',
      image: 'https://apicms.thestar.com.my/uploads/images/2022/12/30/1881486.jpg'
    },
    {
      title: 'Food',
      description: '"Enjoy the rich culinary heritage of Penang."',
      link: '/food',
      image: 'https://d3ih4j2n5zotw5.cloudfront.net/uploads/all/aTqPxy6b0c8nYY1O1v6vN3wOjhb13dHSxrbm9NaO.jpg'
    },
    {
      title: 'Hotels',
      description: '"Stay in the best accommodations Penang has to offer."',
      link: '/hotels',
      image:'https://robbreport.com.my/wp-content/uploads/2020/02/FEAT_Travel-EO-Hotel-Penang-LEAD-02.jpg'
    },
    {
      title: 'Things to Do',
      description: '"Experience fun activities and local culture."',
      link: '/things-to-do',
      image: 'https://www.roadaffair.com/wp-content/uploads/2018/06/dawn-view-penang-hill-shutterstock_762759964.jpg'
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Main title and introduction */}
      <h1>Welcome to Visit Penang</h1>
      <p>Explore the beauty, food, and experiences Penang has to offer.</p>

      {/* Container for all buttons */}
      <div style={buttonContainerStyle}>
        {sections.map((section, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            {/* Button with background image */}
            <Link to={section.link}>
              <button
                style={{
                  ...buttonStyle,
                  backgroundImage: `url(${section.image})`, // Set button background image
                }}
              >
                {section.title}
              </button>
            </Link>

            {/* Section description below the button */}
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
