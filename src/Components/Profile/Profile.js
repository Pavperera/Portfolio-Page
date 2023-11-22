import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <section id="profile" class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-32 mx-auto lg:gap-8 xl:gap-0 lg:pt-32 pb-16 lg:grid-cols-12 h-108 ">
        <div class="mr-auto place-self-center lg:col-span-7">
          <p class=" mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl  dark:text-white">
            Paviru Perera
          </p>
          <p class=" font-semibold pb-6 text-gray-500 lg:mb-2 md:text-2xl lg:text-2xl dark:text-gray-400">
            Aspiring Technology Consultant, Strategic Business Caser, Renaissance Engineering Scholar
          </p>

          <a
            href="Paviru_Perera_Resume.pdf"
            download={"Paviru_Perera_Resume.pdf"}
            class="inline-flex items-center justify-center px-5 py-3 mt-3 mx-4 text-base font-medium text-center rounded-lg text-gray-900 border hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/paviru-perera-920966251/"
            class="inline-flex items-center justify-center px-5 py-3 mt-3 mx-4  text-base font-medium text-center rounded-lg text-gray-900 border hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Linkedin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-linkedin ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </div>

        <div class=" hidden lg:mt-0 lg:col-span-5 lg:flex px-20">
          <img src={process.env.PUBLIC_URL + '/Suit.jpg'} class=" w-64 h-64 rounded-full" alt="Avatar" />
        </div>
      </div>
    </section>

  );
}
