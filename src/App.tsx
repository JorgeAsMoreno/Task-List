import React, { useState } from 'react';
import './App.css'

type FormElement = React.FormEvent<HTMLFormElement>

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleSubmit = (e: FormElement) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const addTask = (name: string):void => {
    const NewTask:ITask[] =  [...tasks, {name, done: false}]
    setTasks(NewTask)
  }

  const toggleTask = (index: number):void => {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  const removeTask = (index: number):void => {
    const newTasks: ITask[] = [...tasks]
    newTasks.splice(index,1)
    setTasks(newTasks)
  }

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
          <h1>Task List</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-5'>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <input
                className='form-control'
                type="text"
                onChange={e => setNewTask(e.target.value)}
                placeholder='Task name...'
                value={newTask}
                autoFocus
              />
              <button className='btn btn-success btn-block mt-2'>Send</button>
            </form>
          </div>
        </div>
        {
          tasks.map((t: ITask, index: number) => {
            return (
              <div key={index} className='card card-body mt-2'>
                <h2 style={{textDecoration: t.done ? 'line-through' : ''}}>{t.name}</h2>
                <div className='buttons-container'>
                  <button
                    className='btn btn-secondary'
                    onClick={() => toggleTask(index)}>
                    { t.done ? '✓' : '✕'}
                  </button>
                  <button className='btn btn-danger ml-5' onClick={() => removeTask(index)}>
                    🗑
                  </button>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default App;
