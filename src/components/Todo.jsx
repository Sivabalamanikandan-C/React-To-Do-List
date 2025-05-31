import { useState } from "react";

const Todo = () => {
    const [addlist, setaddlist] = useState("");
    const [list, setlist] = useState([{ id: 1, activity: "Wakeup" }, { id: 2, activity: "Walk" }]);

    const handleAddlist = (event) => {
        setaddlist(event.target.value);
    }

    const handleResult = () => {
        setlist([...list, { id: list.length+1, activity: addlist }]);
        setaddlist("");
    }

    const handleDelete = (removeid) => {
        const final = list.filter((items) => {
            if (items.id == removeid) {
                return false;
            }
            else {
                return true;
            }
        })

        setlist(final);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">To-Do List</h1>
                <div className="flex gap-2 mb-6">
                    <input type="text" value={addlist} onChange={handleAddlist} className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Add a new task..." />
                    <button onClick={handleResult} className="px-4 py-2 bg-blue-700 text-white rounded">Add</button>
                </div>

                <ul className="list-disc pl-6 space-y-3">
                    {
                        list.map((items) => {
                            return (
                                <li key={items.id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md"><span className="text-gray-800">{items.activity}</span>
                                    <button onClick={() => { handleDelete(items.id) }} className="ml-3 px-3 py-1 bg-red-700 text-white rounded">Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );

}

export default Todo;
