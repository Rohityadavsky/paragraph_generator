import  { useState,useEffect } from 'react';


const ParagraphGenerator = () => {
  const [numParagraph, setParagraph] = useState(1);
  const [generatedParagraphs, setGeneratedParagraphs] = useState([]);
useEffect(() => {
  alert("Please Enter Sum Number!");
}, []);

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vestibulum auctor sapien ut odio aliquet, at congue erat elementum.",
    "Phasellus sollicitudin leo vel lacus vehicula cursus.",
    "Nulla facilisi. Sed at venenatis ex.",
    "Curabitur in augue id nulla eleifend bibendum a nec eros.",
    "Vivamus dictum magna sit amet lorem tincidunt, at gravida tortor fringilla.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "Integer nec felis vel tortor efficitur hendrerit.",
    "Aliquam erat volutpat. Maecenas id magna velit.",
  ];

  const handleGenerate = () => {
    const randomParagraphs = [];
    for (let i = 0; i < numParagraph; i++) {
      const randomIndex = Math.floor(Math.random() * paragraphs.length);
      randomParagraphs.push(paragraphs[randomIndex]);
    }
    setGeneratedParagraphs(randomParagraphs);
  };

  return (
    <div className="container">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <label>PARAGRAPHS:</label>
      <input type="number"value={numParagraph}min="1"max="10"onChange={(e) => setParagraph(Number(e.target.value))}/>
      <button onClick={handleGenerate}>GENERATE</button>

      <div className="paragraphs">
        {generatedParagraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  );
};
export default ParagraphGenerator;
