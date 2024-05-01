import React from 'react';

export default function Testimonials() {
  const reviews = [
    { name: "Caroline S", location: "Q Park Mayfair", comment: "Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend." },
    { name: "Ian J", location: "London Heathrow Marriott Hotel Car Park", comment: "Hotel easy to spot in plenty of time. bus lane not a problem. followed directions and instructions. so parked car in space. went to hotel reception and showed booking info. Filled out card" },
    { name: "Caroline S", location: "Q Park Mayfair", comment: "Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend." },
    { name: "Caroline S", location: "Q Park Mayfair", comment: "Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend." },
    { name: "Caroline S", location: "Q Park Mayfair", comment: "Easy to follow instructions. Plenty of parking spaces and very secure. Would highly recommend." },
  ];

  return (
    <>
    <style>
    {`
      .hide-scrollbar::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      .hide-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `}
  </style>
    <div className="bg-white py-10 px-5">
      <div className="container mx-auto">
        <div className="flex overflow-x-scroll gap-5 hide-scrollbar">
          {reviews.map((review, index) => (
            <div key={index} className="min-w-[300px] border p-4 rounded-lg shadow">
              <p className="text-sm text-gray-600">{review.comment}</p>
              <p className="text-xs text-gray-500 mt-2">{review.name} at {review.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
