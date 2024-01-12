import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const {dispatch} = useWorkoutsContext()
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { exercise, weight, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setError(null);
      setExercise("");
      setWeight("");
      setReps("");
      setEmptyFields([])
      console.log("new workout added", json);
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  };
  return (
    <form className="grid my-4 mx-2" onSubmit={handleSubmit}>
      
      <div className=" font-body text-xl">Add new workout</div>

      <label>Exercise</label>
      <input
        type="text"
        onChange={(e) => setExercise(e.target.value)}
        value={exercise}
        className={emptyFields.includes("exercise") ? ' outline outline-red-600' : 'outline'}
      />

      <label>Weight</label>
      <input 
        type="number"
        onChange={(e) => setWeight(e.target.value)}
        value={weight}
        className={emptyFields.includes("weight") ? ' outline outline-red-600' : 'outline'}

      />

      <label>Reps</label>
      <input 
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? ' outline outline-red-600' : 'outline'}
      />

      <button>Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
}
