// Firebase Realtime Database
const FIREBASE_DB_URL = "https://lap-web-22840-default-rtdb.firebaseio.com";
const FIREBASE_PATH = "/lap_pit_guild.json";

// Účty: pouze bowman (Bowmanik) má roli 'admin', všichni ostatní mají roli 'user'
const ACCOUNTS = [
  { username: "bowman", mcNick: "Bowmanik", password: "bowman999", role: "admin" },
  { username: "brumik", mcNick: "Ouwkk", password: "brumik101", role: "user" },
  { username: "domezis", mcNick: "Domeziss", password: "domezis102", role: "user" },
  { username: "janci", mcNick: "DigYourGrave", password: "janci103", role: "user" },
  { username: "haft", mcNick: "Haft_", password: "haft104", role: "user" },
  { username: "etrox", mcNick: "etroxq", password: "etrox105", role: "user" },
  { username: "steveq", mcNick: "Stuiviiq", password: "steveq106", role: "user" },
  { username: "nerko", mcNick: "PorscheAirlines", password: "nerko107", role: "user" },
  { username: "witrix", mcNick: "Wuixiiq", password: "witrix108", role: "user" },
  { username: "madi", mcNick: "451MadisonBearr", password: "madi109", role: "user" },
  { username: "zumo", mcNick: "ItsZUMO", password: "zumo110", role: "user" },
  { username: "fedasko", mcNick: "Fedasko", password: "fedasko111", role: "user" },
  { username: "pandis", mcNick: "Pqndiss", password: "pandis112", role: "user" },
  { username: "stromz", mcNick: "stormzthechamp", password: "stromz113", role: "user" },
  { username: "kerry", mcNick: "Kerry_rp", password: "kerry114", role: "user" },
  { username: "feroslav", mcNick: "CLSAirlines", password: "feroslav115", role: "user" },
  { username: "somfrajer", mcNick: "SomFrajerMore", password: "somfrajer116", role: "user" },
  { username: "trond", mcNick: "Tronndd", password: "trond117", role: "user" }
];

const PANTS_COLORS = [
  { id: "red", name: "Red", swatchClass: "swatch-red", cardClass: "color-red" },
  { id: "green", name: "Green", swatchClass: "swatch-green", cardClass: "color-green" },
  { id: "blue", name: "Blue", swatchClass: "swatch-blue", cardClass: "color-blue" },
  { id: "yellow", name: "Yellow", swatchClass: "swatch-yellow", cardClass: "color-yellow" }
];

const DEFAULT_ENCHANT_CATALOG = [
  { id: "enc_prot", name: "Protection", rarity: "common" },
  { id: "enc_billy", name: "Billy", rarity: "common" },
  { id: "enc_dia_allergy", name: "Diamond Allergy", rarity: "common" },
  { id: "enc_criket", name: "Criket", rarity: "common" },
  { id: "enc_pebble", name: "Pebble", rarity: "common" },
  { id: "enc_life_saver", name: "Life Saver", rarity: "common" },

  { id: "enc_solitude", name: "Solitude", rarity: "rare" },
  { id: "enc_booboo", name: "Boo-Boo", rarity: "rare" },
  { id: "enc_counter", name: "Counter-Offensive", rarity: "rare" },
  { id: "enc_always_ready", name: "Always Ready", rarity: "rare" },
  { id: "enc_ring_armor", name: "Ring Armor", rarity: "rare" },
  { id: "enc_coverage", name: "Coverage", rarity: "rare" },
  { id: "enc_speedrunner", name: "Speedrunner", rarity: "rare" },

  { id: "enc_not_glad", name: "\"Not\"Gladiator", rarity: "epic" },
  { id: "enc_excess", name: "Excess", rarity: "epic" },
  { id: "enc_antivirus", name: "Antivirus", rarity: "epic" },
  { id: "enc_david_golias", name: "David and Golias", rarity: "epic" },
  { id: "enc_really_alive", name: "Really Alive", rarity: "epic" }
];

const RARITY_WEIGHTS = {
  common: 60,
  rare: 30,
  epic: 10
};

const ROMAN_TIERS = ["", "I", "II", "III"];
const EMPTY_TIERS_T0_TO_T10 = Array(11).fill(null);

