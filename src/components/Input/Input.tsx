import style from "./style.module.scss"

interface IPropsInput {
    value: string;
    setValue: (value: string) => void;
    onAction: () => void;
}

const Input = ({ value, setValue, onAction }: IPropsInput) => {
    return (
        <div className={style.input}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} 
            placeholder={"Adcione uma tarefa"}/>

            < button onClick={onAction}> Criar </button>
        </div>
    )
};

export default Input;