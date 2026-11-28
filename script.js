const FIREBASE_DB_URL = "https://lap-web-22840-default-rtdb.firebaseio.com";
const FIREBASE_PATH = "/lap_pit_guild.json";

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
  { id: "red", name: "Red Pants", swatchClass: "swatch-red", cardClass: "color-red" },
  { id: "green", name: "Green Pants", swatchClass: "swatch-green", cardClass: "color-green" },
  { id: "blue", name: "Blue Pants", swatchClass: "swatch-blue", cardClass: "color-blue" },
  { id: "yellow", name: "Yellow Pants", swatchClass: "swatch-yellow", cardClass: "color-yellow" }
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

const DEFAULT_SWORD_ENCHANT_CATALOG = [
  // Common (60 %)
  { id: "sw_xp_bump", name: "XP Bump", rarity: "common" },
  { id: "sw_bounty_reaper", name: "Bounty Reaper", rarity: "common" },
  { id: "sw_sharp", name: "Sharp", rarity: "common" },
  { id: "sw_counter_janitor", name: "Counter-Janitor", rarity: "common" },
  { id: "sw_beat_spammer", name: "Beat The Spammer", rarity: "common" },
  { id: "sw_king_buster", name: "King Buster", rarity: "common" },
  { id: "sw_gold_boosted", name: "Gold and Boosted", rarity: "common" },
  { id: "sw_revengeance", name: "Revengeance", rarity: "common" },
  { id: "sw_speedy_kill", name: "Speedy Kill", rarity: "common" },
  { id: "sw_gold_bump", name: "Gold Bump", rarity: "common" },
  // Rare (30 %)
  { id: "sw_diamond_stomp", name: "Diamond Stomp", rarity: "rare" },
  { id: "sw_lifesteal", name: "Lifesteal", rarity: "rare" },
  { id: "sw_pain_focus", name: "Pain Focus", rarity: "rare" },
  { id: "sw_guts", name: "Guts", rarity: "rare" },
  { id: "sw_speedy_hit", name: "Speedy Hit", rarity: "rare" },
  { id: "sw_berserker", name: "Berserker", rarity: "rare" },
  { id: "sw_xp_boost", name: "XP Boost", rarity: "rare" },
  { id: "sw_fancy_raider", name: "Fancy Raider", rarity: "rare" },
  { id: "sw_equalizer", name: "Equalizer", rarity: "rare" },
  { id: "sw_gold_boost", name: "Gold Boost", rarity: "rare" },
  // Epic (10 %)
  { id: "sw_healer", name: "Healer", rarity: "epic" },
  { id: "sw_wasp", name: "Wasp", rarity: "epic" },
  { id: "sw_billionaire", name: "Billionaire", rarity: "epic" },
  { id: "sw_executioner", name: "Executioner", rarity: "epic" },
  { id: "sw_wolf_pack", name: "Wolf Pack", rarity: "epic" },
  { id: "sw_shark", name: "Shark", rarity: "epic" }
];

const RARITY_WEIGHTS = { common: 60, rare: 30, epic: 10 };
const ROMAN_TIERS = ["", "I", "II", "III"];
const EMPTY_TIERS_T0_TO_T10 = Array(11).fill(null);

