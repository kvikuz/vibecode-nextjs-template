export default function NotFound() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col items-center">
                <h1 className="text-6xl font-bold mb-8">404</h1>
                <p className="text-xl mb-4">Page Not Found</p>
                <p className="text-gray-600 text-center max-w-md">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
            </main>
        </div>
    );
