'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const router = useRouter();
  const [recipientName, setRecipientName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientName || !deliveryAddress) {
      setError('Please fill out all fields!');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      // // Add a new document to the "orders" collection in Firestore
      // const docRef = await addDoc(collection(db, 'orders'), {
      //   recipientName: recipientName,
      //   deliveryAddress: deliveryAddress,
      //   deliveryDate: new Date('2025-08-28T12:00:00'), // August 28, 2025
      //   orderPlacedAt: serverTimestamp(), // Firebase will add the current time
      // });
      // console.log('Order placed with ID: ', docRef.id);
      router.push('/confirmation'); // Navigate to confirmation page on success
    } catch (e) {
      console.error('Error adding document: ', e);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-brand-red p-4">
      <div className="w-full max-w-lg bg-white rounded-lg p-8 flex flex-col items-center shadow-lg">
        <div className='mb-4 h-2 w-20 bg-brand-red rounded-full flex items-center justify-center shadow-lg'></div>

        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">Finalize Your Delivery</h1>
        
        <div className="bg-gray-200 p-3 rounded-md mb-6 text-center w-full">
          <p className="font-semibold">Order Summary: 1 x Boyfriend Premium Editions</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="So he knows who to look for!"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
              Enter Delivery Address:
            </label>
            <textarea
              id="address"
              rows={4}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="Make sure it's correct!"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Delivery Date:
            </label>
            <input
              type="text"
              value="August 29, 2025"
              className="w-full px-3 py-2 border bg-gray-200 text-gray-500 rounded-md"
              disabled
            />
            <p className="text-sm text-gray-500 mt-1">
              Our advanced romance-algorithm has selected the most optimal date for delivery.
            </p>
          </div>
          
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-red text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors disabled:bg-pink-300"
          >
            {isLoading ? 'Placing Order...' : 'Place My Order!'}
          </button>
        </form>
      </div>
    </main>
  );
}