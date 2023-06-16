import "./../css/style.css";
import Input2 from "./Input2";

const Input3 = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <>
          <tr key={task}>
            <Input2
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </tr>
        </>
      ))}
    </>
  );
};

export default Input3;
