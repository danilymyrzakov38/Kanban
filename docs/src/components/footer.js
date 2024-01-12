import React, { useState, useEffect } from "react";
import '../index.css';

import getNumberOfTasks from './localStorage/getNumberOfTasks';

function Footer() {
    const [backlogNumberOfTasks, setBacklogNumberOfTasks] = useState(0);
    const [finishedNumberOfTasks, setFinishedNumberOfTasks] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const backlogCount = await getNumberOfTasks('backlog');
            const finishedCount = await getNumberOfTasks('finished');

            setBacklogNumberOfTasks(backlogCount);
            setFinishedNumberOfTasks(finishedCount);
        };

        fetchData();
        const intervalId = setInterval(() => {
            fetchData();
        }, 1000); // Интервал в миллисекундах (например, каждые 5 секунд)

        // Очистите интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer>
            <div className="content footer">
                <div className="footer__hotkeys">
                    <h5 className="footer__hotkeys--n">Active tasks: &lt;{backlogNumberOfTasks}&gt;</h5>
                    <h5>Finished tasks: &lt;{finishedNumberOfTasks}&gt;</h5>
                </div>
                <div>
                    <h5>Kanban board by &lt;NAME&gt;, &lt;YEAR&gt;</h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
