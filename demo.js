// const currentDate = new Date().toLocaleDateString();
// console.log(`Hello, World! Today's date is ${currentDate}`);
const Appwrite = require('appwrite');

const client = new Appwrite();

client.setEndpoint("https://cloud.appwrite.io/v1");
client.setProject("64dd3509988a3c15ab1c");
client.setKey(process.env.APPWRITE_API_KEY);

const database = new Appwrite.Database(client);

const collectionId = 'your-collection-id'; // Replace with your actual collection ID

async function createDocument() {
  try {
    const response = await database.createDocument(collectionId, {
      message: 'Hello, World!',
      timestamp: new Date().toISOString(),
    });

    console.log('Document created:', response);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

createDocument();
