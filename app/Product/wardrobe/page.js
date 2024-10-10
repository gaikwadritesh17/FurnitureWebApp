'use client';
import { useState } from 'react';

export default function SizeSelection() {
  const [step, setStep] = useState(1);
  const [showHeightOptions, setShowHeightOptions] = useState(false);
  const [showWidthOptions, setShowWidthOptions] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState(null);
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [selectedInterior, setSelectedInterior] = useState(null);
  const [selectedSubTypeInterior, setSelectedSubTypeInterior] = useState(null);
  const [selectedHardware, setSelectedHardware] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const heightOptions = [
    { value: 2, price: 100 },
    { value: 3, price: 150 },
    { value: 4, price: 200 },
    { value: 5, price: 250 },
    { value: 6, price: 300 },
    { value: 7, price: 350 },
    { value: 8, price: 400 },
    { value: 9, price: 450 },
    { value: 10, price: 500 },
    { value: 11, price: 550 },
    { value: 12, price: 600 },
  ];

  const widthOptions = [
    { value: 7, price: 200 },
    { value: 8, price: 250 },
    { value: 9, price: 300 },
    { value: 10, price: 350 },
  ];

  const doorOptions = [
    { type: 'Sliding Door', price: 400, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptVBUh-_CMOeMTd3-U7rrNE5RJuHBNCiS8Q&s' },
    { type: 'Openable Door', price: 300, imageUrl: 'https://www.spacemax.in/wp-content/uploads/2020/05/2011.jpg' },
  ];

// Define the interior options with 10 entries
const interiorOptions = [
  {
    type: 'One Module',
    price: 500,
    imageUrl: 'https://www.getmycouch.com/cdn/shop/files/2_770b965e-b5d9-4031-b288-8dfde406a2ce.jpg?v=1706876124',
  },
  {
    type: 'Two Module',
    price: 600,
    imageUrl: 'https://wakefitdev.gumlet.io/img/wardrobes/r1/WWRB4DH1ORGANZAPCWR1/1.jpg?w=3840',
  },
  {
    type: 'Three Module',
    price: 700,
    imageUrl: 'https://www.at-home.co.in/cdn/shop/files/4DoorwardrobewalnutLS.jpg?v=1682665917',
  },
  {
    type: 'Four Module',
    price: 800,
    imageUrl: 'https://i.pinimg.com/originals/12/5a/b1/125ab1300becd313becb6b4ea1f6f5aa.jpg',
  },
  {
    type: 'Five Module',
    price: 1100,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/UE/RN/QE/106605785/6-door-modular-bedroom-wardrobe.jpg',
  },
  {
    type: 'Six Module',
    price: 1200,
    imageUrl: 'https://i.pinimg.com/736x/a4/9c/f8/a49cf8d7cdcb38a4b5c550c8c95f7004.jpg',
  },
  {
    type: 'Seven Module',
    price: 1300,
    imageUrl: 'https://m.media-amazon.com/images/I/71biPyo+obL._SL1500_.jpg',
  },
  {
    type: 'Eight Module',
    price: 1400,
    imageUrl: 'https://www.thewisewood.com/wp-content/uploads/2023/01/Wooden-Wardrobe.jpg',
  },
  {
    type: 'Nine Module',
    price: 1500,
    imageUrl: 'https://www.sanjaywood.com/wp-content/uploads/2020/01/modern-wardrobe-in-godrej.jpg',
  },
  {
    type: 'Ten Module',
    price: 1600,
    imageUrl: 'https://media.architecturaldigest.com/photos/6052c85b43b8cda89cc056b1/4:3/w_1920,h_1440,c_limit/ML_Interiors%25202021_%2520Sarah%2520Shaker%2520Bishop%2520Bishop%2520Street%2520Interiors%2520Higgins%2520Reed%2520Wardrobe.jpg',
  },
];



// Define the sub-type interior options with 10 entries
const subTypeInteriorOptions = [
  {
    type: 'Option 1',
    price: 500,
    imageUrl: 'https://www.getmycouch.com/cdn/shop/files/2_770b965e-b5d9-4031-b288-8dfde406a2ce.jpg?v=1706876124',
  },
  {
    type: 'Option 2',
    price: 600,
    imageUrl: 'https://wakefitdev.gumlet.io/img/wardrobes/r1/WWRB4DH1ORGANZAPCWR1/1.jpg?w=3840',
  },
  {
    type: 'Option 3',
    price: 700,
    imageUrl: 'https://www.at-home.co.in/cdn/shop/files/4DoorwardrobewalnutLS.jpg?v=1682665917',
  },
  {
    type: 'Option 4',
    price: 800,
    imageUrl: 'https://i.pinimg.com/originals/12/5a/b1/125ab1300becd313becb6b4ea1f6f5aa.jpg',
  },
  {
    type: 'Option 5',
    price: 1100,
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/12/UE/RN/QE/106605785/6-door-modular-bedroom-wardrobe.jpg',
  },
  {
    type: 'Option 6',
    price: 1200,
    imageUrl: 'https://i.pinimg.com/736x/a4/9c/f8/a49cf8d7cdcb38a4b5c550c8c95f7004.jpg',
  },
  {
    type: 'Option 7',
    price: 1300,
    imageUrl: 'https://m.media-amazon.com/images/I/71biPyo+obL._SL1500_.jpg',
  },
  {
    type: 'Option 8',
    price: 1400,
    imageUrl: 'https://www.thewisewood.com/wp-content/uploads/2023/01/Wooden-Wardrobe.jpg',
  },
  {
    type: 'Option 9',
    price: 1500,
    imageUrl: 'https://www.sanjaywood.com/wp-content/uploads/2020/01/modern-wardrobe-in-godrej.jpg',
  },
  {
    type: 'Option 10',
    price: 1600,
    imageUrl: 'https://media.architecturaldigest.com/photos/6052c85b43b8cda89cc056b1/4:3/w_1920,h_1440,c_limit/ML_Interiors%25202021_%2520Sarah%2520Shaker%2520Bishop%2520Bishop%2520Street%2520Interiors%2520Higgins%2520Reed%2520Wardrobe.jpg',
  },
];

const hardwareOptions = [
  { type: 'Standard Hardware', price: 100, image: 'https://via.placeholder.com/150?text=Standard+Hardware' },
  { type: 'Premium Hardware', price: 200, image: 'https://via.placeholder.com/150?text=Premium+Hardware' },
  { type: 'Luxury Hardware', price: 300, image: 'https://via.placeholder.com/150?text=Luxury+Hardware' },
];







const handleHardwareSelect = (hardware) => {
  setSelectedHardware(hardware);
  updatePrice(
    selectedHeight ? selectedHeight.price : 0,
    selectedWidth ? selectedWidth.price : 0,
    selectedDoor ? selectedDoor.price : 0,
    selectedInterior ? selectedInterior.price : 0,
    selectedSubTypeInterior ? selectedSubTypeInterior.price : 0,
    hardware.price // Include the price of the selected hardware
  );
};






  const handleHeightSelect = (height) => {
    setSelectedHeight(height);
    updatePrice(height.price, selectedWidth ? selectedWidth.price : 0, selectedDoor ? selectedDoor.price : 0, selectedInterior ? selectedInterior.price : 0);
  };

  const handleWidthSelect = (width) => {
    setSelectedWidth(width);
    updatePrice(selectedHeight ? selectedHeight.price : 0, width.price, selectedDoor ? selectedDoor.price : 0, selectedInterior ? selectedInterior.price : 0);
  };

  const handleDoorSelect = (door) => {
    setSelectedDoor(door);
    updatePrice(selectedHeight ? selectedHeight.price : 0, selectedWidth ? selectedWidth.price : 0, door.price, selectedInterior ? selectedInterior.price : 0);
  };

  const handleInteriorSelect = (interior) => {
    setSelectedInterior(interior);
    updatePrice(selectedHeight ? selectedHeight.price : 0, selectedWidth ? selectedWidth.price : 0, selectedDoor ? selectedDoor.price : 0, interior.price);
  };


  const handleSubTypeInteriorSelect = (subTypeInterior) => {
    setSelectedSubTypeInterior(subTypeInterior);
    updatePrice(
      selectedHeight ? selectedHeight.price : 0,
      selectedWidth ? selectedWidth.price : 0,
      selectedDoor ? selectedDoor.price : 0,
      selectedInterior ? selectedInterior.price : 0,
      subTypeInterior.price // Include the price of the selected sub-type interior
    );
  };

 
  

  const updatePrice = (heightPrice, widthPrice, doorPrice, interiorPrice, subTypeInteriorPrice = 0, hardwarePrice = 0) => {
    setTotalPrice(heightPrice + widthPrice + doorPrice + interiorPrice + subTypeInteriorPrice + hardwarePrice);
  };

 
  

  const toggleHeightOptions = () => {
    setShowHeightOptions(!showHeightOptions);
  };

  const toggleWidthOptions = () => {
    setShowWidthOptions(!showWidthOptions);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div
    

  

      className="min-h-screen flex flex-col relative bg-cover bg-center"
      style={{
        backgroundImage: step === 1
          ? `url('https://t4.ftcdn.net/jpg/02/68/20/47/360_F_268204723_b7ALIX2byppCQDd94wZsdEtawUhjF2Ih.jpg')`
          : step === 2
          ? `url('https://parsonsjoinery.com/wp-content/uploads/2016/09/The-difference-between-a-joiner-and-a-carpenter-1.jpg')`
          : step === 3
          ? `url('https://img.freepik.com/premium-photo/carpenters-making-wooden-furniture-joinery_1077802-103281.jpg')`
          : step === 4
          ? `url('https://image.shutterstock.com/image-photo/modern-kitchen-interior-wooden-cabinets-260nw-1068592405.jpg')`
          : `url('https://www.123rf.com/photo_26430503_empty-kitchen-cabinet-drawer-for-cutlery-and-kitchen-utensils.html')`, // Background for Type of Hardware
      }}
    >
      {/* Background Overlay for 50% Opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Display Total Price */}
      <div className="text-right p-4 font-bold text-lg z-10 relative">
        Total Price: ${totalPrice}
      </div>

      {/* Step 1: Size Selection */}
      {step === 1 && (
        <>
          <h1 className="text-3xl font-bold text-center text-white z-10 relative mb-4">
            Size Selection
          </h1>
          <div className="flex flex-col lg:flex-row h-full z-10 relative">
            <div className="w-full lg:w-1/2 p-4 lg:border-r-2 border-gray-300">
              <h2
                className="text-xl font-bold mb-4 text-center cursor-pointer"
                onClick={toggleHeightOptions}
              >
                Select Height
              </h2>
              <div className="flex flex-col items-center">
                {showHeightOptions && (
                  <div className="flex flex-col items-center space-y-2 mt-4">
                    {heightOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`p-2 w-full rounded-lg text-black ${
                          selectedHeight?.value === option.value
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200'
                        }`}
                        onClick={() => handleHeightSelect(option)}
                      >
                        {option.value} ft
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-4">
              <h2
                className="text-xl font-bold mb-4 text-center cursor-pointer"
                onClick={toggleWidthOptions}
              >
                Select Width
              </h2>
              <div className="flex flex-col items-center">
                {showWidthOptions && (
                  <div className="flex flex-col items-center space-y-2 mt-4">
                    {widthOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`p-2 w-full rounded-lg text-black ${
                          selectedWidth?.value === option.value
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200'
                        }`}
                        onClick={() => handleWidthSelect(option)}
                      >
                        {option.value} ft
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Step 2: Type of Exterior */}
      {step === 2 && (
        <>
          <h1 className="text-3xl font-bold text-center text-white z-10 relative mb-4">
            Type of Exterior
          </h1>
          <div className="flex flex-col lg:flex-row z-10 relative">
            {doorOptions.map((door) => (
              <div key={door.type} className="w-full lg:w-1/2 p-4 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">{door.type}</h2>
                <img
                  src={door.imageUrl}
                  alt={door.type}
                  className="w-auto h-auto rounded-lg mb-4"
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <button
                  className={`p-2 w-26 rounded-lg text-black ${
                    selectedDoor?.type === door.type ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => handleDoorSelect(door)}
                >
                  Select {door.type}
                </button>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 z-10">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        </>
      )}

{/* Step 3: Type of Interior */}
{step === 3 && (
  <>
    <h1 className="text-3xl font-bold text-center text-white z-10 relative mb-4">
      Type of Interior Module Selection
    </h1>
    <div className="flex flex-wrap justify-center z-10 relative">
      {interiorOptions.map((interior) => (
        <div key={interior.type} className="w-full sm:w-1/2 lg:w-1/5 p-2 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{interior.type}</h2>
          <img
            src={interior.imageUrl}
            alt={interior.type}
            className="w-full h-48 rounded-lg mb-2" // Set height for larger images
            style={{ objectFit: 'cover' }} // Maintain aspect ratio
          />
          <button
            className={`px-4 py-2 w-auto text-black ${
              selectedInterior?.type === interior.type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } rounded-lg`} // Made button rectangular
            onClick={() => handleInteriorSelect(interior)}
          >
            Select {interior.type}
          </button>
        </div>
      ))}
    </div>

    <div className="absolute bottom-4 right-4 z-10">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </>
)}







{step === 4 && (
  <>
    <h1 className="text-3xl font-bold text-center text-white z-10 relative mb-4">
      Sub-Type Interior
    </h1>
    <div className="flex flex-wrap z-10 relative">
      {subTypeInteriorOptions.map((option, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-4 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{option.type}</h2>
          <img
            src={option.imageUrl}
            alt={option.type}
            className="w-auto h-auto rounded-lg mb-2"
            style={{ maxHeight: '250px', objectFit: 'cover' }}
          />
          <button
            className={`px-4 py-2 w-auto rounded-lg text-black ${
              selectedSubTypeInterior?.type === option.type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleSubTypeInteriorSelect(option)}
          >
            Select {option.type}
          </button>
        </div>
      ))}
    </div>

    <div className="absolute bottom-4 right-4 z-10">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </>
)}

{step === 5 && (
  <>
    <h1 className="text-3xl font-bold text-center text-white z-10 relative mb-4">
      Select Hardware
    </h1>
    <div className="flex flex-wrap justify-center z-10 relative">
      {hardwareOptions.map((hardware) => (
        <div key={hardware.type} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2">{hardware.type}</h2>
          <img
            src={hardware.image}
            alt={hardware.type}
            className="w-full h-32 rounded-lg mb-2"
            style={{ objectFit: 'cover' }}
          />
          <button
            className={`px-4 py-2 w-auto rounded-lg text-black ${
              selectedHardware?.type === hardware.type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleHardwareSelect(hardware)}
          >
            Select {hardware.type}
          </button>
        </div>
      ))}
    </div>


    <div className="absolute bottom-4 right-4 z-10">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
        onClick={nextStep}
      >
        Next
      </button>
    </div>
  </>
)}

{/* Final Pricing Section */}
{step === 6 && (
  <div className="flex flex-col items-center z-10 relative">
    <h1 className="text-3xl font-bold mb-4 text-white">Final Pricing</h1>
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-lg">Total Price: ${totalPrice}</h2>
      {/* You can add more details about the selection here if needed */}
    </div>
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      onClick={() => alert('Thank you for your order!')}
    >
      Confirm Order
    </button>
  </div>
)}


      {/* Next Button for all steps */}
      {step < 5 && (
        <div className="absolute bottom-4 right-4 z-10">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}