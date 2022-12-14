import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Input from '../components/Input/Input'
import styles from '../styles/Home.module.scss'

import TodoComponent from "../components/Todo"

interface Todo {
  id: number;
  text: string;
  checked: boolean;
}
export default function Home() {

  const [value, setValue] = useState<string>('');

  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id != id);
    setTodos(newTodos);
  }

  const checkTodo = (id: number, checked: boolean) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id == id);

    newTodos[todoIndex].checked = checked

    // Object.assign(newTodos[todoIndex], { ...todo, checked });
    setTodos(newTodos)
  }

  const onClick = () => {
    const newTodo: Todo = {
      id: todos?.length || 0,
      text: value,
      checked: false
    }

    setTodos([...todos, newTodo]);
  };

  const checkedTodos = todos.filter(todo => todo.checked)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h2 className={styles.title}> todo </h2>
      </header>
      <main className={styles.main}>
        <Input
          value={value}
          setValue={setValue}
          onAction={onClick}
        />

        <div className={styles.todo__list}>
          <div className={styles.todo__list__header}>
            <div className={styles.todo__list__header__tc}>
              <h2 className={styles.b}>Tarefas criadas</h2>
              <span>{todos.length}</span>
            </div>
            <div className={styles.todo__list__header__tc}>
              <h2 className={styles.p}>Concluidas</h2>
              <span>{checkedTodos.length}</span>
            </div>
          </div>

          <div className={styles.todo__list__body}>
            {todos.length > 0 ?
              todos.map(todo =>
                <TodoComponent
                  key={todo.id}
                  todo={todo}
                  onDelete={removeTodo}
                  onCheck={checkTodo}
                />) :
              <>
                <img />
                <div>
                  <h3><strong>Voc?? ainda n??o tem tarefas cadastradas</strong></h3>
                  <h3>Crie tarefas e organize seus itens a fazer</h3>
                </div>
              </>
            }
          </div>
        </div>
      </main>
    </div>
  )
}


// [x] - Adicionar uma nova tarefa
// [] - Marcar e desmarcar uma tarefa como conclu??da
// [x] - Remover uma tarefa da listagem
// [] - Mostrar o progresso de conclus??o das tarefas