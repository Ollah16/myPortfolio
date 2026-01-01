import { RiParenthesesLine } from "react-icons/ri";
import MacNav from '../macNav';
import IntroductionContent from "./introductionContent";

const NAV_LABEL = "self.Introduction"

const Introduction = () => {
    return (
        <section className={`d-md-flex d-none justify-center mb-9`}>
            <div className="w-3/4">
                <MacNav size={13} label={NAV_LABEL} icon={<RiParenthesesLine size={20} />} />
                <IntroductionContent />
            </div>
        </section >
    )
}

export default Introduction
