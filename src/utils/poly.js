export const poly = (x, y, n, r, s = 0, v) => {
  let pathArray = ["M"],
    order = v ? 2 : 1;

  for (let i = 0; i < n; i++) {
    if (n % 2 === 0 && v && i === n / 2) {
      pathArray.push("Z M");
      s = 0.5;
    }
    let xNode =
        x + r * Math.cos((2 * Math.PI * ((i - s) * order)) / n).toFixed(2),
      yNode =
        y + r * Math.sin((2 * Math.PI * ((i - s) * order)) / n).toFixed(2);
    pathArray.push(xNode + " " + yNode);
  }
  pathArray.push("Z");
  pathArray = pathArray.join(" ");

  return pathArray;
};
