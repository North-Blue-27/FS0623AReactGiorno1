import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const CategoryFilter = ({ onCategoryChange }) => {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <DropdownButton id="dropdown-basic-button" title="Select Category">
      <Dropdown.Item onClick={() => handleCategoryChange('all')}>All</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategoryChange('horror')}>Horror</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategoryChange('fantasy')}>Fantasy</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategoryChange('thriller')}>Thriller</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategoryChange('romance')}>Romance</Dropdown.Item>
      <Dropdown.Item onClick={() => handleCategoryChange('scifi')}>Sci-Fi</Dropdown.Item>
    </DropdownButton>
  );
};

export default CategoryFilter;