const TodaysTasks = () => {
    const date = new Date();
    // Get today's date in YYYY-MM-DD format
    const todaysDate = date.toISOString().split('T')[0]; // "2024-10-27" for example

    const initialTasks = [
        {
            title: "Buy Groceries",
            description: "Purchase milk, eggs, bread, and fruits.",
            startDate: "2024-10-23",
            dueDate: "2024-10-24",
            priority: "High"
        },
        {
            title: "Complete Project Report",
            description: "Finish the final report for the project and send it to the manager.",
            startDate: "2024-10-22",
            dueDate: "2024-10-28",
            priority: "Medium"
        },
        {
            title: "Schedule Doctor Appointment",
            description: "Call the clinic and schedule a yearly check-up.",
            startDate: "2024-10-24",
            dueDate: "2024-10-25",
            priority: "Low"
        },
        {
            title: "Plan Weekend Trip",
            description: "Research places to visit and make travel arrangements.",
            startDate: "2024-10-20",
            dueDate: "2024-10-26",
            priority: "Medium"
        },
        {
            title: "Update Resume",
            description: "Revise resume with the latest job experiences and skills.",
            startDate: "2024-10-27",
            dueDate: "2024-10-28",
            priority: "High"
        }
    ];

    // Filter tasks for today's date based on the startDate or dueDate
    const tasks = initialTasks.filter(task => 
        task.startDate === todaysDate || task.dueDate === todaysDate
    );

    // Logging tasks to check the output
    console.log(tasks);

    // TODO: get tasks for today's date from the DB

    return (
        <div id="content" className="grid grid-rows-[30px_1fr] p-4 ml-2">
            <h2 className="text-lg font-bold">Today&apos;s Tasks</h2>
            <div className="mt-4">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <div key={index} className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold">{task.title}</h3>
                            <p>{task.description}</p>
                            <p className="text-sm text-gray-600">Start Date: {task.startDate}</p>
                            <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
                            <p className={`font-bold ${
                                    task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                }`}>Priority: {task.priority}</p>
                        </div>
                    ))
                ) : (
                    <p>No tasks for today!</p>
                )}
            </div>
        </div>
    );
};

export default TodaysTasks;
