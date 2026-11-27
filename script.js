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

function cloneFallback(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

const defaultData = {
  weekName: "Týden #1 • LAP The Pit",
  lastUpdated: formatNowCzech(),
  totalChestOverride: null,
  enchantCatalog: cloneFallback(DEFAULT_ENCHANT_CATALOG),
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

let lastLocalChangeAt = Date.now();
let localWriteLockUntil = 0;
let isSyncingFromRemote = false;
let data = loadData();

function getMcHeadUrl(nick, size = 48) {
  return `https://mc-heads.net/avatar/${encodeURIComponent(nick)}/${size}`;
}

function parseOptionalTierGoal(val) {
  if (val === null || val === undefined || String(val).trim() === "") return null;
  const num = Number(val);
  return Number.isFinite(num) && num > 0 ? Math.floor(num) : null;
}

function normalizeObjective(obj) {
  const safeObj = obj && typeof obj === "object" ? obj : {};
  const rawTiers = Array.isArray(safeObj.tiers)
    ? safeObj.tiers
    : (safeObj.tiers && typeof safeObj.tiers === "object"
        ? Object.values(safeObj.tiers)
        : EMPTY_TIERS_T0_TO_T10);

  const tiers = Array.from({ length: 11 }, (_, idx) => parseOptionalTierGoal(rawTiers[idx]));

  const parsedTier = Number(safeObj.activeTier);
  const activeTier = Number.isFinite(parsedTier)
    ? Math.min(10, Math.max(0, Math.floor(parsedTier)))
    : 0;

  const hasCurrentDone =
    safeObj.currentDone !== null &&
    safeObj.currentDone !== undefined &&
    String(safeObj.currentDone).trim() !== "" &&
    Number.isFinite(Number(safeObj.currentDone));

  const currentDone = hasCurrentDone
    ? Math.max(0, Math.floor(Number(safeObj.currentDone)))
    : null;

  return {
    ...safeObj,
    id: String(safeObj.id || `obj_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`),
    title: String(safeObj.title || "Objective"),
    unit: String(safeObj.unit || "bodů"),
    tiers,
    activeTier,
    currentDone,
    rewardCompleted: Boolean(safeObj.rewardCompleted)
  };
}

function hydrateData(parsed) {
  const base = cloneFallback(defaultData);
  const safeParsed = parsed && typeof parsed === "object" ? parsed : {};
  const overrideVal = safeParsed.totalChestOverride === null || safeParsed.totalChestOverride === undefined
    ? null
    : Math.min(10, Math.max(0, Number(safeParsed.totalChestOverride) || 0));

  const catalog = Array.isArray(safeParsed.enchantCatalog) && safeParsed.enchantCatalog.length > 0
    ? safeParsed.enchantCatalog.map((e, i) => ({
        id: e.id || `enc_${i}_${Date.now()}`,
        name: String(e.name || "Enchant"),
        rarity: ["common", "rare", "epic"].includes(e.rarity) ? e.rarity : "common"
      }))
    : cloneFallback(DEFAULT_ENCHANT_CATALOG);

  const rawObjectives = Array.isArray(safeParsed.objectives)
    ? safeParsed.objectives
    : (safeParsed.objectives && typeof safeParsed.objectives === "object"
        ? Object.values(safeParsed.objectives)
        : []);

  return {
    ...base,
    ...safeParsed,
    lastUpdated: safeParsed.lastUpdated || formatNowCzech(),
    totalChestOverride: overrideVal,
    enchantCatalog: catalog,
    objectives: rawObjectives.map(normalizeObjective),
    announcements: Array.isArray(safeParsed.announcements)
      ? safeParsed.announcements.map(a => ({
          ...a,
          author: a.author || "Člen LAP",
          pinned: Boolean(a.pinned)
        }))
      : [],
    players: Array.isArray(safeParsed.players)
      ? safeParsed.players.map(p => ({
          ...p,
          rank: p.rank || "Member",
          prestige: Math.max(0, Number(p.prestige) || 0),
          weeklyGoal: Math.max(0, Number(p.weeklyGoal) || 0),
          contrib: p.contrib || {}
        }))
      : base.players,
    history: Array.isArray(safeParsed.history) ? safeParsed.history : []
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
    if (!saved) return cloneFallback(defaultData);
    return hydrateData(JSON.parse(saved));
  } catch {
    return cloneFallback(defaultData);
  }
}

async function fetchRemoteData() {
  const url = `${FIREBASE_DB_URL}${FIREBASE_PATH}?t=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status} při čtení databáze`);
  const json = await res.json();
  return json ? hydrateData(json) : null;
}

async function pushRemoteData(payload) {
  const normalizedPayload = hydrateData(payload);
  const res = await fetch(`${FIREBASE_DB_URL}${FIREBASE_PATH}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(normalizedPayload)
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} při zápisu do databáze`);
  }
}

function saveData(touchTimestamp = true, syncRemote = true) {
  if (touchTimestamp) {
    data.lastUpdated = formatNowCzech();
  }
  data.objectives = (data.objectives || []).map(normalizeObjective);
  lastLocalChangeAt = Date.now();
  localWriteLockUntil = Date.now() + 12000;
  localStorage.setItem("lap_pit_data_v14", JSON.stringify(data));
  renderAll();

  if (syncRemote && !isSyncingFromRemote) {
    pushRemoteData(data).catch(() => {
      showToast("Uloženo v prohlížeči (zkontroluj oprávnění Firebase).");
    });
  }
}

async function initRealtimeSync() {
  try {
    const remote = await fetchRemoteData();
    if (remote && Date.now() - lastLocalChangeAt > 4000) {
      data = remote;
      localStorage.setItem("lap_pit_data_v14", JSON.stringify(data));
      renderAll();
    } else if (!remote) {
      await pushRemoteData(data);
    }
  } catch {
    // Ponecháme lokální data
  }

  setInterval(async () => {
    if (document.hidden || Date.now() < localWriteLockUntil) return;
    try {
      const latest = await fetchRemoteData();
      if (!latest) return;
      const currentSerialized = JSON.stringify(hydrateData(data));
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
  const user = authState.currentUser;
  if (!user) return false;
  return user.role === "admin" || String(user.username || "").toLowerCase() === "bowman";
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
    if (el.id === "tab-admin") {
      el.style.display = isAdmin() ? "" : "none";
    } else if (el.tagName === "SECTION") {
      el.style.
