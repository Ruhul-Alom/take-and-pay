import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Productcard from '../../Components/ProductCard/Productcard';
import { Helmet } from 'react-helmet';

const Shop = () => {
    const products = useSelector((state) => state.product.products);
    const [filterProduct, setFilterProduct] = useState([]);
    const [subcategory, setSubcategory] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    useEffect(() => {
        // Extract subcategories from available products
        const availableSubcategories = [...new Set(products.map(product => product.subCategory))];
        setSubcategory(availableSubcategories);
    }, [products]);

    useEffect(() => {
        // Filter products based on selected subcategory
        let filteredProducts = products;

        // If a subcategory is selected, filter products by that subcategory
        if (selectedSubcategory) {
            filteredProducts = filteredProducts.filter(product => product.subCategory === selectedSubcategory);
        }

        setFilterProduct(filteredProducts);
    }, [selectedSubcategory, products]);

    return (
        <>
            <Helmet>
                <title>Shop</title>
            </Helmet>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 bg-gray-200 p-4">
                    <ul className='w-full space-y-3'>
                        {/* Render subcategory filters */}
                        {subcategory.map(subcat => (
                            <li key={subcat} onClick={() => setSelectedSubcategory(subcat)}>
                                {subcat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:w-3/4 bg-gray-300 p-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filterProduct.map(filter => (
                            <Productcard key={filter.id} product={filter} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
