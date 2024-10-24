// src/App.jsx
import Homepage from './Homepage';
import Sidebar from './Sidebar';

const App = () => {
    const handleShowAllTasks = () => {
        // Logic to show all tasks
    };

    const handleShowTodaysTasks = () => {
        // Logic to show today's tasks
    };

    const handleShowInput = () => {
        // Logic to show input for new task
    };

    return (
        <div id="container">
            <Sidebar
                onShowAllTasks={handleShowAllTasks}
                onShowTodaysTasks={handleShowTodaysTasks}
                onShowInput={handleShowInput}
            />
            <div id="topBar">
                <input type="text" name="searchbar" id="searchbar" />
            </div>
            <Homepage />
        </div>
    );
};

export default App;
