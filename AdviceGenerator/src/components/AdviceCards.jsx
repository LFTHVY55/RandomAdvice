import { useState } from "react";
import AuthorRow from "./AuthorRow";

const dummyAdvice = [
  {
    category: "Life",
    advice: "Always strive for progress, not perfection.",
    author: "Unknown",
  },
  {
    category: "Career",
    advice: "Take risks and embrace failures as learning opportunities.",
    author: "Steve Jobs",
  },
  {
    category: "Relationships",
    advice: "Communication is key in any relationship.",
    author: "Unknown",
  },
];

export default function AdviceCards() {
  const [advice, setAdvice] = useState(dummyAdvice);

  console.log(advice); // Log out the advice state

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Advice Cards</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Category</td>
          <td>Advice</td>
          <td>Author</td>
        </tr>
        {advice.map((item, index) => (
          <tr key={index}>
            <td>{item.category}</td>
            <td>{item.advice}</td>
            <td>{item.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
