import React from "react";

export default function Projects() {
  return (
    <section class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="text-3xl font-semibold pb-12" id="projects">
        {" "}
        Projects{" "}
      </div>

      <div class="container mx-auto space-y-12">
        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={process.env.PUBLIC_URL + '/ConciergeApp.jpg'}
            alt=""
            class="h-80 dark:bg-gray-500 aspect-video"
          ></img>
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 class="text-3xl font-bold">Concierge by SIA</h3>
            <p class="my-6 text-xl dark:text-gray-400">
              An end-to-end itinerary planner for Singapore Airlines customers.
              Powered by OpenAI GPT 3.5 to offer a unique booking and planning
              experience.
            </p>
          </div>
        </div>

        <div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={process.env.PUBLIC_URL + '/SPDC.jpg'}
            alt="SPDC"
            class="h-80 dark:bg-gray-500 aspect-video"
          ></img>
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 class="text-3xl font-bold">ShopeePay Near Me Redesign</h3>
            <p class="my-6 text-xl dark:text-gray-400">
              Improved discovery of ShopeePay Near Me within the Shopee
              Application. Offered added functionalities through map view and
              mall view to improve store discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
