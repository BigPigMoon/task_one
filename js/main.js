function min_max() {
  const obj = {
    a0: { aa: [3, 9], bb: 2, cc: { aaa: 4, bbb: -5 } },
    a1: { aa: [0, 8], bb: -7, cc: { aaa: 8, bbb: 7 } },
    a2: { aa: [9, -4], bb: 1, cc: { aaa: -1, bbb: 8 } },
    a3: { aa: [8, -1], bb: 7, cc: { aaa: 3, bbb: 0 } },
    a4: { aa: [-4, -2], bb: -2, cc: { aaa: 8, bbb: 9 } },
  };

  let minValue = Infinity;
  let maxValue = -Infinity;

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];

      // Проверяем свойство bb
      if (element.bb < minValue) {
        minValue = element.bb;
      }
      if (element.bb > maxValue) {
        maxValue = element.bb;
      }

      const cc = element.cc;
      if (cc && cc.bbb !== undefined) {
        if (cc.bbb < minValue) {
          minValue = cc.bbb;
        }
        if (cc.bbb > maxValue) {
          maxValue = cc.bbb;
        }
      }
    }
  }

  document.getElementById("min").innerHTML += minValue;
  document.getElementById("max").innerHTML += maxValue;
}

function set_onclick_events() {
  const cells = document.getElementsByClassName("content");
  const block = document.getElementById("block");

  for (let item of cells) {
    item.innerHTML = Math.floor(Math.random() * (100 - 1) + 1);
  }

  for (let i = 0; i < cells.length; i++) {
    const element = cells[i];

    element.onclick = function () {
      block.innerHTML = element.innerHTML;
    };
  }
}

function main() {
  set_onclick_events();
  min_max();
}

main();
