import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterCategory() {
  return (
    <DropdownButton id="dropdown-basic-button" title="FILTER CATEGORY">
      <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Ingredients</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Meats</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Drinks</Dropdown.Item>
    </DropdownButton>
  );
}

export default FilterCategory;