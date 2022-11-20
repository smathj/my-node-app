const fs = require("fs");

const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 }); // highWaterMark 기본값 64KB
const data = [];

readStream.on("data", (chunk) => {
  data.push(chunk); // 원기옥
  console.log("data: ", chunk, chunk.length);
});

readStream.on("end", (err) => {
  console.log("현재 배열에 들어있는 데이터를 출력합니다");
  console.log(data);
  console.log("end: ", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
  console.log("error: ", err);
});
