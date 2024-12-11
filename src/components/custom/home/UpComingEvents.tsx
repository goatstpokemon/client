import { getCurrentMonth } from "@/lib/utils";
import { motion } from "framer-motion";

const UpComingEvents = () => {
  const currentMonth = getCurrentMonth();
  const events = [
    {
      title: "Meeting with Team",
      day: 5,
    },
    {
      title: "Project Deadline",
      day: 12,
    },
    {
      title: "Client Presentation",
      day: 18,
    },
    {
      title: "Company Workshop",
      day: 24,
    },
  ];
  return (
    <div className="flex flex-col items-start">
      <h2 className="mb-2 text-6xl font-bold text-syntax">Agenda</h2>
      <h3 className="mb-10 text-5xl font-semibold">{currentMonth}</h3>
      <div className="flex flex-col gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative flex w-[70vw] max-w-lg flex-row gap-10 rounded-lg py-8 shadow-md md:w-[30vw] md:px-0 lg:w-[30vw] xl:w-[20vw]"
          >
            <motion.div
              initial={{ rotate: "-12deg" }}
              whileHover={{ rotate: "5deg" }}
              className={`${
                index % 2
                  ? "bg-syntax hover:border-2 hover:bg-none hover:text-syntax"
                  : "bg-gray-800 hover:border-2 hover:bg-none hover:text-gray-800"
              } absolute -left-7 -top-7 flex h-12 w-12 items-center justify-center rounded-xl`}
            >
              <p className="font-bold text-white">{event.day}</p>
            </motion.div>
            <p className="pl-7 text-2xl font-bold text-slate-900">
              {event.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default UpComingEvents;
