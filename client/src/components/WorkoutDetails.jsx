import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

/* eslint-disable react/prop-types */
export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="flex my-4 mx-2 justify-between items-center bg-slate-300 rounded-lg">
      <div className="my-4 mx-2 ">
        <div className=" font-bold text-blue-700">{workout.exercise}</div>
        <p>
          <strong>Weight (lb): </strong>
          {workout.weight}
        </p>

        <p>
          <strong>Reps: </strong>
          {workout.reps}
        </p>
        <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      </div>
      <div>
        <button
          onClick={handleClick}
          className=" rounded-full py-1 px-1 mx-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
