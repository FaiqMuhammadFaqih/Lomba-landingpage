import { useState } from "react";
import "./../css/style.css";

const Input2 = ({ task, onChange, onDelete }) => {
  const [isEdit, setIsEdit] = useState(true);

  let taskContent;

  if (isEdit) {
    taskContent = (
      <div className="flex flex flex-wrap">
        <td>
          <input
            className="bg-transparent"
            value={task.text}
            onChange={(e) => {
              onChange({ ...task, text: e.target.value });
            }}
          />
        </td>
        <td>
          <button
            className="text-base rounded-md text-white bg-yellow-500 py-1 px-2"
            onClick={() => setIsEdit(false)}
          >
            Save
          </button>
        </td>
      </div>
    );
  } else {
    taskContent = (
      <div className="flex flex-wrap gap-10">
        <td>{task.text}</td>
        <td className="">
          {" "}
          <button
            className="text-base rounded-md text-white text-sm bg-yellow-500 py-1 px-3"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            Edit
          </button>
        </td>
      </div>
    );
  }

  return (
    <>
      <td className="border-collapse border border-slate-500 ">
        <input
          style={{ width: "23%" }}
          className="mt-1"
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({ ...task, done: e.target.checked });
          }}
        />
      </td>
      <td className="border-collapse border border-slate-500 ">
        {taskContent}
      </td>
      <td className="flex justify-center mt-1">
        <button
          className="bg-red-700 rounded-md py-1 px-3 text-sm text-white flex"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default Input2;
