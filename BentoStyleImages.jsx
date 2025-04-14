import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Button } from "@/components/ui/button";

const BentoStyleImages = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="bg-black min-h-screen text-white">
     

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-red-400">Make it happen</span> with{" "}
            <span className="text-purple-400">Star Connect</span>
          </h1>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold">Top Talent Awaits</h3>
              <p className="text-gray-300">
                Find skilled professionals by browsing their portfolios and
                diving into the reviews on their profiles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Instant Bids</h3>
              <p className="text-gray-300">
                Receive rapid, commitment-free quotes from top freelancers. 80%
                of projects get bids within a minute.
              </p>
            </div>
          </div>
          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => navigate("/login")} // Navigate to signup page
          >
            Get started now
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="public/Images/theater.jpg" alt="Star Connect showcase"
            className="rounded-lg shadow-xl w-full max-w-md"
          />
        </div>
      </section>

      {/* Bento Image Grid Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 auto-rows-[200px]">
          <div className="col-span-2 md:col-span-3 row-span-2">
            <img
              src="public/Images/cinematic.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Western set"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1">
            <img
              src="public/Images/img3.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Director clapper"
            />
          </div>
          <div className="col-span-1 md:col-span-2 row-span-1">
            <img
              src="public/Images/imgg1.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Action camera shot"
            />
          </div>
          <div className="col-span-1 md:col-span-2 row-span-1">
            <img
              src="public/Images/img5.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Red light camera"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-2">
            <img
              src="public/Images/imggg.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Studio light"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-2">
            <img
              src="public/Images/imggg1.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Studio light"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1">
            <img
              src="public/Images/imgg4.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Indoor shooting"
            />
          </div>
          <div className="col-span-2 md:col-span-3 row-span-1">
            <img
              src="public/Images/image6.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Behind the scenes"
            />
          </div>
          <div className="col-span-2 md:col-span-2 row-span-1">
            <img
              src="public/Images/imgg10.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Outdoor shoot"
            />
          </div>
          <div className="col-span-2 md:col-span-2 row-span-1">
            <img
              src="/Images/img14.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Director in studio"
            />
          </div>
          <div className="col-span-1 md:col-span-1 row-span-1">
            <img
              src="public/Images/img8.jpg"
              className="h-full w-full object-cover rounded-lg"
              alt="Indoor shooting"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BentoStyleImages;