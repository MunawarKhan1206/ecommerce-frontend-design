// import Image from "next/image";
// import Link from "next/link";
// import Login from "@/app/login";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col lg:flex-row bg-gray-100 p-6 space-y-5 lg:space-y-0 lg:space-x-5">
//       <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-3">
//         <ul className="space-y-1">
//           <li className="font-semibold hover:font-bold bg-blue-100 rounded px-2 py-2">Automobiles</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Clothes and wear</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Home interiors</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Computer and tech</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Tools, equipments</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Sports and outdoor</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Animal and pets</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Machinery tools</li>
//           <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">More category</li>
//         </ul>
//       </div>
//       <div className="flex-1 bg-white shadow-md rounded-md relative p-5">
//         <div className="relative w-full h-64 lg:h-[3O0px] ">
//         <Image
//   src="/electronics.png"
//   alt="Electronics"
//   fill
//   className="rounded-md"
// />
//         </div>
//         <div className="mt-4 text-center lg:text-left">
//         <div className="absolute top-1/4 left-1/4 text-left">
//           <h2 className="text-2xl font-bold text-black mb-3">Latest trending</h2>
//           <h3 className="text-xl font-semibold text-gray-900">Electronic items</h3>
//           <Link href="/signup" passHref >
//           <button className="mt-4 px-5 py-2 bg-white rounded">
//             Learn more
//           </button>
//           </Link>
//         </div>
//         </div>
//       </div>
//       <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-4 space-y-4">
//         <div className="text-center mt-5 ">
//           <p className="font-bold text-gray-700">Hi, user let&apos;s get started</p>
//           <Link href="/signup" passHref>
//             <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded w-full">
//               Join now
//             </button>
//           </Link>
//           <Link href="/login" passHref>
//             <button className="mt-2 px-4 py-2 bg-white text-blue-500 border rounded w-full">
//               Log in
//             </button>
//           </Link>
//         </div>
//         <div className="  bg-orange-200 text-orange-700 p-4 rounded">
//           Get US $10 off with a new supplier
//         </div>
//         <div className="bg-teal-100 text-teal-600 p-4 rounded">
//           Send quotes with supplier preferences
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row   bg-gray-100 space-y-5 lg:space-y-0 lg:space-x-5">
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-3">
        <ul className="space-y-1">
          <li className="font-semibold hover:font-bold bg-blue-100 rounded px-2 py-2">Automobiles</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Clothes and wear</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Home interiors</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Computer and tech</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Tools, equipments</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Sports and outdoor</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Animal and pets</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">Machinery tools</li>
          <li className="hover:bg-blue-100 hover:font-bold rounded px-2 py-2">More category</li>
        </ul>
      </div>
      <div className="flex-1 bg-white shadow-md rounded-md relative p-5">
        <div className="relative w-full h-64 lg:h-[300px]">
          <Image
            src="/electronics.png"
            alt="Electronics"
            fill
            className="rounded-md"
          />
        </div>
        <div className="mt-4 text-center lg:text-left">
          <div className="absolute top-1/4 left-1/4 text-left">
            <h2 className="text-2xl font-bold text-black mb-3">Latest trending</h2>
            <h3 className="text-xl font-semibold text-gray-900">Electronic items</h3>
            <Link href="/signup">
              <button className="mt-4 px-5 py-2 bg-white rounded">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-4 space-y-4">
        <div className="text-center mt-5">
          <p className="font-bold text-gray-700">Hi, user let&apos;s get started</p>
          <Link href="/signup">
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded w-full">Join now</button>
          </Link>
          <Link href="@/pages/login">
            <button className="mt-2 px-4 py-2 bg-white text-blue-500 border rounded w-full">Log in</button>
          </Link>
        </div>
        <div className="bg-orange-200 text-orange-700 p-4 rounded">Get US $10 off with a new supplier</div>
        <div className="bg-teal-100 text-teal-600 p-4 rounded">Send quotes with supplier preferences</div>
      </div>
    </div>
  );
};

export default HeroSection;
