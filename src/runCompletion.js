import fetch from "node-fetch";

export async function runCompletion(messages) {
  const response = await fetch(
    "https://api.openai-proxy.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: messages }],
      }),
    }
  ).then((res) => res.json())
  return await response.choices[0].message.content;
}
