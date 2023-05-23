// 1. Створити сторінку, що показує нумерований список пісень

let playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  
  },
  
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  
  ];

let div = document.createElement('div');
div.className = "list";
div.innerHTML = '<srtong>List of songs</srtong>';

div.style.fontSize = '26px';
div.style.color = 'darkgreen';
div.style.backgroundColor = 'violet';
div.style.display = 'flex';

document.body.append(div);

let ol = document.createElement('ol');
div.append(ol);


for (let i = 0; i < playList.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `<h2>${playList[i].author}</h2> <p>${playList[i].song}</p>`;
  ol.append(li);
};
