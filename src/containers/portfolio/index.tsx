import img1 from "@/assets/images/portfolio 1.png";
import img2 from "@/assets/images/portfolio 2.png";
import img3 from "@/assets/images/portfolio 3.png";
import img4 from "@/assets/images/portfolio 4.png";
import img5 from "@/assets/images/portfolio 5.png";
import img6 from "@/assets/images/portfolio 6.png";
export default function Portfolio() {
  return (
    <section
      className="container py-14 flex flex-col items-center gap-10 scroll-m-20"
      id="portfolio"
    >
      <h2 className="text-3xl lg:text-5xl text-primary font-heading">Our Portfolio</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-20">
        {portfolio.map((p, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img src={p.img} alt="portfolio img" />
            <div className="rounded-xl bg-primary p-3 text-center text-white">
              {p.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
const portfolio = [
  { img: img1, text: "A food website company" },
  { img: img2, text: "A loan finance company" },
  { img: img3, text: "A Family health planning company" },
  { img: img4, text: "An e-commerce fashion company" },
  { img: img5, text: "A venture capital company" },
  { img: img6, text: "A food website company" },
];
