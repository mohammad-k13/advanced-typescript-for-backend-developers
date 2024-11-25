export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleNameMapper: {
    "^@/(.*)$": `${__dirname}/$1`,
  },
};