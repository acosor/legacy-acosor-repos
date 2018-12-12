import fetch from "node-fetch";

export default async (user: string, password: string) => {
  try {
    const result = await fetch("http://localhost:3030/core/initialize", {
      method: "POST",
      body: JSON.stringify({ user, password }),
      headers: { "Content-Type": "application/json" },
    }).then((response: any) => response.json());
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
