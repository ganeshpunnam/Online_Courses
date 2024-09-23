// pages/api/compile-java.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const compileJava = (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.body;

  const filePath = path.join(process.cwd(), 'temp', 'Main.java');
  const classFilePath = path.join(process.cwd(), 'temp', 'Main.class');

  // Ensure temp directory exists
  fs.mkdirSync(path.join(process.cwd(), 'temp'), { recursive: true });

  // Write the Java code to a file
  fs.writeFileSync(filePath, code);

  // Compile the Java code
  exec(`javac ${filePath}`, (error) => {
    if (error) {
      return res.status(500).json({ output: error.message });
    }

    // Run the compiled Java class
    exec(`java -cp ${path.join(process.cwd(), 'temp')} Main`, (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ output: stderr });
      }
      res.status(200).json({ output: stdout });
    });
  });
};

export default compileJava;
