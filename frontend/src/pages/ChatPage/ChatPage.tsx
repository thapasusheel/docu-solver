import Messages from "@/components/Messages";
import SendMessage from "@/components/SendMessage";
import Layout from "@/layout/Layout";
import { Message } from "@/types/Message";
import { useState, useRef, useEffect } from "react";



const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>(" ");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text: string, sender: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, sender, username: sender },
    ]);
  };

  const sendMessage = async () => {
    const userMessage: Message = {
      text: message,
      sender: "User",
      username: "User",
    };

    const loadingMessage: Message = {
      text: "AI is thinking",
      sender: "NewLife",
      username: "NewLife",
      isLoading: true,
    };

    setMessages((currentMessages: Message[]) => [
      ...currentMessages,
      userMessage,
      loadingMessage,
    ]);

    /* API CALL */

    const aiMessage: Message = {
      text: "API Call is disabled",
      sender: "DocuAI",
      username: "DocuAI",
    };

    setMessages((currentMessages: Message[]) => {
      return currentMessages.map((m, index) =>
        index === currentMessages.length - 1 ? aiMessage : m
      );
    });
    setMessage("");

    try {
      // API Call
      console.log("Data added");
    } catch (error) {
      console.error("Error sending message:", error);
      addMessage("Error occurred", "ai");
    }
  };

  return (
    <>
      <Layout className="px-64 flex justify-center items-center bg-gray-100">
        <div className="w-[50vw] max-w-[70vw] flex flex-col ">
          <div className="flex-grow flex flex-col overflow-y-auto">
            <Messages messages={messages} />
            <div ref={messagesEndRef} />
          </div>
          <SendMessage
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </Layout>
    </>
  );
};

export default ChatPage;
