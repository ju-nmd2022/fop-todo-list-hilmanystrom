const workouts = [
  "Calves and Hamstrings",
  "Back and shoulders",
  "Core and Arms",
  "Legs and your Bum ;)",
];
const workoutList = document.getElementById("workout");
const finishedWorkoutsElement = document.getElementById("finished");

let finishedWorkouts = localStorage.getItem("finishedWorkouts")
  ? localStorage.getItem("finishedWorkouts").split(",")
  : [];

for (let workout of workouts) {
  const workoutElement = document.createElement("div");
  workoutElement.innerText = workout;
  workoutElement.classList.add("categories");
  workoutElement.onclick = addToFinishedWorkouts;
  workoutList.appendChild(workoutElement);
}

for (let workout of finishedWorkouts) {
  createFinishedWorkoutElement(workout);
}

function addToFinishedWorkouts() {
  const workout = this.innerText;

  if (!finishedWorkouts.includes(workout)) {
    finishedWorkouts.push(workout);
    localStorage.setItem("finishedWorkouts", finishedWorkouts.join(","));

    createFinishedWorkoutElement(workout);
  }
}

function createFinishedWorkoutElement(workout) {
  const doneElement = document.createElement("div");
  const spanElement = document.createElement("span");
  spanElement.innerText = workout;
  doneElement.appendChild(spanElement);
  finishedWorkoutsElement.appendChild(doneElement);

  const button = document.createElement("button");
  button.innerText = "Move Back to Unfinished";
  button.onclick = moveBackElement;
  doneElement.appendChild(button);
}

function moveBackElement() {
  const element = this.parentNode;
  const workout = element.firstChild.innerText;

  const index = finishedWorkouts.indexOf(workout);
  if (index !== -1) {
    finishedWorkouts.splice(index, 1);
    localStorage.setItem("finishedWorkouts", finishedWorkouts.join(","));
  }

  element.parentNode.removeChild(element);
}
