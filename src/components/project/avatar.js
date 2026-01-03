
const Avatar = ({ project }) => {

    const { image } = project

    return (
        <section className={`w-full z-30 relative`}>
            <img src={image} alt='...' loading='eager' className='rounded-none lg:rounded-b-xl relative' />
        </section>
    )
}

export default Avatar
