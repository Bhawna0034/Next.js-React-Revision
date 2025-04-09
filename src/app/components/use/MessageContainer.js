"use client"
import { use, Suspense } from "react";

function Message({ messagePromise }) {
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
}

async function fetchMessage() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Hello from server!"), 1000);
    });
  }
  

const MessageContainer = () => {
    const messagePromise = fetchMessage();
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
}

export default MessageContainer;
