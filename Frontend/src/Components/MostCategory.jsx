import React from 'react'
import one_image from '../assets/frontend_assets/One_items.webp'


function MostCategory() {

  const containerData = [
    {
      id: 1,
      title: "Nature Gallery",
      images: [
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        
      ]
    },
    {
      id: 2,
      title: "City Life",
      images: [
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
      ]
    },
    {
      id: 3,
      title: "Space Wonders",
      images: [
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
        { id: 1, src: one_image, text: "Beautiful Lake" },
      ]
    }
  ];
  

  return (
    <div> 
   <div className="flex flex-wrap justify-center gap-6 p-6 mt-4 ">
      {containerData.map((container) => (
        <div key={container.id} className="bg-white shadow-lg rounded-lg p-4 w-80">
          <h2 className="text-xl font-bold mb-4">{container.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {container.images.map((image) => (
              <div key={image.id} className="text-center">
                <img
                  src={image.src}
                  alt={image.text}
                  className="w-full h-24 object-cover rounded-md"
                />
                <p className="text-sm mt-2">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MostCategory