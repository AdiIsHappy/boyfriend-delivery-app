import Link from 'next/link';

export default function ConfirmationPage() {
  const videoUrl = "URL_TO_YOUR_VIDEO_MESSAGE"; // <-- PASTE YOUR VIDEO URL
  const spotifyPlaylistUrl = "URL_TO_YOUR_SPOTIFY_PLAYLIST";
  const photoGalleryUrl = "URL_TO_YOUR_PHOTO_GALLERY";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-6 text-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Thank you for your order!
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          Your Boyfriend has been dispatched... mentally.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">
            While the physical unit is being prepared, please enjoy this Digital Care Package:
          </h2>
          
          <div className="aspect-w-16 aspect-h-9 mt-6 rounded-lg overflow-hidden shadow-lg">
            {/* If using a YouTube embed, replace src with the embed URL */}
            <iframe
              src={videoUrl}
              title="A Special Message"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={spotifyPlaylistUrl} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                Our Songs
              </button>
            </Link>
            <Link href={photoGalleryUrl} target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                Our Memories
              </button>
            </Link>
          </div>
        </div>

        <p className="mt-10 text-gray-500">
          Your delivery is being handled with extreme care. Keep an eye out... ❤️
        </p>
      </div>
    </main>
  );
}