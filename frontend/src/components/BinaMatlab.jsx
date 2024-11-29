export default function BinaMatlab() {
    return (
        <div className="flex border-2 border-transparent m-12 px-10 py-5 rounded-lg mx-40 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            {/* Image Section */}
            <div>
                <img
                    className="mx-20 h-60 w-60 object-cover rounded-xl border-4 border-yellow-400 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                    src="https://i.pinimg.com/736x/58/92/4b/58924be2d6f904ce4a6a2a0d7c893a35.jpg"
                    alt="Learning Illustration"
                />
            </div>
            {/* Content Section */}
            <div className="flex flex-col justify-center mx-32 text-center">
                <h1 className="text-4xl font-extrabold mb-6 text-yellow-300">
                    💡 Grab Your Discount!
                </h1>
                <p className="mx-10 text-center font-medium text-lg leading-8">
                    Thank you for the amazing support! As a token of appreciation, I’m offering 
                    exclusive discounts on courses and mentoring. Don’t miss out—claim your discount 
                    before it’s gone! 🚀
                </p>
                <button
                    className="size-fit mx-44 mt-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-5 py-3 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                    🔥Claim Your Discount Now
                </button>
            </div>
        </div>
    );
}
