import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Similar:</strong>
        <ul>
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym}</li>
          })}
        </ul>
    </div>
  )
  } else {
    return null;
  }
}