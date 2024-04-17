// Simulates credit card information for demonstration purposes (no generation)
const cardTypes = [
    { type: 'visa16', length: 16, cvvLength: 3, prefixes: [4] },
    { type: 'visa13', length: 13, cvvLength: 3, prefixes: [4] },
    { type: 'mc', length: 16, cvvLength: 3, prefixes: [51, 52, 53, 54, 55] },
    { type: 'discover', length: 16, cvvLength: 3, prefixes: [6011] },
    { type: 'amex', length: 15, cvvLength: 4, prefixes: [34, 37] },
  ];
  
  function generateCardInfo(type) {
    const cardData = cardTypes.find(card => card.type === type);
    if (!cardData) {
      return null; // Handle invalid card type
    }
  
    // Generate a random expiration date in the future (MM/YY)
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are 0-indexed
  
    let expirationMonth = month.toString().padStart(2, '0');
    let expirationYear = (year + 2).toString().slice(-2); // Add 2 years
  
    // Display a masked card number (first 4 and last 4 digits)
    const maskedCardNumber = 'XXXX XXXX XXXX XXXX';
  
    return {
      type: cardData.type,
      cardNumber: maskedCardNumber,
      expirationDate: `${expirationMonth}/${expirationYear}`,
    };
  }
  
  const cardTypeSelect = document.getElementById('card-type-select');
  const generateBtn = document.getElementById('generate-btn');
  const cardTypeSpan = document.getElementById('card-type');
  const cardNumberSpan = document.getElementById('card-number');
  const expirationDateSpan = document.getElementById('expiration-date');
  
  generateBtn.addEventListener('click', () => {
    const selectedType = cardTypeSelect.value;
    const cardInfo = generateCardInfo(selectedType);
  
    if (cardInfo) {
      cardTypeSpan.textContent = cardInfo.type;
      cardNumberSpan.textContent = cardInfo.cardNumber;
      expirationDateSpan.textContent = cardInfo.expirationDate;
    } else {
      // Handle invalid card type selection (optional)
      console.error('Invalid card type selected:', selectedType);
    }
  });
  
