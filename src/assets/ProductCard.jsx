import React from 'react'
import { Link } from "react-router-dom"


const ProductCard = ({ product }) => {
    return (
        <div data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="500" className='product-card w-full rounded overflow-hidden shadow-lg'>
            <img className="w-full transition-all duration-300 hover:scale-110" src={product.image} alt={product.name} ></img>
            <div className="px-6 py-4">
                <div className="font-bold! text-base mb-2 text-footer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">{product.name}</div>
                <p className="text-gray-700 text-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                    {product.description}
                </p>
                <ul className='mt-2 text-xs list-disc list-inside '>

                    {product.features.map((feature, index) => (
                        <li className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105' key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div className="px-4 pt-0 pb-2">

                <Link to={`/products/${product.id}`} className="nav-link">

                    <button className='transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2 mb-4 px-2.5 md:px-4 py-1 md:py-2.5 bg-productButton text-white text-sm  font-semibold! rounded-xl w-full'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard
