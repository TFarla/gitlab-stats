import { makeVar } from "@apollo/client";

export const gitlabUrlVar = makeVar<string>("http://gitlab.com");
export const apiKeyVar = makeVar<string>("");
export const projectIdVar = makeVar<number | null>(null);
