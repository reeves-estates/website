# Analytics & Measurement — reevesestates.com

*Created 2026-07-21. Companion to `seo-strategy-2026.md`.*

Until now the only measurement on this site has been Google Search Console, which
reports what happens **up to** the click on a search result and nothing after it.
This document covers the GA4 layer that reports what happens **on** the site, and
the monthly report the two feed together.

---

## 1. What is instrumented

Two events, fired by `src/components/Analytics.tsx`, which is mounted once in
`src/app/layout.tsx` and listens for clicks across the whole site.

### `phone_click`

| Param | Values | Meaning |
|---|---|---|
| `method` | `tel` | A real `tel:` tap. Touch devices — dialer opened. |
| | `copy` | Desktop copy-to-clipboard button (`PhoneLink.tsx`). Weaker signal. |
| `link_location` | `nav`, `footer`, `header`, a section id, `body` | Where on the page. |
| `page_path` | e.g. `/neighborhoods/river-oaks` | Which page produced it. |

### `email_click`

| Param | Values | Meaning |
|---|---|---|
| `method` | `mailto` | Mail client opened. |
| `inquiry_subject` | e.g. `River Oaks estate inquiry` | Pre-filled subject — identifies the source page. |
| `link_location` | as above | |
| `page_path` | as above | |

**Coverage:** all 5 phone touchpoints and all 10 `mailto:` links, via a single
delegated listener. New phone or email links added anywhere on the site are
picked up automatically with no extra wiring.

**The listener never calls `preventDefault`** and runs in the capture phase. It
observes clicks; it cannot intercept navigation.

---

## 2. Setup — steps that must be done in the Google UI

The code is live behind an environment variable. Analytics stays completely off
(no script, no listener, no cookies) until `NEXT_PUBLIC_GA_ID` is set.

1. **Create the GA4 property.** analytics.google.com, signed in as
   `reevesestatesales@gmail.com` — the same account that owns Search Console and
   the Google Business Profile. Property name "Reeves Estates", timezone
   Central, currency USD.
2. **Create a Web data stream** for `https://reevesestates.com`. Copy the
   Measurement ID (`G-XXXXXXXXXX`).
3. **Add the env var in Vercel** — ReevesEstates team → website project →
   Settings → Environment Variables. Name `NEXT_PUBLIC_GA_ID`, value the `G-` ID.
   Set it for Production. Redeploy for it to take effect.
   *Leave it unset in Preview so preview traffic doesn't pollute the data.*
4. **Link GA4 to Search Console.** GA4 Admin → Product Links → Search Console
   Links. This is what lets one report span "found us" and "did something",
   and it is the single highest-value step here after the install itself.
5. **Register the custom dimensions.** GA4 Admin → Custom definitions → Create
   custom dimension. Scope "Event". Do this for each of: `method`,
   `link_location`, `inquiry_subject`, `page_path`.

   > **This step is not optional.** GA4 collects these params immediately, but
   > they do **not** appear in any report until registered, and they are **not**
   > backfilled — data before registration is unrecoverable at the param level.
   > Do it the same day the ID goes live.

