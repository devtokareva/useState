import { useState } from "react";

type Task = {
  id: number;
  name: string;
};

export default function TodoList(): JSX.Element {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // console.log("Input value: ", event.target.value);
    setTask(event.target.value);
  };

  const addTask = (): void => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: task }]);
      setTask("");
    }
  };

  const showTasks = (): void => {
    console.log(tasks);
  };

  console.log("RENDER TODO");

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={task}
        onChange={inputChangeHandler}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={showTasks}>Show Tasks in Console</button>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
