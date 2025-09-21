// Game data with comprehensive list of unblocked games
const games = [
    // Action Games
    {
        title: "Happy Wheels",
        description: "Navigate through obstacle courses with physics-based characters.",
        category: "action",
        emoji: "🎯",
        featured: true,
        url: "https://www.totaljerkface.com/happy_wheels.tjf"
    },
    {
        title: "Super Smash Flash 2",
        description: "Fan-made fighting game featuring popular characters.",
        category: "action",
        emoji: "⚔️",
        featured: true,
        url: "https://www.mcleodgaming.com/games/ssf2"
    },
    {
        title: "Territory War",
        description: "Turn-based strategy warfare with stick figures.",
        category: "action",
        emoji: "💥",
        url: "#"
    },
    {
        title: "Strike Force Heroes",
        description: "Side-scrolling shooter with customizable characters.",
        category: "action",
        emoji: "🔫",
        url: "#"
    },
    {
        title: "Stick War",
        description: "Command an army of stick figures in epic battles.",
        category: "action",
        emoji: "⚔️",
        url: "#"
    },
    {
        title: "Age of War",
        description: "Evolve through different ages while defending your base.",
        category: "action",
        emoji: "🏰",
        url: "#"
    },

    // Puzzle Games
    {
        title: "2048",
        description: "Combine numbered tiles to reach 2048.",
        category: "puzzle",
        emoji: "🧩",
        featured: true,
        url: "https://play2048.co/"
    },
    {
        title: "Tetris",
        description: "Classic block-stacking puzzle game.",
        category: "puzzle",
        emoji: "🟦",
        featured: true,
        url: "#"
    },
    {
        title: "Cut the Rope",
        description: "Feed candy to Om Nom by cutting ropes strategically.",
        category: "puzzle",
        emoji: "🍭",
        url: "#"
    },
    {
        title: "Portal Flash",
        description: "Puzzle platformer with portal mechanics.",
        category: "puzzle",
        emoji: "🌀",
        url: "#"
    },
    {
        title: "Bloxorz",
        description: "Roll a block through challenging 3D puzzles.",
        category: "puzzle",
        emoji: "📦",
        url: "#"
    },
    {
        title: "Red Ball 4",
        description: "Help the red ball save the world from evil squares.",
        category: "puzzle",
        emoji: "🔴",
        url: "#"
    },

    // Sports Games
    {
        title: "Basketball Legends",
        description: "Play as legendary basketball players in exciting matches.",
        category: "sports",
        emoji: "🏀",
        featured: true,
        url: "#"
    },
    {
        title: "World Cup 2018",
        description: "Experience the excitement of the FIFA World Cup.",
        category: "sports",
        emoji: "⚽",
        url: "#"
    },
    {
        title: "Tennis Masters",
        description: "Compete in professional tennis tournaments.",
        category: "sports",
        emoji: "🎾",
        url: "#"
    },
    {
        title: "Golf Battle",
        description: "Multiplayer golf with power-ups and obstacles.",
        category: "sports",
        emoji: "⛳",
        url: "#"
    },
    {
        title: "Pool 8 Ball",
        description: "Classic billiards game with realistic physics.",
        category: "sports",
        emoji: "🎱",
        url: "#"
    },
    {
        title: "Boxing Live",
        description: "Step into the ring and become a boxing champion.",
        category: "sports",
        emoji: "🥊",
        url: "#"
    },

    // Racing Games
    {
        title: "Moto X3M",
        description: "Perform stunts on your motorbike through challenging courses.",
        category: "racing",
        emoji: "🏍️",
        featured: true,
        url: "#"
    },
    {
        title: "Hill Climb Racing",
        description: "Drive vehicles up steep hills and perform stunts.",
        category: "racing",
        emoji: "🚗",
        url: "#"
    },
    {
        title: "Mad Max Fury Road",
        description: "High-speed desert racing with combat elements.",
        category: "racing",
        emoji: "🏎️",
        url: "#"
    },
    {
        title: "Bike Race",
        description: "Fast-paced motorcycle racing with obstacles.",
        category: "racing",
        emoji: "🚴",
        url: "#"
    },
    {
        title: "Traffic Racer",
        description: "Navigate through busy traffic at high speeds.",
        category: "racing",
        emoji: "🛣️",
        url: "#"
    },
    {
        title: "Drift Hunters",
        description: "Master the art of drifting in various sports cars.",
        category: "racing",
        emoji: "🏁",
        url: "#"
    },

    // Strategy Games
    {
        title: "Bloons TD 5",
        description: "Tower defense game with monkeys popping balloons.",
        category: "strategy",
        emoji: "🎈",
        featured: true,
        url: "#"
    },
    {
        title: "Kingdom Rush",
        description: "Epic tower defense with fantasy themes.",
        category: "strategy",
        emoji: "🏰",
        url: "#"
    },
    {
        title: "Plants vs Zombies",
        description: "Defend your garden from zombie invasion.",
        category: "strategy",
        emoji: "🌱",
        url: "#"
    },
    {
        title: "Chess.com",
        description: "Play chess against AI or other players online.",
        category: "strategy",
        emoji: "♟️",
        url: "https://www.chess.com/play/computer"
    },
    {
        title: "Age of Empires",
        description: "Build civilizations and conquer territories.",
        category: "strategy",
        emoji: "🏛️",
        url: "#"
    },
    {
        title: "Clash of Clans",
        description: "Build your village and raid other players.",
        category: "strategy",
        emoji: "🛡️",
        url: "#"
    },

    // Arcade Games
    {
        title: "Pac-Man",
        description: "Classic arcade game - eat dots and avoid ghosts.",
        category: "arcade",
        emoji: "👻",
        featured: true,
        url: "https://www.google.com/logos/2010/pacman10-i.html"
    },
    {
        title: "Snake",
        description: "Grow your snake by eating food while avoiding walls.",
        category: "arcade",
        emoji: "🐍",
        url: "#"
    },
    {
        title: "Frogger",
        description: "Help the frog cross busy roads and rivers.",
        category: "arcade",
        emoji: "🐸",
        url: "#"
    },
    {
        title: "Space Invaders",
        description: "Defend Earth from descending alien invaders.",
        category: "arcade",
        emoji: "👾",
        url: "#"
    },
    {
        title: "Asteroids",
        description: "Navigate a spaceship through an asteroid field.",
        category: "arcade",
        emoji: "🚀",
        url: "#"
    },
    {
        title: "Centipede",
        description: "Shoot at the centipede as it moves down the screen.",
        category: "arcade",
        emoji: "🐛",
        url: "#"
    },

    // Additional Popular Games
    {
        title: "Minecraft Classic",
        description: "Build and explore in the classic version of Minecraft.",
        category: "arcade",
        emoji: "⛏️",
        url: "https://classic.minecraft.net/"
    },
    {
        title: "Slither.io",
        description: "Grow your snake by eating pellets and other players.",
        category: "arcade",
        emoji: "🐍",
        url: "https://slither.io/"
    },
    {
        title: "Agar.io",
        description: "Control a cell and absorb others to grow larger.",
        category: "arcade",
        emoji: "🦠",
        url: "https://agar.io/"
    },
    {
        title: "Paper.io",
        description: "Conquer territory by drawing lines and avoiding enemies.",
        category: "arcade",
        emoji: "📝",
        url: "https://paper-io.com/"
    },
    {
        title: "Shell Shockers",
        description: "First-person shooter game with egg characters.",
        category: "action",
        emoji: "🥚",
        url: "#"
    },
    {
        title: "Krunker.io",
        description: "Fast-paced multiplayer first-person shooter.",
        category: "action",
        emoji: "🔫",
        url: "https://krunker.io/"
    },
    {
        title: "Among Us",
        description: "Find the impostor among the crew members.",
        category: "strategy",
        emoji: "👨‍🚀",
        url: "#"
    },
    {
        title: "Fall Guys",
        description: "Battle royale party game with obstacle courses.",
        category: "arcade",
        emoji: "🏃",
        url: "#"
    },
    {
        title: "Cookie Clicker",
        description: "Click cookies to build a cookie empire.",
        category: "arcade",
        emoji: "🍪",
        url: "https://orteil.dashnet.org/cookieclicker/"
    },
    {
        title: "Geometry Dash",
        description: "Jump and fly through geometric obstacles.",
        category: "arcade",
        emoji: "📐",
        url: "#"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const gamesGrid = document.getElementById('gamesGrid');
const featuredGames = document.getElementById('featuredGames');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// State variables
let currentFilter = 'all';
let displayedGames = 0;
const gamesPerLoad = 12;
let filteredGames = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    displayFeaturedGames();
    filterGames('all');
    setupEventListeners();
});

