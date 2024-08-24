type ButtonProps = {
    title: string;
    padding: string;
    onClick?: () => void | Promise<void>;
}

const Button = (props: ButtonProps) => {
    const {title, padding, onClick} = props;
    return (
        <button className={`bg-purple rounded-button text-white text-base font-bold shadow-button ${padding}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;