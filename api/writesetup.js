import { sql } from '@vercel/postgres';

const writesetup = async (request, response) => {
  console.log('writesetup - getting request');
  try {
    if (request.method === 'POST') {
      const data = request.body;

      console.log('writesetup - getting data from body', data);

        // Vercel automatically parses JSON if the "Content-Type" is "application/json"
      // get the hashed setup code and encryptedFormValues from the JSON object
      const { hashBuffer, encryptedFormValues } = data;

      if (!hashBuffer || !encryptedFormValues)
        throw new Error('hashBuffer and encryptedFormValues required');

      console.log('writesetup -sending to postgres api')
      await sql`INSERT INTO hashed_formation_setup (hashed_setup_code, encrypted_setup_code) 
            VALUES (${hashBuffer}, ${encryptedFormValues}) 
            ON CONFLICT (hashed_setup_code) DO UPDATE
            SET encrypted_setup_code=${encryptedFormValues}`;
    } else {
      console.log('writesetup - method not allowed')
      response.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.log('writesetup - getting error:', error.message);
    return response.status(500).json({ error });
  }

  return response.status(200).json({ message: 'Data received successfully' });
};

export default writesetup;
