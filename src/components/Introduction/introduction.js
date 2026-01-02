import { RiParenthesesLine } from "react-icons/ri";
import IntroductionContent from "./introductionContent";
import MacNav from "../NavBar/macNav";

const NAV_LABEL = "self.Introduction"

const Introduction = () => {
    return (
        <section className={`md:flex hidden justify-center mb-9`}>
            <div className="w-3/4">
                <MacNav size={13} label={NAV_LABEL} icon={<RiParenthesesLine size={20} />} />
                <IntroductionContent />
            </div>
        </section >
    )
}

export default Introduction
