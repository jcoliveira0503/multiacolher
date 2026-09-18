const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
}


const psychologists = [

    {
        id: 'karinne-ramalho-goncalves',
        name: 'Karinne Ramalho Gonçalves',
        crp: 'CRP 05/63717',
        photo: 'images/karinne.jpg',
        city: 'Brasil',
        modality: 'Online',
        approaches: ['Gestalt'],
        specialties: [
            'Conflitos amorosos',
            'Autoaceitação',
            'Autoconhecimento',
            'Dependência emocional',
            'Desenvolvimento pessoal',
            'Ansiedade',
            'Depressão',
            'Estresse',
            'Angústia',
            'Relacionamentos'
        ],
        whatsapp: 'https://wa.me/5521965330122'
    },

    {
        id: 'thais-vieira-estrella',
        name: 'Thaís Vieira Estrella',
        crp: 'CRP 05/58434',
        photo: 'images/thais.jpg',
        city: 'Brasil',
        modality: 'Online',
        approaches: ['Gestalt'],
        specialties: [
            'Acompanhamento psicológico',
            'Acompanhamento terapêutico',
            'Autoconhecimento',
            'Autoestima',
            'Autocuidado',
            'Casamento',
            'Autonomia',
            'Conflitos amorosos',
            'Conflitos familiares',
            'Casais'
        ],
        whatsapp: 'https://wa.me/5521996269817'
    },

    {
        id: 'dayanne-santos-de-carvalho',
        name: 'Dayanne Santos de Carvalho',
        crp: 'CRP 05/68854',
        photo: 'images/dayanne.jpg',
        city: 'Brasil',
        modality: 'Online',
        approaches: ['TCC'],
        specialties: [
            'Acompanhamento psicológico',
            'Ansiedade',
            'Autocobrança',
            'Autoconhecimento',
            'Autoestima',
            'Angústia',
            'Autoconfiança',
            'Conflitos amorosos',
            'Dependência emocional',
            'Transtornos Alimentares'
        ],
        whatsapp: 'https://wa.me/5521981290447'
    },

    {
        id: 'luana-baptista-vianna',
        name: 'Luana Baptista Vianna',
        crp: 'CRP 05/65263',
        photo: 'images/luana.jpg',
        city: 'Brasil',
        modality: 'Online',
        approaches: ['Gestalt'],
        specialties: [
            'Autoestima',
            'Autoaceitação',
            'Autocobrança',
            'Autocuidado',
            'Ansiedade',
            'Empoderamento',
            'Medos',
            'Relacionamentos'
        ],
        whatsapp: 'https://wa.me/5521975543663'
    }

];


function card(p) {

    return `
        <article class="psych-card">

            <div class="avatar">
                <img src="${p.photo}" alt="${p.name}">
            </div>

            <div>

                <h3>${p.name}</h3>

                <div>${p.crp}</div>

                <div class="tags">
                    ${p.specialties.map(x => `
                        <span class="tag">${x}</span>
                    `).join('')}
                </div>

                <button class="specialty-toggle" type="button" aria-expanded="false">
                    Ver mais especialidades
                </button>

                <p>
                    <strong>${p.modality}</strong> • ${p.city}
                </p>

                <p>
                    <strong>Abordagem:</strong> ${p.approaches.join(', ')}
                </p>

                <div style="display:flex; gap:10px; flex-wrap:wrap;">

                    <a
                        class="btn btn-outline"
                        href="${p.id}.html"
                    >
                        Ver perfil
                    </a>

                    <a
                        class="btn btn-primary"
                        href="${p.whatsapp}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp
                    </a>

                </div>

            </div>

        </article>
    `;
}


const results = document.querySelector('#psychologist-results');