// Navigation functionality
function initializeNavigation() {
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const searchResults = games.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm)
        );
        displayGames(searchResults);
        loadMoreBtn.style.display = 'none';
    });

    // Category filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and display games
            const category = this.dataset.category;
            currentFilter = category;
            filterGames(category);
        });
    });

    // Load more button
    loadMoreBtn.addEventListener('click', function() {
        loadMoreGames();
    });

    // Clear search when clicking search button
    document.querySelector('.search-btn').addEventListener('click', function() {
        searchInput.value = '';
        filterGames(currentFilter);
    });
}

// Display featured games
function displayFeaturedGames() {
    const featured = games.filter(game => game.featured);
    const featuredHTML = featured.map(game => createGameCard(game, true)).join('');
    featuredGames.innerHTML = featuredHTML;
}

// Filter games by category
function filterGames(category) {
    displayedGames = 0;
    if (category === 'all') {
        filteredGames = [...games];
    } else {
        filteredGames = games.filter(game => game.category === category);
    }
    
    gamesGrid.innerHTML = '';
    loadMoreGames();
}

// Load more games
function loadMoreGames() {
    const startIndex = displayedGames;
    const endIndex = Math.min(startIndex + gamesPerLoad, filteredGames.length);
    const gamesToShow = filteredGames.slice(startIndex, endIndex);
    
    const gamesHTML = gamesToShow.map(game => createGameCard(game)).join('');
    gamesGrid.innerHTML += gamesHTML;
    
    displayedGames = endIndex;
    
    // Hide load more button if all games are displayed
    if (displayedGames >= filteredGames.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }

    // Add fade-in animation to new games
    const newCards = gamesGrid.querySelectorAll('.game-card');
    newCards.forEach((card, index) => {
        if (index >= startIndex) {
            card.classList.add('fade-in');
        }
    });
}

