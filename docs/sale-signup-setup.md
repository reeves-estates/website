# Sale signup — setup

*Created 2026-07-24, during the July estate sale, to capture emails from QR-code
traffic at the sale itself.*

The `/signup` page collects an email and posts it to a **Google Form**, whose
responses land in a **Google Sheet**. No API keys, no server code, no third-party
account beyond Google — and the Sheet is a list you can actually mail from later,
which a Gmail inbox is not.

---

## 1. Create the form (about three minutes)

Signed in as **`reevesestatesales@gmail.com`** — the same account that owns
Search Console, GA4, and the Business Profile:

1. Go to **forms.google.com** → blank form. Title it "Upcoming sale
   notifications" (respondents never see the title — the site's own page wraps it).
2. Add one **Short answer** question titled `Email`. Mark it **Required**.
3. Optionally add a second **Short answer** question titled `Name`.
4. **Responses** tab → **Link to Sheets** → create a new spreadsheet. This is
   the list. Everything else exists to fill it.

## 2. Get the field IDs

1. Top-right **⋮** menu → **Get pre-filled link**.
2. Type anything into Email (and Name), then **Get link** → **Copy link**.
3. The copied URL looks like:

   ```
   https://docs.google.com/forms/d/e/1FAIpQLSd_EXAMPLE_ID/viewform?usp=pp_url&entry.1234567890=test
   ```

   - The part between `/d/e/` and `/viewform` is the **form ID**
   - Each `entry.NNNNNNNNNN` is a **field ID**, in the order your questions appear

## 3. Put them in the code

In `src/components/SaleSignupForm.tsx`, fill the three constants at the top:

```ts
const GOOGLE_FORM_ID = "1FAIpQLSd_EXAMPLE_ID";
const EMAIL_FIELD = "entry.1234567890";
const NAME_FIELD = "entry.9876543210"; // or "" to hide the name field
```

Until `GOOGLE_FORM_ID` and `EMAIL_FIELD` are both set, the page renders the form
disabled with a visible fallback pointing at the email address, so it degrades
politely rather than appearing to work.

### The setting that is easy to miss

Google Forms has a **publish state and responder-access control that is separate
from everything in the Settings panel.** A newly created form defaults to
restricted, which sends anonymous visitors to a Google sign-in page — the form
looks fine to you, because you are signed in, and is unusable for everyone else.

Fix it from the form editor: **Publish** (top right) → **Manage responders** →
**Anyone with the link**. This bit the first attempt on 2026-07-24 and cost a
round of debugging; the Settings → Responses options were all already correct.

Verify by opening the form's `/viewform` URL in a private window. If it shows a
Google sign-in page, it is still restricted.

## 4. Test with a real submission before trusting it

**Do not skip this.** Submit the live form once and confirm the row appears in
the Sheet.

The reason: Google Forms sends no CORS headers, so the browser cannot read the
response to the POST. The code treats a completed request as success. That means
**a failed submission would still show the visitor a thank-you.** One real
end-to-end test is the only thing that proves the pipe is connected.

Re-test after any change to the form's questions — editing a question can change
its `entry.` ID and silently break the link.

---

## What this is not

**A Sheet is storage, not sending.** When there are a few hundred addresses and
a sale to announce, do not BCC them from Gmail — that gets rate-limited and
spam-filtered, and it exposes the list if BCC is ever mistyped. Import the Sheet
into a mailing tool (Mailchimp's free tier covers this volume comfortably) and
send from there. That step can wait until there is a sale to announce.

**Promises made on the page.** The page says we will write "a few days ahead"
about upcoming sales, "a few times a month at most," and that an address can be
removed on request. Those are commitments to honour, and they set the ceiling on
how often the list can be mailed.

## Tracking

A successful signup fires a GA4 `sale_signup` event. Combined with the
`utm_source=qr` tag on the printed QR codes, that gives the full path: scanned
the sign at the sale → landed on `/signup` → joined the list. See
`analytics-measurement-2026.md`.
