import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { handleEvent } from "../api/analytics";
import { useUserData } from "./useUserData";

export const FIRST_INTRO = [
    "> self.learnAboutMe();",
    "Press Enter to view profile summary."
].join("\n");

const TO_REPLACE = "Press Enter to view profile summary.";
const LOADED_DATA = "Loading profile . . .\n\n";

const TYPING_SPEED = 50;

export const useIntroduction = () => {
    const [header, setHeader] = useState("");
    const [body, setBody] = useState("");
    const headerIndex = useRef(0);
    const bodyIndex = useRef(0);
    const hasStartedBody = useRef(false);
    const { introduction: secondIntroduction } = useUserData()

    /* ---------------- Header typing effect ---------------- */

    useEffect(() => {
        const interval = setInterval(() => {
            const nextChar = FIRST_INTRO[headerIndex.current];

            if (nextChar === undefined) {
                clearInterval(interval);
                return;
            }

            setHeader((prev) => prev + nextChar);
            headerIndex.current += 1;
        }, TYPING_SPEED);

        return () => clearInterval(interval);
    }, []);

    const canProceed = header.endsWith("summary.");

    /* ---------------- Body typing effect ---------------- */

    const startBodyTyping = useCallback(() => {
        if (hasStartedBody.current) return;

        hasStartedBody.current = true;
        handleEvent("Enter");

        setHeader((prev) => prev.replace(TO_REPLACE, LOADED_DATA));

        const interval = setInterval(() => {
            const nextChar = secondIntroduction.join("/n")[bodyIndex.current];

            if (nextChar === undefined) {
                clearInterval(interval);
                return;
            }

            setBody((prev) => prev + nextChar);
            bodyIndex.current += 1;
        }, TYPING_SPEED);
    }, [secondIntroduction]);


    /* ---------------- Keyboard listener ---------------- */

    useEffect(() => {
        if (!canProceed) return;

        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                startBodyTyping();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [canProceed, startBodyTyping]);

    /* ---------------- Memoised API ---------------- */

    return useMemo(
        () => ({
            introductionHeader: header,
            introductionBody: body,
        }),
        [header, body]
    );
};
