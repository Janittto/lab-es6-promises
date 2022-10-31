// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
const mashPotatoesSteps = document.querySelector("#mashedPotatoes");
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    mashPotatoesSteps.innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        mashPotatoesSteps.innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            mashPotatoesSteps.innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                mashPotatoesSteps.innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    mashPotatoesSteps.innerHTML += `<li>${step5}</li>`;
                    mashPotatoesSteps.innerHTML += `<li>Mashed Potatoes are ready!</li>`;
                    document
                      .getElementById("mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.getElementById("steakImg").removeAttribute("hidden");
  })
  .catch(() => console.error("Something went wrong"));

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    for (let i = 0; i <= broccoli.length - 1; i++) {
      const broccoliRecipe = await obtainInstruction("broccoli", i);
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${broccoliRecipe}</li>`;
    }
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    document.getElementById("broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.error(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all

const makeSprouts = brusselsSprouts.map((step, i) => {
  console.log(obtainInstruction("brusselsSprouts", i));
  return obtainInstruction("brusselsSprouts", i);
});

Promise.all(makeSprouts)
  .then((response) => {
    response.forEach((step) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step}</li>`;
      document.getElementById("brusselsSproutsImg").removeAttribute("hidden");
    });
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
