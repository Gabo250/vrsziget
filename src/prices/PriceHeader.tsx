
function PriceHeader() {
    return (
        <header className="absolute px-5 w-full h-[30rem] z-10 bg-price-header bg-cover bg-center bg-fixed flex justify-center items-center [clip-path:polygon(50%_0%,_100%_0,_100%_79%,_50%_100%,_50%_100%,_0_80%,_0_0)] overflow-hidden">
            <p className=" text-h-teal text-[2rem]">Aktuális Áraink</p>            
        </header>
    );
}

export default PriceHeader;