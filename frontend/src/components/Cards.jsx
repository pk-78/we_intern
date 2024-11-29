export default function Cards({image,name}) {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-xl shadow-lg border border-purple-300 max-w-sm mx-auto hover:scale-105 duration-300 hover:shadow-2xl transition-shadow">
            {/* Image Section */}
            <div className="flex justify-center mb-4">
                <img
                    className=" object-cover rounded-lg border-purple-300 shadow-md"
                    src={image}
                    alt="Web Development"
                />
            </div>

            {/* Content Section */}
            <div className="text-center space-y-4">
                <h1 className="font-extrabold text-2xl text-purple-800">
                    {name}
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed px-2">
                    Learn the art of building modern, responsive, and user-friendly websites. 
                    Master HTML, CSS, JavaScript, and much more with our industry-relevant curriculum.
                </p>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 shadow-md transition-transform transform hover:scale-105">
                    Register Now
                </button>
            </div>
        </div>
        
    );
}
