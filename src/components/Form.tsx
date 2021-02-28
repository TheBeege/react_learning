'use strict';

import React, {useState} from "react";

export default function Form() {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <form>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
        </form>
    );
}
