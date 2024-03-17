import { useState, useEffect } from "react";


export default function AdviceCards() {
  const [advice, setAdvice] = useState([]);
  const [randomImageUrl, setRandomImageUrl] = useState("");

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

    const fetchRandomImage = async () => {
      try {
        const response = await fetch('https://source.unsplash.com/random');
        if (!response.ok) {
          throw new Error('Failed to fetch random image');
        }
        const imageUrl = response.url;
        setRandomImageUrl(imageUrl);
        console.log(imageUrl);
      } catch (error) {
        console.error('Error fetching random image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <div className="advice-container">
      <table>
        <thead>
          <tr>
            <th colSpan="3">Random Advice for the Day</th>
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
      <div className="image-container">
        {randomImageUrl && <img src={randomImageUrl} alt="Random Image" />}
        
      </div>
    </div>
  );
}
