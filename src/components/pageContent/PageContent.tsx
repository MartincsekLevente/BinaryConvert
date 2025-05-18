import './PageContent.scss';
import { useEffect, useState } from "react";
import { useKeyPress } from "../../hooks/useKeyPress.ts";
import WiggleText from "../wiggleText/WiggleText.tsx";
import { BinaryConverterService } from "../../services/BinaryConverterService.ts";

export default function PageContent() {
    const [userText, setUserText] = useState<string>("");
    const [binaryText, setBinaryText] = useState<string>("");
    const [showWiggleText, setShowWiggleText] = useState<boolean>(true);
    const keyPress = useKeyPress();

    useEffect(() => {
        if (!keyPress.key) return;
        setShowWiggleText(false);

        setUserText(prevState => {
            const nextValue = (prevState + keyPress.key);
            setBinaryText(BinaryConverterService.convert(nextValue))
            return nextValue;
        });

    }, [keyPress]);

    return (
        <div className="page-content-container">
            <div className="user-text-container">
                <div className="user-text">
                    {userText}
                </div>
            </div>
            {showWiggleText && <WiggleText text={"Type Something!"}></WiggleText>}
            <div className="binary-text-container">
                <div className="binary-text">
                    {binaryText}
                </div>
            </div>

        </div>
    );
}