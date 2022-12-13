import style from "./style.module.scss"
interface IPropsTodo {
    todo: {
        id: number;
        checked: boolean;
        text: string;
    }
    onDelete: (id: number) => void;
    onCheck: (id: number, checked: boolean) => void;
}

const TodoComponent = (props: IPropsTodo) => {

    const handleDelete = () => {
        props.onDelete(props.todo.id)
    }

    return (
        <div className={style.todo}>
            <div className={style.todo__checkbox}>
                <input type="checkbox" checked={props.todo.checked} onChange={
                    (e) => props.onCheck(props.todo.id, !props.todo.checked)
                } />
            </div>
            <div className={style.todo__text}>
                {props.todo.text}
            </div>
            <div className={style.todo__delete}>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )

};

export default TodoComponent;