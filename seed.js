
var db = require('./models');

var books_list = [
  {
  title: "The Handmaid's Tale",
  author: "Margaret Atwood",
  image: "http://images.gr-assets.com/books/1489652243l/38447.jpg",
  description: "Offred is a Handmaid in the Republic of Gilead. She may leave the home of the Commander and his wife once a day to walk to food markets whose signs are now pictures instead of words because women are no longer allowed to read. She must lie on her back once a month and pray that the Commander makes her pregnant, because in an age of declining births, Offred and the other Handmaids are valued only if their ovaries are viable. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now... "
  },
  {
  title: "Eat, Pray, Love",
  author: "Elizabeth Gilbert",
  image: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1294023455i/19501._UY475_SS475_.jpg",
  description: "In her early thirties, Elizabeth Gilbert had everything a modern American woman was supposed to want—husband, country home, successful career—but instead of feeling happy and fulfilled, she was consumed by panic and confusion. This wise and rapturous book is the story of how she left behind all these outward marks of success, and set out to explore three different aspects of her nature, against the backdrop of three different cultures: pleasure in Italy, devotion in India, and on the Indonesian island of Bali, a balance between worldly enjoyment and divine transcendence"
  },
  {
  title: "A Tree Grows in Brooklyn",
  author: "Betty Smith",
  image: "http://images.gr-assets.com/books/1327883484l/14891.jpg",
  description: "The beloved American classic about a young girl's coming-of-age at the turn of the century, Betty Smith's A Tree Grows in Brooklyn is a poignant and moving tale filled with compassion and cruelty, laughter and heartache, crowded with life and people and incident. The story of young, sensitive, and idealistic Francie Nolan and her bittersweet formative years in the slums of Williamsburg has enchanted and inspired millions of readers for more than sixty years. By turns overwhelming, sublime, heartbreaking, and uplifting, the daily experiences of the unforgettable Nolans are raw with honesty and tenderly threaded with family connectedness -- in a work of literary art that brilliantly captures a unique time and place as well as incredibly rich moments of universal experience."
  },
  {
  title: "The Secret Life of Bees",
  author: "Sue Monk Kidd",
  image: "http://images.gr-assets.com/books/1473454532l/37435.jpg",
  description: "Set in South Carolina in 1964, The Secret Life of Bees tells the story of Lily Owens, whose life has been shaped around the blurred memory of the afternoon her mother was killed. When Lily's fierce-hearted black standin mother Rosaleen, insults three of the deepest racists in town, Lily decides to spring them both free. They escape to Tiburon, South Carolina--a town that holds the secret to her mother's past. Taken in by an eccentric trio of black beekeeping sisters, Lily is introduced to their mesmerizing world of bees and honey, and the Black Madonna. This is a remarkable novel about divine female power, a story women will share and pass on to their daughters for years to come."
  }
];

// remove all records that match {} -- which means remove ALL records
db.Book.remove({}, function(err, books){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all books');

    // create new records based on the array books_list
    db.Book.create(books_list, function(err, books){
      if (err) { return console.log('err', err); }
      console.log("created", books.length, "books");
      process.exit();
    });
  }
});