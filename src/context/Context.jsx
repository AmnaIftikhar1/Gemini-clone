import { createContext, useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Function to delay appending chunks instead of single characters
    const delayPara = (index, chunk) => {
        setTimeout(() => {
            setResultData((prev) => prev + chunk);
        }, 75 * index);  // Adjust delay based on index for smooth typing effect
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    };

    const onSent = async (prompt) => {
        try {
            setResultData("");
            setLoading(true);
            setShowResult(true);

            let response;
            if (prompt) {
                response = await run(prompt);
                setRecentPrompt(prompt);
            } else {
                setPrevPrompt((prev) => [...prev, input]);
                setRecentPrompt(input);
                response = await run(input);
            }

            // Process response for bold text and line breaks
            let processedResponse = response
                .split("**")
                .map((chunk, index) =>
                    index % 2 === 1 ? `<b>${chunk}</b>` : chunk
                )
                .join("");

            processedResponse = processedResponse.split("*").join("<br/>");

            // Split response into chunks, preserving HTML tags
            const chunks = processedResponse.split(/(<\/?b>|<br\/>)/g); // Split by <b> and <br> tags

            // Delay displaying each chunk of text
            chunks.forEach((chunk, index) => {
                if (chunk) {
                    delayPara(index, chunk);  // No need to accumulate in displayText
                }
            });

            setLoading(false);
            setInput(""); // Clear input after response
        } catch (error) {
            console.error("Error in onSent:", error);
            setLoading(false);
        }
    };

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContextProvider;
