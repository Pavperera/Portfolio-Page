import React from "react";

export default function Contact() {
  return (
    <section
      class="p-4 lg:p-4 dark:bg-gray-800 dark:text-gray-100"
      id="contact"
    >
      <div className="text-3xl font-semibold py-4" id="projects">
        {" "}
        Contact Me{" "}
      </div>

      <div class="mr-auto place-self-center lg:col-span-7">
        <p class=" font-semibold pb-2 text-gray-500 lg:mb-2 md:text-2xl lg:text-2xl dark:text-gray-400">
          I am looking for internship opportunities in the technology or
          consulting sector.{" "}
        </p>
        <p class=" font-normal pb-2 text-gray-500 lg:mb-2 md:text-2xl lg:text-2xl dark:text-white">
          Feel free to reach out.{" "}
        </p>

        <a
          href="mailto: paviruvperera@gmail.com"
          class="inline-flex items-center justify-center px-5 py-3 mt-3 mx-4 text-base font-medium text-center rounded-lg text-gray-900 border hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Gmail
          <svg
            height="24px"
            viewBox="0 0 48 48"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 ml-2"
          >
            <path
              d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              fill="#4caf50"
            />
            <path
              d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              fill="#1e88e5"
            />
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            />
            <path
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              fill="#c62828"
            />
            <path
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              fill="#fbc02d"
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
    </section>
  );
}
