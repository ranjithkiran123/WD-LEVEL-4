/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const this_game = new Date();
    const some_game = 86400000;
    [
      {
        title: "testing1",
        completed: false,
        dueDate: new Date(this_game.getTime() - some_game).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "testing2",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "testing3",
        completed: false,
        dueDate: new Date(this_game.getTime() + some_game).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("new todo creation", () => {
    expect(all.length).toEqual(3);
    add({
      title: "come lets dance",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(4);
  });

  test("completion of todo", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("due that is over items retrieval checking", () => {
    expect(overdue().length).toEqual(1);
  });

  test("today due items retrieval checking", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("laters due items retrieval checking", () => {
    expect(dueLater().length).toEqual(1);
  });
});
