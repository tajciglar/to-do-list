import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NewTask = ({ onClose, onSave }) => {
    // Add state for title, description, due date, and priority
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("")
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("Low");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct new task
        const newTask = {
            title,
            description,
            startDate,
            dueDate,
            priority,
            isFinished: false,
        };

        // Call onSave to pass the new task to the parent component
        onSave(newTask);

        // Clear form fields
        setTitle("");
        setDescription("");
        setStartDate("")
        setDueDate("");
        setPriority("Low");
        
        // Close the modal
        onClose();
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        required
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        required
                        className="w-full p-2 border rounded"
                        placeholder="Task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                 <div className="mb-4">
                    <label className="block mb-2">Start Date</label>
                    <input
                        required
                        type="date"
                        className="w-full p-2 border rounded"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Due Date</label>
                    <input
                        required
                        type="date"
                        className="w-full p-2 border rounded"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Priority</label>
                    <select
                        required
                        className="w-full p-2 border rounded"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewTask;
