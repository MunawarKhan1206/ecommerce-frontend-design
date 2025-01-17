import React from "react";
import Image from "next/image";

const services = [
  {
    image: "/industry.png",
    title: "Source from Industry Hubs",
  },
  {
    image: "/products.png",
    title: "Customize Your Products",
  },
  {
    image: "/fast.png",
    title: "Fast, reliable shipping by ocean or air",
  },
  {
    image: "/inspection.png",
    title: "Product monitoring and inspection",
  },
];

const regions = [
  {
    image: "/uae.png",
    name: "Arabic Emirates",
    url: "shopname.ae",
  },
  {
    image: "/path-to-image/australia.jpg",
    name: "Australia",
    url: "shopname.com.au",
  },
  {
    image: "/path-to-image/united-states.jpg",
    name: "United States",
    url: "shopname.us",
  },
  {
    image: "/path-to-image/russia.jpg",
    name: "Russia",
    url: "shopname.ru",
  },
  {
    image: "/path-to-image/italy.jpg",
    name: "Italy",
    url: "shopname.it",
  },
  {
    image: "/path-to-image/denmark.jpg",
    name: "Denmark",
    url: "denmark.com.dk",
  },
];

const Lastsection = () => {
  return (
    <div className="p-5 text-black">
      <section className="mb-5">
        <h2 className="text-xl font-bold mb-3">Our extra services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-2"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className=" mb-2"
              />
              <p className="font-semibold">{service.title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <section>
        <h2 className="text-xl font-bold mb-5">Suppliers by region</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {regions.map((region, index) => (
            <div key={index}>
              <Image
                src={region.image}
                alt={region.name}
                width={150}
                height={100}
                className="mx-auto mb-3"
              />
              <p className="font-medium text-gray-700">{region.name}</p>
              <p className="text-sm text-gray-500">{region.url}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Lastsection;
