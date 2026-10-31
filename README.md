# MedLabel.ai — Medical Device Labeling Automation & Compliance Management Platform

[![Tata Elxsi TELIPORT](https://img.shields.io/badge/Tata%20Elxsi-TELIPORT%20Season%204-0F766E?style=for-the-badge)](https://www.tataelxsi.com)
[![Case Study](https://img.shields.io/badge/Case%20Study-4%3A%20Labeling%20Automation-teal?style=for-the-badge)](.)
[![Regulatory Compliance](https://img.shields.io/badge/Compliance-FDA%2021%20CFR%20%7C%20EU%20MDR%20%7C%20CDSCO%20India%20%7C%20ISO%2015223--1-059669?style=for-the-badge)](.)
[![Team](https://img.shields.io/badge/Team-Creative%20Mind-4338CA?style=for-the-badge)](.)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Tata__MedTech__Labeling__Automation-1E293B?style=for-the-badge&logo=github)](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation)

---

## 📌 Executive Summary & Case Study Overview

### Tata Elxsi TELIPORT Season 4 · Case Study 4
Medical device labeling errors represent over **40% of all global medical device recalls and FDA Form 483 warning letters**. The transition from legacy regional labeling to strict global standards—specifically **US FDA 21 CFR Part 801/830 (UDI)**, **EU MDR 2017/745 (GSPR 23)**, **CDSCO India Medical Device Rules 2017**, and **ISO 15223-1:2021**—demands zero-defect accuracy, automated traceability, multi-market language localization, and immutable **FDA 21 CFR Part 11** electronic records.

**MedLabel.ai** is an enterprise-grade, end-to-end medical device labeling automation and regulatory compliance platform engineered specifically for **Tata Elxsi TELIPORT Season 4 (Case Study 4)** by **Team Creative Mind**.

---

## 👥 Team & Institution Information

| Attribute | Details |
| :--- | :--- |
| **Team Name** | **Creative Mind** |
| **Institution** | **Vignan's Lara Institute of Technology and Science** |
| **Team Leader & Lead Architect** | **Naga Aswith** |
| **Track / Event** | Tata Elxsi TELIPORT Season 4 — Case Study 4 |
| **Target Repository** | [`Tata_MedTech_Labeling_Automation`](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation) |
| **Version** | `v1.4.2-prod` (Enterprise Prototype) |

---

## 🚀 Key Platform Features

### 1. Interactive Live Label Generator & WYSIWYG Editor
- **Split-Screen Studio**: Real-time reactivity between regulatory data input and physical packaging rendering.
- **Physical Label Simulator**: 300 DPI high-contrast medical packaging label adhering to standard 4"x6" outer carton and 4"x2" sterile barrier pouch formats.
- **Mobile-First Responsive Layout**: Smooth viewport scaling across desktop, tablet, and mobile browsers with accessible touch targets.
- **GS1 Healthcare Barcode Engine**:
  - **1D GS1-128 Linear Barcode** with synchronized Human-Readable Interpretation (HRI) string: `(01)GTIN(17)EXP(10)LOT(21)SN`.
  - **2D GS1 DataMatrix ECC200** simulated matrix code with authentic L-finder patterns and clock tracks.
  - Modulo-10 checksum validation on 14-digit Global Trade Item Numbers (GTIN-14).
- **ISO 15223-1:2021 Graphic Symbol Harmonization**:
  - Interactive toggles for `STERILE EO`, `Do Not Re-Use (②)`, `Keep Dry (☂)`, `Temperature Limits (5°C–25°C)`, `Consult eIFU [📖 i]`, `Latex-Free`, `Rx Only`, `Medical Device [MD]`, and `CE Mark (0123)`.

### 2. Instant AI Compliance Auditor
- **Single-Click Regulatory Scan**: Executes heuristic compliance verification across 5 major regulatory rules within 1.2 seconds:
  1. **FDA 21 CFR Part 801 / 830 & CDSCO**: UDI Device Identifier syntax & GTIN-14 checksum.
  2. **ISO 15223-1:2021**: Graphical symbol standardization and aspect ratios.
  3. **EU MDR 2017/745 GSPR 23**: European Authorized Representative (`[EC | REP]`) & Notified Body verification.
  4. **Shelf-Life & Chronology**: Validates that expiry dates chronologically succeed manufacturing dates by the mandated stability window.
  5. **Safety Warning Linguistic Quality**: Analyzes liability statements and cautionary wording across all 6 supported markets.
- **Structured Audit Report**: Generates compliance scoring (Grade A+ / 98%+), rule-by-rule status badges, and one-click automated remediation.
- **Formal Audit Certificate Export**: Downloads machine-readable JSON certificates cryptographically tied to the label payload.

### 3. Multi-Market Global Localization via 3-Dots Dropdown Menu
- **Sleek 3-Dots Action Menu**: Quick-access ellipsis (`•••`) menu in top navigation to switch active target market instantaneously:
  - 🇺🇸 **English** (FDA 21 CFR Part 801 Standard)
  - 🇮🇳 **हिन्दी (Hindi)** (CDSCO National Medical Device Compliance)
  - 🇮🇳 **తెలుగు (Telugu)** (Regional AP/TS Healthcare Distribution)
  - 🇩🇪 **Deutsch** (BfArM / EU MDR GSPR 23)
  - 🇫🇷 **Français** (ANSM / EU MDR Article 10)
  - 🇪🇸 **Español** (AEMPS / LATAM Distribution)
- **Harmonized Terminology Validation**: Side-by-side verification table demonstrating compliance with national and international health regulations.

### 4. Secure FDA 21 CFR Part 11 Audit Trail Logs
- **Computer-Generated Audit Ledger**: Adheres to Title 21 CFR §11.10(e) controls for closed systems.
- **Cryptographic Event Integrity**: Every template creation, scan, modification, and approval generates a tamper-evident **SHA-256 hash**.
- **Electronic Signatures (§11.50 & §11.70)**: Interactive digital sign-off modal requiring operator identity, regulatory role, reason for signature, and authentication PIN.
- **Data Export**: Immediate export to CSV for regulatory inspectors and external quality audits.

### 5. Production Print Stylesheet
- Standard CSS `@media print` eliminates all dashboard navigation, chrome, and controls, outputting pure 300 DPI thermal or laser medical adhesive labels suitable for validation runs.

---

## 🏗️ System Architecture & Tech Stack

```
                                +--------------------------------------------+
                                |               MedLabel.ai UI               |
                                |     (Tailwind CSS, HTML5, Vanilla JS)      |
                                +---------------------+----------------------+
                                                      |
                         +----------------------------+----------------------------+
                         |                                                         |
                         v                                                         v
         +-------------------------------+                         +-------------------------------+
         |       Client-Side Engine      |                         |      FastAPI Backend Core     |
         |  - Real-time SVG Barcode Gen  |                         |         (server.py)           |
         |  - Canvas DataMatrix ECC200   |                         |  - RESTful API Endpoints      |
         |  - 3-Dots Multi-Language Menu |                         |  - Pydantic Schema Validation |
         |  - Reactive ISO Symbol State  |                         |  - SHA-256 Cryptographic Hash |
         |  - Mobile Viewport Scaling    |                         |  - Multi-lingual Dictionaries |
         +-------------------------------+                         +---------------+---------------+
                                                                                   |
                                                                                   v
                                                                   +-------------------------------+
                                                                   |      Regulatory Standards     |
                                                                   |  - FDA 21 CFR Part 801/830    |
                                                                   |  - EU MDR 2017/745 GSPR 23    |
                                                                   |  - CDSCO Medical Device Rules |
                                                                   |  - ISO 15223-1:2021           |
                                                                   |  - FDA 21 CFR Part 11         |
                                                                   +-------------------------------+
```

### Technologies Used:
- **Frontend**: HTML5, Modern CSS / Tailwind CSS, Vanilla JavaScript (ES6+), Canvas API, SVG vector engine.
- **Backend**: Python 3.10+, FastAPI, Uvicorn, Pydantic, Python Standard Library (`hashlib`, `json`, `datetime`).
- **Aesthetic**: Warm enterprise MedTech design system (Soft off-white `#F8FAFC`, Clinical Teal `#0F766E`, Deep Slate `#1E293B`, Subtle borders `#E2E8F0`).

---

## 📂 Project Directory Structure

```
Tata_Medical_website/
├── index.html          # Main single-page application dashboard UI
├── styles.css          # Design system, medical label styling, and print stylesheets
├── app.js              # Reactive UI controllers, GS1 barcode generator, 3-dots language switcher
├── server.py           # FastAPI backend server with REST endpoints & Part 11 audit storage
├── requirements.txt    # Python backend dependencies (FastAPI, Uvicorn, Pydantic)
└── README.md           # Professional project documentation for Tata Elxsi jury
```

---

## ⚡ Quick Start & Installation

### Option 1: Zero-Install Standalone Frontend (Instant Demo)
Because MedLabel.ai is engineered with zero runtime build dependencies:
1. Double-click `index.html` in your file explorer, OR
2. Drag and drop `index.html` into Google Chrome, Microsoft Edge, or Mozilla Firefox.
3. All interactive features—live label generation, barcode synthesis, AI regulatory scans, 3-dots localization, and audit trail signing—operate client-side immediately!

---

### Option 2: Running with Python FastAPI Backend

#### Step 1: Open Terminal in Project Directory
```powershell
cd d:\K\Tata_Medical_website
```

#### Step 2: Install Python Dependencies
```powershell
pip install -r requirements.txt
```

#### Step 3: Start the FastAPI Server
```powershell
python server.py
```

#### Step 4: Access Application & Interactive Docs
- **Dashboard UI**: [http://localhost:8000](http://localhost:8000)
- **FastAPI Interactive Swagger Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **API Health Check**: [http://localhost:8000/api/health](http://localhost:8000/api/health)

*(Note: If FastAPI is not yet installed in your Python environment, running `python server.py` will automatically and gracefully start Python's built-in HTTP server on port 8000 so the UI remains immediately accessible!)*

---

## 🧪 Verification & Acceptance Test Scenarios

| Test Case | Steps to Test | Expected Result |
| :--- | :--- | :--- |
| **TC-01: Live Reactive Editing** | Modify "Device Commercial Name" to "CardioFlow X" | Live preview header updates instantaneously. |
| **TC-02: GS1 UDI Checksum** | Click "Verify Checksum" button | Calculates check digit via modulo 10 and updates UDI HRI text & SVG stripes. |
| **TC-03: ISO Symbol Toggles** | Uncheck `STERILE EO` or `Keep Dry` | The corresponding ISO standardized symbol box in the preview toggles off in real time. |
| **TC-04: AI Regulatory Scan** | Click "Run AI Regulatory Scan" | Progress beam animates across 5 rules, followed by a detailed compliance audit report card with score and status badges. |
| **TC-05: 3-Dots Language Switch** | Click 3-dots icon (`•••`), select `हिन्दी` or `తెలుగు` | Warning text and device description update immediately to Indian regulatory phrasing; checkmark updates; audit log records the switch. |
| **TC-06: 21 CFR Part 11 Sign-off** | Click "Sign", enter password, and submit | Adds a new cryptographically hashed (SHA-256) signature entry to the live audit table. |
| **TC-07: Print Simulation** | Click "Print" | Browser print preview renders only the physical label at 300 DPI without navigation chrome. |

---

## 📜 Regulatory Reference Compliance Matrix

- **US FDA 21 CFR § 801.20**: Unique device identifier requirements on label.
- **US FDA 21 CFR § 801.109**: Prescription-device requirements ("Rx Only").
- **US FDA 21 CFR § 11.10**: Controls for closed electronic systems and time-stamped audit trails.
- **US FDA 21 CFR § 11.50**: Electronic signature manifest requirements.
- **CDSCO Medical Device Rules 2017**: Standards for medical device packaging, language requirements, and UDI implementation in India.
- **EU MDR 2017/745 Annex I, Chapter III (GSPR 23)**: Information supplied by the manufacturer with the device.
- **ISO 15223-1:2021**: Medical devices — Symbols to be used with information to be supplied by the manufacturer.
- **GS1 Healthcare General Specifications**: Application Identifiers `(01)` GTIN, `(17)` Expiration Date, `(10)` Lot Number, `(21)` Serial Number.

---

## 🏆 Presentation Attribution

- **Competition**: Tata Elxsi TELIPORT Season 4
- **Case Study**: Case Study 4 — Medical Device Labeling Automation & Compliance Management
- **Team**: Creative Mind
- **College / Institute**: Vignan's Lara Institute of Technology and Science
- **Team Leader & Principal Author**: Naga Aswith
- **GitHub Target**: [Tata_MedTech_Labeling_Automation](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation)
