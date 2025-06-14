import React, { useState, useRef } from 'react';
import { LuStethoscope } from "react-icons/lu";
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci";
import { BsMoonStarsFill } from "react-icons/bs";
import SearchBar from './SearchBar'; 

const DoctorPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const pillarsContainerRef = useRef(null);
  const [pillarContent, setPillarContent] = useState([
    {
      image: '../../public/c79184780d4a881f69ac62b90b5fce8ca2ae5823.jpg',
      heading: 'Nutrition',
      paragraph: 'A balanced diet rich in whole foods can prevent and manage chronic diseases effectively.',
      score: "121/80",
      label: 'mmHg'
    },
    {
      image: '../../public/de265be37badb81d55ce232eb9da300186918b0c.jpg',
      heading: 'Physical Activity',
      paragraph: 'Regular exercise improves physical and mental health, boosting overall well-being.',
      score: 32,
      label: 'minutes'
    },
    {
      image: '../../public/7e699d30c29ce0f90e9b6057b9d430849b53d270.jpg',
      heading: 'Restorative Sleep',
      paragraph: 'Quality sleep enhances cognitive function and supports bodily recovery processes.',
      score: 8,
      label: 'hours'
    },
    {
      image: '../../public/5f26e17d000d7b7cb6550cd5e937e1969f9b9b2d.jpg',
      heading: 'Stress Management',
      paragraph: 'Effective stress management techniques promote emotional resilience and health.',
      score: 60,
      label: 'bpm'
    },
    {
      image: '../../public/f5bd06933fdcb15cf7ef8c61e38ef5132a1f775a.jpg',
      heading: 'Social Connection',
      paragraph: 'Strong social ties improve mental health and provide a sense of belonging.',
      score: "Feeling",
      label: 'better'
    },
    {
      image: '../../public/d8a30aac47fe40184d7dd9db9ac53ba1b82a4819.jpg',
      heading: 'Substance Abuse',
      paragraph: 'Avoiding harmful substances supports long-term health and quality of life.',
      score: 60,
      label: 'days'
    }
  ]);

  const upSliderImages = [
    '../../public/f5bd06933fdcb15cf7ef8c61e38ef5132a1f775a.jpg',
    '../../public/de265be37badb81d55ce232eb9da300186918b0c.jpg',
    '../../public/d8a30aac47fe40184d7dd9db9ac53ba1b82a4819.jpg',
    '../../public/ce0a6253ae206c19cb431ca2e16ef2200e907669.jpg'
  ];

  const downSliderImages = [
    '../../public/c79184780d4a881f69ac62b90b5fce8ca2ae5823.jpg',
    '../../public/349d5ed21042ef817dada458b98e8b867cbf799a.jpg',
    '../../public/97b1f57c636086f72877d55138382df7061f98f7.jpg',
    '../../public/96d5fcfb274f7b96a36babcad8a31f5ceb915cd0.jpg'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const newPillarContent = [...pillarContent];
    const selectedIndex = newPillarContent.findIndex(pillar => pillar.heading === option);
    if (selectedIndex !== -1) {
      const [selectedPillar] = newPillarContent.splice(selectedIndex, 1);
      newPillarContent.unshift(selectedPillar);
      setPillarContent(newPillarContent);
      if (pillarsContainerRef.current) {
        pillarsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollPillars = (direction) => {
    const container = pillarsContainerRef.current;
    if (container) {
      const scrollAmount = 400; 
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const options = [
    'Nutrition',
    'Physical Activity',
    'Restorative Sleep',
    'Stress Management',
    'Social Connection',
    'Substance Abuse'
  ];

  const heartColors = ['#F3A311', '#0055A4', '#008000']; 

  const styles = {
    page: {
      backgroundColor: 'white',
      color: '#333',
      minHeight: '100vh',
      fontFamily: "'Arial', sans-serif",
      width: '100vw',
      margin: 0,
      padding: 0,
      position: 'relative',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    },
    container: {
      width: '100%',
      paddingTop: '80px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: '2'
    },
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '25px 40px',
      borderBottom: '1px solid #eee',
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'white',
      zIndex: 1000,
      boxSizing: 'border-box'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#000000',
      paddingLeft: '240px'
    },
    logoIcon: {
      marginRight: '10px',
      fontSize: '26px',
      color: 'rgb(236, 158, 12)'
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingRight: '40px'
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      fontSize: '16px'
    },
    separator: {
      color: '#333',
      fontSize: '16px'
    },
    dropdown: {
      position: 'relative',
      display: 'inline-block'
    },
    dropdownButton: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    },
    dropdownContent: {
      display: isDropdownOpen ? 'block' : 'none',
      position: 'absolute',
      backgroundColor: 'white',
      minWidth: '200px',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
      zIndex: 1001,
      borderRadius: '4px',
      right: 0
    },
    dropdownItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      textDecoration: 'none',
      color: '#333',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    dropdownIcon: {
      fontSize: '12px',
      color: '#333',
      marginLeft: '5px'
    },
    whiteDiv: {
      width: '100vw',
      backgroundColor: 'white',
      zIndex: 3,
      borderTop: '30px solid transparent',
      borderImage: 'linear-gradient(to right, rgb(243, 183, 17), rgb(224, 140, 14), #C71585) 1',
      overflowY: 'auto',
      margin: 0,
      boxSizing: 'border-box',
      position: 'relative',
      marginTop: '200px',
      padding: '40px 0',
      left: '50%',
      transform: 'translateX(-50%)',
      height: '150vh'
    },
    whiteDivContent: {
      padding: '20px 0',
      textAlign: 'left',
      width: '100%',
      maxWidth: 'none',
      marginLeft: '0',
      paddingRight: '40px',
      position: 'relative'
    },
    howItFeels: {
      fontSize: '16px',
      color: '#999',
      marginBottom: '10px',
      paddingLeft: '40px'
    },
    lifestyleHeading: {
      fontSize: '32px',
      color: 'rgb(224, 140, 14)',
      marginBottom: '5px',
      paddingLeft: '40px',
      fontStyle: 'italic',
      fontFamily: `'Palatino Linotype', 'Georgia', 'cursive'`
    },
    sixPillars: {
      fontSize: '25px',
      color: '#999',
      marginBottom: '20px',
      paddingLeft: '2px'
    },
    optionsContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '15px',
      marginBottom: '30px',
      flexWrap: 'wrap',
      paddingLeft: '40px'
    },
    option: {
      padding: '10px 20px',
      border: '2px solid #333',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333',
      backgroundColor: 'transparent',
      transition: 'all 0.3s ease'
    },
    selectedOption: {
      backgroundColor: '#333',
      color: 'white',
      borderColor: '#333'
    },
    pillarsWrapper: {
      position: 'relative',
      padding: '0 60px'
    },
    pillarsContainer: {
      display: 'flex',
      overflowX: 'hidden',
      padding: '20px 40px',
      gap: '30px',
      scrollBehavior: 'smooth'
    },
    pillarCard: {
      minWidth: '400px',
      width: '400px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'left',
      flexShrink: 0,
      position: 'relative'
    },
    pillarImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover'
    },
    pillarContent: {
      padding: '20px'
    },
    pillarHeading: {
      fontSize: '24px',
      color: '#333',
      marginBottom: '15px'
    },
    pillarParagraph: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.5'
    },
    navArrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: 'white',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 5,
      border: 'none',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    navArrowLeft: {
      left: '10px'
    },
    navArrowRight: {
      right: '10px'
    },
    sliderContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '20px',
      zIndex: '1',
      marginTop: '20px',
      position: 'absolute',
      left: '240px',
      top: '80px'
    },
    slider: {
      width: '300px',
      height: '1760px',
      overflow: 'hidden',
      position: 'relative',
      marginRight: '10px'
    },
    sliderUp: {
      animation: 'slideUp 15s linear infinite'
    },
    sliderDown: {
      animation: 'slideDown 15s linear infinite'
    },
    sliderImg: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      display: 'block',
      marginBottom: '20px',
      borderRadius: '5%'
    },
    mainContent: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      marginTop: '20px',
      position: 'relative',
      zIndex: '2'
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '1200px',
      padding: '0 20px',
      boxSizing: 'border-box',
      alignItems: 'flex-start'
    },
    textContent: {
      maxWidth: '1000px',
      padding: '20px',
      textAlign: 'left',
      marginLeft: '640px',
      position: 'relative',
      zIndex: '4'
    },
    heading: {
      marginTop: '100px',
      fontSize: '37px',
      marginBottom: '20px',
      lineHeight: '1.4'
    },
    headingPart1: {
      color: '#000000'
    },
    headingPart2: {
      color: '#0055A4'
    },
    paragraph: {
      lineHeight: '1.6',
      marginBottom: '15px',
      fontSize: '18px',
      color: '#666'
    },
    searchBarContainer: {
      position: 'absolute',
      top: '120%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '1002',
      width: '100%',
      maxWidth: '1024px',
      padding: '0 20px',
      boxSizing: 'border-box'
    },
    scoreBadge: {
      position: 'absolute',
      bottom: '150px',
      left: '20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      width: '120px',
      height: '40px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    heartIcon: {
      fontSize: '12px',
      marginRight: '4px'
    },
    scoreText: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
      marginRight: '4px'
    },
    labelText: {
      fontSize: '12px',
      fontWeight: '300',
      color: '#666'
    }
  };

  const getStyles = (styleObj) => {
    const result = {};
    for (const key in styleObj) {
      if (!key.startsWith('@') && !key.startsWith(':')) {
        result[key] = styleObj[key];
      }
    }
    return result;
  };

  return (
    <div style={getStyles(styles.page)}>
      <style>{`
        @keyframes slideUp {
          0% { transform: translateY(0); }
          80% { transform: translateY(-720px); }
          100% { transform: translateY(0); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-720px); }
          80% { transform: translateY(0); }
          100% { transform: translateY(-720px); }
        }
        .sliderImg:last-child {
          margin-bottom: 0;
        }
        .dropdown-item:hover {
          background-color: #f1f1f1;
        }
      `}</style>

      <nav style={getStyles(styles.navbar)}>
        <div style={getStyles(styles.logo)}>
          <LuStethoscope style={styles.logoIcon} /> ProVital
        </div>
        <div style={getStyles(styles.navLinks)}>
          <a href="#" style={getStyles(styles.navLink)}>List Your Practice</a>
          <span style={getStyles(styles.separator)}>|</span>
          <a href="#" style={getStyles(styles.navLink)}>For Employers</a>
          <span style={getStyles(styles.separator)}>|</span>
          <a href="#" style={getStyles(styles.navLink)}>Courses</a>
          <span style={getStyles(styles.separator)}>|</span>
          <a href="#" style={getStyles(styles.navLink)}>Books</a>
          <span style={getStyles(styles.separator)}>|</span>
          <a href="#" style={getStyles(styles.navLink)}>Speakers</a>
          <span style={getStyles(styles.separator)}>|</span>
          <a href="#" style={getStyles(styles.navLink)}>Doctors</a>
          <span style={getStyles(styles.separator)}>|</span>
          <div style={getStyles(styles.dropdown)}>
            <span
              style={getStyles(styles.dropdownButton)}
              onClick={toggleDropdown}
            >
              Login / Signup <FaChevronDown style={styles.dropdownIcon} />
            </span>
            <div style={getStyles(styles.dropdownContent)}>
              <div style={getStyles(styles.dropdownItem)}>
                <span>Doctor</span>
                <span>Login / Signup</span>
              </div>
              <div style={getStyles(styles.dropdownItem)}>
                <span>Patients</span>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Login / Signup
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div style={getStyles(styles.container)}>
        <main style={getStyles(styles.mainContent)}>
          <div style={getStyles(styles.searchBarContainer)}>
            <SearchBar />
          </div>

          <div style={getStyles(styles.contentWrapper)}>
            <div style={getStyles(styles.sliderContainer)}>
              <div style={{ ...getStyles(styles.slider), ...getStyles(styles.sliderUp) }}>
                {[...upSliderImages, ...upSliderImages].map((img, index) => (
                  <img key={index} src={img} alt={img} style={styles.sliderImg} />
                ))}
              </div>
              <div style={{ ...getStyles(styles.slider), ...getStyles(styles.sliderDown) }}>
                {[...downSliderImages, ...downSliderImages].map((img, index) => (
                  <img key={index} src={img} alt={img} style={styles.sliderImg} />
                ))}
              </div>
            </div>
            <div style={getStyles(styles.textContent)}>
              <h1 style={getStyles(styles.heading)}>
                <span style={getStyles(styles.headingPart1)}>
                  Book an Appointment with <br />
                  <span style={getStyles(styles.headingPart2)}>LifeStyle Medicine</span> Expert
                </span>
              </h1>
              <p style={getStyles(styles.paragraph)}>
                optimize your lifestyle and reverse chronic disease
              </p>
            </div>
          </div>
        </main>
        <div style={getStyles(styles.whiteDiv)}>
          <div style={getStyles(styles.whiteDivContent)}>
            <p style={getStyles(styles.howItFeels)}>How it Works</p>
            <h2 style={getStyles(styles.lifestyleHeading)}>
              Lifestyle Medicine: <span style={getStyles(styles.sixPillars)}>The six pillars</span>
            </h2>
            <div style={getStyles(styles.optionsContainer)}>
              {options.map((option) => (
                <div
                  key={option}
                  style={{
                    ...getStyles(styles.option),
                    ...(selectedOption === option ? getStyles(styles.selectedOption) : {})
                  }}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
            <div style={getStyles(styles.pillarsWrapper)}>
              <button 
                style={{ ...getStyles(styles.navArrow), ...getStyles(styles.navArrowLeft) }}
                onClick={() => scrollPillars('left')}
              >
                <FaChevronLeft />
              </button>
              <div 
                ref={pillarsContainerRef}
                style={getStyles(styles.pillarsContainer)}
              >
                {pillarContent.map((pillar, index) => (
                  <div key={pillar.heading} style={getStyles(styles.pillarCard)}>
                    <img src={pillar.image} alt={pillar.heading} style={styles.pillarImage} />
                    <div style={getStyles(styles.scoreBadge)}>
                      <FaHeart style={{ ...styles.heartIcon, color: heartColors[index % heartColors.length] }} />
                      <span style={getStyles(styles.scoreText)}>{pillar.score}</span>
                      <span style={getStyles(styles.labelText)}>{pillar.label}</span>
                    </div>
                    <div style={getStyles(styles.pillarContent)}>
                      <h3 style={getStyles(styles.pillarHeading)}>{pillar.heading}</h3>
                      <p style={getStyles(styles.pillarParagraph)}>{pillar.paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                style={{ ...getStyles(styles.navArrow), ...getStyles(styles.navArrowRight) }}
                onClick={() => scrollPillars('right')}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;