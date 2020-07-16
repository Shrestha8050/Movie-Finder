import React from 'react';

const SearchArea = ({ handleSubmit, handleChange }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s4 offset-s4'>
          <form action='' onSubmit={handleSubmit}>
            <div className='input-field'>
              <input
                type='text'
                placeholder='search movies'
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
