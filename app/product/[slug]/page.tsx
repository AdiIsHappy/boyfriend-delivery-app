'use client'; // This is a client component to allow for interaction

import { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

// --- Data for our two products ---
const productData = {
    v1: {
        name: 'Boyfriend V1.0',
        price: 'One Smile & A Hug',
        stock: 'Only 1 in stock! (And it\'s all yours.)',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/80AF792B-ABBA-4D26-9194-C2E67EEAA38F_1_201_a.jpeg?alt=media&token=1637a102-49f0-4879-9f02-5533c91307d6',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/WhatsApp%20Image%202025-07-25%20at%2002.17.13.jpeg?alt=media&token=e97d6463-9961-448b-bacb-e6c7216dc72f',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/356EC3A0-45B0-469E-9B20-564E61886EA6_1_201_a.jpeg?alt=media&token=1d7f9492-ebbf-4dc2-b40a-47b2a5ae446c',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/FEF71804-FE79-4307-85E8-D66CBB4B8288_1_201_a.jpeg?alt=media&token=ee85c132-83fe-4db8-b0c4-ac74478c8171',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/E67F337D-6B74-45BD-B6C5-451D3B6DAF07_1_201_a.jpeg?alt=media&token=e5b5c83f-92b6-4c4c-863b-a6ef81eb6ba1',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/D72A8C59-1575-4051-8E65-12FB9B1CF2EB_1_201_a.jpeg?alt=media&token=d3e94a9a-cfe2-44e7-a9f3-9f3efef58ee0',

        ], // <-- Add more V1 image URLs here
        audio1: { label: 'Try a Sweet Sample', url: 'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/Aduio%2FAdi-SweetSample.m4a?alt=media&token=ecfc65f4-671d-411a-8522-352eb1023dda' },
        audio2: { label: 'Hear a Silly Joke', url: 'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/Aduio%2FAdi-SillyJoke.m4a?alt=media&token=72ac43db-169d-4cb9-87ed-cdb971f7c00f' },
        specs: [
            { label: 'Height', value: 'Your Height' },
            { label: 'Cuddle Capacity', value: '100% (Guaranteed)' },
            { label: 'Loyalty', value: 'Unwavering' },
        ],
        reviews: [
            { author: 'Your Mom', text: 'Best son ever, 10/10 delivery.' },
            { author: 'Your Pet\'s Name', text: 'He gives the best scratches.' },
            { author: 'A Fictional Character', text: 'This one has the heart of a true hero.' }
        ],
        orderButtonText: 'Order Now',
        isOrderable: true,
    },
    v2: {
        name: 'Boyfriend V2.0',
        price: 'Your Favorite Hoodie & Control of the TV Remote',
        stock: 'Currently on a secret mission (Unavailable)',
        gallery: [
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/0DCC3C8A-FDB9-4B41-B16D-564FB2966E77_1_201_a.jpeg?alt=media&token=76d954aa-2152-4767-a54a-d9cceb49aaad',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/WhatsApp%20Image%202025-07-25%20at%2002.16.52.jpeg?alt=media&token=5e0f6df4-0a52-495e-a9d7-23b660c07695', // <-- PASTE V2 MAIN IMAGE URL
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/8DD1ED98-2EDB-4380-86E7-8602F09D1F9C_1_201_a.jpeg?alt=media&token=dfabfe01-bea0-48dd-83e3-24b85cefd64b',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/341AD2F2-B05C-4720-BA6F-2FB62AB5EC90_1_201_a.jpeg?alt=media&token=c9c460ac-5e42-4f9b-b84c-814d505f493b',
            'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/0F954BD1-1603-411E-BFDF-CE7556E09604_1_201_a.jpeg?alt=media&token=10638e1f-1b86-43a7-9577-2a9b1573e16b',

        ], // <-- Add more V2 image URLs here
        audio1: { label: 'Hear a Questionable Take', url: 'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/Aduio%2FBf-v2-sillyJoke.m4a?alt=media&token=81ffd2df-cdc7-4955-b912-a414e5ca50bb' },
        audio2: { label: 'Listen to a Terrible Pun', url: 'https://firebasestorage.googleapis.com/v0/b/boyfriend-delivery.firebasestorage.app/o/Aduio%2FBf-v2-Sweet%20Sample.m4a?alt=media&token=8f59e14e-0dd8-4dc8-a0df-c99a329ce8d4' },
        specs: [
            { label: 'Height', value: 'Depends on the shoes.' },
            { label: 'Cuddle Capacity', value: 'Subject to mood.' },
            { label: 'Special Skill', value: 'Can lose anything, instantly.' },
        ],
        reviews: [
            { author: 'A Local Pigeon', text: 'Tried to share his lunch. 2/5 stars.' },
            { author: 'The TV Remote', text: 'He never puts me back.' },
        ],
        orderButtonText: 'Attempt to Order',
        isOrderable: false,
    },
};

