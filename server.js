const axios = require("axios");
const { parse } = require("node-html-parser");
const app = require("express")();

app.get("/getTimeStories", async (req, res) => {
  res.send(await webScrapper());
});
const webScrapper = async () => {
  const page = await axios.get("https://time.com/");
  const data = page.data;
  // console.log(data);
  const dom = parse(data);

  // console.log(dom);
  timePage = [];
  getHtml = {};
  const text = dom.querySelectorAll(".latest-stories__item a h3");
  // console.log(text);
  text.forEach((element) => {
    getHtml.title = element.innerHTML;
    getHtml.link = "https://time.com" + element.parentNode.rawAttributes.href;
    timePage.push(getHtml);
  });
  return timePage;
};
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
// webScrapper();
