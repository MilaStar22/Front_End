// 2. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          if (dir == "asc") {
              if (isNaN(parseFloat(x.innerHTML))) {
                  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              } else {
                  if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                      shouldSwitch = true;
                      break;
                  }
              }
          } else if (dir == "desc") {
              if (isNaN(parseFloat(x.innerHTML))) {
                  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                      shouldSwitch = true;
                      break;
                  }
              } else {
                  if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                      shouldSwitch = true;
                      break;
                  }
              }
          }
      }
      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
      } else {
          if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
          }
      }
  }
}
