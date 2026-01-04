import { useEffect, useMemo, useState } from "react";
import { trackEnter } from "../analytics/analytics";


const FIRST_INTRO = `> self.learnAboutMe( );\nPress Enter to see what I am about.`;
const TO_REPLACE = "Press Enter to see what I am about.";
const LOADED_DATA = `Loaded data . . .`;
const SECOND_INTRO = `
        \n> self.currentLocation( );\n["Dallas, Texas"]
        \n> self.education( );\n["MSc Engineering Management, 2022-2023", "B.Tech Agricultural Engineering, 2012-2020"]
        \n> self.techStack( );\n["HTML", "CSS", "Javascript", "Typescript", "React.js", "Next.js", "Redux", "Jotai", "Tailwind", "Playwright", "Jest", "Node.js", "Git", "GitHub", "Vercel", "Firebase", "AWS", ...rest]
        \n> self.contactMe( );\n["Github","Email"]`

export const useIntroduction = () => {

    const [introductionHeader, setIntroductionHeader] = useState('')
    const [introductionBody, setIntroductionBody] = useState('')

    useEffect(() => {
        let timeOut, start = 0

        const handleIntroduction = () => {
            if (start < FIRST_INTRO.length) {
                setIntroductionHeader(prev => prev + FIRST_INTRO[start])
                timeOut = setTimeout(() => {
                    start++
                    handleIntroduction()
                }, 50)
            }
        }
        handleIntroduction()
        return () => clearTimeout(timeOut)
    }, [])

    useEffect(() => {
        let timeout;
        const canEnter = introductionHeader.endsWith("about.");
        const handleIntroduction = (event) => {
            if (event?.key === "Enter" && canEnter) {
                trackEnter()
                setIntroductionHeader((prev) => prev.replace(TO_REPLACE, LOADED_DATA));
                for (let i = 0; i < SECOND_INTRO.length; i++) {
                    timeout = setTimeout(() => {
                        setIntroductionBody((prev) => prev += SECOND_INTRO[i])
                    }, i * 50)
                }
                document.removeEventListener('keypress', handleIntroduction)
            }
        }

        document.addEventListener('keypress', handleIntroduction);

        return () => {
            document.removeEventListener('keypress', handleIntroduction);
            clearTimeout(timeout)
        }

    }, [introductionHeader]);

    return useMemo(() => ({ introductionBody, setIntroductionHeader, introductionHeader }), [introductionBody, setIntroductionHeader, introductionHeader]);

}