6. **Mark the events as key events** (GA4's term for conversions). Admin → Events
   → toggle "Mark as key event" for `phone_click` and `email_click`. They must
   have fired at least once to appear in the list.
7. **Turn off Google Signals** (Admin → Data Settings → Data Collection) unless
   demographic data is specifically wanted. It adds a privacy surface and
   triggers data thresholding that hides rows at low traffic — which this site
   will have.

---

## 3. The monthly report — one page

Three rows. Each answers a different question, and each has a different
confidence level, which the report should state rather than imply.

### Findable — source: Search Console

- Total impressions, total clicks, average position
- Pages indexed (Valid tab count)
- Top 5 queries by impressions
- Neighbourhood pages: impressions per page

*Confidence: high. This is measured, not inferred.*

### Engaged — source: GA4

- Sessions, and organic sessions specifically
- Engagement rate and average engagement time
- Top 5 landing pages
- Neighbourhood page sessions vs. homepage sessions

*Confidence: high for direction, moderate for absolutes — ad blockers suppress
some share of GA4 traffic, typically 10–20%.*

### Contacted — source: GA4 events + Matt's inbox

- `phone_click` where `method = tel` — dialer opened, by page
- `phone_click` where `method = copy` — number copied on desktop
- `email_click` — by `inquiry_subject`, which names the source page
- **Actual inquiries received**, counted by Matt

*Confidence: this row is a proxy. See the caveat below — include it in the
report, every month, verbatim.*

> **How to read this row.** These are contact *attempts*, not calls. A tapped
> phone number means the dialer opened; it does not mean the call connected or
> lasted. A copied number means someone took the number, and may have dialled
> from another device or not at all. Someone who reads the site on a laptop and
> dials from their mobile is invisible here entirely. Treat these numbers as a
> measure of intent and of which pages produce it — not as a count of calls.

### The row that closes the loop — and who can actually close it

The `mailto:` links carry per-page subject lines — "River Oaks estate inquiry",
"Tanglewood estate inquiry", and so on. Those arrive in Matt's inbox already
labelled with the page that produced them, and the same string is recorded in GA4
as `inquiry_subject`. The identical label in both systems makes it a **join key**:
if GA4 shows 4 River Oaks clicks and Matt received 3 "River Oaks estate inquiry"
emails, those numbers are directly comparable, and the difference is the
click-to-send drop-off.

**But the inbox is `midtownmodern@gmail.com`, which is Matt's and is not shared.**
Aidan has no access. This splits the row in two, and the report should say so:

| Measure | Who can see it | What it proves |
|---|---|---|
| `email_click` by `inquiry_subject` | Aidan, in GA4 | Someone opened their mail client from a given page |
| Emails actually received | **Matt only** | An inquiry genuinely arrived |

So **clicks are the ceiling of what can be independently verified.** Arrival data
depends entirely on Matt reporting it. The ask is small — search his inbox for
"estate inquiry" once a month and give a count; the subject lines do the
attribution for him — but if he doesn't, that row simply has no arrival figure,
and the report should show it as unavailable rather than implying the click count
is an inquiry count.

**Known gap:** the footer `mailto:` (`Footer.tsx:74`) carries no subject. Footer
clicks log as `inquiry_subject: "none"` and reach Matt with a blank subject,
so they fall outside any inbox count. Adding a generic subject would fix it.

**Not done without Matt's agreement:** adding `cc=`/`bcc=` to the mailto links to
copy inquiries elsewhere. `cc` is visible and would read oddly to someone writing
about a parent's estate, `bcc` in a mailto is unreliable across clients, and
either way it changes who reads private correspondence. That is Matt's call about
his clients, not a reporting convenience.

---

## 4. Known limits — state these once, up front

- **Volume.** At current traffic, monthly counts will be small and
  month-over-month movement will be mostly noise. The early value is
  direction and page-level pattern, not precision. Do not present it as a
  performance scorecard for at least the first three months.
- **The desktop-to-mobile gap.** Structurally invisible. Likely material for
  this audience.
- **Mobile tap undercounting.** Tapping `tel:` backgrounds the page, sometimes
  before the event sends. gtag uses `sendBeacon`, which mostly survives this —
  but expect the true number to be slightly higher than reported. The bias runs
  toward under-reporting, which is the safer direction.
- **No forms.** There is no contact form on the site, so there is no
  server-side event that can be counted with certainty. Every conversion signal
  here is a client-side click that hands off to another application. A form
  posting server-side would give definitive counts independent of anyone's
  inbox — the real structural fix, and worth raising with Matt eventually, but
  it needs his agreement on where submissions land.
- **Cookies.** GA4 sets first-party cookies where the site previously set none.
  Texas TDPSA does not require consent for analytics, so no banner is needed,
  but it is a change in data posture worth mentioning to Matt once.

---

## 5. If real call measurement is wanted later

Call tracking (CallRail or similar) swaps in a tracking number and records
connected calls and duration — genuinely closing the loop the proxy above cannot.

**The conflict to weigh first:** `832-474-9547` is hardcoded in the
LocalBusiness schema at `layout.tsx:83`, and is the number on Google Business
Profile and Bing Places. Putting a different number on the site works against
the NAP consistency that is still an open item in `seo-strategy-2026.md`. It can
be threaded — dynamic insertion that swaps the number only for organic sessions
while schema and GBP stay canonical — but that is real complexity and a monthly
cost for a business at single-digit call volume. Revisit when volume justifies
it, not before.
