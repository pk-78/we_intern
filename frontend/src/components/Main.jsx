export default function Main() {
    return (
        <div className="p-5 bg-gray-900 min-h-screen text-gray-100 font-sans my-10 ">
            {/* Header Section */}
            <header className="text-center space-y-4">
            <h1 className="mt-10 font-extrabold text-4xl sm:text-5xl leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Push Your Developer Career to the Next Level!
                </h1>
                <p className="font-medium text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
                    Learn the exact steps to master design, development, data analysis, and more. 
                    Gain confidence with structured learning and secure job assistance.
                </p>
            </header>

            {/* Call-to-Action Buttons */}
            <section className="flex justify-center my-10 gap-4">
                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 shadow-lg transition-transform transform hover:scale-105">
                    Start Learning Now
                </button>
                <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 shadow-lg transition-transform transform hover:scale-105">
                    See What's Inside
                </button>
            </section>

            {/* Content Section */}
            <section className="flex flex-col md:flex-row items-center my-10 space-y-8 md:space-y-0 md:space-x-10 border-2 border-transparent m-12 px-10 py-5 rounded-lg mx-40 shadow-xl bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300 text-white">
                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center ">
                    <img
                        className="h-60 w-60 md:h-80 md:w-80 object-cover rounded-xl border-4 border-purple-400 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                        src="https://jep-asset.akamaized.net/jiocom/static/images/mobile-One_time_recharge_for_one_full_year.webp"
                        alt="Learning Illustration"
                    />
                </div>
                {/* Info and Buttons */}
                <div className="md:w-1/2 text-center space-y-5">
                    <div className="flex justify-center gap-6 mr-32">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105">
                            Developer
                        </button>
                        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 shadow-md transition-transform transform hover:scale-105">
                            WE_LEARN
                        </button>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-white font-bold mr-32">
                        Get the Tech Career You Deserve
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mr-32">
                        Accelerate your journey with a structured internship program that builds confidence 
                        and gets you to your dream career faster.
                    </p>
                </div>
            </section>
        </div>
    );
}
