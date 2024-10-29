import moment from 'moment';
import PropTypes from 'prop-types';
moment.locale("en-gb");

const Homepage = ({ tasks, onMarkTaskAsFinished }) => {
    const formatDate = (inputDate) => {
        console.log(inputDate)
        const [year, month, day] = inputDate.split('-');
        return `${day}-${month}-${year}`;
    };
    

    return (
        <div id="content" className="grid grid-rows-[30px_1fr] p-4 ml-2">
            <div id="dateHolder" className="text-lg font-bold mb-4">
                {`TODAY ${moment().format('D/MM/YYYY')}`}
            </div>
            <div className="flex flex-col gap-6 ml-2">
                {tasks.length !== 0 ? (
                    tasks.map((task, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[30px_1fr] gap-2 bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md"
                        >
                            <div className="content-center justify-self-center">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500"
                                    onChange={() => onMarkTaskAsFinished(task)}
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">{task.title}</h3>
                                <p className="text-gray-700 mb-2">{task.description}</p>
                                <div className="text-sm text-gray-500 space-x-4">
                                    <span>Start: {formatDate(task.startDate)}</span>
                                    <span>Due: {formatDate(task.dueDate)}</span>
                                    <span className={`font-bold ${
                                        task.priority === 'High' ? 'text-red-500' : task.priority === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                                    }`}>
                                        Priority: {task.priority}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500">No tasks available</div>
                )}
            </div>
        </div>
    );
};

Homepage.propTypes = { 
    tasks: PropTypes.array.isRequired,
    onMarkTaskAsFinished: PropTypes.func.isRequired, 
};

export default Homepage;
