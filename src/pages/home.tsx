import React, { useState } from "react";
import Container from "@/components/Container";
import ArrowDown from "./../images/arrow-down.png";
import Edit from "./../images/edit.png";
import Delete from "./../images/delete.png";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [eventName, setEventName] = useState("");
  const [services, setServices] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const [items, setItems] = useState([
    {
      id: uuidv4(),
      eventName: "Home",
      services: "General Cleaning",
      date: "04/15/2023",
      status: false,
    },
    {
      id: uuidv4(),
      eventName: "Laundry",
      services: "Wash Clothes",
      date: "03/03/2023",
      status: false,
    },
    {
      id: uuidv4(),
      eventName: "Warehouse",
      services: "Maintenance",
      date: "06/03/2023",
      status: false,
    },
  ]);

  const handleAdd = () => {
    if (eventName && services) {
      setItems([
        {
          id: uuidv4(),
          eventName: eventName,
          services: services,
          date: startDate,
          status: false,
        },
        ...items,
      ]);
      setEventName("");
    }
  };

  return (
    <>
      <Container>
        <div className="border border-gray-300 rounded p-4 grid grid-cols-12 gap-2">
          <p className="font-bold text-secondary text-2xl col-span-12 uppercase">
            Create
          </p>
          <div className="px-3 col-span-12 md:col-span-6">
            <label className="block tracking-wide text-secondary text-xs font-bold mb-2">
              Event Name
            </label>
            <input
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="px-3 col-span-12 md:col-span-6">
            <label className="block tracking-wide text-secondary text-xs font-bold mb-2">
              Event Date
            </label>
            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> */}
            <DatePicker
              selected={startDate}
              onChange={(startDate) => setStartDate(startDate)}
            />
          </div>
          <div className="px-3 col-span-12 md:col-span-6">
            <label className="block tracking-wide text-secondary text-xs font-bold mb-2">
              Services
            </label>
            <div className="inline-block relative w-full">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={services}
                onChange={(e) => setServices(e.target.value)}
              >
                <option hidden className="text-gray-300">
                  please select
                </option>
                <option value="General Cleaning">General Cleaning</option>
                <option value="Wash Clothes">Wash Clothes</option>
                <option value="Maintenance">Maintenance</option>
                <option value="other">Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <Image src={ArrowDown} alt="down" width={16} height={16} />
              </div>
            </div>
          </div>
          <div className="py-2 px-3 md:px-0 flex justify-end col-span-12">
            <button
              className="w-full md:w-fit bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-primary rounded"
              type="button"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-12">
          <div className="pb-2 md:pb-6 flex items-center col-span-12 md:col-span-6">
            <p className="font-bold text-secondary text-2xl uppercase">
              Task details
            </p>
          </div>
          <div className="py-2 pb-6 flex justify-end col-span-12 md:col-span-6">
            <button className="w-full md:w-fit bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-primary rounded">
              Create
            </button>
          </div>
          <div className="relative overflow-x-auto col-span-12">
            <table className="w-full text-sm text-left text-secondary">
              <thead className="text-xs text-white uppercase  dark:bg-primary">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    event name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    event date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    sevices
                  </th>
                  <th scope="col" className="px-6 py-3">
                    action
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr className=" border-b bg-primaryLight dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-secondary whitespace-nowrap"
                    >
                      {item.eventName}
                    </th>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.services}</td>
                    <td className="px-6 py-4">
                      <button className="px-2" type="button">
                        <Image src={Edit} alt="edit" width={16} height={16} />
                      </button>
                      <button className="px-2" type="button">
                        <Image
                          src={Delete}
                          alt="Delete"
                          width={16}
                          height={16}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}
