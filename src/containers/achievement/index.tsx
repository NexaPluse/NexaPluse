import projects from "@/assets/images/projects.svg";
import clients from "@/assets/images/clients.svg";
import experience from "@/assets/images/experience.svg";
export default function Achievement() {
  return (
    <section className="w-full bg-secondary" id="achievement">
      <div className="container py-14 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
        {achievements.map((a, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-[150px] h-[150px] rounded-full bg-primary flex justify-center items-center">
              <img src={a.icon} alt="icon" className="w-[75px] h-[75px]" />
            </div>
            <div className="flex flex-col items-center text-white">
              <h6 className="font-heading text-5xl">{a.value}</h6>
              <p className="text-lg text-center">{a.title}</p>
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
