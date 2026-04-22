import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 px-4 sm:px-6 py-16 sm:py-20 text-white scroll-mt-20"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto w-full">
        <div className="pb-6 sm:pb-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4 sm:py-6 text-sm sm:text-base text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-start w-full pb-8 sm:pb-12">
          <form
            action="https://getform.io/f/420c8a26-2214-4abd-82f2-d87d9e55752a"
            method="POST"
            className="flex flex-col w-full max-w-lg md:max-w-xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-base bg-transparent border-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="w-full my-4 p-3 text-base bg-transparent border-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />

            <textarea
              name="message"
              placeholder="Enter your query"
              rows="5"
              className="w-full p-3 text-base bg-transparent border-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-y min-h-[120px]"
            >
              {" "}
            </textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 sm:my-8 mx-auto rounded-md hover:scale-110 duration-300 w-full sm:w-auto min-h-[48px]"
            >
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
