import React, { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(savedBooks);
    const frontCoverData = JSON.parse(localStorage.getItem("FrontCoverData"));
    setImage(frontCoverData?.selectedImage);
  }, []);

  console.log(books);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-red-400">Downloaded Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-md relative overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
            </div>
            <p className="text-gray-700">Author: {book.author}</p>
            <p className="text-gray-500 text-sm">Date: {book.date}</p>
            <div className="overflow-hidden rounded-md">
              <img
                src={image}
                alt="FrontPageImage"
                className="w-full h-auto max-w-100px mb-2 transition-transform transform hover:scale-105"
              />
            </div>

            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                View
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
