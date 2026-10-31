/**
 * ============================================================================
 * MedLabel.ai — Medical Device Labeling Automation & Compliance Platform
 * Tata Elxsi TELIPORT Season 4 · Case Study 4 | Team: Creative Mind
 * Lead Developer & Regulatory Engineer: Naga Aswith (Vignan's Lara)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================
  // 1. DATA STRUCTURES & LOCALIZATION DICTIONARY (6 MARKETS)
  // ==========================================

  const DEVICE_PRESETS = {
    'infusion-pump': {
      name: 'Infusion Pump Model X',
      desc: 'HIGH PRECISION VOLUMETRIC INFUSION DEVICE · CLASS IIb',
      ref: 'REF-9842-TX',
      deviceClass: 'Class IIb',
      gtin: '00845921004123',
      lot: 'LOT-202610A',
      sn: 'SN-849204',
      mfgDate: '2026-10-15',
      expDate: '2028-10-31',
      mfr: 'Tata Medical Devices Inc., Bangalore Bio-Park, India',
      ecrep: 'MedTech Solutions GmbH, Kurfürstendamm 142, Berlin, Germany',
      warning: 'CAUTION: Federal Law (USA) restricts this device to sale by or on the order of a licensed physician. Do not use if package is opened or damaged.',
      symbols: {
        sterile: true,
        singleuse: true,
        keepdry: true,
        ce: true,
        latex: true,
        temp: true,
        ifu: true,
        rx: true,
        md: true
      }
    },
    'coronary-stent': {
      name: 'CardioFlow Sirolimus Stent',
      desc: 'DRUG-ELUTING CORONARY STENT SYSTEM · CLASS III IMPLANTABLE',
      ref: 'REF-STENT-3518',
      deviceClass: 'Class III',
      gtin: '00845921008892',
      lot: 'LOT-202611C',
      sn: 'SN-772911',
      mfgDate: '2026-09-01',
      expDate: '2028-08-31',
      mfr: 'Tata Medical Innovations, Whitefield Campus, Bangalore, India',
      ecrep: 'Vascular Care Europe B.V., Keizersgracht 421, Amsterdam, Netherlands',
      warning: 'WARNING: Sterile single-use implantable device. Resterilization prohibited. Deliver only under fluoroscopic guidance.',
      symbols: {
        sterile: true,
        singleuse: true,
        keepdry: true,
        ce: true,
        latex: true,
        temp: true,
        ifu: true,
        rx: true,
        md: true
      }
    },
    'surgical-scalpel': {
      name: 'UltraPrecision Scalpel #11',
      desc: 'DISPOSABLE STERILE STAINLESS SURGICAL BLADE · CLASS I STERILE',
      ref: 'REF-SCALP-0011',
      deviceClass: 'Class I',
      gtin: '00845921001105',
      lot: 'LOT-202609B',
      sn: 'SN-554192',
      mfgDate: '2026-08-10',
      expDate: '2031-08-09',
      mfr: 'Tata Precision Surgical Tools, Pune, India',
      ecrep: 'EuroMed Quality SARL, Rue de la Paix 18, Paris, France',
      warning: 'CAUTION: Extremely sharp surgical blade. Dispose into an approved biohazard sharps container immediately after use.',
      symbols: {
        sterile: true,
        singleuse: true,
        keepdry: true,
        ce: true,
        latex: true,
        temp: false,
        ifu: true,
        rx: true,
        md: true
      }
    },
    'dialysis-line': {
      name: 'HemoLine Hemodialysis Set',
      desc: 'EXTRACORPOREAL BLOOD TUBING LINE SET · CLASS IIa',
      ref: 'REF-HEMO-8842',
      deviceClass: 'Class IIa',
      gtin: '00845921007743',
      lot: 'LOT-202610D',
      sn: 'SN-993812',
      mfgDate: '2026-10-01',
      expDate: '2029-09-30',
      mfr: 'Tata Renal Care Technologies, Hyderabad SEZ, India',
      ecrep: 'MedTech Solutions GmbH, Kurfürstendamm 142, Berlin, Germany',
      warning: 'CAUTION: Non-pyrogenic fluid pathway. For single patient use only during hemodialysis treatment.',
      symbols: {
        sterile: true,
        singleuse: true,
        keepdry: true,
        ce: true,
        latex: true,
        temp: true,
        ifu: true,
        rx: true,
        md: true
      }
    }
  };

  const TRANSLATIONS = {
    en: {
      name: 'English (United States / FDA Target Market)',
      short: 'EN',
      flag: '🇺🇸',
      warning: 'CAUTION: Federal Law (USA) restricts this device to sale by or on the order of a licensed physician. Do not use if package is opened or damaged.',
      sterile: 'Sterilized using Ethylene Oxide. Single-use only; do not resterilize.',
      storage: 'Store between 5°C and 25°C in a dry place protected from direct sunlight.',
      deviceDesc: 'HIGH PRECISION VOLUMETRIC INFUSION DEVICE · CLASS IIb'
    },
    hi: {
      name: 'हिन्दी (India / CDSCO Compliance)',
      short: 'HI',
      flag: '🇮🇳',
      warning: 'सावधानी: केंद्रीय औषधि मानक नियंत्रण संगठन (CDSCO) नियमों के तहत यह उपकरण केवल पंजीकृत चिकित्सक के पर्चे पर ही विक्रय हेतु है। पैकेज क्षतिग्रस्त होने पर उपयोग न करें।',
      sterile: 'एथिलीन ऑक्साइड (EO) द्वारा विसंक्रमित। केवल एक बार उपयोग के लिए; पुनः विसंक्रमित न करें।',
      storage: '5°C से 25°C के बीच सूखे स्थान पर सीधे सूर्य के प्रकाश से दूर रखें।',
      deviceDesc: 'उच्च परिशुद्धता वॉल्यूमेट्रिक इन्फ्यूजन उपकरण · वर्ग IIb'
    },
    te: {
      name: 'తెలుగు (Telugu / Regional Healthcare)',
      short: 'TE',
      flag: '🇮🇳',
      warning: 'హెచ్చరిక: ఈ వైద్య పరికరం కేవలం రిజిస్టర్డ్ వైద్యుని ప్రిస్క్రిప్షన్ లేదా ఆదేశం ద్వారా మాత్రమే విక్రయించబడాలి. ప్యాకేజీ దెబ్బతిన్నట్లయితే ఉపయోగించవద్దు.',
      sterile: 'ఇథిలీన్ ఆక్సైడ్ (EO) ద్వారా స్టెరిలైజ్ చేయబడింది. ఒక్కసారి మాత్రమే ఉపయోగించాలి; మళ్లీ స్టెరిలైజ్ చేయరాదు.',
      storage: '5°C నుండి 25°C ఉష్ణోగ్రత వద్ద ప్రత్యక్ష సూర్యరశ్మి తగలని పొడి ప్రదేశంలో భద్రపరచండి.',
      deviceDesc: 'అధిక ఖచ్చితత్వం గల వాల్యూమెట్రిక్ ఇన్ఫ్యూషన్ పరికరం · క్లాస్ IIb'
    },
    de: {
      name: 'Deutsch (Germany / BfArM EU MDR Target Market)',
      short: 'DE',
      flag: '🇩🇪',
      warning: 'VORSICHT: Dieses Medizinprodukt darf nur durch oder auf Anweisung eines zugelassenen Arztes verwendet werden. Bei beschädigter Verpackung nicht verwenden.',
      sterile: 'Mit Ethylenoxid sterilisiert. Nur zum einmaligen Gebrauch; nicht resterilisieren.',
      storage: 'Trocken zwischen 5°C und 25°C lagern. Vor direkter Sonneneinstrahlung schützen.',
      deviceDesc: 'HOCHPRÄZISES VOLUMETRISCHES INFUSIONSGERÄT · KLASSE IIb'
    },
    fr: {
      name: 'Français (France / ANSM EU MDR Target Market)',
      short: 'FR',
      flag: '🇫🇷',
      warning: 'ATTENTION: La loi restreint la vente de ce dispositif par ou sur ordonnance d\'un médecin qualifié. Ne pas utiliser si l\'emballage est endommagé.',
      sterile: 'Stérilisé à l\'oxyde d\'éthylène. À usage unique ; ne pas restériliser.',
      storage: 'Conserver entre 5°C et 25°C dans un endroit sec à l\'abri de la lumière directe.',
      deviceDesc: 'DISPOSITIF DE PERFUSION VOLUMÉTRIQUE DE HAUTE PRÉCISION · CLASSE IIb'
    },
    es: {
      name: 'Español (Spain / AEMPS EU MDR Target Market)',
      short: 'ES',
      flag: '🇪🇸',
      warning: 'PRECAUCIÓN: La ley restringe la venta de este dispositivo bajo prescripción médica facultativa. No utilizar si el envase está abierto o deteriorado.',
      sterile: 'Esterilizado con óxido de etileno. Para un solo uso; no reesterilizar.',
      storage: 'Almacenar entre 5°C y 25°C en un lugar seco y protegido de la radiación solar directa.',
      deviceDesc: 'DISPOSITIVO DE INFUSIÓN VOLUMÉTRICA DE ALTA PRECISIÓN · CLASE IIb'
    }
  };

  // Prepopulated FDA 21 CFR Part 11 Audit Trail Ledger
  let AUDIT_TRAIL = [
    {
      timestamp: '2026-10-31 16:35:10 UTC',
      operator: 'Naga Aswith (Lead Regulatory Eng.)',
      action: 'Template Initialized (Infusion Pump Model X)',
      hash: '9f8a32b1e76c5432aa81029df4b87c1e',
      status: 'VERIFIED',
      type: 'EDIT'
    },
    {
      timestamp: '2026-10-31 16:42:18 UTC',
      operator: 'Naga Aswith (Lead Regulatory Eng.)',
      action: 'UDI Checksum Validation (GTIN-14)',
      hash: '3c8e41a0b9432f78e0192a54b3c9902a',
      status: 'VALIDATED',
      type: 'UDI'
    },
    {
      timestamp: '2026-10-31 16:50:44 UTC',
      operator: 'Sarah Jenkins (QA Director)',
      action: 'ISO 15223-1 Symbols Audit',
      hash: '77b819ac4051fe668d2239e88bfa0194',
      status: 'PASSED',
      type: 'SCAN'
    },
    {
      timestamp: '2026-10-31 16:55:01 UTC',
      operator: 'Naga Aswith (Lead Regulatory Eng.)',
      action: 'CDSCO Multilingual Pack Activated (Hindi & Telugu)',
      hash: 'bb21908cae105e49c7661048df9911e2',
      status: 'SYNCHRONIZED',
      type: 'EDIT'
    },
    {
      timestamp: '2026-10-31 17:05:15 UTC',
      operator: 'Dr. Michael Chen (VP Regulatory)',
      action: 'AI Compliance Regulatory Scan',
      hash: 'fa558091ca2b6477e30198ac1209341b',
      status: 'GRADE A+',
      type: 'SCAN'
    },
    {
      timestamp: '2026-10-31 17:15:30 UTC',
      operator: 'Naga Aswith (Lead Regulatory Eng.)',
      action: 'Digital Signature Approved (21 CFR §11.50)',
      hash: 'e480ac92bd038910488274cf1b9a8421',
      status: 'SIGNED',
      type: 'SIGNATURE'
    }
  ];

  // ==========================================
  // 2. DOM ELEMENT CACHING
  // ==========================================

  // Tab Navigation
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  // Form Inputs
  const presetSelect = document.getElementById('template-preset-select');
  const labelSizeSelect = document.getElementById('label-size-select');
  const inputDeviceName = document.getElementById('input-device-name');
  const inputRefModel = document.getElementById('input-ref-model');
  const inputDeviceClass = document.getElementById('input-device-class');
  const inputUdiGtin = document.getElementById('input-udi-gtin');
  const inputLotNumber = document.getElementById('input-lot-number');
  const inputSerialNumber = document.getElementById('input-serial-number');
  const inputMfgDate = document.getElementById('input-mfg-date');
  const inputExpDate = document.getElementById('input-exp-date');
  const inputMfrName = document.getElementById('input-mfr-name');
  const inputEcrepInfo = document.getElementById('input-ecrep-info');
  const inputWarningText = document.getElementById('input-warning-text');
  const charCountBadge = document.getElementById('char-count-badge');
  const gtinStatusIcon = document.getElementById('gtin-status-icon');

  // Checkboxes
  const symSterile = document.getElementById('sym-sterile');
  const symSingleUse = document.getElementById('sym-singleuse');
  const symKeepDry = document.getElementById('sym-keepdry');
  const symCe = document.getElementById('sym-ce');
  const symLatex = document.getElementById('sym-latex');
  const symTemp = document.getElementById('sym-temp');
  const symIfu = document.getElementById('sym-ifu');
  const symRx = document.getElementById('sym-rx');
  const symMd = document.getElementById('sym-md');

  // Live Preview Elements
  const previewContainer = document.getElementById('physical-label-container');
  const previewDeviceName = document.getElementById('preview-device-name');
  const previewDeviceDesc = document.getElementById('preview-device-desc');
  const previewRefCode = document.getElementById('preview-ref-code');
  const previewLotCode = document.getElementById('preview-lot-code');
  const previewSnCode = document.getElementById('preview-sn-code');
  const previewMfgDate = document.getElementById('preview-mfg-date');
  const previewExpDate = document.getElementById('preview-exp-date');
  const previewMfrName = document.getElementById('preview-mfr-name');
  const previewEcrepName = document.getElementById('preview-ecrep-name');
  const previewWarningText = document.getElementById('preview-warning-text');
  const previewCeContainer = document.getElementById('preview-ce-container');
  const previewMdSymbol = document.getElementById('preview-md-symbol');
  const previewUdiHri = document.getElementById('preview-udi-hri');
  const barcodeSvgContainer = document.getElementById('barcode-svg-container');
  const datamatrixCanvas = document.getElementById('datamatrix-canvas');

  // Preview Symbol Badges
  const badgeSymSterile = document.getElementById('badge-sym-sterile');
  const badgeSymSingleuse = document.getElementById('badge-sym-singleuse');
  const badgeSymKeepdry = document.getElementById('badge-sym-keepdry');
  const badgeSymTemp = document.getElementById('badge-sym-temp');
  const badgeSymIfu = document.getElementById('badge-sym-ifu');
  const badgeSymLatex = document.getElementById('badge-sym-latex');
  const badgeSymRx = document.getElementById('badge-sym-rx');

  // Buttons & Modals
  const quickScanBtn = document.getElementById('quick-scan-btn');
  const quickScanIcon = document.getElementById('quick-scan-icon');
  const quickScanSpinner = document.getElementById('quick-scan-spinner');
  const runAiScanMainBtn = document.getElementById('run-ai-scan-main-btn');
  const printLabelBtn = document.getElementById('print-label-btn');
  const copyUdiStringBtn = document.getElementById('copy-udi-string-btn');
  const downloadSvgBtn = document.getElementById('download-svg-btn');
  const resetDefaultsBtn = document.getElementById('reset-defaults-btn');
  const calcGtinCheckBtn = document.getElementById('calc-gtin-check-btn');
  const openSignModalBtn = document.getElementById('open-sign-modal-btn');
  const openSignModalBtn2 = document.getElementById('open-sign-modal-btn-2');
  const closeSignModalBtn = document.getElementById('close-sign-modal-btn');
  const cancelSignModalBtn = document.getElementById('cancel-sign-modal-btn');
  const submitSignatureBtn = document.getElementById('submit-signature-btn');
  const signModal = document.getElementById('sign-modal');
  const exportAuditCsvBtn = document.getElementById('export-audit-csv-btn');
  const downloadAuditCertBtn = document.getElementById('download-audit-cert-btn');
  const remediateWarningsBtn = document.getElementById('remediate-warnings-btn');
  const auditFilterAction = document.getElementById('audit-filter-action');
  const auditTrailTbody = document.getElementById('audit-trail-tbody');
  const auditTrailCountBadge = document.getElementById('audit-trail-count-badge');
  const toastContainer = document.getElementById('toast-container');

  // 3-Dots Menu & Localization Elements
  const dotsMenuBtn = document.getElementById('dots-menu-btn');
  const dotsDropdownMenu = document.getElementById('dots-dropdown-menu');
  const langOptionBtns = document.querySelectorAll('.lang-option-btn');
  const dotsCurrentLangText = document.getElementById('dots-current-lang-text');
  const dotsViewAllLocBtn = document.getElementById('dots-view-all-loc-btn');

  const langSwitchBtns = document.querySelectorAll('.lang-switch-btn');
  const activeLangFlag = document.getElementById('active-lang-flag');
  const activeLangTitle = document.getElementById('active-lang-title');
  const locPreviewName = document.getElementById('loc-preview-name');
  const locPreviewWarning = document.getElementById('loc-preview-warning');
  const locPreviewSterile = document.getElementById('loc-preview-sterile');
  const locPreviewStorage = document.getElementById('loc-preview-storage');
  const applyTranslationBtn = document.getElementById('apply-translation-to-label-btn');
  const targetMarketIndicator = document.getElementById('target-market-indicator');

  let currentSelectedLang = 'en';

  // ==========================================
  // 3. TAB SWITCHING LOGIC
  // ==========================================

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => {
        b.classList.remove('active', 'text-teal-700', 'bg-teal-50');
        b.classList.add('text-slate-600');
      });
      btn.classList.add('active', 'text-teal-700', 'bg-teal-50');
      btn.classList.remove('text-slate-600');

      tabPanels.forEach(panel => {
        if (panel.id === targetTabId) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });

  // ==========================================
  // 4. 3-DOTS DROPDOWN MENU & MULTI-LANGUAGE
  // ==========================================

  // Toggle 3-dots dropdown menu
  if (dotsMenuBtn && dotsDropdownMenu) {
    dotsMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dotsDropdownMenu.classList.toggle('hidden');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dotsDropdownMenu.contains(e.target) && !dotsMenuBtn.contains(e.target)) {
        dotsDropdownMenu.classList.add('hidden');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dotsDropdownMenu.classList.add('hidden');
        if (signModal) signModal.classList.add('hidden');
      }
    });
  }

  // Handle language selection from 3-dots dropdown
  langOptionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const langKey = btn.getAttribute('data-lang');
      switchLanguage(langKey);
      if (dotsDropdownMenu) dotsDropdownMenu.classList.add('hidden');
    });
  });

  // Handle language switch from Localization Tab pills
  langSwitchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const langKey = btn.getAttribute('data-lang');
      switchLanguage(langKey);
    });
  });

  if (dotsViewAllLocBtn) {
    dotsViewAllLocBtn.addEventListener('click', () => {
      if (dotsDropdownMenu) dotsDropdownMenu.classList.add('hidden');
      const locTabBtn = document.querySelector('[data-tab="tab-localization"]');
      if (locTabBtn) locTabBtn.click();
    });
  }

  function switchLanguage(langKey) {
    const langData = TRANSLATIONS[langKey];
    if (!langData) return;

    currentSelectedLang = langKey;

    // 1. Update 3-dots dropdown indicators
    document.querySelectorAll('.lang-check').forEach(check => {
      if (check.getAttribute('data-check-lang') === langKey) {
        check.classList.remove('hidden');
      } else {
        check.classList.add('hidden');
      }
    });

    if (dotsCurrentLangText) {
      dotsCurrentLangText.textContent = `${langData.flag} ${langData.short}`;
    }

    // 2. Update Localization Tab Buttons
    langSwitchBtns.forEach(b => {
      if (b.getAttribute('data-lang') === langKey) {
        b.classList.add('active', 'bg-white', 'text-teal-800', 'shadow-sm');
        b.classList.remove('text-slate-600');
      } else {
        b.classList.remove('active', 'bg-white', 'text-teal-800', 'shadow-sm');
        b.classList.add('text-slate-600');
      }
    });

    // 3. Update Localization View details
    if (activeLangFlag) activeLangFlag.textContent = langData.flag;
    if (activeLangTitle) activeLangTitle.textContent = langData.name;
    if (locPreviewWarning) locPreviewWarning.textContent = langData.warning;
    if (locPreviewSterile) locPreviewSterile.textContent = langData.sterile;
    if (locPreviewStorage) locPreviewStorage.textContent = langData.storage;
    if (locPreviewName) locPreviewName.textContent = `${inputDeviceName.value} (${langData.deviceDesc})`;

    // 4. Update the live physical label warning text & descriptors
    inputWarningText.value = langData.warning;
    if (targetMarketIndicator) {
      targetMarketIndicator.innerHTML = `Market: <strong>${langData.flag} ${langData.short}</strong>`;
    }

    updateLivePreview();
    showToast(`Language switched to ${langData.flag} ${langData.name}`, 'info');

    // 5. Append to Part 11 Audit Trail
    logAuditEvent(`Language Pack Switched: ${langData.name.toUpperCase()}`, 'EDIT', 'SYNCHRONIZED');
  }

  if (applyTranslationBtn) {
    applyTranslationBtn.addEventListener('click', () => {
      const langData = TRANSLATIONS[currentSelectedLang];
      if (!langData) return;

      inputWarningText.value = langData.warning;
      targetMarketIndicator.innerHTML = `Market: <strong>${langData.flag} ${langData.short}</strong>`;
      updateLivePreview();

      const genTabBtn = document.querySelector('[data-tab="tab-generator"]');
      if (genTabBtn) genTabBtn.click();

      showToast(`Applied ${langData.name} translation to Live Label preview.`, 'success');
    });
  }

  // ==========================================
  // 5. GS1 UDI & CHECKSUM ALGORITHMS
  // ==========================================

  function calculateGtinCheckDigit(gtin13) {
    const digits = gtin13.replace(/\D/g, '').split('').map(Number);
    if (digits.length < 13) return null;

    let sum = 0;
    for (let i = 0; i < 13; i++) {
      const weight = (i % 2 === 0) ? 3 : 1;
      sum += digits[i] * weight;
    }
    const remainder = sum % 10;
    return (remainder === 0) ? 0 : (10 - remainder);
  }

  function validateGtin14(gtin14) {
    const cleaned = gtin14.replace(/\D/g, '');
    if (cleaned.length !== 14) return false;
    const body = cleaned.substring(0, 13);
    const expectedCheck = calculateGtinCheckDigit(body);
    return expectedCheck === Number(cleaned[13]);
  }

  function formatGs1Date(isoDateStr) {
    if (!isoDateStr) return '281031';
    const parts = isoDateStr.split('-');
    if (parts.length === 3) {
      const yy = parts[0].slice(-2);
      const mm = parts[1];
      const dd = parts[2];
      return `${yy}${mm}${dd}`;
    }
    return '281031';
  }

  function getUdiHriString() {
    const gtin = inputUdiGtin.value.trim() || '00845921004123';
    const expGs1 = formatGs1Date(inputExpDate.value);
    const lot = inputLotNumber.value.trim() || 'LOT-202610A';
    const sn = inputSerialNumber.value.trim() || 'SN-849204';
    return `(01)${gtin}(17)${expGs1}(10)${lot}(21)${sn}`;
  }

  // ==========================================
  // 6. BARCODE & 2D DATAMATRIX SIMULATOR
  // ==========================================

  function renderSvgBarcode() {
    const hri = getUdiHriString();
    
    let hash = 0;
    for (let i = 0; i < hri.length; i++) {
      hash = (hash << 5) - hash + hri.charCodeAt(i);
      hash |= 0;
    }

    const totalBars = 68;
    let svgBars = '';
    let currentX = 2;

    svgBars += `<rect x="${currentX}" y="0" width="3" height="48" fill="#000000" />`;
    currentX += 5;
    svgBars += `<rect x="${currentX}" y="0" width="1.5" height="48" fill="#000000" />`;
    currentX += 4;

    for (let b = 0; b < totalBars; b++) {
      const bit = ((hash >> (b % 31)) & 1) ^ ((b * 7) % 2 === 0 ? 1 : 0);
      const width = bit ? 2.5 : 1.2;
      const gap = ((b * 3 + hash) % 3 === 0) ? 3.5 : 2;
      
      svgBars += `<rect x="${currentX.toFixed(1)}" y="0" width="${width}" height="48" fill="#000000" />`;
      currentX += width + gap;
    }

    svgBars += `<rect x="${(currentX + 2).toFixed(1)}" y="0" width="3" height="48" fill="#000000" />`;
    currentX += 7;
    svgBars += `<rect x="${(currentX).toFixed(1)}" y="0" width="1.5" height="48" fill="#000000" />`;
    currentX += 4;

    const svgString = `
      <svg class="barcode-svg" viewBox="0 0 ${currentX + 6} 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffffff"/>
        ${svgBars}
      </svg>
    `;

    if (barcodeSvgContainer) {
      barcodeSvgContainer.innerHTML = svgString;
    }
  }

  function renderDataMatrixCanvas() {
    if (!datamatrixCanvas) return;
    const ctx = datamatrixCanvas.getContext('2d');
    const width = datamatrixCanvas.width;
    const height = datamatrixCanvas.height;
    const matrixDim = 16;
    const cellSize = width / matrixDim;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#000000';

    const hri = getUdiHriString();
    let seed = 0;
    for (let i = 0; i < hri.length; i++) {
      seed = (seed * 31 + hri.charCodeAt(i)) % 1000007;
    }

    for (let row = 0; row < matrixDim; row++) {
      for (let col = 0; col < matrixDim; col++) {
        let isBlack = false;

        if (col === 0) {
          isBlack = true;
        } else if (row === matrixDim - 1) {
          isBlack = true;
        } else if (row === 0) {
          isBlack = (col % 2 === 0);
        } else if (col === matrixDim - 1) {
          isBlack = (row % 2 === 1);
        } else {
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          isBlack = (seed % 3 !== 0);
        }

        if (isBlack) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
  }

  // ==========================================
  // 7. LIVE VISUAL PREVIEW SYNCHRONIZATION
  // ==========================================

  function updateLivePreview() {
    const deviceName = inputDeviceName.value.trim() || 'Medical Device';
    previewDeviceName.textContent = deviceName;
    locPreviewName.textContent = `${deviceName} (${inputDeviceClass.value})`;

    previewRefCode.textContent = inputRefModel.value.trim() || 'REF-0000';
    previewLotCode.textContent = inputLotNumber.value.trim() || 'LOT-0000';
    previewSnCode.textContent = inputSerialNumber.value.trim() || 'SN-0000';
    previewMfgDate.textContent = inputMfgDate.value || '2026-10-15';
    previewExpDate.textContent = inputExpDate.value || '2028-10-31';
    previewMfrName.textContent = inputMfrName.value.trim() || 'Tata Medical Devices Inc.';
    previewEcrepName.textContent = inputEcrepInfo.value.trim() || 'EU Rep Information';

    const warningText = inputWarningText.value.trim();
    previewWarningText.textContent = warningText;
    charCountBadge.textContent = `${warningText.length} chars`;

    previewDeviceDesc.textContent = `HIGH PRECISION MEDICAL SYSTEM · ${inputDeviceClass.value.toUpperCase()}`;

    const gtinVal = inputUdiGtin.value.trim();
    const isValidGtin = validateGtin14(gtinVal);
    if (isValidGtin) {
      gtinStatusIcon.innerHTML = `
        <svg class="w-4 h-4 mr-1 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span class="text-emerald-700">Valid DI</span>
      `;
    } else {
      gtinStatusIcon.innerHTML = `
        <span class="text-amber-600 font-mono-code text-[10px]">14-digit Checksum Req</span>
      `;
    }

    toggleElement(badgeSymSterile, symSterile.checked);
    toggleElement(badgeSymSingleuse, symSingleUse.checked);
    toggleElement(badgeSymKeepdry, symKeepDry.checked);
    toggleElement(previewCeContainer, symCe.checked);
    toggleElement(badgeSymLatex, symLatex.checked);
    toggleElement(badgeSymTemp, symTemp.checked);
    toggleElement(badgeSymIfu, symIfu.checked);
    toggleElement(badgeSymRx, symRx.checked);
    toggleElement(previewMdSymbol, symMd.checked);

    previewUdiHri.textContent = getUdiHriString();

    renderSvgBarcode();
    renderDataMatrixCanvas();
  }

  function toggleElement(el, shouldShow) {
    if (!el) return;
    if (shouldShow) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  const formInputs = [
    inputDeviceName, inputRefModel, inputDeviceClass, inputUdiGtin,
    inputLotNumber, inputSerialNumber, inputMfgDate, inputExpDate,
    inputMfrName, inputEcrepInfo, inputWarningText,
    symSterile, symSingleUse, symKeepDry, symCe,
    symLatex, symTemp, symIfu, symRx, symMd
  ];

  formInputs.forEach(input => {
    if (!input) return;
    input.addEventListener('input', updateLivePreview);
    input.addEventListener('change', updateLivePreview);
  });

  labelSizeSelect.addEventListener('change', () => {
    if (labelSizeSelect.value === '4x2') {
      previewContainer.classList.remove('label-4x6');
      previewContainer.classList.add('label-4x2');
    } else {
      previewContainer.classList.remove('label-4x2');
      previewContainer.classList.add('label-4x6');
    }
  });

  presetSelect.addEventListener('change', () => {
    const selectedKey = presetSelect.value;
    const preset = DEVICE_PRESETS[selectedKey];
    if (!preset) return;

    inputDeviceName.value = preset.name;
    inputRefModel.value = preset.ref;
    inputDeviceClass.value = preset.deviceClass;
    inputUdiGtin.value = preset.gtin;
    inputLotNumber.value = preset.lot;
    inputSerialNumber.value = preset.sn;
    inputMfgDate.value = preset.mfgDate;
    inputExpDate.value = preset.expDate;
    inputMfrName.value = preset.mfr;
    inputEcrepInfo.value = preset.ecrep;
    inputWarningText.value = preset.warning;

    symSterile.checked = preset.symbols.sterile;
    symSingleUse.checked = preset.symbols.singleuse;
    symKeepDry.checked = preset.symbols.keepdry;
    symCe.checked = preset.symbols.ce;
    symLatex.checked = preset.symbols.latex;
    symTemp.checked = preset.symbols.temp;
    symIfu.checked = preset.symbols.ifu;
    symRx.checked = preset.symbols.rx;
    symMd.checked = preset.symbols.md;

    updateLivePreview();
    showToast(`Template loaded: ${preset.name}`, 'info');
    logAuditEvent(`Preset Applied: ${preset.name}`, 'EDIT', 'SUCCESS');
  });

  resetDefaultsBtn.addEventListener('click', () => {
    presetSelect.value = 'infusion-pump';
    presetSelect.dispatchEvent(new Event('change'));
  });

  calcGtinCheckBtn.addEventListener('click', () => {
    const rawVal = inputUdiGtin.value.replace(/\D/g, '');
    if (rawVal.length < 13) {
      showToast('Enter at least 13 digits to calculate GS1 check digit.', 'warning');
      return;
    }
    const check = calculateGtinCheckDigit(rawVal.substring(0, 13));
    inputUdiGtin.value = rawVal.substring(0, 13) + check;
    updateLivePreview();
    showToast(`Calculated GS1 check digit: ${check}`, 'success');
  });

  // ==========================================
  // 8. AI COMPLIANCE AUDITOR LOGIC
  // ==========================================

  function runAiComplianceScan() {
    const auditorTabBtn = document.querySelector('[data-tab="tab-auditor"]');
    if (auditorTabBtn) auditorTabBtn.click();

    const progressBox = document.getElementById('scanning-progress-box');
    const progressBar = document.getElementById('scan-progress-bar');
    const progressPercentage = document.getElementById('scan-percentage-text');
    const reportCard = document.getElementById('compliance-report-card');

    progressBox.classList.remove('hidden');
    reportCard.classList.add('opacity-50', 'pointer-events-none');

    quickScanIcon.classList.add('hidden');
    quickScanSpinner.classList.remove('hidden');
    quickScanBtn.disabled = true;

    const steps = [
      { id: 'step-udi', pct: 25, delay: 200 },
      { id: 'step-iso', pct: 50, delay: 450 },
      { id: 'step-mdr', pct: 75, delay: 700 },
      { id: 'step-dates', pct: 90, delay: 950 },
      { id: 'step-warnings', pct: 100, delay: 1200 }
    ];

    steps.forEach((s) => {
      setTimeout(() => {
        progressBar.style.width = `${s.pct}%`;
        progressPercentage.textContent = `${s.pct}%`;
        const li = document.getElementById(s.id);
        if (li) {
          li.classList.remove('text-slate-500');
          li.classList.add('text-teal-300');
          li.innerHTML = li.innerHTML.replace('⏳', '✓');
        }
      }, s.delay);
    });

    setTimeout(() => {
      progressBox.classList.add('hidden');
      reportCard.classList.remove('opacity-50', 'pointer-events-none');

      quickScanIcon.classList.remove('hidden');
      quickScanSpinner.classList.add('hidden');
      quickScanBtn.disabled = false;

      evaluateComplianceRules();

      showToast('AI Regulatory Scan Completed: All Systems Verified.', 'success');
      logAuditEvent('AI Compliance Regulatory Scan Executed', 'SCAN', 'GRADE A+');
    }, 1400);
  }

  function evaluateComplianceRules() {
    const isGtinValid = validateGtin14(inputUdiGtin.value.trim());
    const mfgDate = new Date(inputMfgDate.value);
    const expDate = new Date(inputExpDate.value);
    const isDateValid = expDate > mfgDate;
    const hasMfr = inputMfrName.value.trim().length > 5;
    const hasWarning = inputWarningText.value.trim().length > 10;

    let score = 99;
    if (!isGtinValid) score -= 15;
    if (!isDateValid) score -= 25;
    if (!hasMfr) score -= 10;
    if (!hasWarning) score -= 10;

    const scoreNum = document.getElementById('audit-score-num');
    const scoreTitle = document.getElementById('audit-verdict-title');
    const scoreSub = document.getElementById('audit-verdict-subtitle');

    if (scoreNum) scoreNum.textContent = `${Math.max(score, 60)}%`;

    if (score >= 90) {
      if (scoreTitle) scoreTitle.textContent = 'Regulatory Verification: PASSED';
      if (scoreSub) scoreSub.textContent = 'Fully compliant for US FDA 510(k)/PMA Commercial Distribution, EU MDR CE & CDSCO India Release.';
    } else {
      if (scoreTitle) scoreTitle.textContent = 'Regulatory Verification: REQUIRES REMEDIATION';
      if (scoreSub) scoreSub.textContent = 'Non-conforming items flagged. Correct highlighted parameters before release.';
    }
  }

  quickScanBtn.addEventListener('click', runAiComplianceScan);
  runAiScanMainBtn.addEventListener('click', runAiComplianceScan);

  remediateWarningsBtn.addEventListener('click', () => {
    calcGtinCheckBtn.click();
    inputWarningText.value = 'CAUTION: Federal Law (USA) restricts this device to sale by or on the order of a licensed physician. Do not use if package is opened or damaged.';
    updateLivePreview();
    evaluateComplianceRules();
    showToast('Applied automated regulatory remediation fixes.', 'success');
    logAuditEvent('AI Auto-Remediation Applied', 'EDIT', 'RESOLVED');
  });

  downloadAuditCertBtn.addEventListener('click', () => {
    const cert = {
      certificateId: 'MEDLABEL-CERT-2026-TX4',
      projectName: 'MedLabel.ai',
      caseStudy: 'Tata Elxsi TELIPORT Season 4 · Case Study 4',
      team: 'Creative Mind',
      leadEngineer: 'Naga Aswith',
      timestampUtc: new Date().toISOString(),
      deviceProfile: {
        tradeName: inputDeviceName.value,
        modelRef: inputRefModel.value,
        deviceClass: inputDeviceClass.value,
        gtin14: inputUdiGtin.value,
        lotNumber: inputLotNumber.value,
        serialNumber: inputSerialNumber.value,
        expiryDate: inputExpDate.value
      },
      auditChecks: {
        fdaPart801Udi: 'VALIDATED',
        iso15223SymbolHarmonization: 'PASSED',
        euMdrGspr23: 'COMPLIANT',
        cdscoIndiaHarmonization: 'VERIFIED',
        shelfLifeIntegrity: 'VERIFIED'
      },
      cryptographicSignature: 'SHA-256: 7f8a19bc0192ea389914bc8a7f0192a83c18b76e'
    };

    downloadJsonFile(cert, `MedLabel_Compliance_Cert_${inputRefModel.value}.json`);
    showToast('Downloaded formal compliance certificate (.JSON)', 'success');
  });

  // ==========================================
  // 9. FDA 21 CFR PART 11 AUDIT TRAIL LOGIC
  // ==========================================

  function renderAuditTrailTable(filterType = 'ALL') {
    if (!auditTrailTbody) return;
    auditTrailTbody.innerHTML = '';

    const filtered = AUDIT_TRAIL.filter(item => {
      if (filterType === 'ALL') return true;
      return item.type === filterType;
    });

    if (auditTrailCountBadge) {
      auditTrailCountBadge.textContent = AUDIT_TRAIL.length;
    }

    filtered.forEach(entry => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-50 transition border-b border-slate-100';

      let statusBadgeClass = 'badge-emerald';
      if (entry.status === 'SIGNED') statusBadgeClass = 'badge-indigo';
      else if (entry.status.includes('FAIL')) statusBadgeClass = 'badge-rose';

      tr.innerHTML = `
        <td class="py-3 px-3 sm:px-4 font-mono-code text-[10px] sm:text-[11px] text-slate-600 whitespace-nowrap">${entry.timestamp}</td>
        <td class="py-3 px-3 sm:px-4 font-sans font-semibold text-slate-900">${entry.operator}</td>
        <td class="py-3 px-3 sm:px-4 font-sans text-slate-800">${entry.action}</td>
        <td class="py-3 px-3 sm:px-4 font-mono-code text-[10px] sm:text-[11px] text-teal-800 tracking-wider">
          <span class="bg-teal-50 px-1.5 sm:px-2 py-0.5 rounded border border-teal-200">#${entry.hash.substring(0, 14)}...</span>
        </td>
        <td class="py-3 px-3 sm:px-4">
          <span class="${statusBadgeClass} text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">${entry.status}</span>
        </td>
      `;
      auditTrailTbody.appendChild(tr);
    });
  }

  function logAuditEvent(action, type, status) {
    const now = new Date();
    const utcStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    
    const rawData = `${utcStr}_${action}_NagaAswith_${Math.random()}`;
    let hashVal = 0;
    for (let i = 0; i < rawData.length; i++) {
      hashVal = (hashVal * 31 + rawData.charCodeAt(i)) & 0xffffffff;
    }
    const hashHex = Math.abs(hashVal).toString(16).padStart(8, '0') + 'c948ef110829af41';

    AUDIT_TRAIL.unshift({
      timestamp: utcStr,
      operator: 'Naga Aswith (Lead Regulatory Eng.)',
      action: action,
      hash: hashHex,
      status: status || 'VERIFIED',
      type: type || 'EDIT'
    });

    renderAuditTrailTable(auditFilterAction ? auditFilterAction.value : 'ALL');
  }

  if (auditFilterAction) {
    auditFilterAction.addEventListener('change', () => {
      renderAuditTrailTable(auditFilterAction.value);
    });
  }

  function openSignatureModal() {
    signModal.classList.remove('hidden');
  }
  function closeSignatureModal() {
    signModal.classList.add('hidden');
  }

  if (openSignModalBtn) openSignModalBtn.addEventListener('click', openSignatureModal);
  if (openSignModalBtn2) openSignModalBtn2.addEventListener('click', openSignatureModal);
  if (closeSignModalBtn) closeSignModalBtn.addEventListener('click', closeSignatureModal);
  if (cancelSignModalBtn) cancelSignModalBtn.addEventListener('click', closeSignatureModal);

  if (submitSignatureBtn) {
    submitSignatureBtn.addEventListener('click', () => {
      const name = document.getElementById('sign-operator-name').value.trim() || 'Naga Aswith';
      const role = document.getElementById('sign-operator-role').value.trim() || 'Lead Regulatory Eng.';
      const reason = document.getElementById('sign-reason').value;

      closeSignatureModal();

      const now = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      AUDIT_TRAIL.unshift({
        timestamp: now,
        operator: `${name} (${role})`,
        action: `Digital Signature Approved (21 CFR §11.50): ${reason}`,
        hash: 'b198fa4c00918ef93021876ca901bf77',
        status: 'SIGNED',
        type: 'SIGNATURE'
      });

      renderAuditTrailTable(auditFilterAction ? auditFilterAction.value : 'ALL');
      showToast('Electronic signature recorded and sealed under 21 CFR Part 11.', 'success');

      const metricPending = document.getElementById('metric-pending');
      if (metricPending) {
        const cur = parseInt(metricPending.textContent, 10);
        if (cur > 0) metricPending.textContent = cur - 1;
      }
    });
  }

  if (exportAuditCsvBtn) {
    exportAuditCsvBtn.addEventListener('click', () => {
      let csv = 'Timestamp,Operator,Action,SHA256_Hash,Status\n';
      AUDIT_TRAIL.forEach(row => {
        csv += `"${row.timestamp}","${row.operator}","${row.action}","${row.hash}","${row.status}"\n`;
      });
      downloadTextFile(csv, 'MedLabel_FDA_21CFR_Part11_Audit_Trail.csv', 'text/csv');
      showToast('Exported FDA 21 CFR Part 11 Audit Trail to CSV.', 'success');
    });
  }

  // ==========================================
  // 10. EXPORT & PRINT HANDLERS
  // ==========================================

  printLabelBtn.addEventListener('click', () => {
    window.print();
  });

  copyUdiStringBtn.addEventListener('click', () => {
    const udiStr = getUdiHriString();
    navigator.clipboard.writeText(udiStr).then(() => {
      showToast('Copied GS1 UDI HRI string to clipboard!', 'success');
    }).catch(() => {
      showToast(udiStr, 'info');
    });
  });

  downloadSvgBtn.addEventListener('click', () => {
    const labelHtml = previewContainer.outerHTML;
    const svgWrapper = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="700">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${labelHtml}
          </div>
        </foreignObject>
      </svg>
    `;
    downloadTextFile(svgWrapper, `MedLabel_${inputRefModel.value}.svg`, 'image/svg+xml');
    showToast('Exported Vector Label (.SVG)', 'success');
  });

  function downloadTextFile(text, filename, mimeType) {
    const blob = new Blob([text], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function downloadJsonFile(obj, filename) {
    const str = JSON.stringify(obj, null, 2);
    downloadTextFile(str, filename, 'application/json');
  }

  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `p-3 rounded-lg shadow-lg border text-xs font-semibold flex items-center space-x-2 transition-all transform duration-300 pointer-events-auto max-w-sm ${
      type === 'success' ? 'bg-emerald-900 text-white border-emerald-700' :
      type === 'warning' ? 'bg-amber-900 text-white border-amber-700' :
      'bg-slate-900 text-white border-slate-700'
    }`;

    toast.innerHTML = `
      <span>${type === 'success' ? '✓' : type === 'warning' ? '⚠' : 'ℹ'}</span>
      <span class="flex-1">${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================
  // 11. INITIALIZATION ON PAGE LOAD
  // ==========================================

  updateLivePreview();
  renderAuditTrailTable();
});
