<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Alc</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <script>
        function toggleMenu() {
            const nav = document.getElementById('nav-links');
            nav.classList.toggle('hidden');
        }
    </script>
</head>
<body>
    <header class="bg-green-400 opacity-75 flex flex-row md:flex-row justify-between items-center p-4">
        <p>
            Hero <span class="text-yellow-700">ALC</span>
        </p>
        <nav class="flex justify-between items-center p-4">
            <button class="md:hidden block text-yellow-700" onclick="toggleMenu()">
                ☰
            </button>
            <ul id="nav-links" class="flex space-x-4 flex-col md:flex-row md:space-x-4 md:static absolute top-16 left-0 w-full bg-green-400 md:bg-transparent p-4 md:p-0 hidden md:flex">
                <li>List des articles</li>
                <li>A Propos</li>
                <li>Commentaires</li>
            </ul>
        </nav>
    </header>
</body>
</html>