if (results) {

    const render = (list) => {

        results.innerHTML = list.length
            ? list.map(card).join('')
            : `<div class="empty">
                Nenhum profissional encontrado com esses filtros.
              </div>`;

    };


    render(psychologists);

    results.addEventListener('click', (event) => {
        const toggle = event.target.closest('.specialty-toggle');
        if (!toggle) return;

        const tags = toggle.previousElementSibling;
        const expanded = tags.classList.toggle('is-expanded');
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.textContent = expanded
            ? 'Ver menos especialidades'
            : 'Ver mais especialidades';
    });


    const filter = () => {

        const spec =
            document.querySelector('#specialty')?.value || '';

        const approach =
            document.querySelector('#approach')?.value || '';

        const modality =
            document.querySelector('#modality')?.value || '';


        render(
            psychologists.filter(p =>

                (!spec ||
                    p.specialties.includes(spec)) &&

                (!approach ||
                    p.approaches.includes(approach)) &&

                (!modality ||
                    p.modality === modality)

            )
        );

    };


    document
        .querySelector('#filter-btn')
        ?.addEventListener('click', filter);

}
/* =========================================================
   INSTAGRAM FLUTUANTE
   ========================================================= */

const floatingInstagram = document.createElement('a');

floatingInstagram.href = 'https://www.instagram.com/projetomultiacolher';
floatingInstagram.target = '_blank';
floatingInstagram.rel = 'noopener noreferrer';
floatingInstagram.className = 'floating-instagram';
floatingInstagram.setAttribute(
    'aria-label',
    'Instagram do Projeto Multi Acolher'
);

floatingInstagram.innerHTML = `
    <img src="images/instagram.png" alt="Instagram">
`;

document.body.appendChild(floatingInstagram);
/* =========================================================
   FAQ - COMO FUNCIONA
   ========================================================= */

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        const item = question.closest('.faq-item');

        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        if (!isActive) {
            item.classList.add('active');
        }

    });

});


/* =========================================================
   FAQ - ABRIR PERGUNTA PELO LINK DO RODAPÉ
   ========================================================= */

function openFaqFromHash() {

    const hash = window.location.hash;

    if (!hash) return;

    const faqItem = document.querySelector(hash);

    if (!faqItem || !faqItem.classList.contains('faq-item')) {
        return;
    }

    faqItem.classList.add('active');

    setTimeout(() => {

        faqItem.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

    }, 100);

}

openFaqFromHash();

window.addEventListener('hashchange', openFaqFromHash);


/* =========================================================
   AVALIACOES PUBLICADAS A PARTIR DO GOOGLE SHEETS
   ========================================================= */

const reviewsConfig = {
    // A planilha precisa estar compartilhada como "Qualquer pessoa com o link".
    spreadsheetId: '1lEvD6hzchSC0HzQe4gh1PkkOT6k49l_02f7qK2UheUQ',
    sheetName: 'Publicadas'
};

const reviewProfiles = {
    'karinne-ramalho-goncalves.html': 'Karinne Ramalho Goncalves',
    'thais-vieira-estrella.html': 'Thais Vieira Estrella',
    'dayanne-santos-de-carvalho.html': 'Dayanne Santos de Carvalho',
    'luana-baptista-vianna.html': 'Luana Baptista Vianna'
};

function normalizeReviewText(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();
}

function parseCsv(csv) {
    const rows = [];
    let row = [];
    let cell = '';
    let quoted = false;

    for (let index = 0; index < csv.length; index += 1) {
        const character = csv[index];
        const nextCharacter = csv[index + 1];

        if (character === '"' && quoted && nextCharacter === '"') {
            cell += '"';
            index += 1;
        } else if (character === '"') {
            quoted = !quoted;
        } else if (character === ',' && !quoted) {
            row.push(cell);
            cell = '';
        } else if ((character === '\n' || character === '\r') && !quoted) {
            if (character === '\r' && nextCharacter === '\n') index += 1;
            row.push(cell);
            if (row.some(value => value.trim())) rows.push(row);
            row = [];
            cell = '';
        } else {
            cell += character;
        }
    }

    if (cell || row.length) {
        row.push(cell);
        if (row.some(value => value.trim())) rows.push(row);
    }

    if (rows.length < 2) return [];

    const headers = rows.shift().map(normalizeReviewText);
    return rows.map(values => Object.fromEntries(
        headers.map((header, index) => [header, (values[index] || '').trim()])
    ));
}

function getReviewField(review, names) {
    const key = Object.keys(review).find(field => names.includes(field));
    return key ? review[key] : '';
}

