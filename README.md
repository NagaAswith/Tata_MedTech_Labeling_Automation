# MedLabel.ai — Medical Device Labeling Automation & Compliance Management Platform

[![Tata Elxsi TELIPORT](https://img.shields.io/badge/Tata%20Elxsi-TELIPORT%20Season%204-0F766E?style=for-the-badge)](https://www.tataelxsi.com)
[![Case Study](https://img.shields.io/badge/Case%20Study-4%3A%20Labeling%20Automation-teal?style=for-the-badge)](.)
[![Regulatory Compliance](https://img.shields.io/badge/Compliance-FDA%2021%20CFR%20%7C%20EU%20MDR%20%7C%20CDSCO%20India%20%7C%20ISO%2015223--1-059669?style=for-the-badge)](.)
[![Team](https://img.shields.io/badge/Team-Creative%20Mind-4338CA?style=for-the-badge)](.)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Tata__MedTech__Labeling__Automation-1E293B?style=for-the-badge&logo=github)](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Production-black?style=for-the-badge&logo=vercel)](https://tata-medtech-labeling-automation.vercel.app)

---

## 📌 Executive Summary & Case Study Overview

### Tata Elxsi TELIPORT Season 4 · Case Study 4
Medical device labeling errors represent over **40% of all global medical device recalls and FDA Form 483 warning letters**. The transition from legacy regional labeling to strict global standards—specifically **US FDA 21 CFR Part 801/830 (UDI)**, **EU MDR 2017/745 (GSPR 23)**, **CDSCO India Medical Device Rules 2017**, and **ISO 15223-1:2021**—demands zero-defect accuracy, automated traceability, multi-market language localization, and immutable **FDA 21 CFR Part 11** electronic records.

**MedLabel.ai** is an enterprise-grade, high-performance static medical device labeling automation and regulatory compliance platform engineered specifically for **Tata Elxsi TELIPORT Season 4 (Case Study 4)** by **Team Creative Mind**.

---

## 👥 Team & Institution Information

| Attribute | Details |
| :--- | :--- |
| **Team Name** | **Creative Mind** |
| **Institution** | **Vignan's Lara** |
| **Team Leader & Lead Architect** | **Aswith** |
| **Track / Event** | Tata Elxsi TELIPORT Season 4 — Case Study 4 |
| **Target Repository** | [`Tata_MedTech_Labeling_Automation`](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation) |
| **Live Vercel Production URL** | [`https://tata-medtech-labeling-automation.vercel.app`](https://tata-medtech-labeling-automation.vercel.app) |
| **Architecture** | 100% Static High-Performance Jamstack (Zero Serverless Cold Starts) |

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

## 🏗️ System Architecture & Static Deployment

```
+----------------------------------------------------------------------------+
|                          Vercel Global Edge CDN                            |
|                 https://tata-medtech-labeling-automation.vercel.app        |
+-------------------------------------+--------------------------------------+
                                      |
                   +------------------+------------------+
                   |                                     |
                   v                                     v
+-------------------------------------+ +------------------------------------+
|             Static Core             | |        Client-Side Engines         |
|  - index.html (WYSIWYG Studio)      | |  - Real-time SVG Barcode Gen       |
|  - styles.css (Clinical tokens)     | |  - Canvas DataMatrix ECC200        |
|  - app.js (Regulatory logic)        | |  - 3-Dots Multi-Language Engine    |
|  - vercel.json (Static routes)      | |  - SHA-256 Part 11 Audit Ledger    |
+-------------------------------------+ +------------------------------------+
```

### Static Configuration (`vercel.json`)
```json
{
  "version": 2,
  "builds": [ { "src": "index.html", "use": "@vercel/static" } ],
  "routes": [ { "src": "/(.*)", "dest": "/index.html" } ]
}
```

---

## 📂 Project Directory Structure

```
Tata_Medical_website/
├── index.html          # Main single-page application dashboard UI
├── styles.css          # Design system, medical label styling, and print stylesheets
├── app.js              # Reactive UI controllers, GS1 barcode generator, 3-dots language switcher
├── vercel.json         # Vercel static build & routing configuration
├── .gitignore          # Clean repository hygiene
└── README.md           # Professional project documentation for Tata Elxsi jury
```

---

## ⚡ Quick Start & Verification

### Option 1: Live Cloud Production URL
Access the live prototype deployed on Vercel at:  
👉 **[https://tata-medtech-labeling-automation.vercel.app](https://tata-medtech-labeling-automation.vercel.app)**

### Option 2: Local Static Launch
Simply open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari). Zero build tools, dependencies, or server installations are required.

---

## 🏆 Presentation Attribution

- **Competition**: Tata Elxsi TELIPORT Season 4
- **Case Study**: Case Study 4 — Medical Device Labeling Automation & Compliance Management
- **Team**: Creative Mind
- **College / Institute**: Vignan's Lara
- **Team Leader & Principal Author**: Aswith
- **GitHub Repository**: [Tata_MedTech_Labeling_Automation](https://github.com/NagaAswith/Tata_MedTech_Labeling_Automation)
