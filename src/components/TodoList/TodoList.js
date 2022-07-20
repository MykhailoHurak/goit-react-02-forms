import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
    return (
        <ul className='TodoList'>
            {todos.map(({ id, text, completed }) => (
                <li
                    key={id}
                    className='TodoList__task'>
                    <input
                        type="checkbox"
                        className="TodoList__checkbox"
                        checked={completed}
                        onChange={() => (onToggleCompleted(id))}
                    />
                    <p className='TodoList__text'>{text}</p>
                    <button
                        className='TodoList__buttonDelete'
                        onClick={() => (onDeleteTodo(id))}
                    >Delete</button>
                </li>
            ))}
        </ul>

//         <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         className={classNames('TodoList__item', {
//           'TodoList__item--completed': completed,
//         })}
//       >
//         <input
//           type="checkbox"
//           className="TodoList__checkbox"
//           checked={completed}
//           onChange={() => onToggleCompleted(id)}
//         />
//         <p className="TodoList__text">{text}</p>
//         <button
//           type="button"
//           className="TodoList__btn"
//           onClick={() => onDeleteTodo(id)}
//         >
//           Удалить
//         </button>
//       </li>
//     ))}
//   </ul>
    );
};

export default TodoList;