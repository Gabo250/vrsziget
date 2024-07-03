import NavigateBot from "../component/NavigateBot";

function Header() {

    return (
        <header className="relative w-full h-screen bg-header bg-cover bg-center bg-fixed overflow-hidden">
            <div className="absolute w-[28rem] h-[28rem] bottom-0 right-[30%] z-[2] bg-vr-man bg-cover lg:w-[20rem] lg:h-[20rem] 2xl:right-[5%]" />
            <div className="absolute w-[38rem] h-[38rem] rounded-full blur-[100px] -bottom-20 right-[25%] z-[0] [background:radial-gradient(circle,rgba(54,13,106,0.7727065826330532)_35%,_rgba(17,134,150,0.433788515406162)_52%,_rgba(31,2,68,1)_73%)] lg:w-[28rem] lg:h-[28rem] 2xl:right-0" />
            <article className="relative flex justify-center w-[35rem] left-[5%] top-[50%] xlsm:w-[20rem] sm:!w-full sm:px-1 md:top-[40%] sm:!left-0">
                <h1 className="text-white text-left text-[2rem] sm:text-[1.3rem] sm:w-[90%] xlsm:text-[1.2rem] text-wrap">Lépj ki az unalmas hétköznapokból és probálj ki egy más világot.</h1>
            </article>

            <NavigateBot to="textsection" scrollInfo={{ behavior: "smooth", block: "start" }} />
        </header>
    );
}

export default Header;