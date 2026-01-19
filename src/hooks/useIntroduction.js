import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { handleEvent } from "../analytics/analytics";

export const FIRST_INTRO = [
    "> self.learnAboutMe();",
    "Press Enter to view profile summary."
].join("\n");

const TO_REPLACE = "Press Enter to view profile summary.";
const LOADED_DATA = "Loading profile . . .\n\n";

export const SECOND_INTRO = [
    "> self.profile();",
    '["Frontend Engineer focused on building fast, accessible, and scalable web applications."]',
    "",
    "> self.location();",
    '["London, UK (Remote / European time zones)"]',
    "",
    "> self.experience();",
    '["4+ years building production frontend applications for consumer-facing platforms"]',
    "",
    "> self.education();",
    '["MSc Engineering Management, De Montfort University", "B.Tech Civil Engineering"]',
    "",
    "> self.coreSkills();",
    '["TypeScript", "React", "Next.js", "Redux Toolkit", "TanStack Query", "HTML", "CSS", "Accessibility", "Performance Optimisation"]',
    "",
    "> self.tooling();",
    '["Playwright", "Jest", "GitHub Actions", "CI/CD", "Vercel", "Firebase", "Node.js"]',
    "",
    "> self.focusAreas();",
    '["User experience", "Frontend architecture", "Reusable component systems", "Cross-functional collaboration"]',
    "",
    "> self.contact();",
    '["GitHub", "Email"]',
].join("\n");


const TYPING_SPEED = 50;

export const useIntroduction = () => {
    const [header, setHeader] = useState("");
    const [body, setBody] = useState("");
    const headerIndex = useRef(0);
    const bodyIndex = useRef(0);
    const hasStartedBody = useRef(false);

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
            const nextChar = SECOND_INTRO[bodyIndex.current];

            if (nextChar === undefined) {
                clearInterval(interval);
                return;
            }

            setBody((prev) => prev + nextChar);
            bodyIndex.current += 1;
        }, TYPING_SPEED);
    }, []);


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
