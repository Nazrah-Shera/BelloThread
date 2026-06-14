import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'

const ProductDetails = () => {
    const { id } = useParams()
    const product = products.find(p => p.id === parseInt(id))

    // If product not found
    if (!product) {
        return (
            <div className='text-center py-20'>
                <h2 className='text-2xl font-semibold text-footer'>Product not found</h2>
                <Link to="/products">
                    <button className='mt-4 px-6 py-2 bg-productButton text-white rounded-xl'>
                        Back to Products
                    </button>
                </Link>
            </div>
        )
    }

    return (
        <section className='py-12 px-4'>
            <div className='max-w-4xl mx-auto'>

                {/* Back button */}
                <Link to="/products" className='text-sm text-gray-500 hover:text-gray-700 mb-6 inline-block'>
                    ← Back to Products
                </Link>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-4'>

                    {/* Left - Image */}
                    <div>
                        <img
                            src={product.image}
                            alt={product.name}
                            className='w-full rounded-lg shadow-lg'
                        />
                    </div>

                    {/* Right - Details */}
                    <div className='flex flex-col justify-center'>
                        <span className='text-xs text-gray-400 uppercase tracking-widest'>
                            {product.category}
                        </span>
                        <h1 className='text-2xl font-semibold text-footer mt-1'>
                            {product.name}
                        </h1>
                        <p className='text-gray-500 text-sm mt-3'>
                            {product.description}
                        </p>

                        {/* Features */}
                        <ul className='mt-4 space-y-1'>
                            {product.features.map((feature, index) => (
                                <li key={index} className='text-sm text-gray-600 flex items-center gap-2'>
                                    <span className='text-green-500'>✓</span> {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Request Quote button */}
                        <Link to="/ordernow" state={{ productName: product.name,  productCategory: product.category }}>
                            <button className='mt-8 px-6 py-3 bg-productButton text-white font-semibold! rounded-xl w-full'>
                                Request a Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails