import './App.scss';
import WiggleText from "./components/wiggleText/WiggleText.tsx";

export default function App() {

    return (
        <>
            <div className="page-bg"></div>
            <WiggleText text={"Type Something!"}>
            </WiggleText>
        </>
    )
}