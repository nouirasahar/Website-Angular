const express = require("express");
const { exec } = require("child_process");
const path = require("path");
const app = express();

const PORT = 5000;

app.use(express.json());


app.post("/", (req, res) => {
    const { frontend, backend, mongoURI, dbName, username, password } = req.body;
    console.log("Received POST request...");
    console.log("Parameters received:", { backend, mongoURI, dbName, username, password, frontend });
    const scriptPath = path.join(__dirname, "Backend", `${backend}`, `run-${backend}.bat`);
    const scriptPath2 = path.join(__dirname, "Frontend", `${frontend}`, `run-${frontend}.bat`);
    if (backend) {
        // Use correct escaping for Windows batch scripts
        const command = `cmd /c ""${scriptPath}" "${mongoURI}" "${dbName}" "${username}" "${password}""`;

        console.log(`Executing command: ${command}`);

        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error("Error executing script:", err.message);
                return res.status(500).json({ error: err.message });
            }
            console.log("✅ Script executed successfully.");
            console.log("Batch Script Output:\n", stdout || stderr);
            res.json({ message: "Script executed", output: stdout || stderr });
        });
    } else {
        res.json({ message: "No script execution required." });
    }if (frontend) {
        // Wait for 60 seconds before executing the frontend script
        setTimeout(() => {
            const command = `cmd /c "${scriptPath2}"`;

            console.log(`Executing command: ${command}`);

            exec(command, { cwd: path.dirname(scriptPath2) }, (err, stdout, stderr) => {
                if (err) {
                    console.error("Error executing script:", err.message);
                    return res.status(500).json({ error: err.message });
                }
                console.log("✅ Frontend Script executed successfully.");
                console.log("Batch Script Output:\n", stdout || stderr);
                res.json({ message: "Frontend script executed", output: stdout || stderr });
            });
        }, 60000); // 60 seconds delay
    } else {
        res.json({ message: "No frontend script execution required." });
    }
    
});
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
