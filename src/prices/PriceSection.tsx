import PriceCard from "./PriceCard";

const data = [
  {
    title: "Alap VR Játékok",
    price: [
      {
        uPrice: 6000,
        time: 60,
        desc: "1 játékos",
      },

      {
        oPrice: 12000,
        uPrice: 11000,
        time: 60,
        desc: "2 játékos",
      },

      {
        oPrice: 18000,
        uPrice: 15000,
        time: 60,
        desc: "3 játékos",
      },

      {
        oPrice: 24000,
        uPrice: 20000,
        time: 60,
        desc: "4 játékos",
      },
    ],
  },

  {
    title: "Szabadulószoba Játékok",
    price: [
      {
        uPrice: 6500,
        time: 60,
        desc: "1 játékos"
      },

      {
        oPrice: 26000,
        uPrice: 24000,
        time: 60,
        desc: "4 játékos"
      }
    ]
  },

  {
    title: "Kat VR Játékok",
    price: [
      {
        uPrice: 8000,
        time: 60,
        desc: "1 játékos"
      }      
    ]
  },

  {
    title: "Szimulátor Játékok",
    price: [
      {
        uPrice: 6000,
        time: 60,
        desc: "1 játékos"
      },

      {
        oPrice: 12000,
        uPrice: 10000,
        time: 60,
        desc: "2 játékos"
      }
    ]
  }
];

function PriceSection() {
  return (
    <section
      id="price"
      className="relative flex flex-col top-[22rem] w-full py-52"
    >
      {data.map((type, id) => {
        return (
          <div key={type.title} className={`flex flex-col items-center gap-28 px-12 py-20 ${ id % 2 === 0 ? "bg-gradient-to-t" : "bg-gradient-to-b" } from-cyan-800 via-20% via-d-purple to-75% to-black`}>
            <h2 className="relative text-white [text-shadow:0px_1px_2px_#ffffff] text-[1.5rem] text-left w-auto font-semibold before:absolute before:-bottom-2 before:w-[42%] before:blur-[2px] before:animate-pulse before:h-1 before:bg-h-teal">
              {type.title}
            </h2>

            <div className="flex justify-center items-center gap-5 lg:flex-col lg:gap-24">
              {type.price.map((uprice) => {
                return (
                  <PriceCard
                    key={uprice.uPrice}
                    price={Intl.NumberFormat("hu-HU").format(uprice.uPrice)}
                    oprice={uprice.oPrice ? Intl.NumberFormat("hu-HU").format(uprice.oPrice) : undefined}
                    time={uprice.time}
                    desc={uprice.desc}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PriceSection;
