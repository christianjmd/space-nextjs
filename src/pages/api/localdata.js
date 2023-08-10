// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req, res) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'json');
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
//   //Return the content of the data file in json format
//   res.status(200).json(fileContents);
// }

// lib/localdata.js

import fsPromises from 'fs/promises';
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), './src/assets/data.json');
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData);

  return objectData
}
