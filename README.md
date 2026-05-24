# Muteremuko VTC — Official Website

> **"Technical Skill is Power"**
> Official website for Muteremuko Vocational Training Centre, a County Government of Bungoma institution under the Department of Education & Vocational Training.

---

## About the Institution

Muteremuko Vocational Training Centre (MVTC) is located in **Khalaba Ward, Muteremuko area, Bungoma Town**, Kenya. The centre offers government-subsidised, NITA-certified vocational training across 8 programmes — equipping learners with practical, industry-relevant skills for employment and self-reliance.

- **Location:** Khalaba Ward, Muteremuko Slaughterhouse Area, Bungoma Town
- **P.O Box:** 2477-50200, Bungoma
- **Phone:** 0703 966 177
- **Email:** muteremukovtc@gmail.com
- **Governing Body:** County Government of Bungoma

---

## About the Project

This is a static multi-page website built with plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, no dependencies. It is designed to be lightweight, fast, and easily deployable on any static hosting platform.

### Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, courses overview, departments preview, fee snapshot, admissions CTA |
| `courses.html` | Full detail on all 8 NITA-certified programmes |
| `departments.html` | Overview of the 4 academic departments |
| `admissions.html` | Online application form and enquiry form (via Formspree) |
| `fees.html` | Full fee structure, NITA exam fees, and payment details |
| `style.css` | All site styles — responsive, mobile-first |
| `main.js` | All site JavaScript — navbar, scroll reveal, counters, back-to-top |
| `logo.jpeg` | Official MVTC crest/logo |

---

## Courses Offered

All programmes run **3 months to 1½ years** and are aligned with **NITA Government Trade Test (GTT) certification levels I, II, and III**.

| # | Course | Department | Duration |
|---|---|---|---|
| 1 | 🔧 Motor Vehicle Mechanics | Engineering & Technology | Up to 1½ years |
| 2 | 🧱 Masonry | Building & Construction | Up to 1½ years |
| 3 | ✂️ Hairdressing & Beauty Therapy | Beauty & Fashion | Up to 1½ years |
| 4 | 🚿 Plumbing & Pipe Fitting | Engineering & Technology | Up to 1½ years |
| 5 | ⚡ Electrical Installation | Engineering & Technology | Up to 1½ years |
| 6 | 🪡 Dress Making | Beauty & Fashion | Up to 1½ years |
| 7 | 💻 Computer Studies (ICT) | ICT & Computer Studies | 3 months – 1½ years |
| 8 | 🔩 Welding & Fabrication | Engineering & Technology | Up to 1½ years |

> Computer Packages (6 modules) is also available as a standalone 3-month short course at **Ksh 3,000**.

---

## Departments

### ⚙️ Engineering & Technology
Motor Vehicle Mechanics, Electrical Installation, Welding & Fabrication, Plumbing & Pipe Fitting. Workshop-based training with mandatory industrial attachment at GTT III.

### 🏗️ Building & Construction
Masonry — hands-on construction projects in a fully equipped masonry yard. Graduates work in construction companies, government agencies, or self-employment.

### 💇 Beauty & Fashion
Hairdressing & Beauty Therapy and Dress Making. Features a functional training salon and sewing lab. School uniforms are made in-house by Dress Making students.

### 🖥️ ICT & Computer Studies
Computer Studies (NITA) and Computer Packages short course. Fully equipped computer lab with current software.

---

## Fee Structure

### Annual Fees (Per Term Breakdown)

| Particulars | Term I (Ksh) | Term II (Ksh) | Term III (Ksh) | Annual Total |
|---|---|---|---|---|
| Admission Fee | 500 | — | — | 500 |
| Personal Emolument | 2,500 | 2,500 | 2,500 | 7,500 |
| Tuition | 2,000 | 2,000 | 2,000 | 6,000 |
| RMI | 1,000 | 1,000 | 1,000 | 3,000 |
| E.W & C | 1,000 | 1,000 | 1,000 | 3,000 |
| L.T & T | 500 | 500 | 500 | 1,500 |
| Co-Curricular | 500 | 500 | 500 | 1,500 |
| **GRAND TOTAL** | **Ksh 8,000** | **Ksh 7,500** | **Ksh 7,500** | **Ksh 23,000** |

### NITA Exam Registration Fees

| Level | Exam Fee | Centre Fee | Industrial Attachment | Total |
|---|---|---|---|---|
| GTT III (Entry) | 5,000 | 3,000 | 2,000 | **Ksh 10,000** |
| GTT II (Intermediate) | 6,000 | 4,000 | 2,000 | **Ksh 12,000** |
| GTT I (Advanced) | 7,000 | 4,000 | 2,000 | **Ksh 13,000** |

### Payment Details

- **Bank:** KCB Bank Kenya
- **Account Name:** Muteremuko Vocational Training Centre
- **M-PESA Paybill:** 522522
- **Account Number:** 1238473288

---

## Admissions

Admissions are open every term (January, May, September). The admissions page includes:
- Online application form (personal details, next of kin, course selection)
- Enquiry form for prospective students
- Forms are submitted via [Formspree](https://formspree.io)

### What to Bring on Reporting Day

- 5 files, 2 coloured passport photos
- Copy of National ID or Birth Certificate (+ result slip where applicable)
- 1 ream photocopying paper + 1 ream ruled paper (per year)
- 1 black book, 5 A4 books (200 pages), 1 A3 drawing book
- Uniform: black skirt (girls) / black trousers (boys) + white branded blouse/shirt (Ksh 1,500, made at MVTC)

---

## JavaScript Features (`main.js`)

| Function | Description |
|---|---|
| `updateYear()` | Auto-updates copyright year, academic year, and years-since-established |
| `initNavbar()` | Mobile hamburger toggle, outside-click close, active link highlighting |
| `initScrollReveal()` | IntersectionObserver-based scroll reveal with staggered children |
| `initBackToTop()` | Shows/hides back-to-top button, smooth scroll on click |
| `initNavbarScroll()` | Adds deeper shadow to navbar on scroll |
| `animateCounter()` | Counts up to a target number over a set duration |
| `initCounters()` | Triggers `animateCounter` when stat elements enter the viewport |
| `initCardEffects()` | Smooth hover transitions on course and department cards |

---

## Running Locally

No build step required. Just open any HTML file directly in a browser, or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deployment

This site can be deployed to any static hosting platform:

- **GitHub Pages** — push to a `gh-pages` branch or configure from repository settings
- **Netlify** — drag and drop the project folder or connect the GitHub repo
- **Vercel** — import the repository and deploy with zero configuration

No environment variables, build commands, or server-side logic required.

---

## Contact

| Channel | Details |
|---|---|
| Phone / WhatsApp | [0703 966 177](https://wa.me/2540703966177) |
| Email | [muteremukovtc@gmail.com](mailto:muteremukovtc@gmail.com) |
| Location | Khalaba Ward, Muteremuko, Bungoma Town |
| Maps | [View on Google Maps](https://www.google.com/maps/search/?api=1&query=Muteremuko+VTC+Bungoma) |

---

*© Muteremuko VTC — County Government of Bungoma. All rights reserved.*
