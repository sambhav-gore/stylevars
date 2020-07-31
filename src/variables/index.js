import * as vars from "./_variables";
import { variables as overrides } from "./overrides";

const variables = { ...vars, ...overrides };

export default {
  ...variables,
};
