type ButtonProps = {
    title: string;
    padding: string;
}

const Button = (props: ButtonProps) => {
    const {title, padding} = props;
    return (
        <button className={`bg-purple rounded-button text-white text-base font-bold shadow-button ${padding}`}>
            {title}
        </button>
    )
}

export default Button;