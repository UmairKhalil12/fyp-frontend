export const getFormattedString = (str) => {
  if (!str || typeof str !== "string") return null;
  let result; // Full time like this

  result = str?.toLowerCase()?.slice(0, 1)?.toUpperCase() + str?.toLowerCase()?.slice(1)?.split("_")?.join(" ");

  return result || null;
};
