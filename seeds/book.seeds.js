const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Book } = require("../models/Book.js");

const bookSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Book.collection.drop();
    console.log("Libros eliminados");

    const bookList = [
      { title: "The Lost Symphony", pages: 980, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Midnight Symph", pages: 98, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 700, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Silver Symphony", pages: 936, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 956, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "Whispers in the Wind", pages: 909, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Lost City", pages: 370, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "Lost in Time", pages: 868, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Hidden Path", pages: 820, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 149, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Forgotten King", pages: 196, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Emerald Isle", pages: 602, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "Whispers of the Hear", pages: 820, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 736, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Star Symphony", pages: 955, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Midnight Sonata", pages: 399, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Midnight Sonata", pages: 522, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "Lost in Time", pages: 212, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Hidden Treasure", pages: 271, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Star Symphony", pages: 674, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "Enchanted Symphony", pages: 588, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Emerald Symphony", pages: 267, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "Midnight Symphony", pages: 562, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Silver Lining", pages: 207, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 471, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 58, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 922, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "Whispers in the Wind", pages: 831, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "A Tale of Two Cities", pages: 390, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Crystal Key", pages: 957, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Midnight Sonata", pages: 395, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 910, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "Midnight Symphony", pages: 507, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Starl Symphony", pages: 800, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 570, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 794, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Silver Symphony", pages: 966, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Star Symphony", pages: 317, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "Whispers in the Wind", pages: 438, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Lost Symphony", pages: 731, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Forgot Symphony", pages: 401, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 392, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 214, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 728, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "Midnight Masquerade", pages: 656, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Crystal Key", pages: 773, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 163, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "Enchanted Symphony", pages: 97, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Golden Compass", pages: 409, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "Whispers in the Wind", pages: 360, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Golden Gate", pages: 795, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 998, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Forgotten Realm", pages: 704, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 535, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 981, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Hidden Treasure", pages: 57, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Last Voyage", pages: 487, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 539, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Lost Symphony", pages: 787, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Emerald Isle", pages: 449, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Forgot Symphony", pages: 333, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 64, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Emerald Symphony", pages: 233, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 730, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 492, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Forgot Symphony", pages: 935, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Silver Lining", pages: 475, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 205, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Enchanted Mirror", pages: 646, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Crimson Symphony", pages: 602, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Forgot Symphony", pages: 430, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "Midnight Symphony", pages: 854, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "A Tale of Two Cities", pages: 625, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "The Star Chronicles", pages: 966, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Forgot Symphony", pages: 388, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Lost City", pages: 374, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Lost Symphony", pages: 264, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Star Symphony", pages: 365, publisher: "Bookworm Publishing", publisherCountry: "JAPAN" },
      { title: "The Forgot Realm", pages: 709, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Hidden Path", pages: 432, publisher: "Fantasy Books Co.", publisherCountry: "JAPAN" },
      { title: "The Lost Symphony", pages: 576, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 146, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Forgot Realm", pages: 603, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Lost Symphony", pages: 865, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Silver Symphony", pages: 308, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 822, publisher: "Novelty Books Inc.", publisherCountry: "JAPAN" },
      { title: "Enchanted Forest", pages: 802, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Secret Keeper", pages: 987, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Hidden Symphony", pages: 284, publisher: "Fictional Press", publisherCountry: "JAPAN" },
      { title: "The Silver Sword", pages: 314, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Secret Symphony", pages: 843, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Secret Garden", pages: 927, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 574, publisher: "Story Publications", publisherCountry: "JAPAN" },
      { title: "The Crystal Key", pages: 496, publisher: "Whimsical Press", publisherCountry: "JAPAN" },
      { title: "The Silver Symphony", pages: 596, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "The Golden Symphony", pages: 62, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
      { title: "The Forgot Kingdom", pages: 308, publisher: "Dreams Publishing", publisherCountry: "JAPAN" },
      { title: "Enchanted Symphony", pages: 950, publisher: "Imaginary House", publisherCountry: "JAPAN" },
      { title: "The Emerald City", pages: 454, publisher: "Make Publishers", publisherCountry: "JAPAN" },
      { title: "The Golden Compass", pages: 755, publisher: "Enchanted Editions", publisherCountry: "JAPAN" },
    ];

    const documents = bookList.map((book) => new Book(book));
    await Book.insertMany(documents);

    console.log("Libros creados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

bookSeed();
