import React from 'react';
import { LuStethoscope } from 'react-icons/lu';
import { FaMapMarkerAlt, FaShieldAlt, FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <>
      <style>{`
        .search-input::placeholder {
          color: #6b7280;
        }
        .search-button:hover {
          background-image: none;
          background-color: #60a5fa;
        }
      `}</style>
      <div
        style={{
          backgroundColor: 'white',
          padding: '24px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          width: '108%',
          margin: '16px auto'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            width: '100%'
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#e5e7eb',
              borderRadius: '8px'
            }}
          >
            <FaSearch
              style={{
                marginLeft: '12px',
                marginRight: '8px',
                fontSize: '20px',
                color: '#4b5563'
              }}
            />
            <input
              type="text"
              placeholder="Condition, procedure, Specialty ..."
              className="search-input"
              style={{
                flex: 1,
                padding: '20px 12px',
                backgroundColor: '#e5e7eb',
                color: '#4b5563',
                fontSize: '18px',
                border: 'none',
                outline: 'none',
                width:"300px"
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#e5e7eb',
              borderRadius: '8px'
            }}
          >
            <FaMapMarkerAlt
              style={{
                marginLeft: '12px',
                marginRight: '8px',
                fontSize: '20px',
                color: '#4b5563'
              }}
            />
            <input
              type="text"
              placeholder="City, State, or Zipcode"
              className="search-input"
              style={{
                flex: 1,
                padding: '20px 12px',
                backgroundColor: '#e5e7eb',
                color: '#4b5563',
                fontSize: '18px',
                border: 'none',
                outline: 'none'
              }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#e5e7eb',
              borderRadius: '8px'
            }}
          >
            <FaShieldAlt
              style={{
                marginLeft: '12px',
                marginRight: '8px',
                fontSize: '20px',
                color: '#4b5563'
              }}
            />
            <input
              type="text"
              placeholder="Insurance carrier"
              className="search-input"
              style={{
                flex: 1,
                padding: '20px 12px',
                backgroundColor: '#e5e7eb',
                color: '#4b5563',
                fontSize: '18px',
                border: 'none',
                outline: 'none'
              }}
            />
          </div>
          <button
            className="search-button"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 12px',
              backgroundImage: 'linear-gradient(to right, #66cdaa, #60a5fa)',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            <FaSearch
              style={{
                marginRight: '8px',
                fontSize: '15px'
              }}
            />
            Find New
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;