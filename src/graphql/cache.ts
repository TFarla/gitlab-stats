import { makeVar } from "@apollo/client";

export const gitlabUrlVar = makeVar<string>("https://gitlab.com");
export const apiKeyVar = makeVar<string>("");
export const projectIdVar = makeVar<number | null>(null);
