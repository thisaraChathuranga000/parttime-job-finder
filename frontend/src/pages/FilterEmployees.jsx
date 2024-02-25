import React from 'react'
import FilterBar from '../components/filterEmployees/FilterBar';
import MainFilter from '../components/filterEmployees/MainFilter';
 
 

function FilterEmployees() {
  return (
    <div>
        <FilterBar/>
        <MainFilter/>
    </div>
  )
}

export default FilterEmployees