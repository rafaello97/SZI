let client1PositionX = 4;
let client1PositionY = 3;
let client1 = new Client(1, client1PositionX, client1PositionY);
let client2PositionX = 11;
let client2PositionY = 2;
let client2 = new Client(2, client2PositionX, client2PositionY);
let client3PositionX = 18;
let client3PositionY = 3;
let client3 = new Client(3, client3PositionX, client3PositionY);
let client4PositionX = 5;
let client4PositionY = 7;
let client4 = new Client(4, client4PositionX, client4PositionY);
let client5PositionX = 10;
let client5PositionY = 6;
let client5 = new Client(5, client5PositionX, client5PositionY);
let client6PositionX = 17;
let client6PositionY = 5;
let client6 = new Client(6, client6PositionX, client6PositionY);
let client7PositionX = 6;
let client7PositionY = 9;
let client7 = new Client(7, client7PositionX, client7PositionY);
let client8PositionX = 12;
let client8PositionY = 9;
let client8 = new Client(8, client8PositionX, client8PositionY);

function Client( img, i, j) {
  this.i = i;
  this.j = j;
  this.state = true;
  this.edges = [];
  this.searched = false;
  this.parent = null;
  this.img = img;

  this.f = 0;
  this.g = 0;
  this.h = 0;

  this.weight = 1;

  this.show = () => {
    let x = i * w;
    let y = j * w;

    // draw a cell with a waiter
    stroke(250);
    fill('#e4e4e4');
    rect(x, y, w, w);

    if ( this.state ) {
      switch (this.img) {
        case 1:
          image(client1Img, x + 3, y + 6, img.width, img.height);
          break;
        case 2:
          image(client2Img, x + 3, y + 6, img.width, img.height);
          break;
        case 3:
          image(client3Img, x + 3, y + 6, img.width, img.height);
          break;
        case 4:
          image(client4Img, x + 3, y + 6, img.width, img.height);
          break;
        case 5:
          image(client5Img, x + 3, y + 6, img.width, img.height);
          break;
        case 6:
          image(client6Img, x + 3, y + 6, img.width, img.height);
          break;
        case 7:
          image(client7Img, x + 3, y + 6, img.width, img.height);
          break;
        case 8:
          image(client8Img, x + 3, y + 6, img.width, img.height);
          break;
        default: 
      }
  }
  }

  // add client neighbors
  this.addEdges = arr => {
    
  }
}
