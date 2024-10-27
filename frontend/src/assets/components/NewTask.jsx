const NewTask = ({ onClose }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">New Task</h2>
            <form>
                <div className="mb-4">
                    <label className="block mb-2">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="Task title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        className="w-full p-2 border rounded"
                        placeholder="Task description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Due Date</label>
                    <input
                        type="date"
                        className="w-full p-2 border rounded"
                    />
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
