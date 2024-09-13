import React from "react";

function Stats() {
  return (
    <section className="bg-gradient-to-b from-violet-300 to-pink-100 text-#111827 size-full">
      <div className="container mx-auto py-16 px-4 ">
        <h1 className="text-5xl font-bold mb-10 text-center">
          A Platform Engineered for Success
        </h1>
        <div className="grid grid-cols-3 gap-7 ">
          <div className="bg-white rounded-3xl pt-16 text-center h-80">
            <h2 className="text-0.3xl font-bold mb-2 text-gray-500">
              Empowered By
            </h2>
            <h2 className="text-8xl font-bold mb-2 text-purple-800">57</h2>
            <p className=" font-semibold  text-gray-700 text-2xl">
              Expert Mentors
            </p>
          </div>
          <div className="bg-white rounded-3xl pt-16 text-center">
            <h2 className="text-0.3xl font-bold mb-2 text-gray-500">
              Global community from
            </h2>
            <h2 className="text-8xl font-bold mb-2 text-purple-900">35</h2>
            <p className=" font-semibold text-gray-700 text-2xl">Countries</p>
          </div>
          <div className="bg-white rounded-3xl pt-16 text-center">
            <h2 className="text-0.3xl font-bold mb-2 text-gray-500">
              We have built over
            </h2>
            <h2 className="text-8xl font-bold mb-2 text-purple-900">265</h2>
            <p className=" font-semibold text-gray-700 text-2xl">Connections</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
