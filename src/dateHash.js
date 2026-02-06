export const getDailyQuote = (length) => {
  const today = new Date().toDateString(); 
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = today.char(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % length;
};