import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { ADD_ITEM } from '../../utils/mutations';

const SingleShop = () => {
    const [shopItems, setShopItems] = useState([])

    const [addItem, { error }] = useMutation(ADD_ITEM)




}