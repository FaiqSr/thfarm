import React, { useEffect, useState } from "react";

function FooterComponent() {
  return (
    <div className="bg-white-utama w-full">
      <div className="flex justify-around py-10">
        <div className=" flex flex-col justify-center gap-3">
          <h1 className="text-3xl font-bold">Contact us</h1>
          <h3 className="text-xl">WA : 0881123</h3>
          <h3>Senin - Sabtu</h3>
          <h3>09.00 - 19.00</h3>
          <p>
            Jl. Pesantren No.49, RT.02/RW.04, Tajurhalang, Kec. Tajur Halang,
            Kabupaten Bogor, Jawa Barat 16320
          </p>
        </div>
        <div>
          <form className="max-w-lg mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="bg-black w-full h-0.5"></div>
      </div>
      <div className="text-center py-3">
        <h1>Copyright 2024</h1>
      </div>
    </div>
  );
}

export default FooterComponent;
