export function initails(title) {
  let titles = title.split(" ");

  let inital = titles.map((title) => title[0].toUpperCase());
  return inital.join("");
}
