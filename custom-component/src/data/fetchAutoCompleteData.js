const fetchAutoCompleteData = () => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(['antique', 'vintage', '중고A급', 'rustic', 'refurbished']),
      1000
    );
  });
};

export default fetchAutoCompleteData;