// Display games (for search results)
function displayGames(gamesToDisplay) {
    const gamesHTML = gamesToDisplay.map(game => createGameCard(game)).join('');
    gamesGrid.innerHTML = gamesHTML;
    
    // Add fade-in animation
    const cards = gamesGrid.querySelectorAll('.game-card');
    cards.forEach(card => card.classList.add('fade-in'));
}

// Create game card HTML
function createGameCard(game, isFeatured = false) {
    const featuredClass = isFeatured ? 'featured-game' : '';
    return `
        <div class="game-card ${featuredClass}" data-game="${game.title}">
            <div class="game-image">
                <span style="font-size: 4rem;">${game.emoji}</span>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <span class="game-category">${game.category.charAt(0).toUpperCase() + game.category.slice(1)}</span>
                <button class="play-btn" onclick="playGame('${game.url}', '${game.title}')">
                    Play Now
                </button>
            </div>
        </div>
    `;
}

// Play game function
function playGame(url, title) {
    if (url === '#') {
        showComingSoon(title);
        return;
    }
    
    // For external games, open in new tab
    if (url.startsWith('http')) {
        window.open(url, '_blank');
    } else {
        // For embedded games, show in modal
        showGameModal(url, title);
    }
}

// Show coming soon message
function showComingSoon(title) {
    alert(`${title} is coming soon! We're working hard to add this game to our collection.`);
}

// Show game in modal (for embedded games)
function showGameModal(url, title) {
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.innerHTML = `
        <div class="game-modal-content">
            <div class="game-modal-header">
                <h3>${title}</h3>
                <button class="close-btn" onclick="closeGameModal()">&times;</button>
            </div>
            <iframe class="game-frame" src="${url}"></iframe>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGameModal();
        }
    });
}

// Close game modal
function closeGameModal() {
    const modal = document.querySelector('.game-modal');
    if (modal) {
        modal.remove();
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press '/' to focus search
    if (e.key === '/' && e.target !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Press 'Escape' to close modal
    if (e.key === 'Escape') {
        closeGameModal();
    }
});

// Add lazy loading for game images (placeholder for future enhancement)
function addLazyLoading() {
    const gameCards = document.querySelectorAll('.game-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });
    
    gameCards.forEach(card => {
        observer.observe(card);
    });
}

// Analytics placeholder (for future implementation)
function trackGamePlay(gameTitle) {
    console.log(`Game played: ${gameTitle}`);
    // Here you would typically send analytics data
}

// Error handling for failed game loads
window.addEventListener('error', function(e) {
    console.error('Game loading error:', e);
    // Could show user-friendly error message
});

// Service worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}