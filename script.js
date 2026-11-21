'use strict';

// ---------- Data her ----------
const games = [
  { name: 'Carcassonne', min: 2, max: 5, time: 45, genre: 'Rodinné', desc: 'Skládáte dlaždice a stavíte krajinu s městy, cestami a kláštery.' },
  { name: 'Ticket to Ride', min: 2, max: 5, time: 60, genre: 'Rodinné', desc: 'Sbíráte karty vlaků a budujete trasy mezi městy.' },
  { name: 'Colt Express', min: 2, max: 6, time: 40, genre: 'Rodinné', desc: 'Přepadáte vlak na Divokém západě a akce plánujete předem.' },
  { name: 'Karak', min: 2, max: 5, time: 45, genre: 'Rodinné', desc: 'Procházíte dungeonem, bojujete s příšerami a sbíráte poklady.' },
  { name: 'Azul', min: 2, max: 4, time: 45, genre: 'Strategické', desc: 'Vybíráte barevné dlaždičky a vykládáte z nich zeď.' },
  { name: 'Catan', min: 3, max: 4, time: 90, genre: 'Strategické', desc: 'Těžíte suroviny, obchodujete a rozšiřujete osady.' },
  { name: 'Wingspan', min: 1, max: 5, time: 70, genre: 'Strategické', desc: 'Lákáte do svých rezervací ptáky a budujete jejich kombinace.' },
  { name: 'Root', min: 2, max: 4, time: 90, genre: 'Strategické', desc: 'Asymetrické frakce soupeří o vládu nad lesem a každá se hraje jinak.' },
  { name: 'Arcs', min: 2, max: 4, time: 90, genre: 'Strategické', desc: 'Vesmírná strategie, ve které pomocí karet bojujete o vliv a zdroje.' },
  { name: 'Oath', min: 1, max: 6, time: 120, genre: 'Strategické', desc: 'Strategie o vzestupu a pádu říší, jejíž příběh se mění podle toho, jak hrajete.' },
  { name: 'Brass: Birmingham', min: 2, max: 4, time: 120, genre: 'Strategické', desc: 'Ekonomická strategie z doby průmyslové revoluce v Anglii.' },
  { name: 'Pandemic', min: 2, max: 4, time: 60, genre: 'Kooperativní', desc: 'Společně léčíte nemoci dřív, než se rozšíří po světě.' },
  { name: 'Záchranáři: Boj s ohněm', min: 1, max: 6, time: 45, genre: 'Kooperativní', desc: 'Společně hasíte požár v hořící budově a zachraňujete lidi.' },
  { name: 'Dobrodružné legendy Andor', min: 2, max: 4, time: 90, genre: 'Kooperativní', desc: 'Hrdinové brání království a každá legenda je jiný příběh.' },
  { name: 'Room 25', min: 1, max: 8, time: 30, genre: 'Kooperativní', desc: 'Hledáte cestu ven z pohyblivého labyrintu místností.' },
  { name: 'Plyšová hlídka', min: 2, max: 4, time: 90, genre: 'Kooperativní', desc: 'Plyšáci hlídají holčičku před lordem Hrůzimorem.' },
  { name: 'Zima mrtvých', min: 2, max: 5, time: 90, genre: 'Kooperativní', desc: 'Skupina přeživších se snaží přežít zimu mezi zombie. Ne každému se dá věřit.' },
  { name: 'Earthborne Rangers', min: 1, max: 4, time: 120, genre: 'Kooperativní', desc: 'Kampaňová karetní hra, kde za strážce Údolí stavíte vlastní balíček.' },
  { name: 'Codenames', min: 2, max: 8, time: 15, genre: 'Párty', desc: 'Týmy hádají slova podle jednoslovných nápověd.' },
  { name: 'Dixit', min: 3, max: 6, time: 30, genre: 'Párty', desc: 'Popisujete obrázkové karty a ostatní hádají, která je vaše.' },
  { name: 'Unmatched: Souboj legend', min: 2, max: 4, time: 30, genre: 'Souboje', desc: 'Souboje slavných hrdinů a postav z mýtů, každá má vlastní balíček karet.' },
  { name: 'Summoner Wars', min: 2, max: 2, time: 45, genre: 'Souboje', desc: 'Přivoláváte jednotky a vedete bitvy armád na malém poli.' },
  { name: 'Mage Wars', min: 2, max: 4, time: 90, genre: 'Souboje', desc: 'Kouzelníci proti sobě bojují na aréně se svou knihou kouzel.' },
  { name: 'Warhammer Underworlds', min: 2, max: 2, time: 45, genre: 'Miniaturové', desc: 'Taktické souboje malých bojových skupin ve fantasy světě.' },
  { name: 'Warhammer Warcry', min: 2, max: 2, time: 60, genre: 'Miniaturové', desc: 'Rychlé potyčky skupin válečníků ve světě Age of Sigmar.' },
  { name: 'Blood Bowl', min: 2, max: 2, time: 90, genre: 'Miniaturové', desc: 'Fantasy verze amerického fotbalu s figurkami, týmy se střetávají na hřišti.' },
  { name: 'Arkham Horror: Karetní hra', min: 1, max: 4, time: 90, genre: 'Karetní', desc: 'Vyšetřovatelé v kampaních odhalují lovecraftovská tajemství.' },
  { name: 'Pán prstenů: Karetní hra', min: 1, max: 4, time: 60, genre: 'Karetní', desc: 'Družina hrdinů putuje Středozemím v kooperativních scénářích.' },
  { name: 'Call of Cthulhu (hra na hrdiny)', min: 3, max: 6, time: 180, genre: 'Hra na hrdiny', desc: 'Hororová hra na hrdiny podle H. P. Lovecrafta: vyšetřovatelé odhalují tajemství a čelí šílenství, příběh vede Strážce.' },
  { name: 'Bloodborne: Karetní hra', min: 2, max: 5, time: 45, genre: 'Karetní', desc: 'Karetní hra inspirovaná temnou videohrou Bloodborne.' },
  { name: 'Gundam TCG', min: 2, max: 2, time: 20, genre: 'Karetní', desc: 'Sběratelská karetní hra se stroji z franšízy Gundam pro dva hráče.' },
  { name: 'Dračí doupě II', min: 3, max: 6, time: 180, genre: 'Hra na hrdiny', desc: 'Česká hra na hrdiny: Pán jeskyně vypráví příběh a družina ho prožívá.' }
];

