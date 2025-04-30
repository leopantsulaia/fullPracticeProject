import { PlusIcon } from "@heroicons/react/24/solid";
import { useReducer } from "react";

function reducer(count, action) {
  if (action.type === "increment") {
    return count + 1;
  } else {
    throw new Error();
  }
}

// Create fully functional counter
// Display count and make it possible to increment count
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold text-gray-900">
        Current Count is... {count}
      </h3>
      <div className="mt-6">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />1
        </button>
      </div>
    </div>
  );
}
