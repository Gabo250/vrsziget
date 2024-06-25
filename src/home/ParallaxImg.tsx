import CLink from "../component/CLink";

function ParallaxImg() {
    return (
        <section className="absolute bg-island bg-cover bg-center bg-fixed  w-full h-[25rem] left-0 -bottom-[22rem] px-6 [clip-path:polygon(45%_9%,_65%_0,_100%_12%,_100%_100%,_68%_100%,_32%_100%,_0_100%,_0_8%,_15%_0)] md:h-[33rem] md:-bottom-[29rem]">
            <div className="relative flex justify-center items-center gap-60 text-white -skew-x-12 top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] xl:gap-40 xmd:gap-20 md:!gap-10 md:flex-col">
                <p className="w-[20rem] text-right xlsm:w-full px-3">Hozd el barátaidat, családodat, és éljétek át együtt a lenyűgöző VR kalandokat! Kiváló program születésnapokra, céges csapatépítők alkalmával, vagy csak egy szórakoztató délutánra.</p>
                <p className="w-[20rem] xlsm:w-full px-3">Ne hagyd ki ezt az egyedülálló lehetőséget! Foglalj időpontot most, és lépj be a VR Sziget varázslatos világába, ahol a valóság és a fantázia találkozik.</p>
            </div>

            <CLink variant="default" hover="animated" effect="glass" url="/jatekok" className="absolute bottom-10 left-[50%] -translate-x-[50%] md:bottom-8 [text-shadow:0px_1px_4px_#ffffff]">foglalás</CLink>
        </section>
    );
}

export default ParallaxImg;