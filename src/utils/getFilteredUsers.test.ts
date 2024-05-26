import { expect, test } from "vitest";
import { getFilteredusers } from "./getFilteredUsers";

const testData = [
  {
    id: 1,
    name: "21 industries",
    imgpath: "https://www.w3schools.com/howto/img_avatar.png",
    status: "Active 8 days",
    usergroup: "Teams",
  },
  {
    id: 2,
    name: "Lara Jackxon",
    imgpath: "https://www.w3schools.com/howto/img_avatar.png",
    status: "Active 2 days ago",
    usergroup: "Members",
  },
  {
    id: 3,
    name: "Niko bellic",
    imgpath: "https://www.w3schools.com/howto/img_avatar.png",
    status: "Active",
    usergroup: "All",
  },
];

test("Get user with user group name All", () => {
  expect(getFilteredusers(testData, "all")).toEqual(testData);
});

test("Get user with user group name Teams", () => {
  expect(getFilteredusers(testData, "teams")).toEqual([
    {
      id: 1,
      name: "21 industries",
      imgpath: "https://www.w3schools.com/howto/img_avatar.png",
      status: "Active 8 days",
      usergroup: "Teams",
    },
  ]);
});

test("Get empty array if users is empty", () => {
  expect(getFilteredusers([], "all")).toEqual([]);
});
