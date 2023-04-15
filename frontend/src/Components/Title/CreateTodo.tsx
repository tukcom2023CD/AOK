import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CreateTodo = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [title, setTitle] = useState("");
  const [project, setProejct] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeProject = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProejct(e.target.value);
  };

  const handleClickCreateBtn = () => {
    let todo = { idx: state.newIdx, title: title, project: project };
    dispatch({ type: "ADD_TODO", payload: { todo } });
    setEmpty();
  };

  const handleClickCancelBtn = () => {
    setEmpty();
  };

  const setEmpty = () => {
    setTitle("");
    setProejct("");
  };

  return (
    <div className="create-todo-container">
      <label className="lbl-title">Title</label>
      <TextField
        className="input-title"
        value={title}
        onChange={handleChangeTitle}
      ></TextField>
      <label className="lbl-project">Project</label>
      <TextField
        className="input-project"
        value={project}
        onChange={handleChangeProject}
      ></TextField>
      <Button className="btn-create" onClick={handleClickCreateBtn}>
        <EditIcon />
      </Button>
      <Button className="btn-cancel" onClick={handleClickCancelBtn}>
        <ClearIcon />
      </Button>
    </div>
  );
};

export default CreateTodo;
