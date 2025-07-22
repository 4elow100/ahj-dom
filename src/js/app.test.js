jest.mock("../img/goblin.png", () => "goblin.png");

beforeEach(() => {
  document.body.innerHTML = `
    <div class="game-container">
      ${'<div class="hole"></div>'.repeat(16)}
    </div>
  `;
  jest.resetModules();
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("Goblin image is created and moves between holes", () => {
  require("../js/app");

  document.dispatchEvent(new Event("DOMContentLoaded"));

  const img = document.querySelector("img");
  expect(img).not.toBeNull();
  expect(img.src).toContain("goblin.png");
  expect(img.alt).toBe("Goblin Image");

  const getHoleWithImg = () =>
    [...document.querySelectorAll(".hole")].find((h) => h.contains(img));

  const firstHole = getHoleWithImg();
  expect(firstHole).toBeDefined();

  jest.advanceTimersByTime(2000);

  const secondHole = getHoleWithImg();
  expect(secondHole).toBeDefined();
  expect(secondHole).not.toBe(firstHole);

  jest.advanceTimersByTime(2000);
  const thirdHole = getHoleWithImg();
  expect(thirdHole).toBeDefined();
  expect(thirdHole).not.toBe(secondHole);
});
