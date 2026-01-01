import { useIntroduction } from "../../hooks/useIntroduction";

const IntroductionContent = () => {
    const { introductionHeader, introductionBody } = useIntroduction();

    const splitIntroductionHeader = introductionHeader?.split('')
    const splitIntroductionBody = introductionBody?.split('')

    return (
        <section className='overflow-hidden whitespace-pre-wrap min-h-[30rem] transition-[min-height] ease-in-out duration-300 px-2 py-4 font-bold bg-[#52505066] text-[#c9c6c6]'>
            <div>
                {splitIntroductionHeader.map((char, index) => (
                    <span key={index} className={`${char === '>' && 'text-[#abff2e99] font-bold text-lg'}`}>
                        {char}
                    </span>
                ))}
                {splitIntroductionBody.map((char, index) => (
                    <span key={index} className={`${char === '>' && 'text-[#abff2e99] font-bold text-lg'}`}>
                        {char}
                    </span>
                ))}
            </div>
        </section>)
}
export default IntroductionContent