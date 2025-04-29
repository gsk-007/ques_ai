export const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Format date
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" }); // 'Apr'
  const year = date.getFullYear().toString().slice(-2); // '25'

  // Format time (HH:MM)
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${month} ${year} | ${hours}:${minutes}`;
};
