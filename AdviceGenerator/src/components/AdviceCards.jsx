import { useState, useEffect } from "react";

export default function AdviceCards() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const adviceData = data.slip;
        setAdvice(adviceData);
        console.log(adviceData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAdvice();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Random Adivce for the day:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{advice.category}</td>
          <td>{advice.advice}</td>
          <td>{advice.author}</td>
        </tr>
      </tbody>
    </table>
  );
}