function cloneData(val) {
  return JSON.parse(JSON.stringify(val));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatNowCzech() {
  return new Date().toLocaleString("cs-CZ", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function initChristmasSnowfall() {
  const layer = document.getElementById("snowfallLayer");
  if (!layer || layer.dataset.initialized === "1") return;
  layer.dataset.initialized = "1";

  const glyphs = ["❄", "❅", "❆", "✦", "🎄"];
  const count = window.innerWidth < 640 ? 24 : 42;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement("span");
    flake.className = "snowflake";
    flake.textContent = glyphs[i % glyphs.length];

    const leftPct = (Math.random() * 100).toFixed(2);
    const sizePx = (11 + Math.random() * 12).toFixed(1);
    const durationSec = (9 + Math.random() * 11).toFixed(2);
    const delaySec = (-Math.random() * 18).toFixed(2);
    const driftPx = ((Math.random() - 0.5) * 90).toFixed(1) + "px";
    const opacity = (0.38 + Math.random() * 0.54).toFixed(2);

    flake.style.left = `${leftPct}%`;
    flake.style.fontSize = `${sizePx}px`;
    flake.style.opacity = opacity;
    flake.style.animationDuration = `${durationSec}s`;
    flake.style.animationDelay = `${delaySec}s`;
    flake.style.setProperty("--drift", driftPx);

    layer.appendChild(flake);
  }
}

function createInitialPlayers() {
  const baseList = [
    { id: 1, nick: "Ouwkk", rank: "Elder", prestige: 24, weeklyGoal: 1000 },
    { id: 2, nick: "Domeziss", rank: "Leader", prestige: 24, weeklyGoal: 1000 },
    { id: 3, nick: "Bowmanik", rank: "Co-leader", prestige: 27, weeklyGoal: 1000 },
    { id: 4, nick: "DigYourGrave", rank: "Co-leader", prestige: 27, weeklyGoal: 1000 },
    { id: 5, nick: "Haft_", rank: "Co-leader", prestige: 31, weeklyGoal: 1000 },
    { id: 6, nick: "etroxq", rank: "Elder", prestige: 16, weeklyGoal: 1000 },
    { id: 7, nick: "Stuiviiq", rank: "Elder", prestige: 21, weeklyGoal: 1000 },
    { id: 8, nick: "PorscheAirlines", rank: "Elder", prestige: 33, weeklyGoal: 1000 },
    { id: 9, nick: "Wuixiiq", rank: "Elder", prestige: 25, weeklyGoal: 1000 },
    { id: 10, nick: "451MadisonBearr", rank: "Elder", prestige: 18, weeklyGoal: 1000 },
    { id: 11, nick: "ItsZUMO", rank: "Member", prestige: 24, weeklyGoal: 1000 },
    { id: 12, nick: "Fedasko", rank: "Member", prestige: 21, weeklyGoal: 1000 },
    { id: 13, nick: "Pqndiss", rank: "Member", prestige: 21, weeklyGoal: 1000 },
    { id: 14, nick: "stormzthechamp", rank: "Member", prestige: 18, weeklyGoal: 1000 },
    { id: 15, nick: "Kerry_rp", rank: "Member", prestige: 22, weeklyGoal: 1000 },
    { id: 16, nick: "CLSAirlines", rank: "Member", prestige: 16, weeklyGoal: 1000 },
    { id: 17, nick: "SomFrajerMore", rank: "Member", prestige: 15, weeklyGoal: 1000 },
    { id: 18, nick: "Tronndd", rank: "Member", prestige: 20, weeklyGoal: 1000 }
  ];

  return baseList.map(p => ({
    ...p,
    deaths: 0,
    sigils: 0,
    contrib: {
      obj_xmas_1: Math.floor(Math.random() * 180) + 40,
      obj_xmas_2: Math.floor(Math.random() * 120) + 20
    },
    comments: []
  }));
}

function createInitialObjectives() {
  return [
    {
      id: "obj_xmas_1",
      title: "VÁNOČNÍ STREAK & KILLS",
      unit: "bodů",
      tiers: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
      activeTier: 1,
      currentDone: 620,
      rewardCompleted: false
    },
    {
      id: "obj_xmas_2",
      title: "ZIMNÍ QUESTY & EVENTY",
      unit: "bodů",
      tiers: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
      activeTier: 2,
      currentDone: 375,
      rewardCompleted: false
    }
  ];
}

const defaultData = {
  weekName: "Týden #1 • Vánoční LAP The Pit",
  lastUpdated: formatNowCzech(),
  totalChestOverride: null,
  enchantCatalog: cloneData(DEFAULT_ENCHANT_CATALOG),
  swordEnchantCatalog: cloneData(DEFAULT_SWORD_ENCHANT_CATALOG),
  objectives: createInitialObjectives(),
  announcements: [
    {
      id: "ann_welcome_xmas",
      title: "🎄 Vánoční společný event v Pit",
      date: "",
      time: "20:00",
      desc: "Sejdeme se na spawnu a potáhneme společné tiery beden!",
      author: "Bowmanik",
      pinned: true,
      createdAt: formatNowCzech(),
      signups: [{ nick: "Bowmanik", roleNote: "Vedu event a koordinuji tiery" }]
    }
  ],
  polls: [
    {
      id: "poll_welcome_xmas",
      question: "🎁 Chcete o víkendu udělat vánoční grind na T10 bednu?",
      desc: "Hlasujte Ano / Ne",
      author: "Bowmanik",
      pinned: true,
      createdAt: formatNowCzech(),
      votes: { Bowmanik: "yes" }
    }
  ],
  players: createInitialPlayers(),
  history: []
};

function safeReadSession() {
  try {
    return JSON.parse(sessionStorage.getItem("lap_pit_session")) || null;
  } catch {
    return null;
  }
}

function getCurrentUserStorageKey() {
  const raw =
    authState.currentUser?.username ||
    authState.currentUser?.mcNick ||
    "guest";
  return String(raw).trim().toLowerCase() || "guest";
}

function loadUserItemsCollection(storagePrefix) {
  const key = `${storagePrefix}_by_user_v1`;
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // Ignoruj chybu čtení
  }
  return {};
}

function getUserSavedItems(storagePrefix) {
  const map = loadUserItemsCollection(storagePrefix);
  const userKey = getCurrentUserStorageKey();
  const list = map[userKey];
  return Array.isArray(list) ? list : [];
}

function setUserSavedItems(storagePrefix, items) {
  const key = `${storagePrefix}_by_user_v1`;
  const map = loadUserItemsCollection(storagePrefix);
  const userKey = getCurrentUserStorageKey();
  map[userKey] = Array.isArray(items) ? items : [];
  localStorage.setItem(key, JSON.stringify(map));
}

const authState = { currentUser: safeReadSession() };

const pantsState = {
  cratesOpened: 0,
  pantsDroppedCount: 0,
  currentPants: null
};

const swordsState = {
  swordsStartedCount: 0,
  currentSword: null
};

let data = loadData();
let isSyncingFromRemote = false;
let activePlayerModalId = null;
let toastTimer = null;

function getMcHeadUrl(nick, size = 48) {
  return `https://mc-heads.net/avatar/${encodeURIComponent(nick || "MHF_Steve")}/${size}`;
}

function parseOptionalTierGoal(val) {
  if (val === null || val === undefined || String(val).trim() === "") return null;
  const num = Number(val);
  return Number.isFinite(num) && num > 0 ? Math.floor(num) : null;
}

function normalizeObjective(obj, idx = 0) {
  const safeObj = obj && typeof obj === "object" ? obj : {};
  const activeTier = Math.min(10, Math.max(0, Number(safeObj.activeTier) ?? 0));

  const tiers = [...EMPTY_TIERS_T0_TO_T10];
  if (Array.isArray(safeObj.tiers)) {
    for (let i = 0; i < 11; i++) tiers[i] = parseOptionalTierGoal(safeObj.tiers[i]);
  } else if (safeObj.tiers && typeof safeObj.tiers === "object") {
    for (let i = 0; i <= 10; i++) tiers[i] = parseOptionalTierGoal(safeObj.tiers[i] ?? safeObj.tiers[`T${i}`]);
  }

  const explicitGoal = parseOptionalTierGoal(
    safeObj.tierGoal ?? safeObj.targetTotal ?? safeObj.goal ?? safeObj.target
  );
  if (explicitGoal !== null && tiers[activeTier] === null) {
    tiers[activeTier] = explicitGoal;
  }

  const rawDoneCandidate = safeObj.currentDone ?? safeObj.done ?? safeObj.progress;
  const currentDone =
    typeof rawDoneCandidate === "number" && !Number.isNaN(rawDoneCandidate)
      ? Math.max(0, rawDoneCandidate)
      : rawDoneCandidate !== null &&
          rawDoneCandidate !== undefined &&
          String(rawDoneCandidate).trim() !== "" &&
          !Number.isNaN(Number(rawDoneCandidate))
        ? Math.max(0, Number(rawDoneCandidate))
        : null;

  return {
    ...safeObj,
    id: String(safeObj.id || `obj_${idx}`),
    title: String(safeObj.title || `Objective ${idx + 1}`),
    unit: String(safeObj.unit || "bodů"),
    tiers,
    activeTier,
    currentDone,
    rewardCompleted: Boolean(safeObj.rewardCompleted)
  };
}

function normalizeComment(c, idx = 0) {
  const item = c && typeof c === "object" ? c : {};
  return {
    id: String(item.id || `cmt_${idx}`),
    author: String(item.author || "Člen LAP"),
    text: String(item.text || ""),
    createdAt: String(item.createdAt || "—")
  };
}

function normalizePlayer(p, idx = 0) {
  const safeP = p && typeof p === "object" ? p : {};
  return {
    ...safeP,
    id: safeP.id ?? idx + 1,
    nick: String(safeP.nick || `Hráč ${idx + 1}`),
    rank: safeP.rank || "Member",
    prestige: Math.max(0, Math.min(100, Number(safeP.prestige) || 0)),
    weeklyGoal: Math.max(0, Number(safeP.weeklyGoal) || 0),
    deaths: Math.max(0, Number(safeP.deaths) || 0),
    sigils: Math.max(0, Number(safeP.sigils) || 0),
    contrib: safeP.contrib && typeof safeP.contrib === "object" ? safeP.contrib : {},
    comments: Array.isArray(safeP.comments)
      ? safeP.comments.filter(c => c && String(c.text || "").trim()).map(normalizeComment)
      : []
  };
}

function normalizePoll(poll, idx = 0) {
  const safePoll = poll && typeof poll === "object" ? poll : {};
  const votes =
    safePoll.votes && typeof safePoll.votes === "object"
      ? Object.fromEntries(
          Object.entries(safePoll.votes)
            .filter(([nick, v]) => nick && (v === "yes" || v === "no"))
            .map(([nick, v]) => [String(nick), v])
        )
      : {};

  return {
    id: String(safePoll.id || `poll_${idx}`),
    question: String(safePoll.question || "Anketa"),
    desc: String(safePoll.desc || ""),
    author: String(safePoll.author || "Člen LAP"),
    pinned: Boolean(safePoll.pinned),
    createdAt: String(safePoll.createdAt || "—"),
    votes
  };
}

function toArray(val) {
  if (Array.isArray(val)) return val;
  if (val && typeof val === "object") return Object.values(val);
  return [];
}

function hydrateCatalog(rawList, fallbackList, prefix = "enc") {
  const arr = toArray(rawList);
  if (arr.length === 0) return cloneData(fallbackList);
  return arr.map((e, i) => ({
    id: String(e?.id || `${prefix}_${i}`),
    name: String(e?.name || "Enchant"),
    rarity: ["common", "rare", "epic"].includes(e?.rarity) ? e.rarity : "common"
  }));
}

function hydrateData(parsed) {
  const base = cloneData(defaultData);
  const src = parsed && typeof parsed === "object" ? parsed : {};

  const overrideVal =
    src.totalChestOverride === null || src.totalChestOverride === undefined || src.totalChestOverride === ""
      ? null
      : Math.min(10, Math.max(0, Number(src.totalChestOverride) || 0));

  const catalog = hydrateCatalog(src.enchantCatalog, DEFAULT_ENCHANT_CATALOG, "enc");
  const swordCatalog = hydrateCatalog(src.swordEnchantCatalog, DEFAULT_SWORD_ENCHANT_CATALOG, "sw");

  const rawPlayers = toArray(src.players);
  const rawObjectives = toArray(src.objectives);

  return {
    ...base,
    ...src,
    weekName: String(src.weekName || base.weekName),
    lastUpdated: src.lastUpdated || formatNowCzech(),
    totalChestOverride: overrideVal,
    enchantCatalog: catalog,
    swordEnchantCatalog: swordCatalog,
    objectives: rawObjectives.length > 0 ? rawObjectives.map(normalizeObjective) : base.objectives,
    announcements: toArray(src.announcements).map(a => ({
      ...(a && typeof a === "object" ? a : {}),
      author: String(a?.author || "Člen LAP"),
      pinned: Boolean(a?.pinned)
    })),
    polls: toArray(src.polls).map(normalizePoll),
    players: rawPlayers.length > 0 ? rawPlayers.map(normalizePlayer) : base.players,
    history: toArray(src.history)
  };
}

function decodeBase64Utf8(base64Str) {
  const binary = atob(base64Str);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function encodeBase64Utf8(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function loadData() {
  try {
    if (window.location.hash.startsWith("#pit=")) {
      const raw = window.location.hash.replace("#pit=", "");
      const parsed = JSON.parse(decodeBase64Utf8(raw));
      const hydrated = hydrateData(parsed);
      localStorage.setItem("lap_pit_data_v18", JSON.stringify(hydrated));
      return hydrated;
    }
    const saved =
      localStorage.getItem("lap_pit_data_v18") ||
      localStorage.getItem("lap_pit_data_v17") ||
      localStorage.getItem("lap_pit_data_v16");
    if (!saved) return cloneData(defaultData);
    return hydrateData(JSON.parse(saved));
  } catch {
    return cloneData(defaultData);
  }
}

async function fetchRemoteData() {
  const res = await fetch(`${FIREBASE_DB_URL}${FIREBASE_PATH}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Chyba čtení");
  const json = await res.json();
  return json ? hydrateData(json) : null;
}

async function pushRemoteData(payload) {
  const res = await fetch(`${FIREBASE_DB_URL}${FIREBASE_PATH}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Chyba zápisu");
}

function isUserEditingForm() {
  const active = document.activeElement;
  if (!active) return false;
  return ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName);
}

function saveData(touchTimestamp = true, syncRemote = true, skipAdminReRender = false) {
  if (touchTimestamp) data.lastUpdated = formatNowCzech();
  localStorage.setItem("lap_pit_data_v18", JSON.stringify(data));
  renderAll({ skipAdmin: skipAdminReRender });

  if (syncRemote && !isSyncingFromRemote) {
    pushRemoteData(data).catch(() => {
      showToast("Uloženo lokálně (bez spojení s Firebase).");
    });
  }
}

async function initRealtimeSync() {
  try {
    const remote = await fetchRemoteData();
    if (remote) {
      data = remote;
      localStorage.setItem("lap_pit_data_v18", JSON.stringify(data));
      renderAll();
    } else {
      await pushRemoteData(data);
    }
  } catch {
    // Lokální režim funguje i bez sítě
  }

  setInterval(async () => {
    if (document.hidden || isUserEditingForm()) return;
    try {
      const latest = await fetchRemoteData();
      if (!latest) return;
      if (JSON.stringify(data) !== JSON.stringify(latest)) {
        isSyncingFromRemote = true;
        data = latest;
        localStorage.setItem("lap_pit_data_v18", JSON.stringify(data));
        renderAll();
        if (activePlayerModalId !== null) openPlayerDetailModal(activePlayerModalId, true);
        isSyncingFromRemote = false;
      }
    } catch {
      // Tichý pokus na pozadí
    }
  }, 5000);
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
  return authState.currentUser?.mcNick || authState.currentUser?.username || "Hráč";
}

function setHidden(el, shouldHide) {
  if (el) el.classList.toggle("hidden", Boolean(shouldHide));
}

function applyAnnouncementAuthGuard() {
  const gate = document.getElementById("announcementLoginGate");
  const card = document.getElementById("announcementCreatorCard");
  const hint = document.getElementById("annCreatorAuthorHint");
  if (!gate || !card) return;

  if (isLoggedIn()) {
    setHidden(gate, true);
    setHidden(card, false);
    if (hint) hint.innerHTML = `Vytváříš jako: <strong>${escapeHtml(getCurrentActorNick())}</strong>`;
  } else {
    setHidden(gate, false);
    setHidden(card, true);
  }
}

function applyPollAuthGuard() {
  const gate = document.getElementById("pollLoginGate");
  const card = document.getElementById("pollCreatorCard");
  const hint = document.getElementById("pollCreatorAuthorHint");
  if (!gate || !card) return;

  if (isLoggedIn()) {
    setHidden(gate, true);
    setHidden(card, false);
    if (hint) hint.innerHTML = `Vytváříš jako: <strong>${escapeHtml(getCurrentActorNick())}</strong>`;
  } else {
    setHidden(gate, false);
    setHidden(card, true);
  }
}

function applyPantsAuthGuard() {
  const gate = document.getElementById("pantsAuthGate");
  const content = document.getElementById("pantsAuthenticatedContent");
  const adminEnchantCard = document.getElementById("adminEnchantCreatorCard");

  setHidden(adminEnchantCard, !isAdmin());
  if (!gate || !content) return;

  if (isLoggedIn()) {
    setHidden(gate, true);
    setHidden(content, false);
  } else {
    setHidden(gate, false);
    setHidden(content, true);
  }
}

function applySwordsAuthGuard() {
  const gate = document.getElementById("swordsAuthGate");
  const content = document.getElementById("swordsAuthenticatedContent");
  const adminSwordCard = document.getElementById("adminSwordEnchantCreatorCard");

  setHidden(adminSwordCard, !isAdmin());
  if (!gate || !content) return;

  if (isLoggedIn()) {
    setHidden(gate, true);
    setHidden(content, false);
  } else {
    setHidden(gate, false);
    setHidden(content, true);
  }
}

function applyPermissions() {
  document.querySelectorAll("[data-admin-only]").forEach(el => {
    setHidden(el, !isAdmin());
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

    setHidden(userPill, false);
    setHidden(openBtn, true);
    setHidden(logoutBtn, false);
  } else {
    setHidden(userPill, true);
    setHidden(openBtn, false);
    setHidden(logoutBtn, true);
  }

  const adminTab = document.getElementById("tab-admin");
  if (!isAdmin() && adminTab?.classList.contains("active")) switchTab("overview");

  applyPantsAuthGuard();
  applySwordsAuthGuard();
  applyAnnouncementAuthGuard();
  applyPollAuthGuard();
}

function openAuthModal() {
  document.getElementById("authUsername").value = "";
  document.getElementById("authPassword").value = "";
  document.getElementById("authPassword").type = "password";
  const fb = document.getElementById("authFeedback");
  fb.textContent = "";
  fb.className = "auth-feedback";
  document.getElementById("authModal").classList.add("open");
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("open");
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
  authState.currentUser = { username: found.username, mcNick: found.mcNick, role: effectiveRole };
  saveSession();

  feedback.textContent = `Přihlášeno jako ${found.mcNick} (${effectiveRole}).`;
  feedback.className = "auth-feedback ok";

  renderAll();
  if (activePlayerModalId !== null) openPlayerDetailModal(activePlayerModalId, true);

  setTimeout(() => {
    closeAuthModal();
    showToast(`Přihlášen jako ${found.mcNick}`);
  }, 250);
}

function logoutUser() {
  authState.currentUser = null;
  pantsState.currentPants = null;
  swordsState.currentSword = null;
  saveSession();
  renderAll();
  if (activePlayerModalId !== null) openPlayerDetailModal(activePlayerModalId, true);
  showToast("Byl jsi odhlášen.");
}

function switchTab(tab) {
  if (!tab) return;
  if (tab === "admin" && !isAdmin()) {
    showToast("Správa je dostupná pouze pro účet Bowmanik (bowman).");
    return;
  }

  if ((tab === "pants" || tab === "swords") && !isLoggedIn()) {
    applyPantsAuthGuard();
    applySwordsAuthGuard();
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
    document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));
    document.getElementById(`tab-${tab}`)?.classList.add("active");
    document.querySelector(`.nav-tab[data-tab="${tab}"]`)?.classList.add("active");
    openAuthModal();
    showToast(`Pro vstup do sekce ${tab === "pants" ? "Pants" : "Swords"} se musíš přihlásit.`);
    return;
  }

  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".nav-tab").forEach(el => el.classList.remove("active"));

  document.getElementById(`tab-${tab}`)?.classList.add("active");
  document.querySelector(`.nav-tab[data-tab="${tab}"]`)?.classList.add("active");
}

/* SHARED ENCHANT ROLLER */
function pickRandomRarity() {
  const total = RARITY_WEIGHTS.common + RARITY_WEIGHTS.rare + RARITY_WEIGHTS.epic;
  let r = Math.random() * total;
  if (r < RARITY_WEIGHTS.common) return "common";
  r -= RARITY_WEIGHTS.common;
  if (r < RARITY_WEIGHTS.rare) return "rare";
  return "epic";
}

function rollEnchantFromCatalog(catalog, currentEnchants, checkPantsIncompatibilities = false) {
  if (!Array.isArray(catalog) || catalog.length === 0) return null;

  const existingNames = new Set(currentEnchants.map(e => e.name));
  const hasReallyAlive = existingNames.has("Really Alive");
  const hasExcess = existingNames.has("Excess");

  const isForbiddenTogether = candidateName =>
    checkPantsIncompatibilities &&
    ((candidateName === "Really Alive" && hasExcess) ||
      (candidateName === "Excess" && hasReallyAlive));

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

  if (pool.length === 0) pool = catalog.filter(e => !existingNames.has(e.name) && !isForbiddenTogether(e.name));
  if (pool.length === 0) pool = catalog.filter(e => !isForbiddenTogether(e.name));
  if (pool.length === 0) return null;

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  return {
    name: chosen.name,
    rarity: chosen.rarity,
    level: Math.floor(Math.random() * 3) + 1
  };
}

function buildEnchantCatalogHtml(catalog, deleteAttrName) {
  const list = Array.isArray(catalog) ? catalog : [];
  const byRarity = [
    { key: "common", title: "⚪ Common Enchanty (Šedá • 60 %)", items: list.filter(e => e.rarity === "common") },
    { key: "rare", title: "🔵 Rare Enchanty (Modrá • 30 %)", items: list.filter(e => e.rarity === "rare") },
    { key: "epic", title: "🟣 Epic Enchanty (Fialová • 10 %)", items: list.filter(e => e.rarity === "epic") }
  ];

  return byRarity.map(group => `
    <div class="pants-item-card">
      <h3>${escapeHtml(group.title)}</h3>
      ${group.items.length === 0 ? `<p class="muted-text">Žádné enchanty v této kategorii.</p>` : ""}
      ${group.items.map(it => `
        <div class="enchant-line border-${escapeHtml(it.rarity)}">
          <div class="enchant-line-top">
            <strong class="enchant-name-${escapeHtml(it.rarity)}">${escapeHtml(it.name)}</strong>
            <div class="admin-inputs mt-0">
              <span class="muted-text">Tier I–III</span>
              ${isAdmin() ? `<button type="button" class="btn btn-red btn-sm" ${deleteAttrName}="${escapeHtml(it.id)}">✕</button>` : ""}
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

/* PANTS */
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
  const hit = Math.random() * 100 < chance;
  const statusEl = document.getElementById("pantsCrateStatus");

  if (hit) {
    const droppedColor = pickRandomPantsColor();
    pantsState.pantsDroppedCount += 1;
    pantsState.currentPants = {
      id: `pants_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      colorId: droppedColor.id,
      tier: 0,
      enchants: [],
      fromChest: `Tier ${chestTier} Bedna`
    };
    const msg = `Gratuluju získal si ${droppedColor.name}`;
    if (statusEl) {
      statusEl.className = "pants-status-box hit";
      statusEl.innerHTML = `🎉 <strong>${escapeHtml(msg)}!</strong> Teď je můžeš enchantovat přes Tier 1 → Tier 2 → Tier 3.`;
    }
    showToast(`🎉 ${msg}!`);
  } else {
    const missMsg = "Nevadi, zkus to priste";
    if (statusEl) {
      statusEl.className = "pants-status-box miss";
      statusEl.innerHTML = `❌ <strong>${escapeHtml(missMsg)}</strong>`;
    }
    showToast(missMsg);
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
    statusEl.innerHTML = `Vyber <strong>Tier 8</strong>, <strong>Tier 9</strong> nebo <strong>Tier 10</strong> bednu a klikni na <strong>🎁 Vyzvednout bednu</strong>.`;
  }
  renderPantsTab();
}

function enchantCurrentPantsStep() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  const p = pantsState.currentPants;
  if (!p || p.tier >= 3) return;

  const rolled = rollEnchantFromCatalog(data.enchantCatalog, p.enchants, true);
  if (!rolled) {
    showToast("V katalogu nejsou dostupné žádné enchanty.");
    return;
  }

  p.tier += 1;
  p.enchants.push(rolled);

  if (p.tier === 3) {
    const mySaved = getUserSavedItems("lap_pit_saved_pants");
    mySaved.unshift({
      ...cloneData(p),
      owner: getCurrentActorNick(),
      createdAt: formatNowCzech()
    });
    setUserSavedItems("lap_pit_saved_pants", mySaved);
    showToast(`✨ Dokončeny Tier 3 ${getColorObj(p.colorId).name}!`);
  } else {
    showToast(`✨ Enchantnuto na Tier ${p.tier} (${rolled.name} ${ROMAN_TIERS[rolled.level]})`);
  }

  renderPantsTab();
}

function addCustomEnchant() {
  if (!isAdmin()) return;
  const name = document.getElementById("newEnchantName").value.trim();
  const rarity = document.getElementById("newEnchantRarity").value;
  if (!name) {
    showToast("Vyplň název enchantu.");
    return;
  }

  data.enchantCatalog.push({
    id: `enc_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    rarity: ["common", "rare", "epic"].includes(rarity) ? rarity : "common"
  });

  document.getElementById("newEnchantName").value = "";
  saveData();
  showToast(`Enchant "${name}" přidán.`);
}

function removeCustomEnchant(encId) {
  if (!isAdmin()) return;
  data.enchantCatalog = data.enchantCatalog.filter(e => e.id !== encId);
  saveData();
  showToast("Enchant odebrán.");
}

function resetEnchantsToDefault() {
  if (!isAdmin()) return;
  if (!confirm("Obnovit výchozí seznam enchantů pro Pants?")) return;
  data.enchantCatalog = cloneData(DEFAULT_ENCHANT_CATALOG);
  saveData();
  showToast("Výchozí enchanty obnoveny.");
}

function deleteSavedPantsItem(pantsId) {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  const updated = getUserSavedItems("lap_pit_saved_pants").filter(item => item.id !== pantsId);
  setUserSavedItems("lap_pit_saved_pants", updated);
  showToast("Kalhoty ze sbírky smazány.");
  renderPantsTab();
}

function clearSavedPants() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  const current = getUserSavedItems("lap_pit_saved_pants");
  if (current.length === 0) {
    showToast("Tvoje sbírka kalhot už je prázdná.");
    return;
  }
  setUserSavedItems("lap_pit_saved_pants", []);
  showToast("Tvoje sbírka Tier 3 pantů byla vymazána.");
  renderPantsTab();
}

function renderPantsTab() {
  applyPantsAuthGuard();
  if (!isLoggedIn()) return;

  const mySavedPants = getUserSavedItems("lap_pit_saved_pants");

  const statsRow = document.getElementById("pantsStatsRow");
  if (statsRow) {
    statsRow.innerHTML = `
      <span>Otevřené bedny: <strong>${pantsState.cratesOpened}</strong></span>
      <span>Padlé panty: <strong>${pantsState.pantsDroppedCount}</strong></span>
      <span>Moje T3: <strong>${mySavedPants.length}</strong></span>
    `;
  }

  const workbench = document.getElementById("activePantsWorkbench");
  if (workbench) {
    const p = pantsState.currentPants;
    if (!p) {
      workbench.innerHTML = `
        <div class="pants-item-card">
          <div class="player-name">Čeká na drop pantů z bedny</div>
          <p class="muted-text mt-6">
            Jakmile ti z bedny padnou náhodné panty (<strong>Red</strong>, <strong>Green</strong>, <strong>Blue</strong> nebo <strong>Yellow</strong>), můžeš je zde postupně enchantovat přes <strong>Tier 1 → Tier 2 → Tier 3</strong>.
          </p>
        </div>
      `;
    } else {
      const col = getColorObj(p.colorId);
      const tierLabel = p.tier === 0 ? "Čisté panty (Tier 0)" : `Tier ${p.tier} Panty`;
      const enchantsHtml = p.enchants.length
        ? p.enchants.map(e => `
            <div class="enchant-line border-${escapeHtml(e.rarity)}">
              <div class="enchant-line-top">
                <strong class="enchant-name-${escapeHtml(e.rarity)}">${escapeHtml(e.name)} ${ROMAN_TIERS[e.level] || ""}</strong>
                <span class="rarity-pill rarity-${escapeHtml(e.rarity)}">${escapeHtml(e.rarity)}</span>
              </div>
            </div>
          `).join("")
        : `<p class="muted-text mt-10">Zatím žádné enchanty. Klikni pro enchantnutí na <strong>Tier 1</strong>.</p>`;

      const actionBtnHtml = p.tier < 3
        ? `<button type="button" class="btn btn-green" id="enchantStepBtn">✨ Enchantnout na Tier ${p.tier + 1}</button>`
        : `<div class="completion-box mt-12 mb-0"><span>Stav itemu</span><strong>✅ HOTOVO • TIER 3 PANTY</strong></div>`;

      workbench.innerHTML = `
        <div class="pants-item-card ${col.cardClass}">
          <div class="card-header-row">
            <div>
              <span class="pants-swatch ${col.swatchClass}"></span>
              <strong class="player-name">${escapeHtml(col.name)}</strong>
              <span class="player-sub">• ${escapeHtml(tierLabel)}</span>
            </div>
            <span class="obj-badge">${escapeHtml(p.fromChest || "Bedna")}</span>
          </div>
          ${enchantsHtml}
          <div class="actions-row">${actionBtnHtml}</div>
        </div>
      `;
      document.getElementById("enchantStepBtn")?.addEventListener("click", enchantCurrentPantsStep);
    }
  }

  const catalogGrid = document.getElementById("enchantCatalogGrid");
  if (catalogGrid) {
    catalogGrid.innerHTML = buildEnchantCatalogHtml(data.enchantCatalog, "data-del-enchant");
  }

  const savedGrid = document.getElementById("savedPantsGrid");
  if (savedGrid) {
    if (mySavedPants.length === 0) {
      savedGrid.innerHTML = `<p class="muted-text">Zatím nemáš dokončené žádné Tier 3 panty.</p>`;
    } else {
      savedGrid.innerHTML = mySavedPants.map(item => {
        const col = getColorObj(item.colorId);
        return `
          <div class="pants-item-card ${col.cardClass}">
            <div class="card-header-row mb-6">
              <div>
                <span class="pants-swatch ${col.swatchClass}"></span>
                <strong>${escapeHtml(col.name)} • Tier 3</strong>
              </div>
              <div class="admin-inputs mt-0">
                <span class="obj-badge reward">${escapeHtml(item.owner || getCurrentActorNick())}</span>
                <button type="button" class="btn btn-red btn-sm" data-del-saved-pants="${escapeHtml(item.id)}" title="Smazat tyto kalhoty">✕</button>
              </div>
            </div>
            <div class="player-sub mt-0 mb-8">${escapeHtml(item.createdAt || "")}</div>
            ${(item.enchants || []).map(e => `
              <div class="enchant-line border-${escapeHtml(e.rarity)}">
                <div class="enchant-line-top">
                  <strong class="enchant-name-${escapeHtml(e.rarity)}">${escapeHtml(e.name)} ${ROMAN_TIERS[e.level] || ""}</strong>
                  <span class="rarity-pill rarity-${escapeHtml(e.rarity)}">${escapeHtml(e.rarity)}</span>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      }).join("");
    }
  }
}

/* SWORDS */
function startEnchantSword() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  swordsState.swordsStartedCount += 1;
  swordsState.currentSword = {
    id: `sword_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name: "Mystic Sword",
    tier: 0,
    enchants: []
  };

  const statusEl = document.getElementById("swordStatusBox");
  if (statusEl) {
    statusEl.className = "pants-status-box hit";
    statusEl.innerHTML = `⚔️ <strong>Mystic Sword připraven!</strong> Teď ho můžeš enchantovat přes <strong>Tier 1 → Tier 2 → Tier 3</strong>.`;
  }

  showToast("⚔️ Mystic Sword připraven k enchantování!");
  renderSwordsTab();
}

function resetCurrentSword() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  swordsState.currentSword = null;
  const statusEl = document.getElementById("swordStatusBox");
  if (statusEl) {
    statusEl.className = "pants-status-box";
    statusEl.innerHTML = `Klikni na <strong>⚔️ Enchantnout meč</strong> a začni ho postupně vylepšovat přes <strong>Tier 1 → Tier 2 → Tier 3</strong>.`;
  }
  renderSwordsTab();
}

function enchantCurrentSwordStep() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  const s = swordsState.currentSword;
  if (!s || s.tier >= 3) return;

  const rolled = rollEnchantFromCatalog(data.swordEnchantCatalog, s.enchants, false);
  if (!rolled) {
    showToast("V katalogu nejsou dostupné žádné sword enchanty.");
    return;
  }

  s.tier += 1;
  s.enchants.push(rolled);

  if (s.tier === 3) {
    const mySaved = getUserSavedItems("lap_pit_saved_swords");
    mySaved.unshift({
      ...cloneData(s),
      owner: getCurrentActorNick(),
      createdAt: formatNowCzech()
    });
    setUserSavedItems("lap_pit_saved_swords", mySaved);
    showToast("⚔️ Dokončen Tier 3 Mystic Sword!");
  } else {
    showToast(`✨ Meč enchantnut na Tier ${s.tier} (${rolled.name} ${ROMAN_TIERS[rolled.level]})`);
  }

  renderSwordsTab();
}

function addCustomSwordEnchant() {
  if (!isAdmin()) return;
  const name = document.getElementById("newSwordEnchantName").value.trim();
  const rarity = document.getElementById("newSwordEnchantRarity").value;
  if (!name) {
    showToast("Vyplň název sword enchantu.");
    return;
  }

  data.swordEnchantCatalog.push({
    id: `sw_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name,
    rarity: ["common", "rare", "epic"].includes(rarity) ? rarity : "common"
  });

  document.getElementById("newSwordEnchantName").value = "";
  saveData();
  showToast(`Sword enchant "${name}" přidán.`);
}

