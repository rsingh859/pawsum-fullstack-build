import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./FAQ.css";

function FAQ({ question, answer }) {
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  return (
    <article className="faq" onClick={() => setIsAnswerShown((prev) => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon" aria-label="icon plus minus">
          {isAnswerShown ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isAnswerShown && <p>{answer}</p>}
    </article>
  );
}

export default FAQ;
