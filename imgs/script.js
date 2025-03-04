document.addEventListener('DOMContentLoaded', function() {
    // Prevent default scrolling
    document.body.style.overflow = 'hidden';
    
    // Get the archive button
    const archiveBtn = document.getElementById('archiveBtn');
    
    // Add click event listener for smooth scrolling
    archiveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Scroll to the archive section
        document.getElementById('archive').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Statue content database
    const statueData = {
        // Chinese origin
        "chinese-animal": {
            title: "FOODOGS",
            description: "A Chinese mythical creature, Foo Dogs are guardian lions that protect buildings from harmful spiritual influences. They typically appear in pairs and are placed at entrances.",
            image: "imgs/foodogs.png"
        },
        "chinese-body": {
            title: "TERRACOTTA WARRIORS",
            description: "Life-sized clay soldiers created to protect Emperor Qin Shi Huang in the afterlife. Over 8,000 unique figures were buried with the emperor around 210 BCE.",
            image: "imgs/chinese-body.png"
        },
        "chinese-head": {
            title: "BUDDHA HEAD",
            description: "Serene depictions of Buddha's head, representing wisdom and enlightenment in Chinese Buddhist art. Often characterized by elongated earlobes and a calm expression.",
            image: "imgs/chinese-head.png"
        },
        
        // European origin
        "europe-animal": {
            title: "GRIFFIN STATUE",
            description: "A legendary creature with the body of a lion and the head and wings of an eagle. In European art, griffins symbolize courage, strength, and divine power.",
            image: "imgs/europe-animal.png"
        },
        "europe-body": {
            title: "VENUS DE MILO",
            description: "An ancient Greek sculpture from approximately 100 BCE, believed to depict Aphrodite. Known for its missing arms, it exemplifies Hellenistic ideals of beauty.",
            image: "imgs/europe-body.png"
        },
        "europe-head": {
            title: "DAVID HEAD",
            description: "Michelangelo's David, completed in 1504, portrays the Biblical hero with intense concentration before his battle with Goliath, exemplifying Renaissance ideals.",
            image: "imgs/europe-head.png"
        },
        
        // Indian origin
        "indian-animal": {
            title: "NANDI BULL",
            description: "The sacred bull that serves as the mount of Lord Shiva. Nandi statues are commonly found outside Shiva temples, symbolizing strength and fertility.",
            image: "imgs/indian-animal.png"
        },
        "indian-body": {
            title: "DANCING SHIVA",
            description: "Nataraja depicts Lord Shiva performing the cosmic dance of creation and destruction. The dancing posture symbolizes the eternal cycle of time.",
            image: "imgs/indian-body.png"
        },
        "indian-head": {
            title: "BUDDHA HEAD SARNATH",
            description: "The serene Buddha head from Sarnath represents the moment of enlightenment. Its distinctive features include half-closed eyes and an enigmatic smile.",
            image: "imgs/indian-head.png"
        },
        
        // French origin
        "france-animal": {
            title: "GALLIC ROOSTER",
            description: "The unofficial national symbol of France, the Gallic Rooster (Coq Gaulois) represents vigilance and bravery in French sculptural traditions.",
            image: "imgs/france-animal.png"
        },
        "france-body": {
            title: "THE THINKER",
            description: "Auguste Rodin's famous bronze sculpture depicts a nude male figure in deep contemplation. Created in 1880, it represents philosophy and intellectual struggle.",
            image: "imgs/france-body.png"
        },
        "france-head": {
            title: "MARIANNE BUST",
            description: "The symbolic figure of the French Republic, Marianne represents liberty and reason. Her bust is displayed prominently in government buildings across France.",
            image: "imgs/france-head.png"
        },
        
        // Aztec origin
        "aztec-animal": {
            title: "QUETZALCOATL",
            description: "The feathered serpent deity, one of the most important gods in Mesoamerican culture. Quetzalcoatl represented wisdom, creation, and the boundary between earth and sky.",
            image: "imgs/aztec-animal.png"
        },
        "aztec-body": {
            title: "CHACMOOL",
            description: "A distinctive type of Mesoamerican sculpture depicting a reclining figure with its head turned to one side, holding a bowl on its stomach for sacrificial offerings.",
            image: "imgs/aztec-body.png"
        },
        "aztec-head": {
            title: "COYOLXAUHQUI STONE",
            description: "A massive circular relief depicting the dismembered goddess Coyolxauhqui, representing the moon. It was discovered at the base of the Templo Mayor in Mexico City.",
            image: "imgs/aztec-head.png"
        },
        
        // Greek origin
        "greek-animal": {
            title: "CERBERUS",
            description: "The three-headed dog that guards the entrance to the Underworld in Greek mythology. It prevented the dead from escaping and the living from entering.",
            image: "imgs/greek-animal.png"
        },
        "greek-body": {
            title: "DISCOBOLUS",
            description: "The Discus Thrower, a famous Greek sculpture depicting an athlete in the moment before releasing a discus. It exemplifies the Classical period's focus on human movement.",
            image: "imgs/greek-body.png"
        },
        "greek-head": {
            title: "HERMES HEAD",
            description: "Portraying the messenger god Hermes, these sculptures often feature a youthful face with curly hair, embodying the Classical Greek ideal of male beauty.",
            image: "imgs/greek-head.png"
        }
    };

    // Function to directly update content based on selection
    function updateContent(origin, type) {
        // Find the right data
        const key = origin + "-" + type;
        const data = statueData[key];
        
        if (!data) return;
        
        // Directly update the DOM elements by their IDs
        document.getElementById("statue-title").innerText = data.title;
        document.getElementById("statue-description").innerText = data.description;
        document.getElementById("statue-image").src = data.image;
    }
    
    // Set up event listeners for the dropdowns
    const originSelect = document.getElementById("origin-select");
    const typeSelect = document.getElementById("type-select");
    
    if (originSelect && typeSelect) {
        // When origin changes
        originSelect.onchange = function() {
            updateContent(this.value, typeSelect.value);
        };
        
        // When type changes
        typeSelect.onchange = function() {
            updateContent(originSelect.value, this.value);
        };
        
        // Initial update
        updateContent(originSelect.value, typeSelect.value);
    } else {
        console.error("Could not find dropdown selects!");
    }
});