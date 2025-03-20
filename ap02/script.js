// Fonction pour gérer la connexion de l'utilisateur
function handleLogin(event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemple de validation des identifiants (à adapter selon votre logique)
    if (username === 'patron' && password === 'patron123') {
        showPatronPage();
    } else if (username === 'salarie' && password === 'salarie123') {
        showSalariePage();
    } else if (username === 'client' && password === 'client123') {
        showClientPage();
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
}

// Fonction pour afficher la page Patron
function showPatronPage() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('patron-container').classList.remove('hidden');
}

// Fonction pour afficher la page Salarié
function showSalariePage() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('salarie-container').classList.remove('hidden');
}

// Fonction pour afficher la page Client
function showClientPage() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('client-container').classList.remove('hidden');
}

// Fonction de déconnexion
function logout() {
    // Masque toutes les pages et affiche la page de connexion
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('patron-container').classList.add('hidden');
    document.getElementById('salarie-container').classList.add('hidden');
    document.getElementById('client-container').classList.add('hidden');
}
