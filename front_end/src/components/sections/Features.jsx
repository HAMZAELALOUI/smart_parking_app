import React from 'react';

export default function Features() {
  const features = [
    { icon: "/assets/icons/morocco.png", title: "Wherever, whenever", description: "Choose from millions of spaces across the UK. Find your best option for every car journey." },
    { icon: "/assets/icons/vehicle.png", title: "Peace of mind", description: "View information on availability, price and restrictions. Reserve in advance at over 45,000+ locations." },
    { icon: "/assets/icons/home.png", title: "Seamless experience", description: "Pay for JustPark spaces via the app or website. Follow easy directions and access instructions." },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-4">
            <img src={feature.icon} alt={feature.title} className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
