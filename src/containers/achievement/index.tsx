import projects from "@/assets/images/projects.svg";
import clients from "@/assets/images/clients.svg";
import experience from "@/assets/images/experience.svg";
export default function Achievement() {
  return (
    <section className="w-full bg-secondary" id="achievement">
      <div className="container py-6 md:py-14 flex  gap-4 lg:gap-20 items-center justify-center">
        {achievements.map((a, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-2"
          >
            <div className="w-[50px] h-[50px] md:w-[150px] md:h-[150px] rounded-full bg-primary flex justify-center items-center">
              <img
                src={a.icon}
                alt="icon"
                className="w-[25px] h-[25px] md:w-[75px] md:h-[75px]"
              />
            </div>
            <div className="flex flex-col items-center text-white">
              <h6 className="font-heading text-lg md:text-5xl">{a.value}</h6>
              <p className="text-sm md:text-lg text-center">{a.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const achievements = [
  { title: "Projects Completed", value: "200+", icon: projects },
  { title: "Clients Worldwide", value: "50+", icon: clients },
  { title: "Experience year", value: "10+", icon: experience },
];
