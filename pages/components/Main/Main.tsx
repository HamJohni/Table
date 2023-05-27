import Header from "@/pages/components/Header/Header";
import Copy from "@/pages/components/Copy/Copy";
import Right from "@/pages/components/Right/Right";

const Main = () => {
    return(
        <>
            <Header/>
            <main>
                <div className="container">
                    <div className="content">
                        <Copy/>
                        <Right/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main