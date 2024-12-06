import React, { useState } from 'react';

function RandomPasswordGenerator() {
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCapitals, setIncludeCapitals] = useState(false);
  const [includeSmall, setIncludeSmall] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [password, setPassword] = useState('');

  const generatePassword = () => {

    if (passwordLength > 100){
      alert("K ma chai yetro lamo password halna aateko? \n 8 ota le pugxa.");
      setPasswordLength(8)
      return;
    }

    const symbols = '!@#$%^&*()_+=-';
    const numbers = '0123456789';
    const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const small = 'abcdefghijklmnopqrstuvwxyz';

    let allChars = '';
    let mandatoryChars = '';

    function selectProperty(prop){
      mandatoryChars += prop[Math.floor(Math.random() * prop.length)];
    }
    
    // Add mandatory characters
    if (includeSymbols) {
      allChars += symbols;
      selectProperty(symbols);
    }
    if (includeNumbers) {
      allChars += numbers;
      selectProperty(numbers);
    }
    if (includeCapitals) {
      allChars += capitals;
      selectProperty(capitals);
    }
    if (includeSmall) {
      allChars += small;
      selectProperty(small);
    }

    if (allChars.length === 0) {
      alert("Please select at least one option!");
      return;
    }

    let generatedPassword = mandatoryChars;
    const remainingLength = passwordLength - generatedPassword.length; // Adjust password length

    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    // Shuffle the password to ensure mandatory characters are randomly placed
    generatedPassword = generatedPassword.split('').sort(() => 0.5 - Math.random()).join('');

    setPassword(generatedPassword);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Random Password Generator</h2>
      
      <div>
        <input 
          type="checkbox" 
          checked={includeSmall} 
          onChange={() => setIncludeSmall(!includeSmall)} 
        />
        <label>Include Small Letters (default)</label>
      </div>

      <div>
        <input 
          type="checkbox" 
          checked={includeCapitals} 
          onChange={() => setIncludeCapitals(!includeCapitals)} 
        />
        <label>Include Capital Letters</label>
      </div>


      <div>
        <input 
          type="checkbox" 
          checked={includeNumbers} 
          onChange={() => setIncludeNumbers(!includeNumbers)} 
        />
        <label>Include Numbers</label>
      </div>

      <div>
        <input 
          type="checkbox" 
          checked={includeSymbols} 
          onChange={() => setIncludeSymbols(!includeSymbols)} 
        />
        <label>Include Symbols</label>
      </div>

      <div>
        <label>Password Length: </label>
        <input 
          type="number" 
          style={{width: "100px", fontSize: "1.5rem"}}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)} 
        />
      </div>

      <button onClick={generatePassword} style={{ marginTop: '20px' }}>
        Generate Password
      </button>

      <p>
        Password: <span style={{fontSize: "1.3em"}}>{password}</span>
      </p>
    </div>
  );
}

export default RandomPasswordGenerator;
