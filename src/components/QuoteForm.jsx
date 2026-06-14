import React, { useState, useEffect  } from 'react'
import { useLocation } from 'react-router-dom'

const QuoteForm = () => {
  const location = useLocation()
  console.log(location.state);

  const productName = location.state?.productName;
const productCategory = location.state?.productCategory || '';

const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productType: '',  // pre-filled from navigation
    quantity: '',
    size: '',
    colors: '',
    designDetails: '',
    deadline: '',
    additionalNotes: ''
})
useEffect(() => {
  if (productCategory) {
    setFormData(prev => ({
      ...prev,
      productType: productCategory
    }));
  }
}, [productCategory]);

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    // later we will send this to .NET API
}

  return (
  
<div data-aos="zoom-in" data-aos-offset="0" data-aos-duration="1000"  className="min-h-screen  flex items-center justify-center py-6 px-4">
  {/* Form container - centered with different bg */}
  <div className="bg-white w-full max-w-2xl rounded-xl shadow-md px-8 py-10">
    
  <form onSubmit={handleSubmit}>
 <div className="space-y-12">
  <div className="border-b border-gray-900/10 pb-2">
      <h2 className="text-base/7 font-semibold! text-gray-900">Contact Information</h2>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-4">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium! text-gray-900">Full name</label>
          <div className="mt-2">
            <input
             value={formData.fullName}
    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            id="first-name" type="text" name="first-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Emial</label>
          <div className="mt-2">
            <input
            value={formData.email}
    onChange={(e) => setFormData({...formData, email: e.target.value})}
            id="email" type="email" name="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Phone Number</label>
          <div className="mt-2">
            <input
             value={formData.phone}
    onChange={(e) => setFormData({...formData, phone: e.target.value})}
            id="phone" type="phone" name="phone" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
      </div>
    </div>
    </div>


 <div className="space-y-12 mt-6">
  <div className="border-b border-gray-900/10 pb-2">

          <h2 className="text-base/7 font-semibold! text-gray-900">Product Details</h2>

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 mb-4">

                  <div className="sm:col-span-full">
          <label htmlFor="country" className="block text-sm/6 font-medium! text-gray-900">Product Type</label>
          <div className="mt-2 grid grid-cols-1">
            <select
            value={formData.productType}
             onChange={(e) => setFormData({...formData, productType: e.target.value})}
            id="country" name="country"  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option>Select</option>
              <option>Custom Patches</option>
              <option>Custom Keychains</option>
            </select>
            <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
              <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>
        </div>


   <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium! text-gray-900">Quantity</label>
          <div className="mt-2">
            <input 
              value={formData.quantity}
    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            id="quantity" type="text" name="quantity"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Size</label>
          <div className="mt-2">
            <input
              value={formData.size}
    onChange={(e) => setFormData({...formData, size: e.target.value})}
            id="email" type="email" name="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>


               <div className="sm:col-span-full">
          <label htmlFor="email" className="block text-sm/6 font-medium! text-gray-900">Colors</label>
          <div className="mt-2">
            <input
              value={formData.colors}
    onChange={(e) => setFormData({...formData, colors: e.target.value})}
            id="colors" type="colors" name="colors" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>


   <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium! text-gray-900">Design Details</label>
          <div className="mt-2">
            <textarea 
             value={formData.designDetails}
    onChange={(e) => setFormData({...formData, designDetails: e.target.value})}
            id="about" name="about" rows="3" placeholder="Describe your design, text, logos, or any specific requirements..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>


           <div className="sm:col-span-full">
          <label htmlFor="date" className="block text-sm/6 font-medium! text-gray-900">Deadline (Optional)</label>
          <div className="mt-2">
            <input
              value={formData.deadline}
    onChange={(e) => setFormData({...formData, deadline: e.target.value})}
            id="date" type="date" name="date"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>


           <div className="col-span-full">
          <label htmlFor="about" className="block text-sm/6 font-medium! text-gray-900">Additional Notes</label>
          <div className="mt-2">
            <textarea
             value={formData.additionalNotes}
    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
            id="about" name="about" rows="2" placeholder="Any other information we should know..." className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>

        
        </div>
</div>
</div>


 <div className="space-y-12 mt-6">

{/* Guidance box */}
<div className="col-span-full bg-blue-50 rounded-lg px-4 py-4 mt-2">
    <h3 className="text-sm font-semibold! text-gray-900 mb-2">What happens next?</h3>
    <ul className="space-y-1">
        <li className="flex items-start gap-2 text-xs text-gray">
            <span>1.</span>
            <span>We review your requirements</span>
        </li>
        <li className="flex items-start gap-2 text-xs text-gray">
            <span>2.</span>
            <span>You receive a custom quote within 24 hours</span>
        </li>
        <li className="flex items-start gap-2 text-xs text-gray">
            <span>3.</span>
            <span>Upon approval, we request 50% advance payment</span>
        </li>
        <li className="flex items-start gap-2 text-xs text-gray">
            <span>4.</span>
            <span>We create a sample htmlFor your approval</span>
        </li>
            <li className="flex items-start gap-2 text-xs text-gray">
            <span>5.</span>
            <span>Production begins after sample approval</span>
        </li>

        <li className="flex items-start gap-2 text-xs text-gray">
            <span>6.</span>
            <span>Final 50% payment before delivery</span>
        </li>
    </ul>
</div>


</div>


  <div className="mt-6">
    <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold! text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Quote Request</button>
  </div>


    </form>

  </div>

</div>


  )
}

export default QuoteForm
