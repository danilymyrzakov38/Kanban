import React, { useState } from "react";
import './App.css';
import СompNav from './components/nav';
import Footer from './components/footer';
import Backlog from './components/task-components/backlog';
import Finished from './components/task-components/finished';
import Ready from './components/task-components/ready';
import InProgress from './components/task-components/inProgress';
import AboutTheTask from './components/task-components/aboutTheTask';

function App() {
    const [IfRender, setIfRender] = useState(false);
    const [taskId, setTaskId] = useState();

    const handleTaskClick = (taskId) => {
        setTaskId(taskId);
        setIfRender(true);
    };

    const handleBacklogExit = () => {
        setIfRender(false);
        
        const currentUrl = new URL(window.location.href);
        currentUrl.pathname = '';
        window.history.replaceState({}, document.title, currentUrl.toString());
    };

    return (
        <>
            <СompNav />
            {IfRender ? (
                <main className="main__container">
                    <AboutTheTask prop={taskId} onExit={handleBacklogExit} />
                </main>
            ) : (
                <React.Fragment>
                    <main className="main__container">
                        <section className="content task__component">
                            <Backlog onTaskClick={handleTaskClick} />
                            <Finished onTaskClick={handleTaskClick} setIfRender={setIfRender}/>
                            <Ready onTaskClick={handleTaskClick} setIfRender={setIfRender}/>
                            <InProgress onTaskClick={handleTaskClick} setIfRender={setIfRender}/>
                        </section>
                    </main>
                </React.Fragment>
            )}
            <Footer />
        </>
    );
}

export default App;

