import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-brand-dark to-brand-red">
      <div className="text-center flex flex-col items-start pt-8 pb-8 pl-4 p-2 w-full">
        <h1 className="text-6xl font-bold text-white">BF Shippers</h1>
        <p className="text-2xl text-white mt-2">Your one-stop shop for affection.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full bg-gray-100 pt-2 rounded-t-4xl shadow-lg p-6 max-w-6xl mx-auto">
        <div className='h-2 w-20 bg-brand-red rounded-full flex items-center justify-center'></div>
        <div className="text-4xl font-bold text-brand-red mb-6 text-center w-full">
          Explore Our Collection
        </div>

        {/* Product Card 1: Boyfriend V1.0 */}
        <div className="w-full max-w-sm rounded-lg shadow-md text-center relative overflow-hidden transform hover:scale-105 transition-transform" style={{ height: 500 }}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/WhatsApp%20Image%202025-07-25%20at%2002.17.13.jpeg?alt=media&token=e97d6463-9961-448b-bacb-e6c7216dc72f"
            alt="Boyfriend V1.0"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
            <h2 className="text-3xl font-semibold text-white">Aditya</h2>
            <p className="text-md font-bold text-brand-red">Premium Edition</p>
            <p className="text-white/90 mt-2">
              Your one and only. Specializes in hugs, listening, and remembering your coffee order.
            </p>
            <Link href="/product/v1">
              <button className="mt-4 w-full bg-brand-red/90 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-red transition-colors">
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Product Card 2: Boyfriend V2.0 */}
        <div className="w-full max-w-sm rounded-lg shadow-md text-center relative overflow-hidden transform hover:scale-105 transition-transform" style={{ height: 500 }}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/WhatsApp%20Image%202025-07-25%20at%2002.16.52.jpeg?alt=media&token=5e0f6df4-0a52-495e-a9d7-23b660c07695"
            alt="Boyfriend V2.0"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">

          <h2 className="text-3xl font-semibold mt-4 text-white">Ghar wala 😒</h2>
          <p className="text-md font-bold text-brand-red">Rogue Edition</p>
          <p className="text-white/90 mt-2">
            The mysterious, rugged alternative. Makes original one cry.
          </p>
          <Link href="/product/v2">
              <button className="mt-4 w-full bg-brand-red/90 text-white font-bold py-3 px-4 rounded-lg hover:bg-brand-red transition-colors">
              View Details
            </button>
          </Link>
        </div>

        </div>
        <div className='w-full h-20 bg-brand-red '></div>
      </div>
    </main>
  );
}