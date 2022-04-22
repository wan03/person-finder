import React from 'react';
import Form from 'react-bootstrap/Form';


const SearchBar = ({ filterList }) => {
    const style = {
        fontFamily: 'FontAwesome'
    }

    return (
        <Form.Control type="text" placeholder="&#xF002; Search in Air HQ" style={style} onChange={(e) => setTimeout(() => {filterList(e.target.value)}, 300)} />
    )


}

export default SearchBar;