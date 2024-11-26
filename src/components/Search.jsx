import { useState } from "react";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            HandleSubmit();
        }
    };

    const HandleSubmit = () => {
        cb(value);
    };

    return (
        <div className="row">
            <div className="input-field col s12" style={{ padding: "0" }}>
                <input
                    type="search"
                    id="search"
                    placeholder="Search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    style={{
                        border: "none",
                    }}
                />
                <button
                    className="btn search"
                    onClick={HandleSubmit}
                    style={{ height: "auto" }}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search };
