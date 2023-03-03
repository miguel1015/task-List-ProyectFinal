import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <h1 className="h1home">Welcome a my todo app</h1>
        <div className="pic-ctn">
          <img
            src="https://i.redd.it/y14xp8glyab31.jpg"
            alt=""
            className="pic"
          />
          <img
            src="https://unpaper.com/wp-content/uploads/2019/06/22.-How-to-properly-utilise-the-task-list-to-complete-the-list-of-tasks.png"
            alt=""
            className="pic"
          />
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/task-list-2080780-1753768.png"
            alt=""
            className="pic"
          />
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/1IgVe0tV9yDjWtp68dAZJq/36ca564d33306d407dabe39c33322dd9/TaskManagement-hero.png"
            alt=""
            className="pic"
          />
          <img
            src="https://www.investintech.com/resources/blog/wp-content/uploads/2018/02/To-Do-List.png"
            alt=""
            className="pic"
          />
        </div>
        <div className="parrafo">
          <p className="parrafhome">
            What is a ToDo List? What is a ToDo List? The definition is a simple
            one. It’s a list of tasks you need to complete or things that you
            want to do. Most typically, they’re organised in order of priority.
            Traditionally, they’re written on a piece of paper or post it notes
            and act as a memory aid. As technology has evolved we have been able
            to create a todo lists with excel spreadsheets, word documents,
            email lists, todo list apps, Microsoft to do and google to do list
            to name a few. You can use a to do list in your home and personal
            life, or in the workplace.</p>
            <hr></hr>
            <p>
            The Benefits of Using a To Do List One of the most important reasons
            you should use a to do list is that it will help you stay organised.
            When you write all your tasks in a list, they seem more manageable.
            When you’ve got a clear outline of the tasks you’ve got to do and
            those you’ve completed, it helps you stay focused. While freeing up
            space in your mind for other more creative tasks.</p>
            <hr></hr>
            <p>
            What is a ToDo List in business and why is it important? It seems
            such a simple solution by putting pen to paper and taking time out
            of your day to create a to do list, a plan for your day helps define
            your challenges and goals. Preventing time from being wasted trying
            to identify what is the next most important task to tackle next and
            even more important makes sure you don't forget to do something
            important.</p>
            <hr></hr>
            <p>
            What Makes a Great To Do List App? To do lists come in all shapes
            and sizes. It always used to be something that you would write using
            pen and paper, but thanks to technology there’s an app that can come
            to the rescue. What makes a good to do list app? Tasks should be
            fast to add and organise There should be a variety of ways to
            organise the tasks Ability to plan your workflow Setting priorities
            Reminders for any self-imposed deadlines. Allocation of tasks if
            using it for task management with a team. Team to-do list allows you
            to assign to the best person for the job. Able to synch between
            different platforms
          </p>
          <img
            src="https://www.linuxadictos.com/wp-content/uploads/to-do-list.jpg.webp"
            alt=""
            className="imghome"
          />
        </div>
      </div>
      
        <input type="checkbox" id="toggle" className="toggle--checkbox" />
        <label htmlFor="toggle" className="toggle--label2">
          <span className="toggle--label-background"></span>
        </label>
        <div className="background"></div>
      
    </div>
  );
}
