export const colors = [
  "hotpink",
  "orange",
  "green",
  "tomato",
  "purple",
  "magenta",
  "cyan",
  "blue",
  "red",
  "brown",
  "lime",
];

export const colorGenerator = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash % colors.length);
  return colors[index];
};
