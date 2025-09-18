export default function NotFound() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="row-start-2 flex flex-col gap-8 items-center sm:items-start">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-lg">Sorry, the page you're looking for doesn't exist.</p>
                <a href="/" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                    Go back home
                </a>
            </main>
        </div>
    );
