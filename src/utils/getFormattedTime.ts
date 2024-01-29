export const getFormattedTime = (inputTime: string) => {
    const inputDate = new Date(inputTime);
  
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();

  // Ensure two-digit formatting
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedHours}:${formattedMinutes}`;
}