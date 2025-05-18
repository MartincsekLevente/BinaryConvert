import './PageContent.scss';
import { useEffect, useState } from "react";
import { useKeyPress } from "../../hooks/useKeyPress.ts";
import WiggleText from "../wiggleText/WiggleText.tsx";

export default function PageContent() {
    const [userText, setUserText] = useState<string[]>([""]);
    const [showWiggleText, setShowWiggleText] = useState<boolean>(true);
    const keyPress = useKeyPress();

    useEffect(() => {
        if (!keyPress.key) return;
        setUserText(prevState => ([...prevState, keyPress.key]));
        setShowWiggleText(false);
    }, [keyPress]);

    return (
        <div className="page-content-container">
            <div className="user-text-container">
                <div className="user-text">
                    {userText.join("")}
                </div>
            </div>
            {showWiggleText && <WiggleText text={"Type Something!"}></WiggleText>}
            <div className="binary-text-container">
                <div className="binary-text">
                    0001
                </div>
            </div>

        </div>
    );
}