function formatNowCzech() {
  return new Date().toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

const defaultData = {
  weekName: "Týden #1 • LAP The Pit",
  lastUpdated: formatNowCzech(),
  totalChestOverride: null,
  enchantCatalog: structuredClone(DEFAULT_ENCHANT_CATALOG),
  objectives: [],
  announcements: [],
  players: [
    { id: 1, nick: "Ouwkk", rank: "Elder", prestige: 24, weeklyGoal: 1000, contrib: {} },
    { id: 2, nick: "Domeziss", rank: "Leader", prestige: 24, weeklyGoal: 1000, contrib: {} },
    { id: 3, nick: "Bowmanik", rank: "Co-leader", prestige: 27, weeklyGoal: 1000, contrib: {} },
    { id: 4, nick: "DigYourGrave", rank: "Co-leader", prestige: 27, weeklyGoal: 1000, contrib: {} },
    { id: 5, nick: "Haft_", rank: "Co-leader", prestige: 31, weeklyGoal: 1000, contrib: {} },
    { id: 6, nick: "etroxq", rank: "Elder", prestige: 16, weeklyGoal: 1000, contrib: {} },
    { id: 7, nick: "Stuiviiq", rank: "Elder", prestige: 21, weeklyGoal: 1000, contrib: {} },
    { id: 8, nick: "PorscheAirlines", rank: "Elder", prestige: 33, weeklyGoal: 1000, contrib: {} },
    { id: 9, nick: "Wuixiiq", rank: "Elder", prestige: 25, weeklyGoal: 1000, contrib: {} },
    { id: 10, nick: "451MadisonBearr", rank: "Elder", prestige: 18, weeklyGoal: 1000, contrib: {} },
    { id: 11, nick: "ItsZUMO", rank: "Member", prestige: 24, weeklyGoal: 1000, contrib: {} },
    { id: 12, nick: "Fedasko", rank: "Member", prestige: 21, weeklyGoal: 1000, contrib: {} },
    { id: 13, nick: "Pqndiss", rank: "Member", prestige: 21, weeklyGoal: 1000, contrib: {} },
    { id: 14, nick: "stormzthechamp", rank: "Member", prestige: 18, weeklyGoal: 1000, contrib: {} },
    { id: 15, nick: "Kerry_rp", rank: "Member", prestige: 22, weeklyGoal: 1000, contrib: {} },
    { id: 16, nick: "CLSAirlines", rank: "Member", prestige: 16, weeklyGoal: 1000, contrib: {} },
    { id: 17, nick: "SomFrajerMore", rank: "Member", prestige: 15, weeklyGoal: 1000, contrib: {} },
    { id: 18, nick: "Tronndd", rank: "Member", prestige: 20, weeklyGoal: 1000, contrib: {} }
  ],
  history: []
};

const authState = {
  currentUser: JSON.parse(sessionStorage.getItem("lap_pit_session")) || null
};

const pantsState = {
  cratesOpened: 0,
  pantsDroppedCount: 0,
  currentPants: null,
  savedPants: JSON.parse(localStorage.getItem("lap_pit_saved_pants_v1")) || []
};

let data = loadData();
let isSyncingFromRemote = false;

function getMcHeadUrl(nick, size = 48) {
  return `https://mc-heads.net/avatar/${encodeURIComponent(nick)}/${size}`;
}

function parseOptionalTierGoal(val) {
  if (val === null || val === undefined || String(val).trim() === "") return null;
  const num = Number(val);
  return Number.isFinite(num) && num > 0 ? Math.floor(num) : null;
}

function normalizeObjective(obj) {
  const tiers = Array.isArray(obj.tiers) && obj.tiers.length === 11
    ? obj.tiers.map(parseOptionalTierGoal)
    : [...EMPTY_TIERS_T0_TO_T10];

  const activeTier = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
  const currentDone = typeof obj.currentDone === "number" && !Number.isNaN(obj.currentDone)
    ? Math.max(0, obj.currentDone)
    : null;

  return {
    ...obj,
    tiers,
    activeTier,
    currentDone,
    rewardCompleted: Boolean(obj.rewardCompleted)
  };
}

function hydrateData(parsed) {
  const base = structuredClone(defaultData);
  const overrideVal = parsed.totalChestOverride === null || parsed.totalChestOverride === undefined
    ? null
    : Math.min(10, Math.max(0, Number(parsed.totalChestOverride) || 0));

  const catalog = Array.isArray(parsed.enchantCatalog) && parsed.enchantCatalog.length > 0
    ? parsed.enchantCatalog.map((e, i) => ({
        id: e.id || `enc_${i}_${Date.now()}`,
        name: String(e.name || "Enchant"),
        rarity: ["common", "rare", "epic"].includes(e.rarity) ? e.rarity : "common"
      }))
    : structuredClone(DEFAULT_ENCHANT_CATALOG);

  return {
    ...base,
    ...parsed,
    lastUpdated: parsed.lastUpdated || formatNowCzech(),
    totalChestOverride: overrideVal,
    enchantCatalog: catalog,
    objectives: Array.isArray(parsed.objectives)
      ? parsed.objectives.map(normalizeObjective)
      : [],
    announcements: Array.isArray(parsed.announcements)
      ? parsed.announcements.map(a => ({
          ...a,
          author: a.author || "Člen LAP",
          pinned: Boolean(a.pinned)
        }))
      : [],
    players: Array.isArray(parsed.players)
      ? parsed.players.map(p => ({
          ...p,
          rank: p.rank || "Member",
          prestige: Math.max(0, Number(p.prestige) || 0),
          weeklyGoal: Math.max(0, Number(p.weeklyGoal) || 0),
          contrib: p.contrib || {}
        }))
      : base.players,
    history: Array.isArray(parsed.history) ? parsed.history : []
  };
}

function loadData() {
  try {
    if (window.location.hash.startsWith("#pit=")) {
      const raw = window.location.hash.replace("#pit=", "");
      const parsed = JSON.parse(decodeURIComponent(atob(raw)));
      const hydrated = hydrateData(parsed);
      localStorage.setItem("lap_pit_data_v14", JSON.stringify(hydrated));
      return hydrated;
    }
    const saved = localStorage.getItem("lap_pit_data_v14");
    if (!saved) return structuredClone(defaultData);
    return hydrateData(JSON.parse(saved));
  } catch {
    return structuredClone(defaultData);
  }
}

async function fetchRemoteData() {
  const res = await fetch(`${FIREBASE_DB_URL}${FIREBASE_PATH}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Chyba při čtení databáze");
  const json = await res.json();
  return json ? hydrateData(json) : null;
}

async function pushRemoteData(payload) {
  const res = await fetch(`${FIREBASE_DB_URL}${FIREBASE_PATH}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Chyba při zápisu do databáze");
}

function saveData(touchTimestamp = true, syncRemote = true) {
  if (touchTimestamp) {
    data.lastUpdated = formatNowCzech();
  }
  localStorage.setItem("lap_pit_data_v14", JSON.stringify(data));
  renderAll();

  if (syncRemote && !isSyncingFromRemote) {
    pushRemoteData(data).catch(() => {
      showToast("Uloženo lokálně (nepodařilo se spojit s Firebase).");
    });
  }
}

async function initRealtimeSync() {
  try {
    const remote = await fetchRemoteData();
    if (remote) {
      data = remote;
      localStorage.setItem("lap_pit_data_v14", JSON.stringify(data));
      renderAll();
    } else {
      await pushRemoteData(data);
    }
  } catch {
    // Pokud není připojení, zůstanou lokální data
  }

  setInterval(async () => {
    if (document.hidden) return;
    try {
      const latest = await fetchRemoteData();
      if (!latest) return;
      const currentSerialized = JSON.stringify(data);
      const latestSerialized = JSON.stringify(latest);
      if (currentSerialized !== latestSerialized) {
        isSyncingFromRemote = true;
        data = latest;
        localStorage.setItem("lap_pit_data_v14", JSON.stringify(data));
        renderAll();
        isSyncingFromRemote = false;
      }
    } catch {
      // Tichý pokus na pozadí
    }
  }, 4000);
}

function saveSavedPants() {
  localStorage.setItem("lap_pit_saved_pants_v1", JSON.stringify(pantsState.savedPants));
}

function saveSession() {
  if (authState.currentUser) {
    sessionStorage.setItem("lap_pit_session", JSON.stringify(authState.currentUser));
  } else {
    sessionStorage.removeItem("lap_pit_session");
  }
  applyPermissions();
}

function isAdmin() {
  return authState.currentUser?.role === "admin";
}

function isLoggedIn() {
  return Boolean(authState.currentUser);
}

function getCurrentActorNick() {
  return authState.currentUser?.mcNick || authState.currentUser?.username || "";
}

function applyAnnouncementAuthGuard() {
  const gate = document.getElementById("announcementLoginGate");
  const card = document.getElementById("announcementCreatorCard");
  const hint = document.getElementById("annCreatorAuthorHint");

  if (!gate || !card) return;

  if (isLoggedIn()) {
    gate.style.display = "none";
    card.style.display = "";
    if (hint) {
      hint.innerHTML = `Vytváříš jako: <strong>${getCurrentActorNick()}</strong>`;
    }
  } else {
    gate.style.display = "";
    card.style.display = "none";
  }
}

function applyPantsAuthGuard() {
  const gate = document.getElementById("pantsAuthGate");
  const content = document.getElementById("pantsAuthenticatedContent");
  const adminEnchantCard = document.getElementById("adminEnchantCreatorCard");

  if (adminEnchantCard) {
    adminEnchantCard.style.display = isAdmin() ? "" : "none";
  }

  if (!gate || !content) return;

  if (isLoggedIn()) {
    gate.style.display = "none";
    content.style.display = "";
  } else {
    gate.style.display = "";
    content.style.display = "none";
  }
}

function applyPermissions() {
  const adminOnlyEls = document.querySelectorAll("[data-admin-only]");
  adminOnlyEls.forEach(el => {
    el.style.display = isAdmin() ? "" : "none";
  });

  const userPill = document.getElementById("authUserPill");
  const openBtn = document.getElementById("openAuthBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (authState.currentUser) {
    const { username, mcNick, role } = authState.currentUser;
    document.getElementById("authUserAvatar").src = getMcHeadUrl(mcNick || username, 28);
    document.getElementById("authUserName").textContent = mcNick || username;

    const roleTag = document.getElementById("authUserRole");
    roleTag.textContent = role === "admin" ? "ADMIN" : "USER";
    roleTag.className = role === "admin" ? "role-tag admin" : "role-tag";

    userPill.style.display = "flex";
    openBtn.style.display = "none";
    logoutBtn.style.display = "";
  } else {
    userPill.style.display = "none";
    openBtn.style.display = "";
    logoutBtn.style.display = "none";
  }

  const adminTab = document.getElementById("tab-admin");
  if (!isAdmin() && adminTab?.classList.contains("active")) {
    switchTab("overview");
  }

  applyPantsAuthGuard();
  applyAnnouncementAuthGuard();
}

function openAuthModal() {
  document.getElementById("authUsername").value = "";
  document.getElementById("authPassword").value = "";
  document.getElementById("authPassword").type = "password";
  document.getElementById("authFeedback").textContent = "";
  document.getElementById("authFeedback").className = "auth-feedback";
  document.getElementById("authModal").classList.add("open");
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("open");
}

function handleBackdropClick(e) {
  if (e.target.id === "authModal") {
    closeAuthModal();
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById("authPassword");
  input.type = input.type === "password" ? "text" : "password";
}

function submitAuthForm(e) {
  e.preventDefault();
  const feedback = document.getElementById("authFeedback");
  const username = document.getElementById("authUsername").value.trim().toLowerCase();
  const password = document.getElementById("authPassword").value;

  const found = ACCOUNTS.find(
    acc => acc.username.toLowerCase() === username && acc.password === password
  );

  if (!found) {
    feedback.textContent = "Neplatné login jméno nebo heslo.";
    feedback.className = "auth-feedback";
    return;
  }

  const effectiveRole = found.username.toLowerCase() === "bowman" ? "admin" : "user";

  authState.currentUser = {
    username: found.username,
    mcNick: found.mcNick,
    role: effectiveRole
  };
  saveSession();
  renderPantsTab();
  feedback.textContent = `Přihlášeno jako ${found.mcNick} (${effectiveRole}).`;
  feedback.className = "auth-feedback ok";
  renderPodium();
  renderRoster();
  renderAnnouncements();

  setTimeout(() => {
    closeAuthModal();
    showToast(`Přihlášen jako ${found.mcNick}`);
  }, 450);
}

function logoutUser() {
  authState.currentUser = null;
  saveSession();
  renderPantsTab();
  renderPodium();
  renderRoster();
  renderAnnouncements();
  showToast("Byl jsi odhlášen.");
}

function switchTab(tab) {
  if (tab === "admin" && !isAdmin()) {
    showToast("Správa je dostupná pouze pro účet Bowmanik (bowman).");
    return;
  }

  if (tab === "pants" && !isLoggedIn()) {
    applyPantsAuthGuard();
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));
    document.getElementById("tab-pants").classList.add("active");
    const btn = document.querySelector('.nav-tab[data-tab="pants"]');
    if (btn) btn.classList.add("active");
    openAuthModal();
    return;
  }

  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));

  document.getElementById(`tab-${tab}`).classList.add("active");
  const btn = document.querySelector(`.nav-tab[data-tab="${tab}"]`);
  if (btn) btn.classList.add("active");
}

/* PANTS LOGIKA */
function getColorObj(colorId) {
  return PANTS_COLORS.find(c => c.id === colorId) || PANTS_COLORS[0];
}

function pickRandomPantsColor() {
  return PANTS_COLORS[Math.floor(Math.random() * PANTS_COLORS.length)];
}

