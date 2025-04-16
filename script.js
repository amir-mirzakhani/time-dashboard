const data = {
  daily: [
    { current: 5, previous: 7 },
    { current: 2, previous: 2 },
    { current: 1, previous: 1 },
    { current: 0, previous: 1 },
    { current: 1, previous: 3 },
    { current: 3, previous: 5 },
  ],
  weekly: [
    { current: 32, previous: 36 },
    { current: 10, previous: 8 },
    { current: 4, previous: 7 },
    { current: 4, previous: 5 },
    { current: 5, previous: 10 },
    { current: 2, previous: 2 },
  ],
  monthly: [
    { current: 103, previous: 128 },
    { current: 23, previous: 29 },
    { current: 13, previous: 19 },
    { current: 11, previous: 18 },
    { current: 21, previous: 23 },
    { current: 7, previous: 11 },
  ],
};

const buttons = document.querySelectorAll(".daylist li");
const currentEls = document.querySelectorAll(".current-hrs");
const previousEls = document.querySelectorAll(".previous-hrs");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("activebtn"));
    btn.classList.add("activebtn");
    // the boxes changes
    const timeFrame = btn.textContent.toLowerCase();
    data[timeFrame].forEach((item, index) => {
      currentEls[index].textContent = `${item.current}hrs`;
      previousEls[index].textContent = `Last ${
        timeFrame === "daily"
          ? "Day"
          : timeFrame === "weekly"
          ? "Week"
          : "Month"
      } - ${item.previous}hrs`;
    });
  });
});
