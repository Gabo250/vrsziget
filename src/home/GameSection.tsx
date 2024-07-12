import GameCard from "./GameCard";
import CLink from "../component/CLink";

const gameImgInfo = [
    {
        url: "./images/games/assetto-corsa.jpg",
        alt: "Assetto Corsa Játék borító"
    },

    {
        url: "./images/games/assassin.jpg",
        alt: "Elven Assassin Játék borító"
    },

    {
        url: "./images/games/beat-saber.jpg",
        alt: "Beat Saber Játék borító"
    }
]

function GameSection() {
    return (
        <section className="relative flex flex-col justify-center overflow-hidden items-center gap-16 w-full h-[45rem] bg-gradient-to-b top-[22rem] from-[#110317] from-[25%] via-l-purple to-[75%] to-[#0F0417] overflow-x-hidden md:top-[28.98rem]">
            <h2 className="text-[2rem] font-black italic text-h-teal">Rengeteg Játék</h2>
            <div className="flex gap-20">
                {
                    gameImgInfo.map((game) => {
                        return <GameCard key={game.url} imgSrc={game.url} alt={game.alt} />
                    })
                }
            </div>

            <CLink variant="default" hover="animated" url="/jatekok" className="[text-shadow:0px_1px_4px_#ffffff]">Irány a Játékokhoz</CLink>            
        </section>
    );
}

export default GameSection;