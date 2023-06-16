import { useState } from "react";
import "./../css/style.css";

const Input = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-4 justify-center">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambahkan Kegiatan Anda"
        className="py-5 px-4 w-96 "
      ></input>
      <button
        className="py-2 px-4 rounded-md py-1 px-2"
        style={{ backgroundColor: "#0D6EFD" }}
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Tambah Kegiatan
      </button>
    </div>
  );
};

export default Input;
