for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let x = 1; x <= 10; x++) {
      let num = (i - 1) * 10 + x;
      if (num < 10) {
        row += "0" + num + "  ";
      } else {
        row += num + "  ";
      }
    }
    console.log(row);
  }