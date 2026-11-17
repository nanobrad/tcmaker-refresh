# Twin Cities Maker (`tcmaker.org`) — Brand Refresh, UX & SEO Audit Report

**Prepared for:** Twin Cities Maker  
**Site Audited:** [https://tcmaker.org](https://tcmaker.org)  
**Reference Assets Reviewed:** [Brand Guide 2023.png](file:///home/bradf/tcm/tcmaker.org/Brand%20Guide%202023.png), [community garden project.jpg](file:///home/bradf/tcm/tcmaker.org/community%20garden%20project.jpg), [TCM Lounge 4.JPG](file:///home/bradf/tcm/tcmaker.org/TCM%20Lounge%204.JPG)  
**Date:** November 16, 2026

---

## Executive Summary

Twin Cities Maker already has the substance of an inclusive, welcoming community: 24/7 shared studios spanning fiber arts, stained glass, ceramics, screen printing, electronics, wood, and metal; a **Member-Supported** financial-need membership tier; a **+$25/mo "+1" partner membership**; pronoun-inclusive leadership listings; and vibrant collaborative builds like your community garden project and sunlit yarn-wall lounge.

**The problem is that `tcmaker.org` hides almost all of this.** First-time visitors and search engines encounter a dark, 2016-era WordPress theme (`Lodestar`) mixed with `Elementor`, cluttered 16-item navigation, zero people in the homepage photography, no `<h1>` tag on the homepage, WCAG color contrast failures inside the 2023 Brand Guide, and stale or contradictory pages left over from 2021–2025.

You do **not** need a total rebrand. Your **hexagon-caliper TCM mark**, **name**, and **Teal + Terracotta/Orange** DNA are strong anchors. What you need is an **aesthetic and structural shift from "dark industrial garage" to "sunlit community studio"**—brightening the canvas, centering diverse makers and non-traditional crafts alongside heavy machinery, simplifying WordPress editing onto a single modern Block Theme, and fixing foundational local SEO gaps.

---

## 1. Current Issues Breakdown

### A. Visual & Cultural First Impressions ("Too Masculine & Uninviting")
1. **Homepage Hero Imagery (`cropped-IMG_5588-downsized.jpg`):**
   - The current hero background shows an empty fluorescent-lit shop floor with a plastic trash bin near center frame, a blurry dust-collector hose obscuring the top-left third of the shot, and a single distant person turned away from the camera.
   - To a newcomer—especially women, BIPOC, and LGBTQ+ makers checking whether they belong—this reads as an uncurated industrial warehouse rather than a welcoming third place.
2. **Homepage Body Imagery (`clamped-fingerboard-1.jpeg`):**
   - The only content photo on the homepage (`alt=""`) is a moody, desaturated sepia close-up of wooden clamps and glue bottles with barcode stickers. There are **zero faces, zero community interactions, and zero visibility** of the Artifactory, Soft Room (sewing/leather), ceramics, stained glass, jewelry, or lounge spaces.
3. **Brand Guide Gaps ([Brand Guide 2023.png](file:///home/bradf/tcm/tcmaker.org/Brand%20Guide%202023.png)):**
   - Still carries an unedited slide template title: **"Google Ecosystem Brand Guide."**
   - **Typography skews narrow/utilitarian:** Pairing condensed `Pathway Gothic One` (tall, heavy, hardware-store poster feel) with default `Helvetica` and dark slate `#39545c` + rust `#A03B16` creates an austere, rugged tone.
   - **Verified WCAG Contrast Failures in the Brand Guide itself:**
     - `#39545c` (Slate) on `#018877` (Teal) = **1.84:1** (Fails WCAG AA)
     - `#DF6C27` (Orange) on `#018877` (Teal) = **1.32:1** (Fails WCAG AA)
     - `#C5D433` (Lime) on `#018877` (Teal) = **2.68:1** (Fails WCAG AA)
     - `#DF6C27` (Orange) on `#E9EDEF` (Light Gray) = **2.82:1** (Fails WCAG AA)
     - `#FFFFFF` (White) on `#018877` (Teal) = **4.38:1** (Passes large text `3:1`, **fails** normal body text `4.5:1`)
     - `#FFFFFF` (White) on `#DF6C27` (Orange) = **3.33:1** (Large text only)

### B. WordPress Architecture & Editing Friction
Inspecting the live HTML and WordPress REST API reveals why volunteers struggle to keep the site current:
- **Conflicting Page Builders:** The site runs Automattic's legacy classic theme **`Lodestar`** (`wptheme_is_block: 0`, ~2016 era) **plus Elementor 4.4.0**, **plus Gutenberg blocks**, **plus Jetpack**. Volunteers editing a page have to guess whether content lives in Theme Customizer panels, Classic/Block Editor, or Elementor.
- **Script & Asset Bloat:**
  - The homepage loads **28 `<script>` tags** (11 external scripts), including legacy `jquery.min.js` + `jquery-migrate.min.js` and **two versions of Mightycause's embed script simultaneously** (`embed.min.js` and `embed.js`).
  - Unoptimized photography risk: Raw camera uploads like `TCM Lounge 4.JPG` (`6000×4000`, `6.5 MB`) will severely degrade mobile Largest Contentful Paint (LCP) unless resized and converted to WebP/AVIF.
- **Outdated, Duplicate & Embarrassing Artifacts Still Live (45 published WP pages):**
  - **Footer copyright:** Still reads `Copyright © 2009–2025 Twin Cities Maker`.
  - **Test/junk pages indexed:** `/home/` is a live published page literally titled **"Not the Home"** (last modified `2022-12-28`); `/member-resources/wordpress-admin/` (`2022-07-03`) is also a public page.
  - **Pandemic-era pages still active:** `/covid-safety/` (`Covid Safety (Updated 03/08/2021)`) and `/reserve-tool-time/` (`2022-12-22`).
  - **URL typos & copy errors:** `/registation-and-waiver/` (missing `r` in *registration*); `/membership/` repeats the sentence *"Once you’ve registered, you can tour the workshop during our Open House and meet other community members."* **twice consecutively**; `/membership/how-to-join/` contains typos (*"fee fee charged"*, *"your person sh..."*).
  - **Conflicting fundraising numbers:** `/donating/` states *"We will need about $850,000... We currently have over $250,000"*, while `/help-us-buy-a-building/` states *"We need your help to raise $1.25 million"*.
  - **Navigation overload & mixed security:** The header/menu exposes **16 links** (`Home`, `Help us buy a building!`, `About`, `Our Workshop`, `Become a Member`, `Contact`, `Calendar`, `Classes`, `Donate`, `Donate Online`, `Sponsors`, `Member Resources`, `Member Login`, `Wiki`, `Report an Incident`, `Twin Cities Maker Fest`), including duplicate donation links (`Donate` + `Donate Online`) and **unencrypted `http://` links** to `http://wa.tcmaker.org` and `http://wiki.tcmaker.org`.

### C. Tone & Inclusivity Disconnect
- **Gatekeeping-first FAQ:** `/membership/membership-faq/` opens with bold, blunt text: *"I Have A Project And I need to Access to the Shop Right away! Can I join Today? TLDR NO Twin Cities Maker is not a rental workshop."* Setting boundaries is healthy, but opening with **"TLDR NO"** pushes away curious beginners before explaining how welcoming Wednesday Open Houses are.
- **Best inclusivity policies are buried:** Your strongest inclusive differentiators—**Member-Supported** sliding-scale dues for financial need, **+$25/mo "+1" membership** so couples/friends/partners can build together, and **Artifactory / Soft Room** crafts (sewing, leather, stained glass, jewelry, screen printing, ceramics)—are buried several clicks deep instead of celebrated on the homepage.

---

## 2. What the Evolved "Brand Refresh" Looks Like

Keep what builds trust and equity (**"Twin Cities Maker"** name, **hexagon-caliper TCM emblem**, **Teal + Warm Terracotta** heritage), and evolve the **surface palette, typography, photography, and copy** to match your actual community as shown in [community garden project.jpg](file:///home/bradf/tcm/tcmaker.org/community%20garden%20project.jpg) and [TCM Lounge 4.JPG](file:///home/bradf/tcm/tcmaker.org/TCM%20Lounge%204.JPG).

### A. Color Palette Evolution (WCAG AA/AAA Verified)
Move off cold `#E9EDEF` gray and heavy `#39545c` / `#000000` darkness onto a **warm daylight canvas** inspired by natural wood, sunlit studio walls, and vibrant maker materials:

| Role | Old Token (2023 Guide) | Evolved Token | Contrast / Usage Notes |
| :--- | :--- | :--- | :--- |
| **Page Canvas** | `#E9EDEF` / `#FFFFFF` | **`#FAF8F5`** (Warm Studio Paper) | Inviting, daylight feel; pairs with natural wood & photography |
| **Card Surface** | `#FFFFFF` | **`#FFFFFF`** + **`#EDF7F5`** (Soft Mint Tint) | Clean hierarchy without harsh dark boxes |
| **Primary Ink** | `#39545c` / `#000000` | **`#183135`** (Deep Pine-Slate) | **12.95:1 (AAA)** on `#FAF8F5`; warmer than pure black |
| **Primary Teal (Text & Buttons)** | `#018877` | **`#016E61`** (Deep Studio Teal) | **6.17:1 (AA)** with white text (fixes old `#018877` 4.38:1 fail) |
| **Heritage Brand Teal (Accents)** | `#018877` | **`#018877`** (Badges/Icons/Borders) | Preserves continuity with your existing logo & swag |
| **Warm Terracotta (Secondary CTA)** | `#DF6C27` / `#A03B16` | **`#B84514`** (Accessible Terracotta) | **5.39:1 (AA)** with white text; echoes garden sweater & logomark |
| **Sunlit Lounge Amber (Highlight)** | `#C5D433` (Lime) | **`#F3B73F`** (Lounge Ochre) | Pulled straight from `TCM Lounge 4.JPG` wall; **7.62:1 (AAA)** with `#183135` ink |
| **Dark Mode Support** | None | **`#122023`** bg / **`#4FD1BE`** teal / **`#FF9868`** coral | Respects `@media (prefers-color-scheme: dark)` at **8.9:1–15.2:1 (AAA)** |

### B. Typography Shift
- **Retire `Pathway Gothic One` for web headings** (keep it only in legacy print/logo lockups if desired) and replace generic `Helvetica` with a warm, geometric humanist pairing:
  - **Headings (`h1`–`h3`):** **`Plus Jakarta Sans`** (or `Outfit`) — rounded geometry, open apertures, friendly, contemporary, gender-neutral.
  - **Body (`p`, `li`):** **`Inter`** or **`Source Sans 3`** (with `Atkinson Hyperlegible` optional for max legibility) — crisp at small sizes, clean numerals for hours/dues.

### C. Photography & Representation Standards
- **Lead with people & bright spaces:** Put [community garden project.jpg](file:///home/bradf/tcm/tcmaker.org/community%20garden%20project.jpg) above the fold—diverse makers smiling in natural daylight with women centered in the build—and pair it with [TCM Lounge 4.JPG](file:///home/bradf/tcm/tcmaker.org/TCM%20Lounge%204.JPG) to immediately signal fiber arts, yarn, lounge community, and sustainable filament recycling.
- **Show the full spectrum of making:** Balance wood/metal/CNC with textiles/sewing, ceramics, stained glass, jewelry, electronics, and social nights.
- **No empty shop shots with trash cans or blurry hoses** as hero banners.

---

## 3. SEO Strategy: How to Rank Higher for "Twin Cities Maker" & Local Searches

### Current Technical SEO Blockers Observed on `tcmaker.org`
1. **Missing `<h1>` on Homepage:** The homepage currently has **zero `<h1>` elements** (`Twin Cities Maker` is a `<p class="site-title">` and the section heading is an `<h2>`). Search engines rely on a single descriptive `<h1>` to anchor the page's primary topic.
2. **Weak `<meta>` & Social/OG Tags:**
   - Homepage `og:description` is just `"Find Your Creativity"` (3 words—zero geographic or topical context).
   - `og:image` is `logo-NewPalette-text.png` (`2013×334` thin banner) with `og:image:alt=""` instead of a compelling `1200×630` community photo.
   - Both homepage `<img>` tags have empty `alt=""` attributes.
3. **Uncrawlable Calendar & Classes:** `/calendar/` contains **no visible HTML text**—only an untitled `<iframe src="https://wa.tcmaker.org/widget/Calendar">`. Google cannot reliably index Wild Apricot calendar widgets for high-intent queries like *"welding classes Minneapolis"* or *"Twin Cities Maker open house"*.
4. **Incomplete Structured Data (`JSON-LD`):** Currently emits only bare `Organization` + `WebSite` with `"description": "Find Your Creativity"`. Missing `LocalBusiness` / `CivicStructure`, street address (`3119 E. 26th Street, Minneapolis, MN 55406`), neighborhood (`Seward`), Wednesday Open House hours, `sameAs` social profiles, and `Event` markup.
5. **URL Cannibalization & Index Bloat:** Duplicate/stale pages (`/home/`, `/donating/` vs `/donate-online/`, `/membership/` vs `/how-to-join/` vs `/signup/`, `/sponsors/` vs `/donors-and-partners/`, `/member-resources/wordpress-admin/`) split link equity and confuse crawlers.

### How to Win Search Results for "Twin Cities Maker" & Non-Branded Local Queries
1. **Own the Branded SERP ("Twin Cities Maker" / "TC Maker"):**
   - Put `"Twin Cities Maker — Community Makerspace & Shared Workshop in Minneapolis"` in the homepage `<title>` and `<h1>` (or primary brand heading + hero `<h1>`), and align your meta description around *Twin Cities Maker (TC Maker)*, *3119 E. 26th St, Seward, Minneapolis*, *24/7 member workshop*, and *Wednesday Open Houses*.
   - Link `sameAs` in `LocalBusiness` JSON-LD to Facebook, Discord, Instagram, YouTube, Meetup/Eventbrite (if used), and your Google Business Profile.
   - Consolidate duplicate URLs with `301` redirects so all internal/external links point to one canonical page per intent.
2. **Capture High-Intent Local Craft & Class Queries:**
   - Publish crawlable HTML pages/listings for recurring public classes (*Intro to Welding Minneapolis*, *Woodshop Safety Orientation*, *Stained Glass & Jewelry*, *Laser Cutter Basics*, *Fiber Arts & Sewing*) using `Event` schema—don't trap schedules inside an `<iframe>`.
   - Enrich each `/workshop/*` page (including **Artifactory**, **Ceramics**, **Soft Room**, **Laser**, **Wood**, **Metal**, **Electronics**, **Blacksmithing**) with neighborhood keywords (*Minneapolis*, *Seward*, *Twin Cities*, *Minnesota*), specific equipment lists, beginner-friendliness notes, and `alt`-tagged photos of members working.
3. **Google Business Profile (GBP) & Community Proof:**
   - Update GBP categories (e.g., *Makerspace*, *Community Center*, *Art Studio*, *Woodworking Class* / *Adult Education School*), add Wednesday 7–9 PM Open House hours, upload `community garden project.jpg` and `TCM Lounge 4.JPG`, and ask newer members—especially women, queer makers, and crafters—for Google reviews mentioning the welcoming vibe and variety of studios.

---

## 4. Layered Plan of Attack (With Low-Hanging Fruit First)

### Layer 0: Low-Hanging Fruit (1–2 Days — Big Impact, Zero Migration Required)
Do these right inside your existing WordPress.com dashboard this week:
1. **Fix Homepage SEO & First Impression Immediately:**
   - Replace `cropped-IMG_5588-downsized.jpg` and `clamped-fingerboard-1.jpeg` with `community garden project.jpg` (hero) and `TCM Lounge 4.JPG` (community/studios section), resized to `1200px` wide WebP/JPEG with descriptive `alt` text.
   - Ensure the homepage has **exactly one `<h1>`** (e.g., *"Twin Cities Maker: A Welcoming Minneapolis Makerspace for Makers of All Kinds"*).
   - Update `og:description` and SEO meta description to include *"Twin Cities Maker (TC Maker)"*, *"Minneapolis (Seward)"*, *"24/7 shared studios"*, and *"Wednesday 7–9 PM Open House"*; set `og:image` to the community garden photo.
2. **Clean Up Embarrassing & Stale Pages:**
   - Unpublish/redirect `/home/` (*"Not the Home"*) and `/member-resources/wordpress-admin/`.
   - Archive or add a clear 2026 status banner to `/covid-safety/` (`03/08/2021`) and `/reserve-tool-time/`.
   - Fix the duplicate paragraph on `/membership/`, fix typos on `/how-to-join/`, and reconcile the `$850,000` vs `$1.25M` building campaign figures across `/donating/` and `/help-us-buy-a-building/`.
   - Update the footer copyright from `2009–2025` to `2009–2026`.
3. **Tame Navigation & Mixed Links:**
   - Trim the 16-link nav bar down to **5–6 clear items** (e.g., *Visit*, *Studios*, *Classes & Calendar*, *Membership*, *About*, plus a single *Donate / Building Fund* button). Move `Report an Incident`, `WordPress Admin`, `Sponsors`, and `Wiki` into grouped dropdowns or the footer.
   - Fix `http://wa.tcmaker.org` and `http://wiki.tcmaker.org` to `https://`.
   - Remove the duplicate Mightycause script (`embed.js` vs `embed.min.js`).
4. **Refresh Google Business Profile:** Upload the new photos and confirm Open House hours + Seward address.

### Layer 1: WordPress Theme Consolidation & Easy Editing (2–4 Weeks)
Solve the "hard to edit" root cause permanently:
1. **Switch from `Lodestar` + `Elementor` to a Single Modern WordPress Block Theme (Full Site Editing):**
   - Pick a clean FSE block theme (e.g., *Twenty Twenty-Four / Twenty Twenty-Five* or a lightweight block theme on WordPress.com) and encode the **evolved palette & typography** into `theme.json`.
   - Deactivate Elementor once pages are migrated to native Gutenberg Blocks. Volunteers only ever have to learn **one** simple block editor, with locked-in brand colors and accessible button styles so nobody accidentally creates low-contrast text.
2. **Create 3 Reusable Page Templates / Patterns:**
   - *Shop Area Template* (Hero photo + "What you can make here" + Beginner path + Key tools + Area Manager contact).
   - *Class / Event Pattern* (Date, instructor, skill level, member vs. non-member price, registration link).
   - *Building Campaign Banner* (One global synced pattern so fundraising totals update everywhere from a single edit).

### Layer 2: Information Architecture, Crawlability & Inclusivity Funnel (1–2 Months)
1. **Consolidate Duplicate Pages + 301 Redirects:**
   - Merge `/donating/` + `/donate-online/` → `/donate/` (with a clear tab/section for the 7 Sigma building campaign).
   - Merge `/membership/` + `/how-to-join/` + `/signup/` → `/membership/` (with a warm 3-step path: *1. Visit Wednesday Open House → 2. Attend Orientation → 3. Choose Standard, +1, or Member-Supported Dues*).
   - Rewrite `/membership/membership-faq/` to replace *"TLDR NO"* with warm expectation-setting (*"We're a volunteer-run community workshop—here's how to start with a free Wednesday tour"*).
2. **Make Events & Classes Search-Engine Visible:**
   - Sync or mirror upcoming classes & Open Houses as native WordPress posts/events (or use an SEO-friendly calendar plugin with `Event` schema alongside Wild Apricot links) instead of an empty page with only an `<iframe>`.
3. **Add `LocalBusiness` JSON-LD & Automated Image Optimization:**
   - Configure automatic WebP conversion and `alt`-text enforcement in WordPress uploads.

### Layer 3: Ongoing Community Storytelling & Growth (Quarterly)
1. **Quarterly Studio Photo Walks:** Capture real makers across the Soft Room, ceramics, stained glass, electronics, welding, and woodshop—ensuring visible representation of women, BIPOC, and LGBTQ+ members.
2. **"Made at TC Maker" Member Spotlights:** Short monthly blog posts with project photos and maker interviews (great for long-tail SEO, social sharing, and donor engagement for the 7 Sigma building expansion).
3. **Lightweight Volunteer Content Cadence:** Assign a 15-minute monthly link/calendar/copyright check to a communications volunteer using a simple checklist.

---

## 5. Sample Home Page Deliverable

A working, responsive, WCAG-compliant prototype of the refreshed homepage has been created at:
- [sample-home/index.html](file:///home/bradf/tcm/tcmaker.org/sample-home/index.html)
- [sample-home/styles.css](file:///home/bradf/tcm/tcmaker.org/sample-home/styles.css)
- [sample-home/app.js](file:///home/bradf/tcm/tcmaker.org/sample-home/app.js)
- Optimized WebP/JPEG assets in [sample-home/assets/](file:///home/bradf/tcm/tcmaker.org/sample-home/assets/) (`TCM Lounge 4.JPG` compressed from `6.5 MB` to `57 KB` WebP—a 99% reduction).
