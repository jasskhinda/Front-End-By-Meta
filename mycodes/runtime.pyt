<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Form Submission Example</title>
    </head>
    <body>
        <form id="myForm">
            <label for="nameInput">Name:</label>
            <input type="text" id="nameInput" required>
            <button type="submit">Submit</button>
        </form>
        <script>
            document.getElementById('myForm').addEventListener('submit', (event) => {
                event.preventDefault();
                const name = document.getElementById('nameInput').value;
                alert(`Form submitted. Name: ${name}`);
            });
        </script>
    </body>
</html>