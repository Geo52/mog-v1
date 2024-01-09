import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

/* eslint-disable react/prop-types */
export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  };
  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-lg">
      <div className=" my-4 mx-2">
        <div className=" font-bold text-blue-700">{workout.exercise}</div>
        <p>
          <strong>Weight (lb): </strong>
          {workout.weight}
        </p>

        <p>
          <strong>Reps:</strong>
          {workout.reps}
        </p>
        <p>{workout.createdAt}</p>
      </div>
      <div>
        <button
          onClick={handleClick}
          className=" bg-red-700 rounded-full py-1 px-1 mx-2"
        >
          delete
        </button>
      </div>
    </div>
  );
}