const fits = (g, n) => n === 0 || (g.min <= n && n <= g.max); // n = 0 znamená libovolný počet

// ---------- Menu na mobilu ----------
const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
const mq = window.matchMedia('(min-width: 768px)');
function syncMenu() {
  menu.hidden = mq.matches ? false : menuBtn.getAttribute('aria-expanded') !== 'true';
}
menuBtn.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  syncMenu();
});
mq.addEventListener('change', syncMenu);
syncMenu();

// ---------- Úvod: poradce a kostka ----------
const picker = document.querySelector('#picker');
if (picker) {
  const pickGenre = document.querySelector('#pick-genre');
  [...new Set(games.map((g) => g.genre))].forEach((name) => {
    const o = document.createElement('option');
    o.textContent = name;
    pickGenre.append(o);
  });

  picker.addEventListener('submit', (e) => {
    e.preventDefault();
    const n = Number(document.querySelector('#players').value);
    const t = Number(document.querySelector('#time').value);
    const err = document.querySelector('#pick-err');
    const out = document.querySelector('#pick-out');
    if (!n || !t) {
      err.textContent = 'Vyberte počet hráčů i čas.';
      out.textContent = '';
      return;
    }
    err.textContent = '';
    const wanted = pickGenre.value; // prázdný text = jakýkoliv žánr
    const ok = games.filter((g) => fits(g, n) && g.time <= t && (wanted === '' || g.genre === wanted));
    if (ok.length === 0) {
      out.textContent = 'Pro tuto kombinaci nic nemáme, zkuste víc času, jiný počet hráčů nebo jiný žánr.';
      return;
    }
    const g = ok[Math.floor(Math.random() * ok.length)];
    out.textContent = `Zkuste ${g.name} (${g.genre}, asi ${g.time} min).`;
  });

  const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  document.querySelector('#roll').addEventListener('click', () => {
    const v = Math.floor(Math.random() * 6);
    document.querySelector('#die').textContent = faces[v];
    document.querySelector('#roll-out').textContent = `Padlo ${v + 1}.`;
  });
}

// ---------- Katalog: filtrování ----------
const list = document.querySelector('#list');
if (list) {
  const tpl = document.querySelector('#game-tpl');
  const q = document.querySelector('#q');
  const genre = document.querySelector('#genre');
  const cnt = document.querySelector('#cnt');
  const count = document.querySelector('#count');

  [...new Set(games.map((g) => g.genre))].forEach((name) => {
    const o = document.createElement('option');
    o.textContent = name;
    genre.append(o);
  });

  function render() {
    const text = q.value.trim().toLowerCase();
    const n = Number(cnt.value);
    const shown = games.filter((g) =>
      g.name.toLowerCase().includes(text) &&
      (genre.value === '' || g.genre === genre.value) &&
      fits(g, n));
    list.replaceChildren(...shown.map((g) => {
      const el = tpl.content.firstElementChild.cloneNode(true);
      el.dataset.genre = g.genre;
      el.querySelector('h3').textContent = g.name;
      el.querySelector('.meta').textContent = `${g.min}–${g.max} hráčů, asi ${g.time} min`;
      el.querySelector('.desc').textContent = g.desc;
      el.querySelector('.tag').textContent = g.genre;
      return el;
    }));
    count.textContent = shown.length === 0 ? 'Nic nenalezeno.' : `Nalezeno her: ${shown.length}`;
  }
  [q, genre, cnt].forEach((el) => el.addEventListener('input', render));
  render();
}

// ---------- Kontakt: validace ----------
const form = document.querySelector('#contact');
if (form) {
  const fav = document.querySelector('#fav');
  [...new Set(games.map((g) => g.genre))].forEach((name) => {
    const o = document.createElement('option');
    o.textContent = name;
    fav.append(o);
  });
  const rules = {
    name: (v) => (v.trim().length < 2 ? 'Zadejte jméno (alespoň 2 znaky).' : ''),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Zadejte platný e-mail, např. jan@seznam.cz.'),
    fav: (v) => (v === '' ? 'Vyberte žánr.' : ''),
    msg: (v) => (v.trim().length < 10 ? 'Zpráva musí mít alespoň 10 znaků.' : '')
  };
  function check(id) {
    const el = document.querySelector('#' + id);
    const m = rules[id](el.value);
    document.querySelector('#e-' + id).textContent = m;
    el.setAttribute('aria-invalid', String(m !== ''));
    return m === '';
  }
  Object.keys(rules).forEach((id) => document.querySelector('#' + id).addEventListener('blur', () => check(id)));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const all = Object.keys(rules).map(check);
    const ok = document.querySelector('#ok');
    if (all.every(Boolean)) {
      ok.hidden = false;
      ok.textContent = `Díky, ${document.querySelector('#name').value.trim()}! Tip je ověřený (školní ukázka, nikam se neodesílá).`;
      form.reset();
    } else {
      ok.hidden = true;
      form.querySelector('[aria-invalid="true"]').focus();
    }
  });
}
