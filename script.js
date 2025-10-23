// Templates with bilingual data
const templates = {
  cinematic: {
    title: "Cinematic Scene",
    titleRu: "Кинематографичный кадр",
    fields: [
      {
        key: "start",
        label: "Start",
        labelRu: "Старт",
        options: [
          { value: "movie still,", translation: "кинокадр" }
        ],
        autoSelect: true
      },
      {
        key: "subject",
        label: "Subject & Action",
        labelRu: "Объект и действие",
        options: [
          { value: "Harley Quinn", translation: "Харли Квинн" },
          { value: "fluffy cat", translation: "пушистый кот" },
          { value: "Max Payne", translation: "Макс Пейн" },
          { value: "gopnik, black tracksuit", translation: "гопник в спортивке" },
          { value: "french bulldog", translation: "французский бульдог" },
          { value: "retrofuturistic robot", translation: "ретрофутуристичный робот" },
          { value: "ninja", translation: "ниндзя" },
          { value: "batman", translation: "бэтмен" },
          { value: "spiderman", translation: "человек-паук" }
        ]
      },
      {
        key: "location",
        label: "Location",
        labelRu: "Локация",
        options: [
          { value: "Russian village", translation: "русская деревня" },
          { value: "Kremlin roof", translation: "крыша Кремля" },
          { value: "old bar interior", translation: "интерьер старого бара" },
          { value: "on table", translation: "на столе" },
          { value: "spaceship interior", translation: "интерьер космического корабля" },
          { value: "hyperspace", translation: "гиперпространство" },
          { value: "forest", translation: "лес" },
          { value: "Buckingham Palace", translation: "Букингемский дворец" }
        ]
      },
      {
        key: "lighting",
        label: "Lighting",
        labelRu: "Освещение",
        options: [
          { value: "dramatic lighting", translation: "драматичное освещение" },
          { value: "low key", translation: "низкий ключ" },
          { value: "high key", translation: "высокий ключ" },
          { value: "bright", translation: "яркое" },
          { value: "dark", translation: "темное" },
          { value: "rim light", translation: "контровой свет" },
          { value: "neon", translation: "неон" },
          { value: "volumetric light", translation: "объемный свет" },
          { value: "cinematic lighting", translation: "кинематографичное освещение" },
          { value: "golden hour", translation: "золотой час" }
        ]
      },
      {
        key: "camera",
        label: "Camera Angle",
        labelRu: "Ракурс камеры",
        options: [
          { value: "full body", translation: "в полный рост" },
          { value: "macro", translation: "макро" },
          { value: "close up", translation: "крупный план" },
          { value: "bird's-eye view", translation: "вид с высоты птичьего полета" },
          { value: "view from above, high angle", translation: "вид сверху" },
          { value: "view from below, low angle", translation: "вид снизу" },
          { value: "POV", translation: "от первого лица" },
          { value: "wide shot", translation: "общий план" }
        ]
      },
      {
        key: "director",
        label: "Director Style",
        labelRu: "Стиль режиссера",
        options: [
          { value: "by Andrei Tarkovsky", translation: "в стиле Тарковского" },
          { value: "by Akira Kurosawa", translation: "в стиле Куросавы" },
          { value: "by Michael Bay", translation: "в стиле Майкла Бэя" },
          { value: "by Steven Spielberg", translation: "в стиле Спилберга" },
          { value: "by Wes Anderson", translation: "в стиле Уэса Андерсона" },
          { value: "by David Fincher", translation: "в стиле Финчера" }
        ]
      },
      {
        key: "mood",
        label: "Mood",
        labelRu: "Настроение",
        options: [
          { value: "Action", translation: "экшн" },
          { value: "Happy", translation: "радостное" },
          { value: "Dramatic", translation: "драматичное" },
          { value: "Calm", translation: "спокойное" },
          { value: "Horror", translation: "ужас" },
          { value: "Dreamy", translation: "мечтательное" },
          { value: "Sci-fi", translation: "научная фантастика" },
          { value: "Epic", translation: "эпичное" }
        ]
      },
      {
        key: "details",
        label: "Details",
        labelRu: "Детали",
        options: [
          { value: "8k", translation: "8k" },
          { value: "muted colors", translation: "приглушенные цвета" },
          { value: "Bokeh", translation: "боке" },
          { value: "Sharp Focus", translation: "четкий фокус" },
          { value: "Intricate details", translation: "сложные детали" },
          { value: "Bright colors", translation: "яркие цвета" }
        ]
      }
    ]
  },
  logo: {
    title: "Logo Design",
    titleRu: "Дизайн логотипа",
    fields: [
      {
        key: "start",
        label: "Start",
        labelRu: "Старт",
        options: [
          { value: "logotype,", translation: "логотип" }
        ],
        autoSelect: true
      },
      {
        key: "style",
        label: "Style",
        labelRu: "Стиль",
        options: [
          { value: "Minimalistic", translation: "минималистичный" },
          { value: "Abstract", translation: "абстрактный" },
          { value: "Geometric", translation: "геометричный" },
          { value: "Vintage", translation: "винтажный" },
          { value: "Modern", translation: "современный" },
          { value: "Futuristic", translation: "футуристичный" }
        ]
      },
      {
        key: "logoType",
        label: "Logo Type",
        labelRu: "Тип логотипа",
        options: [
          { value: "Combination mark", translation: "комбинированный знак" },
          { value: "Emblem", translation: "эмблема" },
          { value: "Symbol", translation: "символ" },
          { value: "Wordmark", translation: "словесный знак" },
          { value: "Mascot", translation: "маскот" },
          { value: "Lettermark", translation: "буквенный знак" }
        ]
      },
      {
        key: "color",
        label: "Color",
        labelRu: "Цвет",
        options: [
          { value: "Blue", translation: "синий" },
          { value: "Black", translation: "черный" },
          { value: "Red", translation: "красный" },
          { value: "Green", translation: "зеленый" },
          { value: "Yellow", translation: "желтый" },
          { value: "Purple", translation: "фиолетовый" },
          { value: "Gold", translation: "золотой" },
          { value: "Silver", translation: "серебряный" }
        ]
      },
      {
        key: "background",
        label: "Background",
        labelRu: "Фон",
        options: [
          { value: "on white background", translation: "на белом фоне" },
          { value: "on black background", translation: "на черном фоне" },
          { value: "on colored background", translation: "на цветном фоне" },
          { value: "on gradient background", translation: "на градиентном фоне" }
        ]
      }
    ]
  },
  studio: {
    title: "Studio Product Shot",
    titleRu: "Студийная съемка",
    fields: [
      {
        key: "start",
        label: "Start",
        labelRu: "Старт",
        options: [
          { value: "studio photo of", translation: "студийное фото" }
        ],
        autoSelect: true
      },
      {
        key: "subject",
        label: "Product",
        labelRu: "Продукт",
        options: [
          { value: "a product", translation: "продукт" },
          { value: "a healthy food", translation: "здоровая еда" },
          { value: "electronics", translation: "электроника" },
          { value: "fashion jacket", translation: "модная куртка" },
          { value: "watches", translation: "часы" },
          { value: "jewelry", translation: "украшения" },
          { value: "cosmetics", translation: "косметика" },
          { value: "glass of beer", translation: "стакан пива" }
        ]
      },
      {
        key: "lighting",
        label: "Lighting",
        labelRu: "Освещение",
        options: [
          { value: "cinematic lighting", translation: "кинематографичное" },
          { value: "dramatic lighting", translation: "драматичное" },
          { value: "bright", translation: "яркое" },
          { value: "rim light", translation: "контровой свет" },
          { value: "volumetric light", translation: "объемный свет" }
        ]
      },
      {
        key: "background",
        label: "Background",
        labelRu: "Фон",
        options: [
          { value: "white background", translation: "белый фон" },
          { value: "on white surface", translation: "на белой поверхности" },
          { value: "Minimalistic backdrop", translation: "минималистичный фон" },
          { value: "Detailed backdrop", translation: "детализированный фон" }
        ]
      },
      {
        key: "style",
        label: "Style",
        labelRu: "Стиль",
        options: [
          { value: "Realistic", translation: "реалистичный" },
          { value: "Minimalistic", translation: "минималистичный" },
          { value: "Modern", translation: "современный" },
          { value: "Photorealistic", translation: "фотореалистичный" },
          { value: "High contrast", translation: "высокий контраст" }
        ]
      }
    ]
  }
};

// State
const state = {
  currentTemplate: "cinematic",
  selections: {},
  extra: "",
  showTranslations: true
};

// DOM elements
const fieldsContainer = document.getElementById("fieldsContainer");
const extraInput = document.getElementById("extraInput");
const promptOutput = document.getElementById("promptOutput");
const charCount = document.getElementById("charCount");
const tagsContainer = document.getElementById("tags");
const translationToggle = document.getElementById("translationToggle");
const toast = document.getElementById("toast");

// Initialize
function init() {
  renderTemplate(state.currentTemplate);
  setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
  // Template buttons
  document.querySelectorAll(".template-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const template = e.target.dataset.template;
      switchTemplate(template);
    });
  });

  // Translation toggle
  translationToggle.addEventListener("change", (e) => {
    state.showTranslations = e.target.checked;
    updateTranslationVisibility();
  });

  // Extra input
  extraInput.addEventListener("input", (e) => {
    state.extra = e.target.value.trim();
    updatePrompt();
  });

  // Action buttons
  document.getElementById("randomButton").addEventListener("click", randomize);
  document.getElementById("clearButton").addEventListener("click", clearAll);
  document.getElementById("copyButton").addEventListener("click", copyPrompt);

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "c" && !isInputFocused()) {
      e.preventDefault();
      copyPrompt();
    }
    if (e.altKey && e.key.toLowerCase() === "r") {
      e.preventDefault();
      randomize();
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === "x") {
      e.preventDefault();
      clearAll();
    }
  });
}

function isInputFocused() {
  const active = document.activeElement;
  return active.tagName === "INPUT" || active.tagName === "TEXTAREA";
}

// Switch template
function switchTemplate(templateKey) {
  state.currentTemplate = templateKey;
  state.selections = {};
  state.extra = "";
  extraInput.value = "";

  document.querySelectorAll(".template-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.template === templateKey);
  });

  renderTemplate(templateKey);
  updatePrompt();
}

// Render template
function renderTemplate(templateKey) {
  const template = templates[templateKey];
  fieldsContainer.innerHTML = "";

  template.fields.forEach((field) => {
    const fieldEl = createField(field);
    fieldsContainer.appendChild(fieldEl);

    // Auto-select first option if specified
    if (field.autoSelect && field.options.length > 0) {
      state.selections[field.key] = field.options[0].value;
    }
  });

  updatePrompt();
}

// Create field element
function createField(field) {
  const fieldEl = document.createElement("div");
  fieldEl.className = "field";

  const label = document.createElement("label");
  label.className = "field-label";
  label.innerHTML = `
    <span class="label-text">${field.label}</span>
    <span class="label-translation ${state.showTranslations ? "" : "hidden"}">${field.labelRu}</span>
  `;

  const optionsEl = document.createElement("div");
  optionsEl.className = "options";

  field.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.key = field.key;
    btn.dataset.value = option.value;

    const isSelected = state.selections[field.key] === option.value;
    if (isSelected) {
      btn.classList.add("selected");
    }

    btn.innerHTML = `
      ${option.value}
      <span class="translation ${state.showTranslations ? "" : "hidden"}">(${option.translation})</span>
    `;

    btn.addEventListener("click", () => {
      handleOptionClick(field.key, option.value, btn);
    });

    optionsEl.appendChild(btn);
  });

  fieldEl.appendChild(label);
  fieldEl.appendChild(optionsEl);
  return fieldEl;
}

// Handle option click
function handleOptionClick(key, value, btn) {
  // Deselect all options in this field
  const allBtns = document.querySelectorAll(`[data-key="${key}"]`);
  allBtns.forEach((b) => b.classList.remove("selected"));

  // Toggle selection
  if (state.selections[key] === value) {
    delete state.selections[key];
  } else {
    state.selections[key] = value;
    btn.classList.add("selected");
  }

  updatePrompt();
}

// Update translation visibility
function updateTranslationVisibility() {
  const translations = document.querySelectorAll(".label-translation, .option-btn .translation");
  translations.forEach((el) => {
    el.classList.toggle("hidden", !state.showTranslations);
  });
}

// Update prompt
function updatePrompt() {
  const parts = Object.values(state.selections).filter(Boolean);
  if (state.extra) {
    parts.push(state.extra);
  }

  const prompt = parts.join(" ");
  promptOutput.value = prompt;
  charCount.textContent = `${prompt.length} characters`;

  // Update tags
  renderTags(parts);
}

// Render tags
function renderTags(parts) {
  tagsContainer.innerHTML = "";
  parts.forEach((part) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = part;
    tagsContainer.appendChild(tag);
  });
}

// Randomize
function randomize() {
  const template = templates[state.currentTemplate];
  state.selections = {};

  template.fields.forEach((field) => {
    if (field.options.length > 0) {
      const randomOption = field.options[Math.floor(Math.random() * field.options.length)];
      state.selections[field.key] = randomOption.value;
    }
  });

  renderTemplate(state.currentTemplate);
  showToast("🎲 Random prompt generated!", "success");
}

// Clear all
function clearAll() {
  state.selections = {};
  state.extra = "";
  extraInput.value = "";
  renderTemplate(state.currentTemplate);
  showToast("🗑️ Cleared", "success");
}

// Copy prompt
async function copyPrompt() {
  const text = promptOutput.value.trim();
  if (!text) {
    showToast("⚠️ Nothing to copy", "warning");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("✓ Copied to clipboard!", "success");
  } catch (error) {
    // Fallback
    promptOutput.select();
    document.execCommand("copy");
    showToast("✓ Copied!", "success");
  }
}

// Show toast
function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = `toast ${type}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// Initialize app
init();
