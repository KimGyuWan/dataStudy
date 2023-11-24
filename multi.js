let gugu3 = "\"다중 구구단을 해보자\"\n";

for (i = 1; i < 10; i++) {
  // console.log(i + "단 시작\n");
  gugu3 += `${i}단 시작\n`;
  for (x = 1; x < 10; x++) {
    // console.log(`${i} X ${x} = ${i * x}`)
    gugu3 += `${i} X ${x} = ${i * x}\n`;
  }
}

console.log(gugu3);