function removeCustomSwordEnchant(encId) {
  if (!isAdmin()) return;
  data.swordEnchantCatalog = data.swordEnchantCatalog.filter(e => e.id !== encId);
  saveData();
  showToast("Sword enchant odebrán.");
}

function resetSwordEnchantsToDefault() {
  if (!isAdmin()) return;
  if (!confirm("Obnovit výchozí seznam sword enchantů?")) return;
  data.swordEnchantCatalog = cloneData(DEFAULT_SWORD_ENCHANT_CATALOG);
  saveData();
  showToast("Výchozí sword enchanty obnoveny.");
}

function deleteSavedSwordItem(swordId) {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  const updated = getUserSavedItems("lap_pit_saved_swords").filter(item => item.id !== swordId);
  setUserSavedItems("lap_pit_saved_swords", updated);
  showToast("Meč ze sbírky smazán.");
  renderSwordsTab();
}

function clearSavedSwords() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  const current = getUserSavedItems("lap_pit_saved_swords");
  if (current.length === 0) {
    showToast("Tvoje sbírka mečů už je prázdná.");
    return;
  }
  setUserSavedItems("lap_pit_saved_swords", []);
  showToast("Tvoje sbírka Tier 3 mečů byla vymazána.");
  renderSwordsTab();
}

function renderSwordsTab() {
  applySwordsAuthGuard();
  if (!isLoggedIn()) return;

  const mySavedSwords = getUserSavedItems("lap_pit_saved_swords");

  const statsRow = document.getElementById("swordsStatsRow");
  if (statsRow) {
    statsRow.innerHTML = `
      <span>Vytvořené meče: <strong>${swordsState.swordsStartedCount}</strong></span>
      <span>Moje T3: <strong>${mySavedSwords.length}</strong></span>
    `;
  }

  const workbench = document.getElementById("activeSwordWorkbench");
  if (workbench) {
    const s = swordsState.currentSword;
    if (!s) {
      workbench.innerHTML = `
        <div class="pants-item-card sword-card">
          <div class="player-name">Žádný aktivní meč na stole</div>
          <p class="muted-text mt-6">
            Klikni vlevo na tlačítko <strong>⚔️ Enchantnout meč</strong> a poté postupně přidávej enchanty přes <strong>Tier 1 → Tier 2 → Tier 3</strong>.
          </p>
        </div>
      `;
    } else {
      const tierLabel = s.tier === 0 ? "Čistý Mystic Sword (Tier 0)" : `Tier ${s.tier} Mystic Sword`;
      const enchantsHtml = s.enchants.length
        ? s.enchants.map(e => `
            <div class="enchant-line border-${escapeHtml(e.rarity)}">
              <div class="enchant-line-top">
                <strong class="enchant-name-${escapeHtml(e.rarity)}">${escapeHtml(e.name)} ${ROMAN_TIERS[e.level] || ""}</strong>
                <span class="rarity-pill rarity-${escapeHtml(e.rarity)}">${escapeHtml(e.rarity)}</span>
              </div>
            </div>
          `).join("")
        : `<p class="muted-text mt-10">Zatím žádné enchanty. Klikni pro enchantnutí na <strong>Tier 1</strong>.</p>`;

      const actionBtnHtml = s.tier < 3
        ? `<button type="button" class="btn btn-green" id="enchantSwordStepBtn">✨ Enchantnout na Tier ${s.tier + 1}</button>`
        : `<div class="completion-box mt-12 mb-0"><span>Stav zbraně</span><strong>✅ HOTOVO • TIER 3 SWORD</strong></div>`;

      workbench.innerHTML = `
        <div class="pants-item-card sword-card">
          <div class="card-header-row">
            <div>
              <strong class="player-name">⚔️ ${escapeHtml(s.name)}</strong>
              <span class="player-sub">• ${escapeHtml(tierLabel)}</span>
            </div>
            <span class="obj-badge">Tier ${s.tier}/3</span>
          </div>
          ${enchantsHtml}
          <div class="actions-row">${actionBtnHtml}</div>
        </div>
      `;
      document.getElementById("enchantSwordStepBtn")?.addEventListener("click", enchantCurrentSwordStep);
    }
  }

  const catalogGrid = document.getElementById("swordEnchantCatalogGrid");
  if (catalogGrid) {
    catalogGrid.innerHTML = buildEnchantCatalogHtml(data.swordEnchantCatalog, "data-del-sword-enchant");
  }

  const savedGrid = document.getElementById("savedSwordsGrid");
  if (savedGrid) {
    if (mySavedSwords.length === 0) {
      savedGrid.innerHTML = `<p class="muted-text">Zatím nemáš dokončené žádné Tier 3 meče.</p>`;
    } else {
      savedGrid.innerHTML = mySavedSwords.map(item => `
        <div class="pants-item-card sword-card">
          <div class="card-header-row mb-6">
            <div>
              <strong>⚔️ Mystic Sword • Tier 3</strong>
            </div>
            <div class="admin-inputs mt-0">
              <span class="obj-badge reward">${escapeHtml(item.owner || getCurrentActorNick())}</span>
              <button type="button" class="btn btn-red btn-sm" data-del-saved-sword="${escapeHtml(item.id)}" title="Smazat tento meč">✕</button>
            </div>
          </div>
          <div class="player-sub mt-0 mb-8">${escapeHtml(item.createdAt || "")}</div>
          ${(item.enchants || []).map(e => `
            <div class="enchant-line border-${escapeHtml(e.rarity)}">
              <div class="enchant-line-top">
                <strong class="enchant-name-${escapeHtml(e.rarity)}">${escapeHtml(e.name)} ${ROMAN_TIERS[e.level] || ""}</strong>
                <span class="rarity-pill rarity-${escapeHtml(e.rarity)}">${escapeHtml(e.rarity)}</span>
              </div>
            </div>
          `).join("")}
        </div>
      `).join("");
    }
  }
}

/* OBJECTIVES & RYSKA */
function getPlayerContrib(player, objId) {
  return Math.max(0, Number(player.contrib?.[objId]) || 0);
}

function getPlayerTotalUnits(player) {
  return data.objectives.reduce((sum, obj) => sum + getPlayerContrib(player, obj.id), 0);
}

function getPlayersSumForObjective(objId) {
  return data.players.reduce((sum, p) => sum + getPlayerContrib(p, objId), 0);
}

function getObjectiveProgressInfo(obj) {
  const tiers = obj.tiers || EMPTY_TIERS_T0_TO_T10;
  const activeTier = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
  const tierGoal = parseOptionalTierGoal(tiers[activeTier]);
  const rewardCompleted = Boolean(obj.rewardCompleted);

  const rawDone =
    typeof obj.currentDone === "number" && !Number.isNaN(obj.currentDone)
      ? Math.max(0, obj.currentDone)
      : getPlayersSumForObjective(obj.id);

  const doneValue = rewardCompleted && tierGoal ? Math.max(rawDone, tierGoal) : rawDone;
  const pct = rewardCompleted
    ? 100
    : tierGoal
      ? Math.min(100, Math.max(0, Math.round((doneValue / tierGoal) * 100)))
      : 0;

  const missingInCurrentTier = tierGoal ? Math.max(0, tierGoal - doneValue) : null;
  const reachedTier =
    rewardCompleted || (tierGoal && doneValue >= tierGoal) ? activeTier : Math.max(0, activeTier - 1);

  let tierBadgeText = `Tier T${activeTier}`;
  if (rewardCompleted) tierBadgeText = `🎁 Splněno • T${activeTier}`;
  else if (tierGoal && doneValue >= tierGoal) tierBadgeText = `T${activeTier} splněno`;

  return {
    activeTier,
    tierGoal,
    doneValue,
    pct,
    missingInCurrentTier,
    reachedTier,
    rewardCompleted,
    tierBadgeText
  };
}

function buildRulerHtml(info, unit = "bodů") {
  const hasGoal = Boolean(info.tierGoal) || info.rewardCompleted;
  const pctText = hasGoal ? `${info.pct} %` : "—";
  const markerPos = hasGoal ? Math.min(100, Math.max(0, info.pct)) : 0;

  const statusText = info.tierGoal
    ? `Hotovo: <strong>${info.doneValue.toLocaleString("cs-CZ")}</strong> / <strong>${info.tierGoal.toLocaleString("cs-CZ")}</strong> ${escapeHtml(unit)} • Chybí: <strong>${info.missingInCurrentTier.toLocaleString("cs-CZ")}</strong>`
    : `Hotovo: <strong>${info.doneValue.toLocaleString("cs-CZ")}</strong> ${escapeHtml(unit)} • Cíl T${info.activeTier} nezadán`;

  return `
    <div class="ruler-box">
      <div class="ruler-top">
        <span>${statusText}</span>
        <span class="ruler-pct">${pctText}</span>
      </div>
      <div class="ruler-track">
        <div class="ruler-fill ${info.rewardCompleted ? "done" : ""}" style="width:${markerPos}%"></div>
        <div class="ruler-needle" style="left:${markerPos}%"></div>
      </div>
      <div class="ruler-ticks">
        <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
      </div>
    </div>
  `;
}

function getTotalChestInfo() {
  const parts = data.objectives.map((obj, idx) => ({
    label: `#${idx + 1} ${obj.title}`,
    tier: Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0))
  }));

  const rawSum = parts.reduce((acc, p) => acc + p.tier, 0);
  const clampedSum = Math.min(10, Math.max(0, rawSum));
  const isManual = data.totalChestOverride !== null && data.totalChestOverride !== undefined;
  const totalTier = isManual
    ? Math.min(10, Math.max(0, Number(data.totalChestOverride) || 0))
    : clampedSum;

  const formulaText =
    parts.length > 0
      ? parts.map(p => `T${p.tier}`).join(" + ") +
        (rawSum > 10 && !isManual ? ` (součet ${rawSum} → max T10)` : "")
      : "Žádné objectives (T0)";

  return { totalTier, rawSum, isManual, formulaText };
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
  if (!select) return;
  const currentVal = select.value;
  select.innerHTML = `
    <option value="share">Největší % podíl</option>
    <option value="total">Největší přínos celkem</option>
    <option value="prestige">Podle Prestige (nejvyšší)</option>
    <option value="deaths">Nejvíce Smrtí</option>
    <option value="sigils">Nejvíce Sigils</option>
    <option value="nick">Abecedně (A–Z)</option>
  `;
  data.objectives.forEach((obj, idx) => {
    select.innerHTML += `<option value="obj:${escapeHtml(obj.id)}">Podle: ${escapeHtml(obj.title)} (#${idx + 1})</option>`;
  });
  if ([...select.options].some(o => o.value === currentVal)) select.value = currentVal;
}

function renderTotalChestBanners() {
  const chest = getTotalChestInfo();
  const bannerHtml = `
    <div>
      <div class="player-sub mt-0">🎄 SPOLEČNÁ VÁNOČNÍ ODMĚNA GUILDY</div>
      <div class="player-name mt-2">Celková aktuální bedna</div>
      <div class="player-sub">${escapeHtml(chest.formulaText)}${chest.isManual ? " • ručně nastaveno" : " • automatický součet tierů"}</div>
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
  ["overviewLastUpdated", "objLastUpdated", "adminLastUpdated"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = tsText;
  });

  const weekSub = document.getElementById("weekSubtitle");
  if (weekSub) weekSub.textContent = `${data.weekName} • mc.survival-games.cz • Společné objectives a příspěvky členů`;

  const objSub = document.getElementById("objTabSubtitle");
  if (objSub) objSub.textContent = `${data.weekName} • Postup guildy a procenta splnění`;

  renderTotalChestBanners();

  const strip = document.getElementById("objectivesStrip");
  const detail = document.getElementById("objectivesDetailGrid");
  if (!strip || !detail) return;

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
      <div class="card">
        <h3>Zatím žádné společné objectives</h3>
        <p class="muted-text">Přihlas se jako správce (bowman) a přidej společný objective.</p>
      </div>
    `;
    return;
  }

  strip.innerHTML = data.objectives.map((obj, idx) => {
    const info = getObjectiveProgressInfo(obj);
    const ratioText = info.tierGoal
      ? `T${info.activeTier}: ${info.doneValue.toLocaleString("cs-CZ")} / ${info.tierGoal.toLocaleString("cs-CZ")} ${obj.unit}`
      : `T${info.activeTier}: ${info.doneValue.toLocaleString("cs-CZ")} ${obj.unit}`;

    return `
      <div class="obj-summary-card ${info.rewardCompleted ? "reward-done" : ""}">
        <div class="card-header-row">
          <div>
            <div class="obj-badges-row">
              <span class="obj-badge ${info.rewardCompleted ? "reward" : ""}">🎄 OBJ ${idx + 1} • ${escapeHtml(info.tierBadgeText)}</span>
            </div>
            <div class="player-name">${escapeHtml(obj.title)}</div>
          </div>
          <div class="obj-goal-pill">${escapeHtml(ratioText)}</div>
        </div>
        ${buildRulerHtml(info, obj.unit)}
      </div>
    `;
  }).join("");

  detail.innerHTML = data.objectives.map((obj, idx) => {
    const info = getObjectiveProgressInfo(obj);
    return `
      <div class="card ${info.rewardCompleted ? "reward-done" : ""}">
        <div class="obj-badges-row">
          <span class="obj-badge ${info.rewardCompleted ? "reward" : ""}">🎄 OBJECTIVE ${idx + 1} • ${escapeHtml(info.tierBadgeText)}</span>
        </div>
        <h3>${escapeHtml(obj.title)}</h3>
        <p class="muted-text mb-6">
          Aktuální tier: <strong>T${info.activeTier}</strong> • Jednotka: <strong>${escapeHtml(obj.unit)}</strong>
        </p>
        ${buildRulerHtml(info, obj.unit)}
      </div>
    `;
  }).join("");
}

/* HRÁČI, KOMENTÁŘE A MODÁL */
function buildPlayerStatsMiniHtml(player) {
  const commentCount = Array.isArray(player.comments) ? player.comments.length : 0;
  return `
    <div class="player-stats-mini">
      <span class="stat-chip">💀 Smrti: <strong>${(player.deaths || 0).toLocaleString("cs-CZ")}</strong></span>
      <span class="stat-chip">🔮 Sigils: <strong>${(player.sigils || 0).toLocaleString("cs-CZ")}</strong></span>
      <span class="stat-chip">💬 Komentáře: <strong>${commentCount}</strong></span>
    </div>
  `;
}

function buildPlayerContribHtml(player) {
  const goalLine =
    player.weeklyGoal > 0
      ? `<div class="obj-progress-top mb-8"><span>🎯 Týdenní cíl: ${getPlayerTotalUnits(player).toLocaleString("cs-CZ")} / ${player.weeklyGoal.toLocaleString("cs-CZ")}</span><strong>${Math.min(100, Math.round((getPlayerTotalUnits(player) / player.weeklyGoal) * 100))} %</strong></div>`
      : "";

  const statsMini = buildPlayerStatsMiniHtml(player);
  if (data.objectives.length === 0) {
    return `${goalLine}<div class="player-sub">Zatím žádné aktivní objectives</div>${statsMini}`;
  }

  return (
    goalLine +
    data.objectives.map(obj => {
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
            <span>${escapeHtml(obj.title)}</span>
            <strong>${made.toLocaleString("cs-CZ")} ${escapeHtml(obj.unit)} (${sharePct}%)</strong>
          </div>
          <div class="progress-track">
            <div class="progress-bar ${info.rewardCompleted ? "reward" : ""}" style="width:${barPct}%"></div>
          </div>
        </div>
      `;
    }).join("") +
    statsMini
  );
}

function canDeletePlayerComment(comment) {
  if (!isLoggedIn()) return false;
  if (isAdmin()) return true;
  const current = getCurrentActorNick().toLowerCase();
  return current && String(comment.author || "").toLowerCase() === current;
}

function addPlayerCommentFromInput(playerId, inputId) {
  if (!isLoggedIn()) {
    openAuthModal();
    showToast("Pro napsání komentáře se musíš přihlásit.");
    return;
  }

  const input = document.getElementById(inputId);
  const text = (input?.value || "").trim();
  if (!text) {
    showToast("Napiš text komentáře.");
    return;
  }

  const player = data.players.find(p => p.id === playerId);
  if (!player) return;

  player.comments = player.comments || [];
  player.comments.unshift({
    id: `cmt_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    author: getCurrentActorNick(),
    text,
    createdAt: formatNowCzech()
  });

  saveData();
  if (activePlayerModalId === playerId) openPlayerDetailModal(playerId, true);
  showToast("Veřejný komentář přidán.");
}

function deletePlayerComment(playerId, commentId) {
  const player = data.players.find(p => p.id === playerId);
  if (!player || !Array.isArray(player.comments)) return;
  const target = player.comments.find(c => c.id === commentId);
  if (!target || !canDeletePlayerComment(target)) return;

  player.comments = player.comments.filter(c => c.id !== commentId);
  saveData();
  if (activePlayerModalId === playerId) openPlayerDetailModal(playerId, true);
  showToast("Komentář smazán.");
}

function openPlayerDetailModal(playerId, preserveInputValue = false) {
  const player = data.players.find(p => p.id === playerId);
  if (!player) return;

  const prevDraft = preserveInputValue ? (document.getElementById("playerCommentInput")?.value || "") : "";
  activePlayerModalId = playerId;

  const totalUnits = getPlayerTotalUnits(player);
  const sharePct = getPlayerOverallSharePct(player);

  document.getElementById("playerModalAvatar").src = getMcHeadUrl(player.nick, 48);
  document.getElementById("playerModalNick").textContent = player.nick;
  document.getElementById("playerModalMeta").textContent = `${player.rank} • Prestige ${player.prestige}`;

  const goalPct =
    player.weeklyGoal > 0 ? Math.min(100, Math.round((totalUnits / player.weeklyGoal) * 100)) : null;

  const objBreakdown = data.objectives.length
    ? data.objectives.map(obj => `
        <div class="obj-progress-item">
          <div class="obj-progress-top">
            <span>${escapeHtml(obj.title)}</span>
            <strong>${getPlayerContrib(player, obj.id).toLocaleString("cs-CZ")} ${escapeHtml(obj.unit)}</strong>
          </div>
        </div>
      `).join("")
    : `<p class="muted-text">Zatím nejsou nastaveny žádné společné objectives.</p>`;

  const comments = Array.isArray(player.comments) ? player.comments : [];
  const commentsHtml = comments.length
    ? comments.map(c => `
        <div class="player-comment-item">
          <div class="player-comment-head">
            <span class="player-comment-author">
              <img src="${getMcHeadUrl(c.author, 20)}" alt="${escapeHtml(c.author)}" loading="lazy" />
              ${escapeHtml(c.author)}
            </span>
            <div class="admin-inputs mt-0">
              <span>${escapeHtml(c.createdAt)}</span>
              ${canDeletePlayerComment(c) ? `<button type="button" class="btn btn-red btn-sm" data-del-comment="${player.id}::${escapeHtml(c.id)}">✕</button>` : ""}
            </div>
          </div>
          <div class="player-comment-text">${escapeHtml(c.text)}</div>
        </div>
      `).join("")
    : `<p class="muted-text mt-8">Zatím žádné komentáře.</p>`;

  const commentFormHtml = isLoggedIn()
    ? `
      <form class="player-comment-form" id="modalCommentForm">
        <input type="text" id="playerCommentInput" maxlength="240" placeholder="Napiš veřejný komentář k hráči..." />
        <button type="submit" class="btn btn-green">💬 Odeslat</button>
      </form>
    `
    : `
      <div class="actions-row mt-10">
        <button type="button" class="btn btn-green btn-sm" data-open-auth="true">🔐 Přihlásit se pro psaní komentářů</button>
      </div>
    `;

  document.getElementById("playerModalBody").innerHTML = `
    <div class="completion-box">
      <span>Celkový podíl na plnění</span>
      <strong>${data.objectives.length ? `${sharePct} %` : "—"}</strong>
    </div>
    <div class="admin-player-item mb-10">
      <span>Celkem nahráno tento týden</span>
      <strong>${totalUnits.toLocaleString("cs-CZ")}</strong>
    </div>
    <div class="admin-player-item mb-10">
      <span>Týdenní cíl hráče</span>
      <strong>${player.weeklyGoal > 0 ? `${totalUnits.toLocaleString("cs-CZ")} / ${player.weeklyGoal.toLocaleString("cs-CZ")} (${goalPct} %)` : "Nenastaven"}</strong>
    </div>
    <div class="admin-player-item mb-14">
      <span>💀 Smrti: <strong>${(player.deaths || 0).toLocaleString("cs-CZ")}</strong></span>
      <span>🔮 Sigils: <strong>${(player.sigils || 0).toLocaleString("cs-CZ")}</strong></span>
    </div>
    <h3 class="mb-8 modal-subheading">Příspěvky podle objectives</h3>
    ${objBreakdown}

    <div class="player-comments-section">
      <h3 class="modal-subheading">💬 Veřejné komentáře (${comments.length})</h3>
      ${commentsHtml}
      ${commentFormHtml}
    </div>
  `;

  const formEl = document.getElementById("modalCommentForm");
  if (formEl) {
    formEl.addEventListener("submit", ev => {
      ev.preventDefault();
      addPlayerCommentFromInput(player.id, "playerCommentInput");
    });
  }

  if (preserveInputValue && document.getElementById("playerCommentInput")) {
    document.getElementById("playerCommentInput").value = prevDraft;
  }

  document.getElementById("playerModal").classList.add("open");
}

function closePlayerModal() {
  activePlayerModalId = null;
  document.getElementById("playerModal").classList.remove("open");
}

function renderPodium() {
  const podiumGrid = document.getElementById("podiumGrid");
  if (!podiumGrid) return;

  const sorted = data.players
    .map(p => ({ ...p, sharePct: getPlayerOverallSharePct(p), totalUnits: getPlayerTotalUnits(p) }))
    .sort((a, b) => {
      if (b.sharePct !== a.sharePct) return b.sharePct - a.sharePct;
      if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
      return (b.prestige || 0) - (a.prestige || 0);
    });

  const medals = ["🥇", "🥈", "🥉"];
  const activeNick = authState.currentUser?.mcNick?.toLowerCase();

  podiumGrid.innerHTML = sorted.slice(0, 3).map((p, i) => {
    const isMe = activeNick && p.nick.toLowerCase() === activeNick;
    const safeRank = ["Leader", "Co-leader", "Elder", "Member"].includes(p.rank) ? p.rank : "Member";
    return `
      <div class="podium-card rank-${i + 1}" data-player-id="${p.id}">
        <div class="podium-head">
          <div class="rank-badge">${medals[i]}</div>
          <img class="skin-head" src="${getMcHeadUrl(p.nick, 48)}" alt="${escapeHtml(p.nick)}" loading="lazy" />
          <div>
            <div class="player-name">${escapeHtml(p.nick)} ${isMe ? "• Ty" : ""}</div>
            <div class="player-sub">
              <span class="rank-pill rank-${safeRank}">${escapeHtml(safeRank)}</span>
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
  const rosterGrid = document.getElementById("rosterGrid");
  if (!rosterGrid) return;

  const search = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const rankFilter = document.getElementById("rankFilterSelect")?.value || "all";
  const sortBy = document.getElementById("sortSelect")?.value || "share";
  const activeNick = authState.currentUser?.mcNick?.toLowerCase();

  const list = data.players
    .map(p => ({ ...p, sharePct: getPlayerOverallSharePct(p), totalUnits: getPlayerTotalUnits(p) }))
    .filter(p => p.nick.toLowerCase().includes(search))
    .filter(p => rankFilter === "all" || p.rank === rankFilter)
    .sort((a, b) => {
      if (sortBy === "nick") return a.nick.localeCompare(b.nick, "cs");
      if (sortBy === "prestige") return (b.prestige || 0) - (a.prestige || 0);
      if (sortBy === "deaths") return (b.deaths || 0) - (a.deaths || 0);
      if (sortBy === "sigils") return (b.sigils || 0) - (a.sigils || 0);
      if (sortBy === "total") {
        if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
        return (b.prestige || 0) - (a.prestige || 0);
      }
      if (sortBy.startsWith("obj:")) {
        const objId = sortBy.replace("obj:", "");
        return getPlayerContrib(b, objId) - getPlayerContrib(a, objId);
      }
      if (b.sharePct !== a.sharePct) return b.sharePct - a.sharePct;
      if (b.totalUnits !== a.totalUnits) return b.totalUnits - a.totalUnits;
      return (b.prestige || 0) - (a.prestige || 0);
    });

  const countSubtitle = document.getElementById("playersCountSubtitle");
  if (countSubtitle) {
    countSubtitle.textContent = `Zobrazeno ${list.length} z ${data.players.length} členů guildy • Kliknutím otevřeš detail`;
  }

  if (list.length === 0) {
    rosterGrid.innerHTML = `<p class="muted-text">Žádný hráč neodpovídá filtru.</p>`;
    return;
  }

  rosterGrid.innerHTML = list.map(p => {
    const isMe = activeNick && p.nick.toLowerCase() === activeNick;
    const safeRank = ["Leader", "Co-leader", "Elder", "Member"].includes(p.rank) ? p.rank : "Member";
    const comments = Array.isArray(p.comments) ? p.comments : [];
    const latestCommentHtml =
      comments.length > 0
        ? `<div class="roster-latest-comment">💬 <strong>${escapeHtml(comments[0].author)}:</strong> ${escapeHtml(comments[0].text)}</div>`
        : "";

    const quickCommentHtml = isLoggedIn()
      ? `
        <div class="roster-quick-comment" data-stop-modal="true">
          <input type="text" id="rosterCmt_${p.id}" maxlength="240" placeholder="Napsat veřejný komentář..." />
          <button type="button" class="btn btn-green btn-sm" data-quick-comment="${p.id}">💬</button>
        </div>
      `
      : "";

    return `
      <div class="roster-card" data-player-id="${p.id}">
        <div class="roster-card-top">
          <div class="roster-user-info">
            <img class="skin-head" src="${getMcHeadUrl(p.nick, 48)}" alt="${escapeHtml(p.nick)}" loading="lazy" />
            <div>
              <div class="player-name">${escapeHtml(p.nick)} ${isMe ? "• Ty" : ""}</div>
              <div class="player-sub">
                <span class="rank-pill rank-${safeRank}">${escapeHtml(safeRank)}</span>
                Prestige ${p.prestige}
              </div>
            </div>
          </div>
          <div class="roster-share-badge">${data.objectives.length ? `${p.sharePct} %` : "—"}</div>
        </div>
        ${buildPlayerContribHtml(p)}
        ${latestCommentHtml}
        ${quickCommentHtml}
      </div>
    `;
  }).join("");
}

/* ANNOUNCEMENTS */
function addAnnouncement() {
  if (!isLoggedIn()) {
    openAuthModal();
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

  data.announcements.unshift({
    id: `ann_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    title,
    date,
    time,
    desc,
    author: getCurrentActorNick(),
    pinned,
    createdAt: formatNowCzech(),
    signups: []
  });

  document.getElementById("annTitle").value = "";
  document.getElementById("annDate").value = "";
  document.getElementById("annTime").value = "";
  document.getElementById("annDesc").value = "";
  if (document.getElementById("annPinOnOverview")) document.getElementById("annPinOnOverview").checked = false;

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
    return;
  }
  const input = document.getElementById(`${inputPrefix}_${annId}`);
  const roleNote = (input?.value || "").trim() || "Zapojím se do akce";
  const ann = data.announcements.find(a => a.id === annId);
  if (!ann) return;

  ann.signups = ann.signups || [];
  const nick = getCurrentActorNick();
  const entry = { nick, roleNote };
  const existingIdx = ann.signups.findIndex(s => s.nick.toLowerCase() === nick.toLowerCase());
  if (existingIdx >= 0) ann.signups[existingIdx] = entry;
  else ann.signups.push(entry);

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

  const signupsHtml =
    ann.signups && ann.signups.length > 0
      ? ann.signups.map(s => `<span class="signup-chip"><strong>${escapeHtml(s.nick)}</strong>: ${escapeHtml(s.roleNote)}</span>`).join("")
      : `<span class="player-sub">Zatím se nikdo nezapsal.</span>`;

  const pinBtn = canManageAnnouncementPin(ann)
    ? `<button type="button" class="btn ${ann.pinned ? "btn-gold" : "btn-dark"}" data-pin-ann="${escapeHtml(ann.id)}">${ann.pinned ? "📌 Připnuto" : "📌 Připnout na přehled"}</button>`
    : "";

  const delBtn = isAdmin()
    ? `<button type="button" class="btn btn-red" data-del-ann="${escapeHtml(ann.id)}">Smazat</button>`
    : "";

  return `
    <div class="announcement-card ${ann.pinned ? "pinned" : ""}">
      <div class="announcement-top">
        <div>
          <h3>${ann.pinned ? "📌 " : ""}${escapeHtml(ann.title)}</h3>
          <div class="announcement-author-badge">
            <img src="${getMcHeadUrl(authorName, 20)}" alt="${escapeHtml(authorName)}" loading="lazy" />
            <span>Vytvořil: <strong>${escapeHtml(authorName)}</strong></span>
          </div>
          <div class="player-sub">Vytvořeno: ${escapeHtml(ann.createdAt || "—")}</div>
        </div>
        <div class="admin-inputs mt-0">
          <span class="announcement-schedule">${escapeHtml(scheduleText)}</span>
          ${pinBtn}
          ${delBtn}
        </div>
      </div>
      ${ann.desc ? `<p class="ann-desc">${escapeHtml(ann.desc)}</p>` : ""}
      <div class="mb-12">
        <div class="player-sub mb-4">Kdo co bude dělat:</div>
        <div>${signupsHtml}</div>
      </div>
      <div class="inline-row">
        <input type="text" id="${inputPrefix}_${escapeHtml(ann.id)}" placeholder="Co budu dělat (např. streakovat mid, sbírat kills...)" />
        <button type="button" class="btn btn-green" data-join-ann="${escapeHtml(ann.id)}::${escapeHtml(inputPrefix)}">✋ Zapsat plán</button>
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
      setHidden(pinnedSection, false);
      pinnedList.innerHTML = pinnedItems.map(a => buildAnnouncementCardHtml(a, "pinRoleInput")).join("");
    } else {
      setHidden(pinnedSection, true);
      pinnedList.innerHTML = "";
    }
  }

  if (!wrap) return;
  if (data.announcements.length === 0) {
    wrap.innerHTML = `<div class="card"><p class="muted-text">Zatím nejsou zveřejněna žádná oznámení.</p></div>`;
    return;
  }
  wrap.innerHTML = data.announcements.map(a => buildAnnouncementCardHtml(a, "roleInput")).join("");
}

/* POLLS */
function addPoll() {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }

  const question = document.getElementById("pollQuestion")?.value.trim() || "";
  const desc = document.getElementById("pollDesc")?.value.trim() || "";
  const pinned = Boolean(document.getElementById("pollPinOnOverview")?.checked);

  if (!question) {
    showToast("Vyplň otázku ankety.");
    return;
  }

  data.polls = data.polls || [];
  data.polls.unshift({
    id: `poll_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    question,
    desc,
    author: getCurrentActorNick(),
    pinned,
    createdAt: formatNowCzech(),
    votes: {}
  });

  document.getElementById("pollQuestion").value = "";
  document.getElementById("pollDesc").value = "";
  if (document.getElementById("pollPinOnOverview")) document.getElementById("pollPinOnOverview").checked = false;

  saveData();
  showToast(pinned ? "Anketa vytvořena a připnuta na hlavní stránku." : "Anketa vytvořena.");
}

function votePoll(pollId, choice) {
  if (!isLoggedIn()) {
    openAuthModal();
    return;
  }
  if (!["yes", "no"].includes(choice)) return;

  const poll = (data.polls || []).find(p => p.id === pollId);
  if (!poll) return;

  poll.votes = poll.votes || {};
  poll.votes[getCurrentActorNick()] = choice;
  saveData();
  showToast(choice === "yes" ? "Hlasoval jsi: Ano 👍" : "Hlasoval jsi: Ne 👎");
}

function canManagePoll(poll) {
  if (!isLoggedIn()) return false;
  if (isAdmin()) return true;
  const current = getCurrentActorNick().toLowerCase();
  return current && (poll.author || "").toLowerCase() === current;
}

function togglePinPoll(pollId) {
  const poll = (data.polls || []).find(p => p.id === pollId);
  if (!poll || !canManagePoll(poll)) return;
  poll.pinned = !poll.pinned;
  saveData();
  showToast(poll.pinned ? "📌 Anketa připnuta na hlavní stránku." : "Anketa odepnuta z hlavní stránky.");
}

function removePoll(pollId) {
  const poll = (data.polls || []).find(p => p.id === pollId);
  if (!poll || !canManagePoll(poll)) return;
  data.polls = (data.polls || []).filter(p => p.id !== pollId);
  saveData();
  showToast("Anketa smazána.");
}

function buildPollCardHtml(poll) {
  const authorName = poll.author || "Člen LAP";
  const votes = poll.votes && typeof poll.votes === "object" ? poll.votes : {};
  const yesVoters = Object.entries(votes).filter(([, v]) => v === "yes").map(([k]) => k);
  const noVoters = Object.entries(votes).filter(([, v]) => v === "no").map(([k]) => k);
  const totalVotes = yesVoters.length + noVoters.length;

  const yesPct = totalVotes > 0 ? Math.round((yesVoters.length / totalVotes) * 100) : 0;
  const noPct = totalVotes > 0 ? Math.round((noVoters.length / totalVotes) * 100) : 0;

  const currentNick = getCurrentActorNick();
  const matchedKey = currentNick
    ? Object.keys(votes).find(k => k.toLowerCase() === currentNick.toLowerCase())
    : null;
  const myVote = matchedKey ? votes[matchedKey] : null;

  const pinBtn = canManagePoll(poll)
    ? `<button type="button" class="btn ${poll.pinned ? "btn-gold" : "btn-dark"}" data-pin-poll="${escapeHtml(poll.id)}">${poll.pinned ? "📌 Připnuto" : "📌 Připnout na hlavní stránku"}</button>`
    : "";

  const delBtn = canManagePoll(poll)
    ? `<button type="button" class="btn btn-red" data-del-poll="${escapeHtml(poll.id)}">Smazat</button>`
    : "";

  const yesChipsHtml =
    yesVoters.length > 0
      ? yesVoters.map(nick => `<span class="signup-chip">👍 <strong>${escapeHtml(nick)}</strong></span>`).join("")
      : `<span class="player-sub">Zatím nikdo</span>`;

  const noChipsHtml =
    noVoters.length > 0
      ? noVoters.map(nick => `<span class="signup-chip">👎 <strong>${escapeHtml(nick)}</strong></span>`).join("")
      : `<span class="player-sub">Zatím nikdo</span>`;

  return `
    <div class="poll-card ${poll.pinned ? "pinned" : ""}">
      <div class="announcement-top">
        <div>
          <h3>${poll.pinned ? "📌 " : ""}${escapeHtml(poll.question)}</h3>
          <div class="announcement-author-badge">
            <img src="${getMcHeadUrl(authorName, 20)}" alt="${escapeHtml(authorName)}" loading="lazy" />
            <span>Vytvořil: <strong>${escapeHtml(authorName)}</strong></span>
          </div>
          <div class="player-sub">Vytvořeno: ${escapeHtml(poll.createdAt || "—")} • Celkem hlasů: <strong>${totalVotes}</strong></div>
        </div>
        <div class="admin-inputs mt-0">
          ${pinBtn}
          ${delBtn}
        </div>
      </div>

      ${poll.desc ? `<p class="poll-desc">${escapeHtml(poll.desc)}</p>` : ""}

      <div class="poll-vote-buttons">
        <button type="button" class="poll-vote-btn yes ${myVote === "yes" ? "active" : ""}" data-vote-poll="${escapeHtml(poll.id)}::yes">
          <span>👍 Ano</span>
          <strong>${yesVoters.length} (${yesPct} %)</strong>
        </button>
        <button type="button" class="poll-vote-btn no ${myVote === "no" ? "active" : ""}" data-vote-poll="${escapeHtml(poll.id)}::no">
          <span>👎 Ne</span>
          <strong>${noVoters.length} (${noPct} %)</strong>
        </button>
      </div>

      <div class="poll-results-grid">
        <div class="poll-result-box">
          <div class="obj-progress-top">
            <span>👍 Ano</span>
            <strong>${yesVoters.length} hlasů (${yesPct} %)</strong>
          </div>
          <div class="progress-track mt-6">
            <div class="progress-bar" style="width:${yesPct}%"></div>
          </div>
          <div class="poll-voters-list">${yesChipsHtml}</div>
        </div>

        <div class="poll-result-box">
          <div class="obj-progress-top">
            <span>👎 Ne</span>
            <strong>${noVoters.length} hlasů (${noPct} %)</strong>
          </div>
          <div class="progress-track mt-6">
            <div class="progress-bar reward" style="width:${noPct}%"></div>
          </div>
          <div class="poll-voters-list">${noChipsHtml}</div>
        </div>
      </div>
    </div>
  `;
}

function renderPolls() {
  applyPollAuthGuard();

  const polls = Array.isArray(data.polls) ? data.polls : [];
  const wrap = document.getElementById("pollsList");
  const pinnedSection = document.getElementById("pinnedPollsSection");
  const pinnedList = document.getElementById("pinnedPollsList");

  const pinnedItems = polls.filter(p => p.pinned);
  if (pinnedSection && pinnedList) {
    if (pinnedItems.length > 0) {
      setHidden(pinnedSection, false);
      pinnedList.innerHTML = pinnedItems.map(p => buildPollCardHtml(p)).join("");
    } else {
      setHidden(pinnedSection, true);
      pinnedList.innerHTML = "";
    }
  }

  if (!wrap) return;
  if (polls.length === 0) {
    wrap.innerHTML = `<div class="card"><p class="muted-text">Zatím nejsou vytvořeny žádné ankety.</p></div>`;
    return;
  }
  wrap.innerHTML = polls.map(p => buildPollCardHtml(p)).join("");
}

/* ADMIN */
function readObjectiveInputs(obj) {
  const safeId = obj.id;
  const titleEl = document.getElementById(`objTitleInput_${safeId}`);
  const tierEl = document.getElementById(`objTierSelect_${safeId}`);
  const doneEl = document.getElementById(`objDoneInput_${safeId}`);
  const targetEl = document.getElementById(`objTargetInput_${safeId}`);

  const nextTitle = titleEl ? (titleEl.value.trim() || obj.title) : obj.title;
  const nextTier = tierEl
    ? Math.min(10, Math.max(0, parseInt(tierEl.value, 10) ?? 0))
    : Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));

  const nextDone =
    doneEl && doneEl.value.trim() !== ""
      ? Math.max(0, parseInt(doneEl.value, 10) || 0)
      : typeof obj.currentDone === "number" && !Number.isNaN(obj.currentDone)
        ? Math.max(0, obj.currentDone)
        : getPlayersSumForObjective(obj.id);

  const nextTiers = Array.isArray(obj.tiers) && obj.tiers.length === 11
    ? [...obj.tiers]
    : [...EMPTY_TIERS_T0_TO_T10];

  if (targetEl) nextTiers[nextTier] = parseOptionalTierGoal(targetEl.value);

  return { title: nextTitle, activeTier: nextTier, currentDone: nextDone, tiers: nextTiers };
}

function applyObjectiveFormToData(objId, triggerSave = false) {
  if (!isAdmin()) return;
  const obj = data.objectives.find(o => o.id === objId);
  if (!obj) return;

  const updated = readObjectiveInputs(obj);
  obj.title = updated.title;
  obj.activeTier = updated.activeTier;
  obj.currentDone = updated.currentDone;
  obj.tiers = updated.tiers;

  const info = getObjectiveProgressInfo(obj);
  const rulerBox = document.getElementById(`adminObjRuler_${objId}`);
  if (rulerBox) rulerBox.innerHTML = buildRulerHtml(info, obj.unit);

  const cardEl = document.getElementById(`adminObjCard_${objId}`);
  if (cardEl) cardEl.classList.toggle("reward-done", info.rewardCompleted);

  if (triggerSave) {
    saveData(true, true, true);
    showToast(`Uloženo a propsáno na přehled: ${obj.title}`);
  } else {
    data.lastUpdated = formatNowCzech();
    localStorage.setItem("lap_pit_data_v18", JSON.stringify(data));
    renderObjectives();
    renderPodium();
    renderRoster();
    if (!isSyncingFromRemote) pushRemoteData(data).catch(() => {});
  }
}

function renderAdmin() {
  if (!isAdmin()) return;

  const weekInput = document.getElementById("adminWeekName");
  if (weekInput) weekInput.value = data.weekName;

  const chest = getTotalChestInfo();
  const totalChestBox = document.getElementById("adminTotalChestBox");
  if (totalChestBox) {
    let chestOpts = "";
    for (let t = 0; t <= 10; t++) {
      chestOpts += `<option value="${t}" ${chest.totalTier === t ? "selected" : ""}>Bedna T${t}</option>`;
    }
    totalChestBox.innerHTML = `
      <div>
        <strong class="chest-admin-title">🎁 Celková aktuální bedna: T${chest.totalTier}</strong>
        <div class="player-sub">Výpočet: ${escapeHtml(chest.formulaText)}</div>
      </div>
      <div class="admin-inputs mt-0">
        <label>
          Bedna:
          <select id="adminChestSelect">${chestOpts}</select>
        </label>
        ${chest.isManual ? `<button type="button" class="btn btn-dark" id="resetChestAutoBtn">Auto součet tierů</button>` : ""}
      </div>
    `;
    document.getElementById("adminChestSelect")?.addEventListener("change", ev => setTotalChestTier(ev.target.value));
    document.getElementById("resetChestAutoBtn")?.addEventListener("click", resetTotalChestAuto);
  }

  const objWrap = document.getElementById("adminObjectivesList");
  if (objWrap) {
    if (data.objectives.length === 0) {
      objWrap.innerHTML = `<p class="muted-text">Zatím nejsou přidány žádné společné objectives.</p>`;
    } else {
      objWrap.innerHTML = data.objectives.map((obj, idx) => {
        const info = getObjectiveProgressInfo(obj);
        const safeId = escapeHtml(obj.id);
        let tierOptionsHtml = "";
        for (let t = 0; t <= 10; t++) {
          tierOptionsHtml += `<option value="${t}" ${info.activeTier === t ? "selected" : ""}>Tier T${t}</option>`;
        }

        return `
          <div class="admin-player-item admin-obj-card ${info.rewardCompleted ? "reward-done" : ""}" id="adminObjCard_${safeId}">
            <div class="admin-inputs mt-0">
              <strong>#${idx + 1}</strong>
              <label>
                Název:
                <input id="objTitleInput_${safeId}" type="text" value="${escapeHtml(obj.title)}" data-live-obj="${safeId}" />
              </label>
              <label>
                Tier:
                <select id="objTierSelect_${safeId}" data-tier-obj="${safeId}">${tierOptionsHtml}</select>
              </label>
              <label>
                Hotovo:
                <input id="objDoneInput_${safeId}" type="number" min="0" value="${info.doneValue}" data-live-obj="${safeId}" />
              </label>
              <label>
                Z kolika:
                <input id="objTargetInput_${safeId}" type="number" min="1" value="${info.tierGoal ?? ""}" placeholder="Zadej cíl" data-live-obj="${safeId}" />
              </label>
              <button type="button" class="btn btn-green" data-save-obj="${safeId}">💾 Uložit</button>
              <button type="button" class="btn ${info.rewardCompleted ? "btn-gold" : "btn-dark"}" data-done-obj="${safeId}">🎁 Splněno</button>
              <button type="button" class="btn btn-red" data-del-obj="${safeId}">Smazat</button>
            </div>
            <div id="adminObjRuler_${safeId}">${buildRulerHtml(info, obj.unit)}</div>
          </div>
        `;
      }).join("");
    }
  }

  const playersWrap = document.getElementById("adminPlayersList");
  if (playersWrap) {
    const ranks = ["Member", "Elder", "Co-leader", "Leader"];
    playersWrap.innerHTML = data.players.map(p => {
      const safeRank = ranks.includes(p.rank) ? p.rank : "Member";
      const rankOpts = ranks.map(r => `<option value="${r}" ${safeRank === r ? "selected" : ""}>${r}</option>`).join("");
      const deathsVal = Math.max(0, Number(p.deaths) || 0);
      const sigilsVal = Math.max(0, Number(p.sigils) || 0);
      const inputsHtml = data.objectives.length
        ? data.objectives.map(obj => `
            <label>
              ${escapeHtml(obj.title)} (${escapeHtml(obj.unit)}):
              <input type="number" min="0" value="${getPlayerContrib(p, obj.id)}" data-contrib="${p.id}::${escapeHtml(obj.id)}" />
            </label>
          `).join("")
        : "";

      return `
        <div class="admin-player-item">
          <div class="admin-player-head">
            <img class="skin-head skin-head-sm" src="${getMcHeadUrl(p.nick, 32)}" alt="${escapeHtml(p.nick)}" loading="lazy" />
            <div>
              <strong>${escapeHtml(p.nick)}</strong>
              <span class="rank-pill rank-${safeRank}">${escapeHtml(safeRank)}</span>
              <span class="player-sub">Prestige ${p.prestige} • Smrti ${deathsVal} • Sigils ${sigilsVal}</span>
            </div>
          </div>
          <div class="admin-inputs">
            <label>Rank:<select data-meta="${p.id}::rank">${rankOpts}</select></label>
            <label>Prestige:<input type="number" min="0" max="100" value="${p.prestige}" data-meta="${p.id}::prestige" /></label>
            <label>Týdenní cíl:<input type="number" min="0" value="${p.weeklyGoal || 0}" data-meta="${p.id}::weeklyGoal" /></label>
            <label>Smrti:<input type="number" min="0" value="${deathsVal}" data-meta="${p.id}::deaths" /></label>
            <label>Sigils:<input type="number" min="0" value="${sigilsVal}" data-meta="${p.id}::sigils" /></label>
            ${inputsHtml}
            <button type="button" class="btn btn-red" data-del-player="${p.id}">✕</button>
          </div>
        </div>
      `;
    }).join("");
  }
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
  if (!obj) return;
  obj.activeTier = tierNum;
  saveData();
  showToast(`Nastaven Tier T${tierNum} pro: ${obj.title}`);
}

function toggleObjectiveRewardCompleted(objId) {
  if (!isAdmin()) return;
  const obj = data.objectives.find(o => o.id === objId);
  if (!obj) return;

  const nextCompleted = !obj.rewardCompleted;
  obj.rewardCompleted = nextCompleted;
  const idx = Math.min(10, Math.max(0, Number(obj.activeTier) ?? 0));
  if (nextCompleted) {
    const goal = parseOptionalTierGoal(obj.tiers?.[idx]);
    if (goal) obj.currentDone = Math.max(Number(obj.currentDone) || 0, goal);
    if (idx < 10 && confirm(`Splnění u "${obj.title}" označeno. Posunout tier na T${idx + 1}?`)) {
      obj.activeTier = idx + 1;
      obj.rewardCompleted = false;
    }
  }
  saveData();
  showToast(obj.rewardCompleted ? `🎁 ${obj.title} označeno jako splněno!` : `Stav u ${obj.title} aktualizován.`);
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
    if (goal) obj.currentDone = Math.max(Number(obj.currentDone) || 0, goal);
  });
  saveData();
  showToast("🎁 Všechny objectives označeny jako splněno!");
}

function addObjective() {
  if (!isAdmin()) return;
  const title = document.getElementById("newObjTitle").value.trim();
  const unit = document.getElementById("newObjUnit").value.trim() || "bodů";
  const initialTier = Math.min(10, Math.max(0, parseInt(document.getElementById("newObjInitialTier")?.value, 10) || 0));
  const initialTarget = parseOptionalTierGoal(document.getElementById("newObjInitialTarget")?.value);

  if (!title) {
    showToast("Vyplň název objective.");
    return;
  }

  const tiers = [...EMPTY_TIERS_T0_TO_T10];
  tiers[initialTier] = initialTarget;

  data.objectives.push({
    id: `obj_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    title,
    unit,
    tiers,
    activeTier: initialTier,
    currentDone: 0,
    rewardCompleted: false
  });

  document.getElementById("newObjTitle").value = "";
  document.getElementById("newObjUnit").value = "";
  if (document.getElementById("newObjInitialTier")) document.getElementById("newObjInitialTier").value = "0";
  if (document.getElementById("newObjInitialTarget")) document.getElementById("newObjInitialTarget").value = "";

  saveData();
  showToast("Objective přidán.");
}

function removeObjective(objId) {
  if (!isAdmin()) return;
  data.objectives = data.objectives.filter(o => o.id !== objId);
  data.players.forEach(p => {
    if (p.contrib && objId in p.contrib) delete p.contrib[objId];
  });
  saveData();
  showToast("Objective odebrán.");
}

function addPlayer() {
  if (!isAdmin()) return;
  const nick = document.getElementById("newNick").value.trim();
  const rank = document.getElementById("newRank").value;
  const prestige = Math.max(0, Math.min(100, parseInt(document.getElementById("newPrestige").value, 10) || 1));
  const weeklyGoal = Math.max(0, parseInt(document.getElementById("newWeeklyGoal").value, 10) || 0);
  const deaths = Math.max(0, parseInt(document.getElementById("newDeaths").value, 10) || 0);
  const sigils = Math.max(0, parseInt(document.getElementById("newSigils").value, 10) || 0);
  if (!nick) {
    showToast("Vyplň Minecraft nick.");
    return;
  }

  data.players.push({
    id: Date.now(),
    nick,
    rank,
    prestige,
    weeklyGoal,
    deaths,
    sigils,
    contrib: {},
    comments: []
  });

  document.getElementById("newNick").value = "";
  document.getElementById("newPrestige").value = "";
  document.getElementById("newWeeklyGoal").value = "";
  document.getElementById("newDeaths").value = "";
  document.getElementById("newSigils").value = "";
  saveData();
  showToast(`Hráč ${nick} přidán!`);
}

function updatePlayerMeta(playerId, field, val) {
  if (!isAdmin()) return;
  const player = data.players.find(p => p.id === playerId);
  if (!player) return;

  if (field === "rank") player.rank = val;
  else if (field === "prestige") player.prestige = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
  else if (field === "weeklyGoal") player.weeklyGoal = Math.max(0, parseInt(val, 10) || 0);
  else if (field === "deaths") player.deaths = Math.max(0, parseInt(val, 10) || 0);
  else if (field === "sigils") player.sigils = Math.max(0, parseInt(val, 10) || 0);

  saveData();
  if (activePlayerModalId === playerId) openPlayerDetailModal(playerId, true);
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
  if (activePlayerModalId === id) closePlayerModal();
  saveData();
  showToast("Hráč odebrán.");
}

function closeWeek() {
  if (!isAdmin()) return;
  if (!confirm("Uzavřít tento týden do historie a vynulovat týdenní příspěvky, smrti i sigils hráčů?")) return;

  const chest = getTotalChestInfo();
  const objectivesSnapshot = data.objectives.map(obj => {
    const info = getObjectiveProgressInfo(obj);
    return { ...obj, guildTotal: info.doneValue, reachedTier: info.reachedTier };
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
        deaths: p.deaths || 0,
        sigils: p.sigils || 0,
        totalUnits: getPlayerTotalUnits(p),
        sharePct: getPlayerOverallSharePct(p),
        contrib: cloneData(p.contrib || {})
      }))
      .sort((a, b) => (b.sharePct !== a.sharePct ? b.sharePct - a.sharePct : b.totalUnits - a.totalUnits))
  });

  data.players.forEach(p => {
    p.contrib = {};
    p.deaths = 0;
    p.sigils = 0;
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
  if (!wrap) return;
  if (data.history.length === 0) {
    wrap.innerHTML = `<p class="muted-text text-center">Zatím žádné uzavřené týdny.</p>`;
    return;
  }

  wrap.innerHTML = data.history.map(h => {
    const chestLabel = `🎁 Celková bedna: T${h.totalChestTier ?? 0}`;
    const objsSummary =
      h.objectives && h.objectives.length > 0
        ? h.objectives.map(o => `${o.title}: ${o.guildTotal ?? 0} ${o.unit} (Tier T${o.reachedTier ?? 0})`).join(" • ")
        : "Bez uložených objectives";

    return `
      <div class="card">
        <div class="card-header-row mb-8">
          <div class="admin-inputs mt-0">
            <strong class="history-week-title">${escapeHtml(h.weekName)}</strong>
            <span class="obj-badge reward">${escapeHtml(chestLabel)}</span>
          </div>
          <div class="admin-inputs mt-0">
            <span class="player-sub">${escapeHtml(h.date)}</span>
            ${isAdmin() ? `<button type="button" class="btn btn-red" data-del-history="${escapeHtml(h.id)}">🗑️ Smazat týden</button>` : ""}
          </div>
        </div>
        <div class="player-sub mb-12">${escapeHtml(objsSummary)}</div>
        ${h.players.map((p, idx) => {
          const breakdown =
            h.objectives && h.objectives.length > 0
              ? h.objectives.map(o => `${o.title}: ${p.contrib?.[o.id] || 0} ${o.unit}`).join(" | ")
              : `Celkem: ${(p.totalUnits ?? 0).toLocaleString("cs-CZ")}`;
          const shareLabel =
            h.objectives && h.objectives.length > 0
              ? `${p.sharePct} % podíl`
              : `${(p.totalUnits ?? 0).toLocaleString("cs-CZ")} bodů`;
          return `
            <div class="history-player-row">
              <span>#${idx + 1} <strong>${escapeHtml(p.nick)}</strong> (${escapeHtml(p.rank)} • P${p.prestige}) • 💀 ${p.deaths ?? 0} • 🔮 ${p.sigils ?? 0}</span>
              <span>${escapeHtml(breakdown)} → <strong class="history-share">${escapeHtml(shareLabel)}</strong></span>
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

function importBackupJson(event) {
  if (!isAdmin()) return;
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      data = hydrateData(JSON.parse(String(reader.result)));
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
  navigator.clipboard?.writeText(lines)
    .then(() => showToast("Přehled účtů a hesel zkopírován!"))
    .catch(() => showToast("Kopírování se nezdařilo."));
}

function copyShareLink() {
  try {
    const encoded = encodeBase64Utf8(JSON.stringify(data));
    const url = `${window.location.origin}${window.location.pathname}#pit=${encoded}`;
    navigator.clipboard?.writeText(url)
      .then(() => showToast("Sdílecí odkaz zkopírován!"))
      .catch(() => showToast("Kopírování se nezdařilo."));
  } catch {
    showToast("Nepodařilo se vytvořit sdílecí odkaz.");
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function bindStaticEvents() {
  document.querySelectorAll(".nav-tab[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.addEventListener("click", e => {
    const gotoTab = e.target.closest("[data-goto-tab]");
    if (gotoTab) {
      switchTab(gotoTab.dataset.gotoTab);
      return;
    }

    if (e.target.closest("[data-open-auth]")) {
      openAuthModal();
      return;
    }

    if (e.target.id === "authModal") {
      closeAuthModal();
      return;
    }

    if (e.target.id === "playerModal") {
      closePlayerModal();
      return;
    }

    const quickCmtBtn = e.target.closest("[data-quick-comment]");
    if (quickCmtBtn) {
      const pid = Number(quickCmtBtn.dataset.quickComment);
      addPlayerCommentFromInput(pid, `rosterCmt_${pid}`);
      return;
    }

    const delCmtBtn = e.target.closest("[data-del-comment]");
    if (delCmtBtn) {
      const [pidStr, cid] = delCmtBtn.dataset.delComment.split("::");
      deletePlayerComment(Number(pidStr), cid);
      return;
    }

    const playerCard = e.target.closest("[data-player-id]");
    if (playerCard && !e.target.closest("[data-stop-modal]")) {
      openPlayerDetailModal(Number(playerCard.dataset.playerId));
      return;
    }

    const pinAnnBtn = e.target.closest("[data-pin-ann]");
    if (pinAnnBtn) {
      togglePinAnnouncement(pinAnnBtn.dataset.pinAnn);
      return;
    }

    const delAnnBtn = e.target.closest("[data-del-ann]");
    if (delAnnBtn) {
      removeAnnouncement(delAnnBtn.dataset.delAnn);
      return;
    }

    const joinAnnBtn = e.target.closest("[data-join-ann]");
    if (joinAnnBtn) {
      const [annId, prefix] = joinAnnBtn.dataset.joinAnn.split("::");
      joinAnnouncement(annId, prefix);
      return;
    }

    const pinPollBtn = e.target.closest("[data-pin-poll]");
    if (pinPollBtn) {
      togglePinPoll(pinPollBtn.dataset.pinPoll);
      return;
    }

    const delPollBtn = e.target.closest("[data-del-poll]");
    if (delPollBtn) {
      removePoll(delPollBtn.dataset.delPoll);
      return;
    }

    const votePollBtn = e.target.closest("[data-vote-poll]");
    if (votePollBtn) {
      const [pollId, choice] = votePollBtn.dataset.votePoll.split("::");
      votePoll(pollId, choice);
      return;
    }

    const delSavedPantsBtn = e.target.closest("[data-del-saved-pants]");
    if (delSavedPantsBtn) {
      deleteSavedPantsItem(delSavedPantsBtn.dataset.delSavedPants);
      return;
    }

    const delSavedSwordBtn = e.target.closest("[data-del-saved-sword]");
    if (delSavedSwordBtn) {
      deleteSavedSwordItem(delSavedSwordBtn.dataset.delSavedSword);
      return;
    }

    const delEnchantBtn = e.target.closest("[data-del-enchant]");
    if (delEnchantBtn) {
      removeCustomEnchant(delEnchantBtn.dataset.delEnchant);
      return;
    }

    const delSwordEnchantBtn = e.target.closest("[data-del-sword-enchant]");
    if (delSwordEnchantBtn) {
      removeCustomSwordEnchant(delSwordEnchantBtn.dataset.delSwordEnchant);
      return;
    }

    const saveObjBtn = e.target.closest("[data-save-obj]");
    if (saveObjBtn) {
      applyObjectiveFormToData(saveObjBtn.dataset.saveObj, true);
      return;
    }

    const doneObjBtn = e.target.closest("[data-done-obj]");
    if (doneObjBtn) {
      toggleObjectiveRewardCompleted(doneObjBtn.dataset.doneObj);
      return;
    }

    const delObjBtn = e.target.closest("[data-del-obj]");
    if (delObjBtn) {
      removeObjective(delObjBtn.dataset.delObj);
      return;
    }

    const delPlayerBtn = e.target.closest("[data-del-player]");
    if (delPlayerBtn) {
      removePlayer(Number(delPlayerBtn.dataset.delPlayer));
      return;
    }

    const delHistBtn = e.target.closest("[data-del-history]");
    if (delHistBtn) {
      deleteHistoryWeek(delHistBtn.dataset.delHistory);
    }
  });

  document.addEventListener("input", e => {
    const liveObjInput = e.target.closest("[data-live-obj]");
    if (liveObjInput) {
      applyObjectiveFormToData(liveObjInput.dataset.liveObj, false);
    }
  });

  document.addEventListener("change", e => {
    const tierSelect = e.target.closest("[data-tier-obj]");
    if (tierSelect) {
      setObjectiveActiveTier(tierSelect.dataset.tierObj, tierSelect.value);
      return;
    }

    const contribInput = e.target.closest("[data-contrib]");
    if (contribInput) {
      const [pidStr, objId] = contribInput.dataset.contrib.split("::");
      updatePlayerContrib(Number(pidStr), objId, contribInput.value);
      return;
    }

    const metaInput = e.target.closest("[data-meta]");
    if (metaInput) {
      const [pidStr, field] = metaInput.dataset.meta.split("::");
      updatePlayerMeta(Number(pidStr), field, metaInput.value);
    }
  });

  document.getElementById("openAuthBtn")?.addEventListener("click", openAuthModal);
  document.getElementById("logoutBtn")?.addEventListener("click", logoutUser);
  document.getElementById("closeAuthModalBtn")?.addEventListener("click", closeAuthModal);
  document.getElementById("cancelAuthBtn")?.addEventListener("click", closeAuthModal);
  document.getElementById("togglePasswordBtn")?.addEventListener("click", togglePasswordVisibility);
  document.getElementById("authForm")?.addEventListener("submit", submitAuthForm);
  document.getElementById("closePlayerModalBtn")?.addEventListener("click", closePlayerModal);

  document.getElementById("searchInput")?.addEventListener("input", renderRoster);
  document.getElementById("rankFilterSelect")?.addEventListener("change", renderRoster);
  document.getElementById("sortSelect")?.addEventListener("change", renderRoster);

  document.getElementById("openPantsCrateBtn")?.addEventListener("click", openPantsCrate);
  document.getElementById("resetCurrentPantsBtn")?.addEventListener("click", resetCurrentPants);
  document.getElementById("addCustomEnchantBtn")?.addEventListener("click", addCustomEnchant);
  document.getElementById("resetEnchantsBtn")?.addEventListener("click", resetEnchantsToDefault);
  document.getElementById("clearSavedPantsBtn")?.addEventListener("click", clearSavedPants);

  document.getElementById("startEnchantSwordBtn")?.addEventListener("click", startEnchantSword);
  document.getElementById("resetCurrentSwordBtn")?.addEventListener("click", resetCurrentSword);
  document.getElementById("addCustomSwordEnchantBtn")?.addEventListener("click", addCustomSwordEnchant);
  document.getElementById("resetSwordEnchantsBtn")?.addEventListener("click", resetSwordEnchantsToDefault);
  document.getElementById("clearSavedSwordsBtn")?.addEventListener("click", clearSavedSwords);

  document.getElementById("addAnnouncementBtn")?.addEventListener("click", addAnnouncement);
  document.getElementById("addPollBtn")?.addEventListener("click", addPoll);

  document.getElementById("saveWeekNameBtn")?.addEventListener("click", saveWeekName);
  document.getElementById("exportBackupBtn")?.addEventListener("click", exportBackupJson);
  document.getElementById("importBackupTriggerBtn")?.addEventListener("click", () => {
    document.getElementById("backupFileInput")?.click();
  });
  document.getElementById("backupFileInput")?.addEventListener("change", importBackupJson);
  document.getElementById("copyShareLinkBtn")?.addEventListener("click", copyShareLink);
  document.getElementById("copyCredsBtn")?.addEventListener("click", copyAllCredentials);
  document.getElementById("markAllDoneBtn")?.addEventListener("click", markAllObjectivesRewardCompleted);
  document.getElementById("closeWeekBtn")?.addEventListener("click", closeWeek);
  document.getElementById("addObjectiveBtn")?.addEventListener("click", addObjective);
  document.getElementById("addPlayerBtn")?.addEventListener("click", addPlayer);
}

function renderAll(options = {}) {
  renderObjectives();
  renderPodium();
  renderRoster();
  renderPantsTab();
  renderSwordsTab();
  renderAnnouncements();
  renderPolls();
  if (!options.skipAdmin) renderAdmin();
  renderHistory();
  applyPermissions();
}

initChristmasSnowfall();
bindStaticEvents();
renderAll();
initRealtimeSync();
