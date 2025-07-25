import Link from 'next/link';
import { Resend } from 'resend';

export default async function ConfirmationPage() {
    const instragmUrl = "https://www.instagram.com/adiishappy/";
    const whatsappUrl = "https://wa.me/919179842579";

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-brand-red p-6 text-center">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center">
                <div className='mb-4 h-2 w-20 bg-brand-red rounded-full flex items-center justify-center shadow-lg'></div>

                <h1 className="text-3xl font-bold text-brand-red">
                    Thank you for your order!
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                    Your Boyfriend has been dispatched... mentally.
                </p>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold">
                        While the physical unit is being prepared, please enjoy this Digital Care Package:
                    </h2>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link href={instragmUrl} target="_blank" rel="noopener noreferrer">
                            <button className="w-full sm:w-auto bg-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                                Chat and Share Reels on Instagram
                            </button>
                        </Link>
                        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <button className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                                Chat on WhatsApp
                            </button>
                        </Link>
                    </div>
                    <p className='mt-2 text-xs text-gray-500'>Note that Voice call and Video call is available on both platforms</p>
                </div>

                <p className="mt-10 text-brand-red">
                    Your delivery is being handled with extreme care. Keep an eye out for confirmation email ❤️
                </p>
                <p className=" text-gray-500 text-xs">
                    Also check your spam folder, just in case!
                </p>
            </div>
        </main>
    );
}