import Connection from "../home/Connection";
import PriceHeader from "./PriceHeader";
import PriceSection from "./PriceSection";

function Prices() {
    return (
        <>
            <PriceHeader />
            <PriceSection />
            <Connection className="!top-[22rem]" />
        </>
    );
}

export default Prices;