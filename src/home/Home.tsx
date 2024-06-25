import Connection from "./Connection";
import GameSection from "./GameSection";
import Header from "./Header";
import MarketingSection from "./MarketingSection";
import TextSection from "./TextSection";

function Home() {
    return (
        <>            
            <Header />
            <TextSection />
            <MarketingSection />
            <GameSection />
            <Connection />
        </>
    );
}

export default Home;