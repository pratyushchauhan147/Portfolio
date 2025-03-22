export default function GeometricUI() {
    return (
      <div className="relative w-full h-screen bg-black flex flex-wrap p-10">
        {/* Blue Circle */}
        <div className="absolute top-5 left-5 w-16 h-16 bg-blue-700 rounded-full"></div>
        {/* White Small Circle */}
        <div className="absolute top-8 left-16 w-4 h-4 bg-white rounded-full"></div>
  
        {/* Left Section */}
        <div className="w-1/3 flex flex-col space-y-2">
          <div className="w-16 h-16 bg-green-600"></div>
          <div className="text-white text-3xl font-light">Hello!</div>
          <div className="flex">
            <div className="w-16 h-8 bg-red-600"></div>
            <div className="w-auto h-8 bg-green-600 px-2 flex items-center text-black font-semibold">
              I AM <span className="font-bold ml-2">PRATYUSH CHAUHAN</span>
            </div>
          </div>
        </div>
  
        {/* Right Section */}
        <div className="w-2/3 flex justify-end space-x-2">
          <div className="flex flex-col space-y-2">
            <div className="w-20 h-20 bg-red-600"></div>
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-blue-700"></div>
              <div className="w-20 h-10 bg-blue-700"></div>
            </div>
          </div>
          <div className="flex flex-wrap space-x-2">
            <div className="w-20 h-20 bg-blue-700"></div>
            <div className="w-10 h-20 bg-blue-700"></div>
          </div>
        </div>
      </div>
    );
  }
  