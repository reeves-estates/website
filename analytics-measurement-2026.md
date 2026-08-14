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

### `sale_signup`

*Added 2026-07-24 with the `/signup` page, after this document was first written.*

| Param | Values | Meaning |
|---|---|---|
| `method` | `google_form` | Submission POSTed to the Google Form backend. |
| `page_path` | `/signup` | Fixed — the form lives on one page. |

Fired by `SaleSignupForm.tsx` on a completed submission. **This is the only true
conversion event on the site.** Unlike `phone_click` and `email_click`, which are
intent proxies that hand off to another application, a signup is a completed
action with an independent record: the row that lands in the Google Sheet.

---

## 1a. The calibration factor — what makes this site unusually measurable

The Sheet sits entirely outside GA4, which makes it ground truth. Comparing the
two gives something most small properties never get: a **measured GA4 capture
rate** rather than an assumed one.

**First measurement, 2026-08-13, covering the July Memorial sale:**

| Source | Count |
|---|---|
| Rows in the Google Sheet (ground truth) | **32** |
| GA4 `sale_signup` events | **28** |
| **Capture rate** | **87.5%** |

The 12.5% shortfall sits inside the 10–20% ad-blocker band predicted in §4, and
one or two of the four are likely the 24 July test submissions made while the tag
was still being debugged (see `docs/sale-signup-setup.md`).

**How to use this:**

- **The Sheet is the source of truth for conversions.** Report 32, never 28. GA4
  tells you where they came from; the Sheet tells you how many there were.
- **Every other GA4 number here is understated by roughly an eighth.** Session
  counts, event counts, and `phone_click` totals should all be read as a floor.
  The `phone_click` row is understated twice over — blocked collection on top of
  the intent-proxy problem in §3.
- The gap runs in the safe direction. GA4 reporting *more* than the Sheet would
  mean phantom events and a real fault; reporting fewer means some clients are
  silent, which is expected and unfixable.
- Treat it as a rough correction, not a constant. It is one comparison at n=32.
  Re-measure it after each sale; the number will firm up.

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

> **Search Console does not see AI traffic.** It reports Google Search only.
> Every AI-assistant referral and every AI crawler visit is invisible in it. Use
> the row below, not GSC, for anything about answer engines.

### Surfaced in AI — source: GA4, "AI Assistant" channel

- Sessions via the **AI Assistant** channel, and which assistant sent them
  (expand by Session source)
- Engagement rate and average engagement time, against the site average
- Landing pages — which page the assistant pointed at

**No configuration is required.** GA4 now ships "AI Assistant" as a standard
channel in its default channel group. A custom channel group was built for this
on 2026-08-12 and deleted the same day once the native one was confirmed.

*First baseline, 16 Jul – 12 Aug 2026: 4 sessions, 100% engagement rate, 32s
average engagement time, 5.25 events per session — the highest quality traffic on
the site by every available measure, and better than organic search on all three.
Confirmed as production traffic via the hostname filter.*

*Confidence: existence, high. Rates, none — four sessions is far too few to be
significant. Report it as an early signal, never as a rate. Note also that some
assistants strip the referrer entirely, so this channel systematically
undercounts: a reading of zero is not evidence of no AI traffic, only of no
attributable AI traffic.*

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
- **~~No forms.~~** *Superseded 2026-08-13.* The `/signup` page, added 24 July,
  posts to a Google Form whose responses land in a Sheet the Reeves account owns.
  That Sheet is an independent record, which closes the loop this section
  originally said could not be closed — see §1a. It captures *buyers* wanting
  notice of the next sale, not sellers with an estate to handle, so it does not
  replace the inquiry problem below; it solves a different one. A seller-side
  form posting server-side is still the structural fix for inquiries, and still
  needs Matt's agreement on where submissions land.
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

---

## 6. Sale events — the per-sale routine

*Added 2026-08-13, after working out what the July Memorial sale actually did.*

**A sale is the highest-performing marketing event this business has.** The July
sale produced a traffic spike peaking around 140 sessions in a day against a
baseline of 10–20, and converted roughly 118 QR sessions into 32 email addresses
— about a **27% signup rate**, which is exceptional for an email capture. It
outperformed every digital channel on the site by a wide margin: thirty-two
addresses from a printed sign, against four sessions from AI assistants.

That is worth internalising before optimising anything else. Physical presence at
the sale, converted to digital, is currently the strongest lever available.

### What went wrong with the measurement, and the fix

The printed QR codes carried `utm_source=qr` **with no `utm_medium`**. A source
with no medium matches no channel rule, so GA4 filed all of it as **Unassigned** —
which read as a data-quality problem for weeks before anyone worked out it was
the most successful campaign in the site's history.

**The counterintuitive part:** adding `utm_medium=print` does *not* fix the
classification. GA4's default channel grouping only recognises a fixed set of
medium values — organic, cpc, referral, email, social, affiliate, display. There
is no channel for print media, so print traffic lands in Unassigned regardless.

The fix is a **custom channel group** with an "Offline / QR" channel matching
`source = qr`. This is a genuinely correct use of a custom group, unlike the AI
Assistant one, which Google now provides natively and which was rightly deleted.

### Checklist — run this for every sale

1. **Tag the QR URL fully** before anything goes to print:

   ```
   https://reevesestates.com/signup
     ?utm_source=qr
     &utm_medium=print
     &utm_campaign=<estate>-<month>-<year>     e.g. memorial-july-2026
     &utm_content=<placement>                  e.g. front-door, checkout-table
   ```

   `utm_campaign` makes sales comparable to each other. `utm_content` per
   placement tells you *which locations* actually got scanned — information lost
   entirely for the July sale, where posters went to several spots and nobody can
   now say which worked.

2. **Confirm the "Offline / QR" channel group exists** so traffic classifies on
   arrival rather than being diagnosed weeks later.

3. **Re-test the form end to end** before the sale — one real submission,
   confirmed in the Sheet. See `docs/sale-signup-setup.md`. A failed submission
   still shows the visitor a thank-you, so this test is the only proof.

4. **After the sale, record four numbers:** sessions in the sale window, QR
   sessions, Sheet rows, and GA4 `sale_signup` events. The last two give a fresh
   calibration reading (§1a); the first two give the conversion rate.

5. **Photograph the estate properly while it is staged** — close, specific shots
   of the pieces a generalist would have mispriced, not only wide room views. This
   is the raw material for the Selected Estates archive, and it can only be
   captured once.

### What the July result means beyond analytics

The list is a **buyer** audience — shoppers wanting notice of the next sale — not
sellers with an estate to handle, which is where the revenue is. The two connect
indirectly but genuinely: a well-attended sale with a warm mailing list is what
makes Reeves attractive to the next family choosing who to trust. The `/signup`
page already works both sides, with its second section addressed to people who
have an estate of their own.

It is also the first hard evidence for the Selected Estates argument. Each sale is
a demand event that currently evaporates when the sale ends. One of them generated
roughly 300 sessions and a 32-person list from a sheet of paper.
