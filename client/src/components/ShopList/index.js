import React from 'react';
import { Link } from 'react-router-dom';

const ShopList = ({
    shops,
    title,
    showTitle = true,
}) => {
    if(!shops.length) {
        return <h3>No Shops Yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
        </div>
    )
}