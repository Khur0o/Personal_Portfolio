import React from 'react';

function Test() {
  return (
    <div className="search-container">
      <select className="input-field">
        <option>Location</option>
      </select>
      <select className="input-field">
        <option>Property Type</option>
      </select>
      <select className="input-field">
        <option>Sort By</option>
      </select>
      <select className="input-field">
        <option>Bedrooms</option>
      </select>
      <select className="input-field">
        <option>Baths</option>
      </select>
      <input type="number" className="input-field" placeholder="Min Price" />
      <input type="number" className="input-field" placeholder="Max Price" />
    </div>
  );
}

export default Test;
