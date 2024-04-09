import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

import banner from "../../assets/images/banners/contact.png";
import doctor from "../../assets/images/doctor-cartoon.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("http://localhost:3000/submitcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // const json = await response.json();
      // console.log(json);
      window.alert("Your message has been sent successfully");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <img src={banner} className="w-full " />
      </div>
      <div className="grid md:grid-cols-5 max-w-7xl m-auto md:my-24 my-6 px-4">
        <div className="col-span-2">
          <img src={doctor} className="md:h-[500px] hidden md:block" />
        </div>
        <div className="col-span-3">
          <h3 className="text-xl font-semibold text-theme mb-8 highlight-border highlight-border-left">
            Contact Us
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,{" "}
          </p>
          <div>
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="mx-auto mt-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <div>
                    <input
                      placeholder="First Name"
                      type="text"
                      name="firstname"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <input
                    placeholder="Phone Number"
                    type="tel"
                    name="phonenumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0  py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
                <div>
                  <div>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    {/* <label for="speciality" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                    <select
                      id="speciality"
                      class="ring-1 border-0 ring-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400  focus:ring-indigo-600"
                    >
                      <option selected>Choose a Speciality</option>
                      <option value="endo">Endocrinology</option>
                      <option value="general-surgery">General Surgery</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <select
                      id="doctor"
                      class="border-0 ring-gray-300 ring-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 placeholder:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400   focus:ring-indigo-600"
                    >
                      <option selected>Choose a Doctor</option>
                      <option value="endo">Manasa</option>
                      <option value="general-surgery">Uday</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      defaultValue={""}
                      placeholder="message"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end">
                <button className="rounded-full btn-theme block px-20 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