function openPantsCrate() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  const chestTier = Number(document.getElementById("pantsChestTier")?.value || 10);
  const chanceByTier = { 8: 6, 9: 8, 10: 10 };
  const chance = chanceByTier[chestTier] ?? 8;

  pantsState.cratesOpened += 1;
  const hit = (Math.random() * 100) < chance;
  const statusEl = document.getElementById("pantsCrateStatus");

  if (hit) {
    const droppedColor = pickRandomPantsColor();
    pantsState.pantsDroppedCount += 1;
    pantsState.currentPants = {
      id: `pants_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      colorId: droppedColor.id,
      tier: 0,
      enchants: [],
      fromChest: `T${chestTier}`
    };
    const msg = `${droppedColor.name} • T0`;
    if (statusEl) {
      statusEl.className = "pants-status-box hit";
      statusEl.innerHTML = `<strong>${msg}</strong>`;
    }
  } else {
    const missMsg = "Nevadi, zkus to priste";
    if (statusEl) {
      statusEl.className = "pants-status-box miss";
      statusEl.innerHTML = `<strong>${missMsg}</strong>`;
    }
  }

  renderPantsTab();
}

function resetCurrentPants() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  pantsState.currentPants = null;
  const statusEl = document.getElementById("pantsCrateStatus");
  if (statusEl) {
    statusEl.className = "pants-status-box";
    statusEl.textContent = "Tier 8–10";
  }
  renderPantsTab();
}

function pickRandomRarity() {
  const total = RARITY_WEIGHTS.common + RARITY_WEIGHTS.rare + RARITY_WEIGHTS.epic;
  let r = Math.random() * total;
  if (r < RARITY_WEIGHTS.common) return "common";
  r -= RARITY_WEIGHTS.common;
  if (r < RARITY_WEIGHTS.rare) return "rare";
  return "epic";
}

function pickRandomEnchantLevel() {
  return Math.floor(Math.random() * 3) + 1;
}

function rollNextEnchant(currentEnchants) {
  const catalog = data.enchantCatalog || [];
  if (catalog.length === 0) return null;

  const existingNames = new Set(currentEnchants.map(e => e.name));
  const hasReallyAlive = existingNames.has("Really Alive");
  const hasExcess = existingNames.has("Excess");

  const isForbiddenTogether = (candidateName) => {
    if (candidateName === "Really Alive" && hasExcess) return true;
    if (candidateName === "Excess" && hasReallyAlive) return true;
    return false;
  };

  let pool = [];
  for (let attempt = 0; attempt < 25; attempt++) {
    const rarity = pickRandomRarity();
    const candidates = catalog.filter(
      e => e.rarity === rarity && !existingNames.has(e.name) && !isForbiddenTogether(e.name)
    );
    if (candidates.length > 0) {
      pool = candidates;
      break;
    }
  }

  if (pool.length === 0) {
    pool = catalog.filter(
      e => !existingNames.has(e.name) && !isForbiddenTogether(e.name)
    );
  }

  if (pool.length === 0) {
    pool = catalog.filter(e => !isForbiddenTogether(e.name));
  }

  if (pool.length === 0) return null;

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const rolledEnchantTier = pickRandomEnchantLevel();

  return {
    name: chosen.name,
    rarity: chosen.rarity,
    level: rolledEnchantTier
  };
}

function enchantCurrentPantsStep() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  const p = pantsState.currentPants;
  if (!p || p.tier >= 3) return;

  const nextPantsTier = p.tier + 1;
  const rolled = rollNextEnchant(p.enchants);
  if (!rolled) return;

  p.tier = nextPantsTier;
  p.enchants.push(rolled);

  if (p.tier === 3) {
    pantsState.savedPants.unshift({
      ...structuredClone(p),
      owner: getCurrentActorNick() || "Hráč",
      createdAt: formatNowCzech()
    });
    saveSavedPants();
  }

  renderPantsTab();
}

function addCustomEnchant() {
  if (!isAdmin()) return;
  const name = document.getElementById("newEnchantName").value.trim();
  const rarity = document.getElementById("newEnchantRarity").value;
  if (!name) return;

  data.enchantCatalog.push({
    id: `enc_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    rarity: ["common", "rare", "epic"].includes(rarity) ? rarity : "common"
  });

  document.getElementById("newEnchantName").value = "";
  saveData();
}

function removeCustomEnchant(encId) {
  if (!isAdmin()) return;
  data.enchantCatalog = data.enchantCatalog.filter(e => e.id !== encId);
  saveData();
}

function resetEnchantsToDefault() {
  if (!isAdmin()) return;
  if (!confirm("Obnovit výchozí seznam enchantů?")) return;
  data.enchantCatalog = structuredClone(DEFAULT_ENCHANT_CATALOG);
  saveData();
}

function clearSavedPants() {
  if (!isLoggedIn()) return;
  pantsState.savedPants = [];
  saveSavedPants();
  renderPantsTab();
}

