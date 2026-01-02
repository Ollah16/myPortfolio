
const DropDownBtn = ({
    className = null,
    onClick,
    icon
}) => {
    return (
        <button
            className={className}
            onClick={onClick}>
            {icon}
        </button>
    )
}
export default DropDownBtn