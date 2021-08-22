import React, { useState } from "react";

export const useInput = (initialState = "") => {
    const [text, setText] = useState(initialState);
    const handleChange = (e) => setText(e.currentTarget.value);

    return [text, handleChange];
};