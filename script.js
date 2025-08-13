document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    
    const events = [
        {
            title: "Invasão da Polônia",
            date: "1° de Setembro, 1939",
            description: "A invasão da Polônia pela Alemanha nazista marcou o início oficial da Segunda Guerra Mundial. Esta ação provocou a declaração de guerra da França e Reino Unido contra a Alemanha.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bundesarchiv_Bild_101I-121-0011-18%2C_Polen%2C_Warschau%2C_Deutsche_Infanterie.jpg/800px-Bundesarchiv_Bild_101I-121-0011-18%2C_Polen%2C_Warschau%2C_Deutsche_Infanterie.jpg",
            moreInfoUrl: "https://pt.wikipedia.org/wiki/Invasão_da_Polônia"
        },
        {
            title: "Batalha da Grã-Bretanha",
            date: "Julho a Outubro, 1940",
            description: "Foi a primeira grande campanha travada inteiramente por forças aéreas. A Luftwaffe alemã tentou ganhar superioridade aérea sobre a RAF britânica, mas não teve sucesso.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hurricanes_over_Dunkirk.jpg/800px-Hurricanes_over_Dunkirk.jpg",
            moreInfoUrl: "https://pt.wikipedia.org/wiki/Batalha_da_Grã-Bretanha"
        },
        {
            title: "Ataque a Pearl Harbor",
            date: "7 de Dezembro, 1941",
            description: "O ataque surpresa japonês à base naval americana em Pearl Harbor, Havaí, levou os Estados Unidos a entrarem na Segunda Guerra Mundial.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/USS_Arizona_Pearl_Harbor.jpg/800px-USS_Arizona_Pearl_Harbor.jpg",
            moreInfoUrl: "https://pt.wikipedia.org/wiki/Ataque_a_Pearl_Harbor"
        },
        {
            title: "Batalha de Stalingrado",
            date: "Agosto 1942 - Fevereiro 1943",
            description: "Considerada a batalha mais sangrenta da história, marcou o ponto de virada na guerra na Frente Oriental. As forças soviéticas cercaram e destruíram o 6° Exército alemão.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Bundesarchiv_Bild_183-E0406-0022-001%2C_Russland%2C_Kampf_um_Stalingrad.jpg/800px-Bundesarchiv_Bild_183-E0406-0022-001%2C_Russland%2C_Kampf_um_Stalingrad.jpg",
            moreInfoUrl: "https://pt.wikipedia.org/wiki/Batalha_de_Stalingrado"
        },
        {
            title: "Dia D - Normandia",
            date: "6 de Junho, 1944",
            description: "O desembarque das forças aliadas na Normandia, França, foi a maior invasão anfíbia da história e marcou o início da libertação da Europa ocupada pelos nazistas.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/NormandySupply_edit.jpg/800px-NormandySupply_edit.jpg",
            moreInfoUrl: "https://pt.wikipedia.org/wiki/Dia_D"
        }
    ];
    
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${event.imageUrl}" alt="${event.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${event.title}</h3>
                <span class="card-date">${event.date}</span>
                <p class="card-description">${event.description}</p>
                <a href="${event.moreInfoUrl}" target="_blank" class="card-button">Saiba Mais</a>
            </div>
        `;
        
        cardsContainer.appendChild(card);
    });
});
