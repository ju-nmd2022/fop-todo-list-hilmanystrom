const workouts = [
  "Calves and Hamstrings",
  "Back and shoulders",
  "Core and Arms",
  "Legs and your Bum ;)",
];
const workoutList = document.getElementById("workout");
const finishedWorkoutsElement = document.getElementById("finished");

let finishedWorkouts = [];

for (let workout of workouts) {
  const workoutElement = document.createElement("div");
  workoutElement.innerText = workout;
  workoutElement.classList.add("categories");
  workoutElement.onclick = addToFinishedWorkouts;
  workoutList.appendChild(workoutElement);
}

function addToFinishedWorkouts() {
  finishedWorkouts.push(this.innerText);

  finishedWorkouts.push(workout);
  const doneElement = document.createElement("div");
  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  doneElement.appendChild(spanElement);
  finishedWorkoutsElement.appendChild(doneElement);

  const button = document.createElement("button");
  button.innerText = "Move Back to unfinished";
  button.onclick = moveBackElement;
  doneElement.appendChild(button);
}

function moveBackElement() {
  const element = this.parentNode;

  element.parentNode.removeChild(element);
}
