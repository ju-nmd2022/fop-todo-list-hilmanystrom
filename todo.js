const workouts = ["ass", "back", "core", "ur mom"];
const workoutList = document.getElementById("workout");
const finishedWorkoutsElement = document.getElementById("finished");

let finishedWorkouts = [];

for (let workout of workouts) {
  const workoutElement = document.createElement("div");
  workoutElement.innerText = workouts;
  workoutElement.classList.add("categories");
  workoutElement.onclick = addToFinishedWorkouts;
  workoutList.appendChild(workoutElement);
}

function addToFinishedWorkouts() {
  finishedWorkouts.push(this.innerText);

  const doneElement = document.createElement("div");
  const spanElement = document.createElement("span");
  spanElement.innerText = this.innerText;
  doneElement.appendChild(spanElement);
  // doneElement.innerText = this.innerText;
  finishedWorkoutsElement.appendChild(doneElement);

  const button = document.createElement("button");
  button.innerText = "Move Back";
  button.onclick = moveBackElement;
  doneElement.appendChild(button);
}

function moveBackElement() {
  const element = this.parentNode;
  console.log(element);

  element.parentNode.removeChild(element);
}


localStorage.