function renderPantsTab() {
  applyPantsAuthGuard();
  if (!isLoggedIn()) return;

  const statsRow = document.getElementById("pantsStatsRow");
  if (statsRow) {
    statsRow.innerHTML = `
      <span>Bedny: <strong>${pantsState.cratesOpened}</strong></span>
      <span>Drop: <strong>${pantsState.pantsDroppedCount}</strong></span>
      <span>T3: <strong>${pantsState.savedPants.length}</strong></span>
    `;
  }

  const workbench = document.getElementById("activePantsWorkbench");
  if (workbench) {
    const p = pantsState.currentPants;
    if (!p) {
      workbench.innerHTML = `<div class="pants-item-card"><div class="player-name">—</div></div>`;
    } else {
      const col = getColorObj(p.colorId);
      const enchantsHtml = p.enchants.map(e => `
        <div class="enchant-line border-${e.rarity}">
          <div class="enchant-line-top">
            <strong class="enchant-name-${e.rarity}">${e.name} ${ROMAN_TIERS[e.level]}</strong>
            <span class="rarity-pill rarity-${e.rarity}">${e.rarity}</span>
          </div>
        </div>
      `).join("");

      const actionBtnHtml = p.tier < 3
        ? `<button type="button" class="btn btn-green" onclick="enchantCurrentPantsStep()">✨ Tier ${p.tier + 1}</button>`
        : `<div class="completion-box" style="margin-top:12px; margin-bottom:0;"><span>Tier 3</span><strong>✅</strong></div>`;

      workbench.innerHTML = `
        <div class="pants-item-card ${col.cardClass}">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
            <div>
              <span class="pants-swatch ${col.swatchClass}" style="vertical-align:middle; margin-right:6px;"></span>
              <strong style="font-size:1.05rem;">${col.name}</strong>
              <span class="player-sub">• T${p.tier}</span>
            </div>
            <span class="obj-badge">${p.fromChest || ""}</span>
          </div>
          ${enchantsHtml}
          <div class="admin-actions">
            ${actionBtnHtml}
          </div>
        </div>
      `;
    }
  }

  const catalogGrid = document.getElementById("enchantCatalogGrid");
  if (catalogGrid) {
    const catalog = data.enchantCatalog || [];
    const byRarity = [
      { key: "common", title: "Common", items: catalog.filter(e => e.rarity === "common") },
      { key: "rare", title: "Rare", items: catalog.filter(e => e.rarity === "rare") },
      { key: "epic", title: "Epic", items: catalog.filter(e => e.rarity === "epic") }
    ];

    catalogGrid.innerHTML = byRarity.map(group => `
      <div class="pants-item-card">
        <h3 style="margin-bottom:8px;">${group.title}</h3>
        ${group.items.map(it => `
          <div class="enchant-line border-${it.rarity}">
            <div class="enchant-line-top">
              <strong class="enchant-name-${it.rarity}">${it.name}</strong>
              <div style="display:flex; align-items:center; gap:6px;">
                <span class="muted-text" style="font-size:0.76rem;">I–III</span>
                ${isAdmin() ? `<button type="button" class="btn btn-red" style="padding:2px 7px; font-size:0.72rem;" onclick="removeCustomEnchant('${it.id}')">✕</button>` : ""}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");
  }

  const savedGrid = document.getElementById("savedPantsGrid");
  if (savedGrid) {
    if (pantsState.savedPants.length === 0) {
      savedGrid.innerHTML = `<p class="muted-text">—</p>`;
    } else {
      savedGrid.innerHTML = pantsState.savedPants.map(item => {
        const col = getColorObj(item.colorId);
        return `
          <div class="pants-item-card ${col.cardClass}">
            <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:6px;">
              <div>
                <span class="pants-swatch ${col.swatchClass}" style="vertical-align:middle; margin-right:6px;"></span>
                <strong>${col.name} • T3</strong>
              </div>
              <span class="obj-badge reward">${item.owner || ""}</span>
            </div>
            <div class="player-sub" style="margin-top:0; margin-bottom:8px;">${item.createdAt || ""}</div>
            ${item.enchants.map(e => `
              <div class="enchant-line border-${e.rarity}">
                <div class="enchant-line-top">
                  <strong class="enchant-name-${e.rarity}">${e.name} ${ROMAN_TIERS[e.level]}</strong>
                  <span class="rarity-pill rarity-${e.rarity}">${e.rarity}</span>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      }).join("");
    }
  }
}

/* OBJECTIVES & PODIUM & ROSTER */
function renderTierGoalInputs() {
  const grid = document.getElementById("tierGoalsGrid");
  if (!grid || grid.children.length > 0) return;
  let html = "";
  for (let t = 0; t <= 10; t++) {
    html += `
      <div class="field">
        <label for="tierGoal_${t}">Cíl T${t}</label>
        <input type="number" min="1" id="tierGoal_${t}" placeholder="—" />
      </div>
    `;
  }
  grid.innerHTML = html;
}

function clearTierInputs() {
  for (let t = 0; t <= 10; t++) {
    const el = document.getElementById(`tierGoal_${t}`);
    if (el) el.value = "";
  }
  showToast("Pole T0–T10 vyčištěna.");
}

function getPlayerContrib(player, objId) {
  return Math.max(0, Number(player.contrib?.[objId]) || 0);
}

function getPlayerTotalUnits(player) {
  return data.objectives.reduce((sum, obj) => sum + getPlayerContrib(player, obj.id), 0);
}

function getPlayersSumForObjective(objId) {
  return data.players.reduce((sum, p) => sum + getPlayerContrib(p, objId), 0);
}

function getNextConfiguredTierGoal(obj, fromTier) {
  const tiers = obj.tiers || EMPTY_TIERS_T0_TO_T10;
  for (let t = fromTier + 1; t <= 10; t++) {
    const g = parseOptionalTierGoal(tiers[t]);
    if (g !== null) {
      return { tier: t, goal: g };
    }
  }
  return null;
}

function getObjectiveProgressInfo(obj) {
  const tiers = obj.tiers || EMPTY_TIERS_T0_TO_T10;
  const activeTier = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
  const tierGoal = parseOptionalTierGoal(tiers[activeTier]);
  const rewardCompleted = Boolean(obj.rewardCompleted);

  const rawDone = typeof obj.currentDone === "number" && !Number.isNaN(obj.currentDone)
    ? Math.max(0, obj.currentDone)
    : getPlayersSumForObjective(obj.id);

  const doneValue = rewardCompleted && tierGoal ? Math.max(rawDone, tierGoal) : rawDone;
  const pct = rewardCompleted
    ? 100
    : (tierGoal ? Math.min(100, Math.round((doneValue / tierGoal) * 100)) : 0);

  const missingInCurrentTier = tierGoal
    ? Math.max(0, tierGoal - doneValue)
    : null;

  const nextTierObj = getNextConfiguredTierGoal(obj, activeTier);
  const missingToNextTier = nextTierObj
    ? Math.max(0, nextTierObj.goal - doneValue)
    : null;

  const reachedTier = rewardCompleted || (tierGoal && doneValue >= tierGoal)
    ? activeTier
    : Math.max(0, activeTier - 1);

  let tierBadgeText = `Tier T${activeTier}`;
  if (rewardCompleted) {
    tierBadgeText = `🎁 Reward bedna • T${activeTier} splněno`;
  } else if (tierGoal && doneValue >= tierGoal) {
    tierBadgeText = `T${activeTier} splněno`;
  }

  return {
    activeTier,
    tierGoal,
    doneValue,
    pct,
    missingInCurrentTier,
    nextTierObj,
    missingToNextTier,
    reachedTier,
    rewardCompleted,
    tierBadgeText
  };
}

function getTotalChestInfo() {
  const parts = data.objectives.map((obj, idx) => {
    const t = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
    return { label: `#${idx + 1} ${obj.title}`, tier: t };
  });

  const rawSum = parts.reduce((acc, p) => acc + p.tier, 0);
  const clampedSum = Math.min(10, Math.max(0, rawSum));
  const isManual = data.totalChestOverride !== null && data.totalChestOverride !== undefined;
  const totalTier = isManual
    ? Math.min(10, Math.max(0, Number(data.totalChestOverride) || 0))
    : clampedSum;

  const formulaText = parts.length > 0
    ? parts.map(p => `T${p.tier}`).join(" + ") + (rawSum > 10 && !isManual ? ` (součet ${rawSum} → max T10)` : "")
    : "Žádné objectives (T0)";

  return {
    totalTier,
    rawSum,
    isManual,
    formulaText
  };
}

function getPlayerOverallSharePct(player) {
  if (data.objectives.length === 0) return 0;
  const sumShare = data.objectives.reduce((acc, obj) => {
    const info = getObjectiveProgressInfo(obj);
    const playersSum = getPlayersSumForObjective(obj.id);
    const denom = playersSum > 0 ? playersSum : info.doneValue;
    if (denom <= 0) return acc;
    return acc + (getPlayerContrib(player, obj.id) / denom) * 100;
  }, 0);
  return Math.round(sumShare / data.objectives.length);
}

function renderSortSelect() {
  const select = document.getElementById("sortSelect");
  const currentVal = select.value;
  select.innerHTML = `
    <option value="total">Největší přínos celkem</option>
    <option value="prestige">Podle Prestige (nejvyšší)</option>
    <option value="nick">Abecedně (A–Z)</option>
  `;
  data.objectives.forEach((obj, idx) => {
    select.innerHTML += `<option value="obj:${obj.id}">Podle: ${obj.title} (#${idx + 1})</option>`;
  });
  if ([...select.options].some(o => o.value === currentVal)) {
    select.value = currentVal;
  }
}

function renderTotalChestBanners() {
  const chest = getTotalChestInfo();
  const bannerHtml = `
    <div>
      <div class="player-sub" style="margin-top:0;">SPOLEČNÁ ODMĚNA GUILDY</div>
      <div class="player-name" style="font-size:1.08rem; margin-top:2px;">Celková aktuální bedna</div>
      <div class="player-sub">${chest.formulaText}${chest.isManual ? " • ručně nastaveno" : " • automatický součet tierů"}</div>
    </div>
    <div class="total-chest-tier">🎁 Celková bedna: T${chest.totalTier}</div>
  `;

  const ovBanner = document.getElementById("totalChestBanner");
  if (ovBanner) ovBanner.innerHTML = bannerHtml;

  const objBanner = document.getElementById("objTotalChestBanner");
  if (objBanner) objBanner.innerHTML = bannerHtml;
}

function renderObjectives() {
  const tsText = `🕒 Poslední aktualizace: ${data.lastUpdated || "—"}`;
  document.getElementById("overviewLastUpdated").textContent = tsText;
  document.getElementById("objLastUpdated").textContent = tsText;
  const adminTs = document.getElementById("adminLastUpdated");
  if (adminTs) adminTs.textContent = tsText;

  document.getElementById("weekSubtitle").textContent =
    `${data.weekName} • mc.survival-games.cz • Společné objectives (T0–T10) a příspěvky členů`;
  document.getElementById("objTabSubtitle").textContent =
    `${data.weekName} • Postup guildy napříč tiery T0 až T10`;

  renderTotalChestBanners();

  const strip = document.getElementById("objectivesStrip");
  const detail = document.getElementById("objectivesDetailGrid");

  if (data.objectives.length === 0) {
    strip.innerHTML = `
      <div class="obj-summary-card">
        <div>
          <span class="obj-badge">ŽÁDNÉ OBJECTIVES</span>
          <div class="player-name">Zatím nejsou přidány žádné společné objectives.</div>
          <div class="player-sub">Správce (Bowmanik) je může přidat v záložce Správa (Admin).</div>
        </div>
      </div>
    `;
    detail.innerHTML = `
      <div class="admin-card">
        <h3>Zatím žádné společné objectives</h3>
        <p class="muted-text">Přihlas se jako správce (bowman) a přidej společný objective s tiery T0–T10.</p>
      </div>
    `;
    return;
  }

  strip.innerHTML = data.objectives.map((obj, idx) => {
    const info = getObjectiveProgressInfo(obj);
    const ratioText = info.tierGoal
      ? `T${info.activeTier}: ${info.doneValue.toLocaleString("cs-CZ")} / ${info.tierGoal.toLocaleString("cs-CZ")} ${obj.unit}`
      : `T${info.activeTier}: ${info.doneValue.toLocaleString("cs-CZ")} ${obj.unit} (cíl nenastaven)`;

    const missingText = info.missingInCurrentTier !== null
      ? `Chybí do T${info.activeTier}: <strong>${info.missingInCurrentTier.toLocaleString("cs-CZ")} ${obj.unit}</strong>`
      : "Cíl aktuálního tieru bez hodnoty";

    return `
      <div class="obj-summary-card ${info.rewardCompleted ? "reward-done" : ""}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap;">
          <div>
            <div class="obj-badges-row">
              <span class="obj-badge ${info.rewardCompleted ? "reward" : ""}">OBJ ${idx + 1} • ${info.tierBadgeText}</span>
            </div>
            <div class="player-name">${obj.title}</div>
          </div>
          <div class="obj-goal-pill">${ratioText}</div>
        </div>
        <div class="progress-track">
          <div class="progress-bar ${info.rewardCompleted ? "reward" : ""}" style="width:${info.pct}%"></div>
        </div>
        <div class="obj-progress-top">
          <span>${missingText}</span>
          <strong>${info.tierGoal || info.rewardCompleted ? `${info.pct} %` : "—"}</strong>
        </div>
      </div>
    `;
  }).join("");

  detail.innerHTML = data.objectives.map((obj, idx) => {
    const info = getObjectiveProgressInfo(obj);
    const tierListHtml = (obj.tiers || EMPTY_TIERS_T0_TO_T10).map((rawGoal, tIdx) => {
      const goal = parseOptionalTierGoal(rawGoal);
      const tNum = tIdx;
      const isCurrent = tNum === info.activeTier;
      const isDone = tNum < info.activeTier || (tNum === info.activeTier && (info.rewardCompleted || (goal && info.doneValue >= goal)));
      const statusIcon = isDone ? "✅" : (isCurrent ? "🔥" : "⬜");

      let rightLabel = "Bez hodnoty";
      if (goal) {
        const diff = Math.max(0, goal - info.doneValue);
        rightLabel = isDone
          ? `${goal.toLocaleString("cs-CZ")} ${obj.unit} (splněno)`
          : `${goal.toLocaleString("cs-CZ")} ${obj.unit} • chybí ${diff.toLocaleString("cs-CZ")}`;
      }

      return `
        <div style="display:flex; justify-content:space-between; padding:5px 0; border-top:1px solid var(--border); font-size:0.84rem; gap:8px;">
          <span>${statusIcon} <strong>Tier T${tNum}</strong> ${isCurrent ? "(aktuální)" : ""}</span>
          <span>${rightLabel}</span>
        </div>
      `;
    }).join("");

    const nextTierHint = info.nextTierObj
      ? `<div class="player-sub" style="margin-bottom:10px;">Do dalšího nastaveného tieru (T${info.nextTierObj.tier}) chybí: <strong>${info.missingToNextTier.toLocaleString("cs-CZ")} ${obj.unit}</strong></div>`
      : `<div class="player-sub" style="margin-bottom:10px;">Další nastavený tier není zadán</div>`;

    const summaryLine = info.tierGoal
      ? `Aktuálně v T${info.activeTier}: <strong>${info.doneValue.toLocaleString("cs-CZ")} / ${info.tierGoal.toLocaleString("cs-CZ")} ${obj.unit}</strong> (${info.pct} %) • Chybí: <strong>${info.missingInCurrentTier.toLocaleString("cs-CZ")} ${obj.unit}</strong>`
      : `Aktuálně v T${info.activeTier}: <strong>${info.doneValue.toLocaleString("cs-CZ")} ${obj.unit}</strong> (cíl bez hodnoty)`;

    return `
      <div class="admin-card ${info.rewardCompleted ? "reward-done" : ""}">
        <div class="obj-badges-row">
          <span class="obj-badge ${info.rewardCompleted ? "reward" : ""}">OBJECTIVE ${idx + 1} • ${info.tierBadgeText}</span>
        </div>
        <h3>${obj.title}</h3>
        <p class="muted-text" style="margin-bottom:6px;">${summaryLine}</p>
        ${nextTierHint}
        ${tierListHtml}
      </div>
    `;
  }).join("");
}

function buildPlayerContribHtml(player) {
  const goalLine = player.weeklyGoal > 0
    ? `<div class="obj-progress-top" style="margin-bottom:8px;"><span>🎯 Týdenní cíl: ${getPlayerTotalUnits(player).toLocaleString("cs-CZ")} / ${player.weeklyGoal.toLocaleString("cs-CZ")}</span><strong>${Math.min(100, Math.round((getPlayerTotalUnits(player) / player.weeklyGoal) * 100))} %</strong></div>`
    : "";

  if (data.objectives.length === 0) {
    return `${goalLine}<div class="player-sub">Zatím žádné aktivní objectives</div>`;
  }

  return goalLine + data.objectives.map(obj => {
    const made = getPlayerContrib(player, obj.id);
    const info = getObjectiveProgressInfo(obj);
    const playersSum = getPlayersSumForObjective(obj.id);
    const denom = playersSum > 0 ? playersSum : info.doneValue;
    const sharePct = denom > 0 ? Math.round((made / denom) * 100) : 0;
    const barPct = info.tierGoal
      ? Math.min(100, Math.round((made / info.tierGoal) * 100))
      : Math.min(100, sharePct);

    return `
      <div class="obj-progress-item">
        <div class="obj-progress-top">
          <span>${obj.title}</span>
          <strong>${made.toLocaleString("cs-CZ")} ${obj.unit} (${sharePct}%)</strong>
        </div>
        <div class="progress-track">
          <div class="progress-bar ${info.rewardCompleted ? "reward" : ""}" style="width:${barPct}%"></div>
        </div>
      </div>
    `;
  }).join("");
}

function openPlayerDetailModal(playerId) {
  const player = data.players.find(p => p.id === playerId);
  if (!player) return;

  const totalUnits = getPlayerTotalUnits(player);
  const sharePct = getPlayerOverallSharePct(player);

  document.getElementById("playerModalAvatar").src = getMcHeadUrl(player.nick, 48);
  document.getElementById("playerModalNick").textContent = player.nick;
  document.getElementById("playerModalMeta").textContent =
    `${player.rank} • Prestige ${player.prestige}`;

  const goalPct = player.weeklyGoal > 0
    ? Math.min(100, Math.round((totalUnits / player.weeklyGoal) * 100))
    : null;

  const objBreakdown = data.objectives.length
    ? data.objectives.map(obj => {
        const made = getPlayerContrib(player, obj.id);
        return `
          <div class="obj-progress-item">
            <div class="obj-progress-top">
              <span>${obj.title}</span>
              <strong>${made.toLocaleString("cs-CZ")} ${obj.unit}</strong>
            </div>
          </div>
        `;
      }).join("")
    : `<p class="muted-text">Zatím nejsou nastaveny žádné společné objectives.</p>`;

  document.getElementById("playerModalBody").innerHTML = `
    <div class="completion-box">
      <span>Celkový podíl na plnění</span>
      <strong>${data.objectives.length ? `${sharePct} %` : "—"}</strong>
    </div>
    <div class="admin-player-item" style="margin-bottom:12px;">
      <span>Celkem nahráno tento týden</span>
      <strong>${totalUnits.toLocaleString("cs-CZ")}</strong>
    </div>
    <div class="admin-player-item" style="margin-bottom:14px;">
      <span>Týdenní cíl hráče</span>
      <strong>${player.weeklyGoal > 0 ? `${totalUnits.toLocaleString("cs-CZ")} / ${player.weeklyGoal.toLocaleString("cs-CZ")} (${goalPct} %)` : "Nenastaven"}</strong>
    </div>
    <h3 style="margin-bottom:8px; font-size:0.95rem;">Příspěvky podle objectives</h3>
    ${objBreakdown}
  `;

  document.getElementById("playerModal").classList.add("open");
}

function closePlayerModal() {
  document.getElementById("playerModal").classList.remove("open");
}

function handlePlayerBackdropClick(e) {
  if (e.target.id === "playerModal") {
    closePlayerModal();
  }
}

function renderPodium() {
  const sorted = data.players
    .map(p => ({
      ...p,
      sharePct: getPlayerOverallSharePct(p),
      totalUnits: getPlayerTotalUnits(p)
    }))
    .sort((a, b) => {
      if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
      return (b.prestige || 0) - (a.prestige || 0);
    });

  const podiumGrid = document.getElementById("podiumGrid");
  const medals = ["🥇", "🥈", "🥉"];
  const activeNick = authState.currentUser?.mcNick?.toLowerCase();

  podiumGrid.innerHTML = sorted.slice(0, 3).map((p, i) => {
    const isMe = activeNick && p.nick.toLowerCase() === activeNick;
    return `
      <div class="podium-card rank-${i + 1}" onclick="openPlayerDetailModal(${p.id})">
        <div class="podium-head">
          <div class="rank-badge">${medals[i]}</div>
          <img class="skin-head" src="${getMcHeadUrl(p.nick, 48)}" alt="${p.nick}" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/48'" />
          <div>
            <div class="player-name">${p.nick} ${isMe ? "• Ty" : ""}</div>
            <div class="player-sub">
              <span class="rank-pill rank-${p.rank}">${p.rank}</span>
              Prestige ${p.prestige}
            </div>
          </div>
        </div>
        <div class="completion-box">
          <span>Podíl na plnění</span>
          <strong>${data.objectives.length ? `${p.sharePct} %` : "—"}</strong>
        </div>
        ${buildPlayerContribHtml(p)}
      </div>
    `;
  }).join("");
}

function renderRoster() {
  renderSortSelect();

  const search = document.getElementById("searchInput").value.trim().toLowerCase();
  const rankFilter = document.getElementById("rankFilterSelect").value;
  const sortBy = document.getElementById("sortSelect").value;
  const activeNick = authState.currentUser?.mcNick?.toLowerCase();

  const list = data.players
    .map(p => ({
      ...p,
      sharePct: getPlayerOverallSharePct(p),
      totalUnits: getPlayerTotalUnits(p)
    }))
    .filter(p => p.nick.toLowerCase().includes(search))
    .filter(p => rankFilter === "all" || p.rank === rankFilter)
    .sort((a, b) => {
      if (sortBy === "nick") return a.nick.localeCompare(b.nick, "cs");
      if (sortBy === "prestige") return (b.prestige || 0) - (a.prestige || 0);
      if (sortBy.startsWith("obj:")) {
        const objId = sortBy.replace("obj:", "");
        return getPlayerContrib(b, objId) - getPlayerContrib(a, objId);
      }
      if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
      return (b.prestige || 0) - (a.prestige || 0);
    });

  const rosterGrid = document.getElementById("rosterGrid");
  if (list.length === 0) {
    rosterGrid.innerHTML = `<p class="muted-text">Žádný hráč neodpovídá filtru.</p>`;
    return;
  }

  rosterGrid.innerHTML = list.map(p => {
    const isMe = activeNick && p.nick.toLowerCase() === activeNick;
    return `
      <div class="roster-card" onclick="openPlayerDetailModal(${p.id})">
        <div class="roster-card-top">
          <div class="roster-user-info">
            <img class="skin-head" src="${getMcHeadUrl(p.nick, 48)}" alt="${p.nick}" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/48'" />
            <div>
              <div class="player-name">${p.nick} ${isMe ? "• Ty" : ""}</div>
              <div class="player-sub">
                <span class="rank-pill rank-${p.rank}">${p.rank}</span>
                Prestige ${p.prestige}
              </div>
            </div>
          </div>
          <div class="roster-share-badge">${data.objectives.length ? `${p.sharePct} %` : "—"}</div>
        </div>
        ${buildPlayerContribHtml(p)}
      </div>
    `;
  }).join("");
}

/* ANNOUNCEMENTS */
function addAnnouncement() {
  if (!isLoggedIn()) {
    openAuthModal();
    showToast("Pro vytvoření oznámení se musíš přihlásit.");
    return;
  }

  const title = document.getElementById("annTitle").value.trim();
  const date = document.getElementById("annDate").value;
  const time = document.getElementById("annTime").value;
  const desc = document.getElementById("annDesc").value.trim();
  const pinned = Boolean(document.getElementById("annPinOnOverview")?.checked);

  if (!title) {
    showToast("Vyplň co se bude dělat.");
    return;
  }

  const authorNick = getCurrentActorNick() || "Člen LAP";

  data.announcements.unshift({
    id: `ann_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    title,
    date,
    time,
    desc,
    author: authorNick,
    pinned,
    createdAt: formatNowCzech(),
    signups: []
  });

  document.getElementById("annTitle").value = "";
  document.getElementById("annDate").value = "";
  document.getElementById("annTime").value = "";
  document.getElementById("annDesc").value = "";
  if (document.getElementById("annPinOnOverview")) {
    document.getElementById("annPinOnOverview").checked = false;
  }

  saveData();
  showToast(pinned ? "Oznámení zveřejněno a připnuto na přehled." : "Oznámení zveřejněno.");
}

function canManageAnnouncementPin(ann) {
  if (!isLoggedIn()) return false;
  if (isAdmin()) return true;
  const current = getCurrentActorNick().toLowerCase();
  return current && (ann.author || "").toLowerCase() === current;
}

function togglePinAnnouncement(annId) {
  const ann = data.announcements.find(a => a.id === annId);
  if (!ann || !canManageAnnouncementPin(ann)) return;
  ann.pinned = !ann.pinned;
  saveData();
  showToast(ann.pinned ? "📌 Oznámení připnuto na hlavní přehled." : "Oznámení odepnuto z přehledu.");
}

function joinAnnouncement(annId, inputPrefix = "roleInput") {
  if (!isLoggedIn()) {
    openAuthModal();
    showToast("Přihlas se, abys mohl zapsat co budeš dělat.");
    return;
  }
  const input = document.getElementById(`${inputPrefix}_${annId}`);
  const roleNote = (input?.value || "").trim() || "Zapojím se do akce";
  const ann = data.announcements.find(a => a.id === annId);
  if (!ann) return;

  ann.signups = ann.signups || [];
  const nick = getCurrentActorNick() || "Hráč";
  const existingIdx = ann.signups.findIndex(s => s.nick.toLowerCase() === nick.toLowerCase());
  const entry = { nick, roleNote };

  if (existingIdx >= 0) {
    ann.signups[existingIdx] = entry;
  } else {
    ann.signups.push(entry);
  }

  saveData();
  showToast("Tvůj plán byl zapsán k oznámení.");
}

function removeAnnouncement(annId) {
  if (!isAdmin()) return;
  data.announcements = data.announcements.filter(a => a.id !== annId);
  saveData();
  showToast("Oznámení smazáno.");
}

function buildAnnouncementCardHtml(ann, inputPrefix = "roleInput") {
  const formattedDate = ann.date
    ? new Date(`${ann.date}T00:00:00`).toLocaleDateString("cs-CZ")
    : "Datum neuvedeno";
  const scheduleText = `📅 ${formattedDate}${ann.time ? ` • 🕒 ${ann.time}` : ""}`;
  const authorName = ann.author || "Člen LAP";

  const signupsHtml = (ann.signups && ann.signups.length > 0)
    ? ann.signups.map(s => `<span class="signup-chip"><strong>${s.nick}</strong>: ${s.roleNote}</span>`).join("")
    : `<span class="player-sub">Zatím se nikdo nezapsal.</span>`;

  const pinBtn = canManageAnnouncementPin(ann)
    ? `<button type="button" class="btn ${ann.pinned ? "btn-gold" : "btn-dark"}" onclick="togglePinAnnouncement('${ann.id}')">${ann.pinned ? "📌 Připnuto" : "📌 Připnout na přehled"}</button>`
    : "";

  const delBtn = isAdmin()
    ? `<button type="button" class="btn btn-red" onclick="removeAnnouncement('${ann.id}')">Smazat</button>`
    : "";

  return `
    <div class="announcement-card ${ann.pinned ? "pinned" : ""}">
      <div class="announcement-top">
        <div>
          <h3>${ann.pinned ? "📌 " : ""}${ann.title}</h3>
          <div class="announcement-author-badge">
            <img src="${getMcHeadUrl(authorName, 20)}" alt="${authorName}" style="width:18px; height:18px; border-radius:4px;" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/20'" />
            <span>Vytvořil: <strong>${authorName}</strong></span>
          </div>
          <div class="player-sub">Vytvořeno: ${ann.createdAt || "—"}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <span class="announcement-schedule">${scheduleText}</span>
          ${pinBtn}
          ${delBtn}
        </div>
      </div>
      ${ann.desc ? `<p style="margin-bottom:12px; font-size:0.92rem;">${ann.desc}</p>` : ""}
      <div style="margin-bottom:12px;">
        <div class="player-sub" style="margin-bottom:4px;">Kdo co bude dělat:</div>
        <div>${signupsHtml}</div>
      </div>
      <div class="add-player-row">
        <input type="text" id="${inputPrefix}_${ann.id}" placeholder="Co budu dělat (např. streakovat mid, sbírat kills...)" />
        <button type="button" class="btn btn-green" onclick="joinAnnouncement('${ann.id}', '${inputPrefix}')">✋ Zapsat plán</button>
      </div>
    </div>
  `;
}

function renderAnnouncements() {
  applyAnnouncementAuthGuard();

  const wrap = document.getElementById("announcementsList");
  const pinnedSection = document.getElementById("pinnedAnnouncementsSection");
  const pinnedList = document.getElementById("pinnedAnnouncementsList");

  const pinnedItems = data.announcements.filter(a => a.pinned);
  if (pinnedSection && pinnedList) {
    if (pinnedItems.length > 0) {
      pinnedSection.style.display = "";
      pinnedList.innerHTML = pinnedItems.map(a => buildAnnouncementCardHtml(a, "pinRoleInput")).join("");
    } else {
      pinnedSection.style.display = "none";
      pinnedList.innerHTML = "";
    }
  }

  if (!wrap) return;

  if (data.announcements.length === 0) {
    wrap.innerHTML = `<div class="admin-card"><p class="muted-text">Zatím nejsou zveřejněna žádná oznámení.</p></div>`;
    return;
  }

  wrap.innerHTML = data.announcements.map(a => buildAnnouncementCardHtml(a, "roleInput")).join("");
}

/* ADMIN */
function renderAdmin() {
  if (!isAdmin()) return;

  document.getElementById("adminWeekName").value = data.weekName;

  const chest = getTotalChestInfo();
  const totalChestBox = document.getElementById("adminTotalChestBox");
  if (totalChestBox) {
    let chestOpts = "";
    for (let t = 0; t <= 10; t++) {
      chestOpts += `<option value="${t}" ${chest.totalTier === t ? "selected" : ""}>Bedna T${t}</option>`;
    }
    totalChestBox.innerHTML = `
      <div>
        <strong style="color:#fbbf24; font-size:1rem;">🎁 Celková aktuální bedna: T${chest.totalTier}</strong>
        <div class="player-sub">Výpočet: ${chest.formulaText}</div>
      </div>
      <div class="admin-inputs">
        <label>
          Bedna:
          <select onchange="setTotalChestTier(this.value)">${chestOpts}</select>
        </label>
        ${chest.isManual ? `<button type="button" class="btn btn-dark" onclick="resetTotalChestAuto()">Auto součet tierů</button>` : ""}
      </div>
    `;
  }

  const objWrap = document.getElementById("adminObjectivesList");
  if (data.objectives.length === 0) {
    objWrap.innerHTML = `<p class="muted-text">Zatím nejsou přidány žádné společné objectives.</p>`;
  } else {
    objWrap.innerHTML = data.objectives.map((obj, idx) => {
      const info = getObjectiveProgressInfo(obj);
      const isCustomDone = typeof obj.currentDone === "number" && !Number.isNaN(obj.currentDone);

      let tierOptionsHtml = "";
      for (let t = 0; t <= 10; t++) {
        tierOptionsHtml += `<option value="${t}" ${info.activeTier === t ? "selected" : ""}>Tier T${t}</option>`;
      }

      const tierEditors = (obj.tiers || EMPTY_TIERS_T0_TO_T10).map((rawGoal, tIdx) => {
        const goal = parseOptionalTierGoal(rawGoal);
        return `
          <label>
            T${tIdx}:
            <input type="number" min="1" value="${goal ?? ""}" placeholder="—" onchange="updateObjectiveTier('${obj.id}', ${tIdx}, this.value)" />
          </label>
        `;
      }).join("");

      return `
        <div class="admin-player-item ${info.rewardCompleted ? "reward-done" : ""}" style="flex-direction:column; align-items:stretch; gap:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
            <div>
              <strong>#${idx + 1} ${obj.title}</strong>
              <span class="player-sub">• ${info.tierBadgeText}${info.tierGoal || info.rewardCompleted ? ` (${info.pct} %)` : ""}</span>
            </div>
            <div class="admin-inputs">
              <label>
                Tier:
                <select onchange="setObjectiveActiveTier('${obj.id}', this.value)">
                  ${tierOptionsHtml}
                </select>
              </label>
              <label>
                Hotovo:
                <input type="number" min="0" value="${info.doneValue}" onchange="setObjectiveDoneValue('${obj.id}', this.value)" />
              </label>
              <label>
                Cíl (T${info.activeTier}):
                <input type="number" min="1" value="${info.tierGoal ?? ""}" placeholder="—" onchange="updateObjectiveTier('${obj.id}', ${info.activeTier}, this.value)" />
              </label>
              <button type="button" class="btn ${info.rewardCompleted ? "btn-gold" : "btn-dark"}" onclick="toggleObjectiveRewardCompleted('${obj.id}')">
                ${info.rewardCompleted ? "🎁 Bedna splněna (zrušit)" : "🎁 Reward bedna splněna"}
              </button>
              ${isCustomDone ? `<button type="button" class="btn btn-dark" onclick="resetObjectiveDoneAuto('${obj.id}')">Auto součet hráčů</button>` : ""}
              <button type="button" class="btn btn-red" onclick="removeObjective('${obj.id}')">Smazat</button>
            </div>
          </div>
          <div class="admin-inputs" style="border-top:1px solid var(--border); padding-top:8px;">
            <span class="player-sub" style="margin-right:4px;">Cíle T0–T10:</span>
            ${tierEditors}
          </div>
        </div>
      `;
    }).join("");
  }

  const playersWrap = document.getElementById("adminPlayersList");
  const ranks = ["Member", "Elder", "Co-leader", "Leader"];

  playersWrap.innerHTML = data.players.map(p => {
    const rankOpts = ranks.map(r => `<option value="${r}" ${p.rank === r ? "selected" : ""}>${r}</option>`).join("");
    const inputsHtml = data.objectives.length
      ? data.objectives.map(obj => {
          const val = getPlayerContrib(p, obj.id);
          return `
            <label>
              ${obj.title} (${obj.unit}):
              <input type="number" min="0" value="${val}" onchange="updatePlayerContrib(${p.id}, '${obj.id}', this.value)" />
            </label>
          `;
        }).join("")
      : "";

    return `
      <div class="admin-player-item">
        <div style="display:flex; align-items:center; gap:10px;">
          <img class="skin-head" style="width:32px; height:32px;" src="${getMcHeadUrl(p.nick, 32)}" alt="${p.nick}" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/32'" />
          <div>
            <strong>${p.nick}</strong>
            <span class="rank-pill rank-${p.rank}" style="margin-left:6px;">${p.rank}</span>
            <span class="player-sub">Prestige ${p.prestige}</span>
          </div>
        </div>
        <div class="admin-inputs">
          <label>
            Rank:
            <select onchange="updatePlayerMeta(${p.id}, 'rank', this.value)">${rankOpts}</select>
          </label>
          <label>
            Prestige:
            <input type="number" min="0" max="100" value="${p.prestige}" onchange="updatePlayerMeta(${p.id}, 'prestige', this.value)" />
          </label>
          <label>
            Týdenní cíl:
            <input type="number" min="0" value="${p.weeklyGoal || 0}" onchange="updatePlayerMeta(${p.id}, 'weeklyGoal', this.value)" />
          </label>
          ${inputsHtml}
          <button class="btn btn-red" onclick="removePlayer(${p.id})">✕</button>
        </div>
      </div>
    `;
  }).join("");
}

function saveWeekName() {
  if (!isAdmin()) return;
  data.weekName = document.getElementById("adminWeekName").value.trim() || "Týden • LAP The Pit";
  saveData();
  showToast("Název týdne uložen.");
}

function setTotalChestTier(tierVal) {
  if (!isAdmin()) return;
  data.totalChestOverride = Math.min(10, Math.max(0, parseInt(tierVal, 10) ?? 0));
  saveData();
  showToast(`Celková bedna nastavena na T${data.totalChestOverride}.`);
}

function resetTotalChestAuto() {
  if (!isAdmin()) return;
  data.totalChestOverride = null;
  saveData();
  showToast("Celková bedna vrácena na automatický součet tierů.");
}

function setObjectiveActiveTier(objId, tierVal) {
  if (!isAdmin()) return;
  const tierNum = Math.min(10, Math.max(0, parseInt(tierVal, 10) ?? 0));
  const obj = data.objectives.find(o => o.id === objId);
  if (obj) {
    obj.activeTier = tierNum;
    saveData();
    showToast(`Nastaven Tier T${tierNum} pro: ${obj.title}`);
  }
}

function setObjectiveDoneValue(objId, val) {
  if (!isAdmin()) return;
  const num = Math.max(0, parseInt(val, 10) || 0);
  const obj = data.objectives.find(o => o.id === objId);
  if (obj) {
    obj.currentDone = num;
    saveData();
    showToast(`Aktualizováno splněno: ${num.toLocaleString("cs-CZ")} ${obj.unit}`);
  }
}

function toggleObjectiveRewardCompleted(objId) {
  if (!isAdmin()) return;
  const obj = data.objectives.find(o => o.id === objId);
  if (obj) {
    const nextCompleted = !obj.rewardCompleted;
    obj.rewardCompleted = nextCompleted;
    const idx = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
    if (nextCompleted) {
      const goal = parseOptionalTierGoal(obj.tiers?.[idx]);
      if (goal) {
        obj.currentDone = Math.max(Number(obj.currentDone) || 0, goal);
      }
      if (idx < 10 && confirm(`Reward bedna u "${obj.title}" označena jako splněná. Posunout tier na T${idx + 1}?`)) {
        obj.activeTier = idx + 1;
        obj.rewardCompleted = false;
      }
    }
    saveData();
    showToast(obj.rewardCompleted
      ? `🎁 Reward bedna u ${obj.title} označena jako splněná!`
      : `Stav reward bedny u ${obj.title} aktualizován.`);
  }
}

function markAllObjectivesRewardCompleted() {
  if (!isAdmin()) return;
  if (data.objectives.length === 0) {
    showToast("Žádné objectives k označení.");
    return;
  }
  data.objectives.forEach(obj => {
    obj.rewardCompleted = true;
    const idx = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
    const goal = parseOptionalTierGoal(obj.tiers?.[idx]);
    if (goal) {
      obj.currentDone = Math.max(Number(obj.currentDone) || 0, goal);
    }
  });
  saveData();
  showToast("🎁 Všechny objectives označeny jako splněné přes Reward bednu!");
}

function resetObjectiveDoneAuto(objId) {
  if (!isAdmin()) return;
  const obj = data.objectives.find(o => o.id === objId);
  if (obj) {
    obj.currentDone = null;
    obj.rewardCompleted = false;
    saveData();
    showToast("Vráceno na automatický součet hráčů.");
  }
}

function updateObjectiveTier(objId, tierIndex, val) {
  if (!isAdmin()) return;
  const idx = Math.min(10, Math.max(0, Number(tierIndex) || 0));
  const parsedGoal = parseOptionalTierGoal(val);
  const obj = data.objectives.find(o => o.id === objId);
  if (obj) {
    if (!Array.isArray(obj.tiers) || obj.tiers.length !== 11) {
      obj.tiers = [...EMPTY_TIERS_T0_TO_T10];
    }
    obj.tiers[idx] = parsedGoal;
    saveData();
    showToast(parsedGoal
      ? `Cíl T${idx} upraven na ${parsedGoal.toLocaleString("cs-CZ")}.`
      : `Cíl T${idx} nastaven bez hodnoty.`);
  }
}

function addObjective() {
  if (!isAdmin()) return;
  const title = document.getElementById("newObjTitle").value.trim();
  const unit = document.getElementById("newObjUnit").value.trim() || "bodů";

  const tiers = [];
  for (let t = 0; t <= 10; t++) {
    tiers.push(parseOptionalTierGoal(document.getElementById(`tierGoal_${t}`)?.value));
  }

  if (!title) {
    showToast("Vyplň název objective.");
    return;
  }

  data.objectives.push({
    id: `obj_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    title,
    unit,
    tiers,
    activeTier: 0,
    currentDone: null,
    rewardCompleted: false
  });

  document.getElementById("newObjTitle").value = "";
  document.getElementById("newObjUnit").value = "";
  for (let t = 0; t <= 10; t++) {
    const el = document.getElementById(`tierGoal_${t}`);
    if (el) el.value = "";
  }

  saveData();
  showToast("Společný objective (T0–T10) přidán.");
}

function removeObjective(objId) {
  if (!isAdmin()) return;
  data.objectives = data.objectives.filter(o => o.id !== objId);
  data.players.forEach(p => {
    if (p.contrib && objId in p.contrib) {
      delete p.contrib[objId];
    }
  });
  saveData();
  showToast("Objective odebrán.");
}

function addPlayer() {
  if (!isAdmin()) return;
  const nick = document.getElementById("newNick").value.trim();
  const rank = document.getElementById("newRank").value;
  const prestige = Math.max(0, parseInt(document.getElementById("newPrestige").value, 10) || 1);
  const weeklyGoal = Math.max(0, parseInt(document.getElementById("newWeeklyGoal").value, 10) || 0);
  if (!nick) return;

  data.players.push({
    id: Date.now(),
    nick,
    rank,
    prestige,
    weeklyGoal,
    contrib: {}
  });

  document.getElementById("newNick").value = "";
  document.getElementById("newPrestige").value = "";
  document.getElementById("newWeeklyGoal").value = "";
  saveData();
  showToast(`Hráč ${nick} přidán!`);
}

function updatePlayerMeta(playerId, field, val) {
  if (!isAdmin()) return;
  const player = data.players.find(p => p.id === playerId);
  if (!player) return;

  if (field === "rank") {
    player.rank = val;
  } else if (field === "prestige") {
    player.prestige = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
  } else if (field === "weeklyGoal") {
    player.weeklyGoal = Math.max(0, parseInt(val, 10) || 0);
  }

  saveData();
  showToast(`Upraveno u hráče ${player.nick}.`);
}

function updatePlayerContrib(playerId, objId, val) {
  if (!isAdmin()) return;
  const num = Math.max(0, parseInt(val, 10) || 0);
  const player = data.players.find(p => p.id === playerId);
  if (player) {
    player.contrib = player.contrib || {};
    player.contrib[objId] = num;
    saveData();
  }
}

function removePlayer(id) {
  if (!isAdmin()) return;
  data.players = data.players.filter(p => p.id !== id);
  saveData();
  showToast("Hráč odebrán.");
}

function closeWeek() {
  if (!isAdmin()) return;
  if (!confirm("Uzavřít tento týden do historie a vynulovat týdenní příspěvky hráčů?")) return;

  const chest = getTotalChestInfo();
  const objectivesSnapshot = data.objectives.map(obj => {
    const info = getObjectiveProgressInfo(obj);
    return {
      ...obj,
      guildTotal: info.doneValue,
      reachedTier: info.reachedTier
    };
  });

  data.history.unshift({
    id: `week_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    weekName: data.weekName,
    date: new Date().toLocaleDateString("cs-CZ"),
    totalChestTier: chest.totalTier,
    objectives: objectivesSnapshot,
    players: data.players
      .map(p => ({
        nick: p.nick,
        rank: p.rank,
        prestige: p.prestige,
        weeklyGoal: p.weeklyGoal || 0,
        totalUnits: getPlayerTotalUnits(p),
        sharePct: getPlayerOverallSharePct(p),
        contrib: structuredClone(p.contrib || {})
      }))
      .sort((a, b) => {
        if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
        return b.sharePct - a.sharePct;
      })
  });

  data.players.forEach(p => {
    p.contrib = {};
  });
  data.objectives.forEach(obj => {
    obj.activeTier = 0;
    obj.currentDone = null;
    obj.rewardCompleted = false;
  });
  data.totalChestOverride = null;

  data.weekName = `Týden #${data.history.length + 1} • LAP The Pit`;
  saveData();
  showToast("Týden uložen do historie!");
}

function deleteHistoryWeek(historyId) {
  if (!isAdmin()) return;
  if (!confirm("Opravdu smazat tento uzavřený týden z historie?")) return;
  data.history = data.history.filter(h => h.id !== historyId);
  saveData();
  showToast("Týden smazán z historie.");
}

function renderHistory() {
  const wrap = document.getElementById("historyList");
  if (data.history.length === 0) {
    wrap.innerHTML = `<p class="muted-text" style="text-align:center;">Zatím žádné uzavřené týdny.</p>`;
    return;
  }

  wrap.innerHTML = data.history.map(h => {
    const chestLabel = `🎁 Celková bedna: T${h.totalChestTier ?? 0}`;
    const objsSummary = h.objectives && h.objectives.length > 0
      ? h.objectives.map(o => `${o.title}: ${o.guildTotal ?? 0} ${o.unit} (Tier T${o.reachedTier ?? 0})`).join(" • ")
      : "Bez uložených objectives";

    return `
      <div class="admin-card">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <strong style="color:var(--accent);">${h.weekName}</strong>
            <span class="obj-badge reward">${chestLabel}</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="player-sub">${h.date}</span>
            ${isAdmin() ? `<button type="button" class="btn btn-red" onclick="deleteHistoryWeek('${h.id}')">🗑️ Smazat týden</button>` : ""}
          </div>
        </div>
        <div class="player-sub" style="margin-bottom:12px;">${objsSummary}</div>
        ${h.players.map((p, idx) => {
          const breakdown = h.objectives && h.objectives.length > 0
            ? h.objectives.map(o => `${o.title}: ${p.contrib?.[o.id] || 0} ${o.unit}`).join(" | ")
            : `Celkem: ${(p.totalUnits ?? 0).toLocaleString("cs-CZ")}`;
          const shareLabel = h.objectives && h.objectives.length > 0
            ? `${p.sharePct} % podíl`
            : `${(p.totalUnits ?? 0).toLocaleString("cs-CZ")} bodů`;
          return `
            <div style="display:flex; justify-content:space-between; gap:12px; padding:6px 0; border-top:1px solid var(--border); font-size:0.88rem; flex-wrap:wrap;">
              <span>#${idx + 1} <strong>${p.nick}</strong> (${p.rank} • P${p.prestige})</span>
              <span>${breakdown} → <strong style="color:var(--accent);">${shareLabel}</strong></span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }).join("");
}

function exportBackupJson() {
  if (!isAdmin()) return;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `lap-the-pit-zaloha-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("Záloha JSON stažena.");
}

function triggerBackupImport() {
  if (!isAdmin()) return;
  document.getElementById("backupFileInput").click();
}

function importBackupJson(event) {
  if (!isAdmin()) return;
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      data = hydrateData(parsed);
      saveData(false);
      showToast("Záloha úspěšně nahrána!");
    } catch {
      showToast("Neplatný JSON soubor zálohy.");
    }
    event.target.value = "";
  };
  reader.readAsText(file);
}

function copyAllCredentials() {
  if (!isAdmin()) return;
  const lines = ACCOUNTS.map(
    a => `${a.mcNick} (login: ${a.username}, role: ${a.role}) -> Heslo: ${a.password}`
  ).join("\n");
  navigator.clipboard.writeText(lines).then(() => {
    showToast("Přehled účtů a hesel zkopírován!");
  });
}

function copyShareLink() {
  const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
  const url = `${window.location.origin}${window.location.pathname}#pit=${encoded}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast("Sdílecí odkaz zkopírován!");
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function renderAll() {
  renderTierGoalInputs();
  renderObjectives();
  renderPodium();
  renderRoster();
  renderPantsTab();
  renderAnnouncements();
  renderAdmin();
  renderHistory();
  applyPermissions();
}

renderAll();
initRealtimeSync();
