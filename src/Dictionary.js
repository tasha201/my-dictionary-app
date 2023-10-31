import React, { useState } from "react";
import "./Dictionary.css"

export default function Dictionary(props) {

const [keyword, setKeyword] = useState(props.defaultKeyword);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

  return (
    <div className="Dictionary">
      <section>
        <form>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            placeholder="Search for a word"
            defaultValue={props.defaultKeyword}
            autoFocus={true}
            className="search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">i.e. ukraine, love, food, flower</small>
      </section>
    </div>
  )
}