// --- The Pop-up Component ---
function V2UnavailablePopup({ onClose }: { onClose: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000); // Automatically close and redirect after 4 seconds
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md">
                <h3 className="text-2xl font-bold text-red-500">Error!</h3>
                <p className="mt-4 text-gray-700">
                    This product is currently on a secret mission and is unavailable. We have added <strong>Aditya Premium Edition</strong> to your cart instead. Its a free upgrade!
                </p>
                <p className="mt-2 text-sm text-gray-500">(Redirecting you to checkout...)</p>
            </div>
        </div>
    );
}

// --- The Main Page Component ---
export default function ProductPage() {
    const router = useRouter();
    const params = useParams();
    const slug = params.slug as keyof typeof productData;
    const product = productData[slug];

    const [showPopup, setShowPopup] = useState(false);
    const audioRef1 = useRef<HTMLAudioElement>(null);
    const audioRef2 = useRef<HTMLAudioElement>(null);

    // Carousel state
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number | null>(null);

    // Auto-scroll effect
    useEffect(() => {
        if (product.gallery.length < 2) return;
        const interval = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % product.gallery.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [product.gallery.length]);

    // Scroll to image when index changes
    useEffect(() => {
        if (carouselRef.current) {
            const child = carouselRef.current.children[carouselIndex] as HTMLElement;
            if (child) {
                child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }, [carouselIndex]);

    // Touch/swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 50) {
            if (deltaX < 0) {
                // Swipe left
                setCarouselIndex((prev) => (prev + 1) % product.gallery.length);
            } else {
                // Swipe right
                setCarouselIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
            }
        }
        touchStartX.current = null;
    };

    if (!product) {
        return <div className="text-center p-10">Product not found!</div>;
    }

    const handleOrderClick = () => {
        if (product.isOrderable) {
            router.push('/checkout');
        } else {
            setShowPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        router.push('/checkout');
    };

    return (
        <>
            {showPopup && <V2UnavailablePopup onClose={handlePopupClose} />}
            <main className="container mx-auto p-8">
                <div className="bg-white shadow-xl rounded-lg p-6 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Carousel Gallery */}
                        {product.gallery.length > 0 && (
                            <div
                                ref={carouselRef}
                                className="flex gap-4 overflow-x-auto pb-2 w-full p-8 h-auto scrollbar-hide"
                                style={{ WebkitOverflowScrolling: 'touch' }}
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                {product.gallery.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-80 h-100 flex items-center justify-center rounded-lg shadow flex-shrink-0 bg-gray-100 transition-transform ${carouselIndex === idx ? 'scale-105' : 'opacity-70'}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} gallery ${idx + 1}`}
                                            width={320}
                                            height={288}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Product Details */}
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
                            <p className="text-2xl text-pink-500 mt-2">{product.price}</p>
                            <p className="text-md text-green-600 font-semibold mt-1">{product.stock}</p>

                            <div className="mt-6 flex gap-4">
                                <button onClick={() => audioRef1.current?.play()} className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                                    {product.audio1.label}
                                </button>
                                <button onClick={() => audioRef2.current?.play()} className="bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300">
                                    {product.audio2.label}
                                </button>
                                <audio ref={audioRef1} src={product.audio1.url} preload="auto"></audio>
                                <audio ref={audioRef2} src={product.audio2.url} preload="auto"></audio>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-semibold border-b pb-2">Technical Specifications</h3>
                                <ul className="mt-4 space-y-2">
                                    {product.specs.map(spec => (
                                        <li key={spec.label}><strong>{spec.label}:</strong> {spec.value}</li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={handleOrderClick}
                                className="mt-8 w-full bg-green-500 text-white font-bold text-lg py-3 rounded-lg hover:bg-green-600 transition-colors"
                            >
                                {product.orderButtonText}
                            </button>
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold border-b pb-2">Customer Reviews</h3>
                        <div className="mt-4 space-y-4">
                            {product.reviews.map(review => (
                                <div key={review.author} className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-semibold">{review.author} says:</p>
                                    <p className="text-gray-700">&ldquo;<i>{review.text}</i>&rdquo;</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

// Add this Tailwind utility to your global CSS if not present:
// .scrollbar-hide::-webkit-scrollbar { display: none; }
// .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }