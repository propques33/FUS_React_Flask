import React from 'react';

const amenities = [
  {
    title: 'Cafeteria & Pantry',
    img: 'https://www.sicoinc.com/wp-content/uploads/2024/05/p2updated.png',
  },
  {
    title: 'Daily Cleaning',
    img: 'https://www.realsimple.com/thmb/J9k3Zc5q6kv0B2NtV_0-mZisQX0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/0424CLEA-sponge-0816ad2e4b0f4f7aa6e26bf79eb29027.jpg',
  },
  {
    title: 'Conference Room',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9HUk2G3i6JB4J9R45mBSz7l8P3RMxk0_ZQ&s',
  },
  {
    title: 'Lounge',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrceBnq7l_ZRi5vwsP99eobWCiG1-gO2t23w&s',
  },
  {
    title: 'Community Manager',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoPECpPbGahIpLMqZYwKx-A8f0nqPg1ySqA&s',
  },
];

const Amenities = () => {
  return (
    <section className="bg-white py-8 px-0">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-[1.3rem] md:text-4xl font-medium text-gray-800">
          We’ve Got the <span className="text-gray-900">Good Stuff!</span>
        </h2>
        <p className="md:mt-2 mt-2 md:text-sm text-xs text-gray-600  ">
          Our amenities are more than just free coffee. Think lightning-fast Wi-Fi, comfy chairs that won’t betray your back.        </p>
      </div>

      <div className="md:mt-8 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6 gap-3  ">
        {amenities.map(({ title, img }, i) => (
          <div key={i} className="text-center">
            <img
              src={img}
              alt={title}
              className="w-full h-48 object-cover rounded-2xl shadow-sm mx-auto"
            />
            <p className="mt-3 text-xs md:text-sm font-medium text-gray-800">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
