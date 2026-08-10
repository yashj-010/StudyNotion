const mongoose = require("mongoose");
const Category = require("./models/Category");
require("dotenv").config();

const categories = [
  { name: "Web Development", description: "Learn to build web applications" },
  { name: "Data Science", description: "Learn data analysis and machine learning" },
  { name: "Mobile App Development", description: "Learn to build Android and iOS apps" },
  { name: "Cloud Computing", description: "Learn AWS, Azure, and Google Cloud" },
  { name: "Cybersecurity", description: "Learn how to secure applications" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to DB");
    
    for (const cat of categories) {
      const exists = await Category.findOne({ name: cat.name });
      if (!exists) {
        await Category.create(cat);
        console.log(`Created category: ${cat.name}`);
      }
    }
    
    console.log("Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seed();
