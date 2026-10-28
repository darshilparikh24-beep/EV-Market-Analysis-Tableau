# EV Insights

**Electric Vehicle Market Performance & Insights** is a responsive React website for exploring the project's published Tableau dashboard and Tableau story. The site embeds the existing Tableau views and does not recreate them or generate replacement statistics.

## Features

- Dark, responsive analytics landing page with keyboard-friendly navigation.
- Separate Dashboard and Story sections using the Tableau Embedding API v3.
- Direct links to both published Tableau views.
- Loading, slow-load, and error states for each embedded view.
- Market analysis guide cards, project context, and methodology.
- GitHub Pages deployment workflow with repository-aware Vite base paths.
- No API keys, server, database, or paid hosting dependencies.

## Tableau views

The app reads its published view URLs from **src/config/tableau.js**.

- Dashboard: https://public.tableau.com/app/profile/darshil.parikh/viz/EV_Market_Performance_Insights_Story_Final/ElectricVehicleMarketPerformanceInsights
- Story: https://public.tableau.com/app/profile/darshil.parikh/viz/EV_Market_Executive_Story_Public/EVMarketExecutiveStory

If a view's published URL changes, update the corresponding **url** value in **src/config/tableau.js**. Tableau Public views are public; their own access and availability settings apply when embedded.

## Data and accuracy

The supplied Tableau workbook contains an embedded extract named **EV_Market_Data.hyper**. Its schema includes:

vehicle_id, model_name, manufacturer, model_year, manufacturing_country, market_region, category, battery_capacity_kwh, battery_type, battery_cycle_life, battery_degradation_pct_5yr, range_km, efficiency_wh_per_km, motor_power_kw, torque_nm, num_motors, drivetrain, top_speed_kmph, acceleration_0_100_sec, max_dc_charging_kw, charging_dc_fast_time_min, charging_ac_time_hr, num_charging_ports, num_seats, weight_kg, cargo_capacity_liters, price_usd, insurance_cost_usd_yearly, warranty_years, resale_value_pct_3yr, safety_rating_stars, autonomous_level, infotainment_screen_inch, co2_saved_tons_per_year, annual_sales_units, customer_rating, and recommended_use_case.

The website does not copy this extract into its own charts. Numeric findings are shown by the live Tableau dashboard; the explanatory cards on this site describe what visitors can explore and are not presented as additional measured results.

## Project structure

    ev-insights-site/
    ├── .github/workflows/deploy.yml
    ├── public/
    │   ├── .nojekyll
    │   └── favicon.svg
    ├── src/
    │   ├── components/
    │   │   ├── About.jsx
    │   │   ├── AnalyticsFeatures.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Hero.jsx
    │   │   ├── Icon.jsx
    │   │   ├── Methodology.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── SectionIntro.jsx
    │   │   ├── Story.jsx
    │   │   ├── TableauEmbed.jsx
    │   │   └── TechStack.jsx
    │   ├── config/tableau.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles.css
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    └── vite.config.js

## Run locally

Requirements: Node.js 22.12 or newer and pnpm 11.25.0.

    pnpm install
    pnpm dev

Open the local URL printed by Vite. Create and inspect a production build with:

    pnpm build
    pnpm preview

## Upload to GitHub

The connected GitHub account has an empty repository named **darshilparikh24-beep/EV-Market-Analysis-Tableau**. The site is in a clean **ev-insights-site** folder, ready to upload to that repository. From this folder, run:

    git init
    git branch -M main
    git remote add origin https://github.com/darshilparikh24-beep/EV-Market-Analysis-Tableau.git
    git add .
    git commit -m "Add EV Insights website"
    git push -u origin main

These commands create a local Git history and push the project to the empty remote. The remote has not been changed from this workspace. Do not commit Tableau credentials or other secrets.

## Enable GitHub Pages

1. Push the project to the repository's **main** branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the repository's **Actions** tab and confirm **Deploy EV Insights to GitHub Pages** completes.
5. Open the URL reported by the deployment job. This repository's expected address is **https://darshilparikh24-beep.github.io/EV-Market-Analysis-Tableau/**.

The Vite configuration reads **GITHUB_REPOSITORY** in GitHub Actions and sets the correct base path automatically. GitHub Pages deployment has not been run from this local workspace.

## Configure the repository link

The workflow sets **VITE_GITHUB_REPO_URL** to this repository, so the footer links to the real project page. If you later move the project, update the environment value in **.github/workflows/deploy.yml**.

The **.env** file is ignored by Git. No secrets or Tableau credentials are needed.

## Embedding notes and limitations

- Tableau's Embedding API v3 script is loaded from Tableau Public in **index.html** and uses Tableau's **tableau-viz** web component.
- Visitors need network access to Tableau Public for embedded content to load. If embedding is unavailable, the status panel offers the direct published-view link.
- GitHub Pages hosts only the static React site. It does not run a backend or store user data.
- The website does not guarantee Tableau availability, permissions, or changes made to the published workbooks.
