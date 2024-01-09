/* eslint-disable react/prop-types */
export default function WorkoutDetails({ workout }) {
  return (
    <div className=" bg-slate-300 rounded-lg">
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
    </div>
  );
}
