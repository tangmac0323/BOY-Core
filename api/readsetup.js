import { sql } from '@vercel/postgres';

const retrieveSetupFromDatabase = async (request, response) => {
  const hashedSetupCode = request.query.hashedSetupCode;

  if (!hashedSetupCode) throw new Error('retrieveSetupFromDatabase - ');

  try {
    console.log('GETTING DATA FROM DATABASE');
    // get the code from the database
    const { rows } =
      await sql`SELECT * FROM hashed_formation_setup WHERE hashed_setup_code = ${hashedSetupCode};`;

    console.log('ROWS:', rows);
    // check the length of the rows
    if (rows.length === 0) {
      return;
    }

    // get the first one in the rows
    const row = rows[0];

    console.log('row:', row);

    // get the encrypted setup code
    const encryptedSetupCode = row.encrypted_setup_code;

    console.log('encryptedSetupCode:', encryptedSetupCode);

    return response.status(200).json({ encryptedSetupCode });
  } catch (error) {
    console.log('dafuq', error);
    return response.status(500).json({ error });
  }
};

export default retrieveSetupFromDatabase;
