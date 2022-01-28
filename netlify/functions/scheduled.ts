import { schedule, Handler } from "@netlify/functions";

const func: Handler = (event) => {
  console.log("Hello, world!");

  return {
    statusCode: 200,
  };
};

export const handler = schedule("* * * * *", func);
