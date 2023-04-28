// fetching data from server
const loadItems = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayItems(data.data);
};

const displayItems = (item) => {
  console.log(item);
  console.log("hello world");
};
console.log("Hello");

loadItems();
