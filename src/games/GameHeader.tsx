import NavigateBot from "../component/NavigateBot";

function GamesHeader() {
    return (
        <header className="w-full h-screen bg-games-header bg-cover bg-center bg-fixed overflow-hidden">
            <h1 className="absolute w-full text-white text-center text-[2rem] font-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">Nézz körül a folyamatosan bővülő játék kínálatunkból!</h1>

            <NavigateBot to="gametextsection" scrollInfo={{ behavior: "smooth", block: "start" }} className="bottom-[20%]" />
        </header>
    );
}

export default GamesHeader;