function renderPublishedReviews(reviews) {
    const evaluationSection = document.querySelector('.evaluations');
    if (!evaluationSection) return;

    let reviewTrack = evaluationSection.querySelector('.review-track');

    const count = reviews.length;
    const total = reviews.reduce((sum, review) => {
        const score = Number(getReviewField(review, ['nota', 'nota (1 a 5)', 'avaliacao']));
        return sum + (Number.isFinite(score) ? score : 0);
    }, 0);
    const average = count ? (total / count).toFixed(1) : '—';

    const countText = count === 1 ? '1 pessoa avaliou esta profissional.' : `${count} pessoas avaliaram esta profissional.`;
    const countLabel = count === 1 ? '1 avaliação' : `${count} avaliações`;
    const headerText = evaluationSection.querySelector('.evaluations-header p');
    const score = evaluationSection.querySelector('.evaluation-score strong');
    const scoreLabel = evaluationSection.querySelector('.evaluation-score span');
    const professionalRating = document.querySelector('.professional-rating');
    const professionalStars = professionalRating?.querySelectorAll('span');
    const professionalRatingLink = professionalRating?.querySelector('a');
    const filledStars = count ? Math.round(Number(average)) : 0;

    if (headerText) headerText.textContent = count ? countText : 'Ainda não há avaliações aprovadas para esta profissional.';
    if (score) score.textContent = average;
    if (scoreLabel) scoreLabel.textContent = count ? countLabel : 'Sem avaliações';
    professionalStars?.forEach((star, index) => {
        star.textContent = index < filledStars ? '★' : '☆';
    });
    if (professionalRatingLink) {
        professionalRatingLink.textContent = count ? countLabel : 'Ainda sem avaliações';
    }

    if (!count) {
        reviewTrack?.closest('.review-marquee')?.remove();
        return;
    }

    if (!reviewTrack) {
        const evaluationBox = evaluationSection.querySelector('.evaluation-box');
        if (!evaluationBox) return;

        const reviewMarquee = document.createElement('div');
        reviewMarquee.className = 'review-marquee';
        reviewTrack = document.createElement('div');
        reviewTrack.className = 'review-track';
        reviewMarquee.appendChild(reviewTrack);

        const evaluationStars = evaluationBox.querySelector('.evaluation-stars');
        evaluationBox.insertBefore(reviewMarquee, evaluationStars || evaluationBox.firstChild);
    }

    reviewTrack.innerHTML = reviews.map(review => {
        const note = Math.max(1, Math.min(5, Number(getReviewField(review, ['nota', 'nota (1 a 5)', 'avaliacao'])) || 5));
        const comment = getReviewField(review, ['comentario', 'comentario da avaliacao', 'comentario (opcional)']);
        const author = getReviewField(review, ['nome', 'nome (opcional)', 'autor']) || 'Anônimo';
        const stars = '★'.repeat(note) + '☆'.repeat(5 - note);

        return `<div class="review-item">
            <div class="review-stars">${stars}</div>
            <p class="review-text">&quot;${escapeReviewHtml(comment)}&quot;</p>
            <span class="review-author">— ${escapeReviewHtml(author)}</span>
        </div>`;
    }).join('');
}

function escapeReviewHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[character]));
}

async function loadPublishedReviews() {
    const profileName = reviewProfiles[window.location.pathname.split('/').pop()];
    if (!reviewsConfig.spreadsheetId || !profileName) return;

    try {
        const csvUrl = `https://docs.google.com/spreadsheets/d/${reviewsConfig.spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(reviewsConfig.sheetName)}`;
        const response = await fetch(csvUrl, { cache: 'no-store' });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const csv = await response.text();
        if (/<!doctype html|<html[\s>]/i.test(csv)) {
            throw new Error('A planilha não está pública ou a URL não aponta para uma aba do Google Sheets.');
        }

        const reviews = parseCsv(csv).filter(review =>
            normalizeReviewText(getReviewField(review, ['profissional', 'psicologa', 'psicologo'])) === normalizeReviewText(profileName)
        );

        renderPublishedReviews(reviews);
    } catch (error) {
        console.error('Não foi possível carregar as avaliações publicadas.', error);
    }
}

loadPublishedReviews();