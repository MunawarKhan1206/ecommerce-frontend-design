import React from "react";
import Image from "next/image";

const Lastsection = () => {
  return (
    <div className="p-5">
      {/* Our Extra Services */}
      <section className="mb-5">
        <h2 className="text-xl font-bold mb-5">Our extra services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-3 shadow-md rounded-md text-center">
            <Image
              src="/path-to-image/industry-hub.jpg" // Replace with the correct image path
              alt="Source from Industry Hubs"
              width={400}
              height={300}
              className="rounded-md mb-3"
            />
            <p className="font-medium text-gray-700">Source from Industry Hubs</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-3 shadow-md rounded-md text-center">
            <Image
              src="/path-to-image/customize-products.jpg" // Replace with the correct image path
              alt="Customize Your Products"
              width={500}
              height={300}
              className="rounded-md mb-3"
            />
            <p className="font-medium text-gray-700">Customize Your Products</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-e shadow-md rounded-md text-center">
            <Image
              src="/path-to-image/shipping.jpg" // Replace with the correct image path
              alt="Fast, reliable shipping"
              width={500}
              height={300}
              className="rounded-md mb-3"
            />
            <p className="font-medium text-gray-700">Fast, reliable shipping by ocean or air</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-3 shadow-md rounded-md text-center">
            <Image
              src="/path-to-image/inspection.jpg" // Replace with the correct image path
              alt="Product monitoring"
              width={500}
              height={300}
              className="rounded-md mb-3"
            />
            <p className="font-medium text-gray-700">Product monitoring and inspection</p>
          </div>
        </div>
      </section>

      
      {/* <section>
        <h2 className="text-xl font-bold mb-5">Suppliers by region</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
         
          <div>
            <Image
              src="/path-to-image/arabic-emirates.jpg" // Replace with the correct image path
              alt="Arabic Emirates"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">Arabic Emirates</p>
            <p className="text-sm text-gray-500">shopname.ae</p>
          </div>
         
          <div>
            <Image
              src="/path-to-image/australia.jpg" // Replace with the correct image path
              alt="Australia"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">Australia</p>
            <p className="text-sm text-gray-500">shopname.com.au</p>
          </div>
         
          <div>
            <Image
              src="/path-to-image/united-states.jpg" // Replace with the correct image path
              alt="United States"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">United States</p>
            <p className="text-sm text-gray-500">shopname.us</p>
          </div>
         
          <div>
            <Image
              src="/path-to-image/russia.jpg" // Replace with the correct image path
              alt="Russia"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">Russia</p>
            <p className="text-sm text-gray-500">shopname.ru</p>
         </div>
                   <div>
            <Image
              src="/path-to-image/italy.jpg" // Replace with the correct image path
              alt="Italy"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">Italy</p>
            <p className="text-sm text-gray-500">shopname.it</p>
          </div>
         
          <div>
            <Image
              src="/path-to-image/denmark.jpg" // Replace with the correct image path
              alt="Denmark"
              width={150}
              height={100}
              className="mx-auto mb-3"
            />
            <p className="font-medium text-gray-700">Denmark</p>
            <p className="text-sm text-gray-500">denmark.com.dk</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Lastsection;
