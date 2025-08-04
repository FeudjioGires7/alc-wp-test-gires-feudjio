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
    <header class="bg-blue-600 opacity-75 flex flex-row md:flex-row justify-between items-center p-4">
        <p class="text-white text-2xl font-bold">
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

    <div class="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-4">
        <h1 class="text-center text-2xl">Bienvenu chez ALC Digital</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
            pour plus d'informations, visitez notre <a href="mailto:recrutement@alc.test" class="text-blue-500">Recrutement ALC Digital</a>.
        </p>
    </div>
</body>
</html>