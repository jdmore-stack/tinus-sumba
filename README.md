# Sumba with Tinus

A small tourism website for Tinus, a local guide in Sumba, Indonesia, built from
photos and a place list he sent over WhatsApp. It's a plain static site (no
build step, no server, no monthly cost) that you can host for free on GitHub
Pages, then hand over to Tinus so he can edit it himself without touching code.

## What's in here

```
index.html       the page
style.css        design
app.js           reads content.json and fills in the page
content.json     all editable text, photo paths and contact details
images/          Tinus's photos, already compressed for the web
fonts/           self-hosted fonts (licensed for this use, see fonts/LICENSE-*)
.pages.yml       configuration for Pages CMS, a free visual editor (see below)
```

Every place name, price, and contact detail that isn't already filled in is
left **blank on purpose** — the site shows "to be added" or a dashed box
instead, so Tinus can see exactly what still needs his input, and nothing
looks broken in the meantime.

## 1. Create a GitHub account (skip if you have one)

1. Go to [github.com/signup](https://github.com/signup).
2. Enter an email, password, and username, verify the email, and choose the
   **Free** plan when asked. You don't need anything paid for this.

## 2. Create the repository and upload the files

1. Once signed in, click the **+** icon top-right → **New repository**.
2. Name it something simple, e.g. `sumba-with-tinus`.
3. Leave it set to **Public** (GitHub Pages' free tier needs the repo to be
   public, unless you're on a paid GitHub plan).
4. Leave "Add a README" unchecked — you already have one.
5. Click **Create repository**.
6. On the new, empty repository page, click **uploading an existing file**
   (it's a link in the middle of the page).
7. Unzip `sumba-with-tinus.zip` on your computer first. Then drag the
   *contents* of that unzipped folder — `index.html`, `style.css`, `app.js`,
   `content.json`, `.pages.yml`, `README.md`, and the `images/` and `fonts/`
   folders — into the browser upload area. Don't upload the zip itself, and
   don't upload a wrapper folder; `index.html` needs to sit at the top level
   of the repo.
   - Note: file browsers hide files starting with a dot by default, so
     `.pages.yml` may not show up when you browse to select files — dragging
     the whole folder's contents in one go avoids that problem. If it's
     still missing afterwards, see the troubleshooting note at the end.
8. Scroll down and click **Commit changes**.

## 3. Turn on GitHub Pages (free hosting)

1. In the repository, click **Settings** (top tab bar).
2. In the left sidebar, click **Pages**.
3. Under "Build and deployment" → **Source**, choose **Deploy from a
   branch**.
4. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. Wait a minute or two, then refresh the Pages settings page. GitHub shows
   a box near the top: "Your site is live at
   `https://yourusername.github.io/sumba-with-tinus/`". Click it to check
   the site loads.

If the page looks unstyled or broken, it's almost always because the files
were uploaded inside an extra subfolder — open the repo's file list and
confirm `index.html` is at the root, not inside another folder.

## 4. Let Tinus edit it himself (free, no code)

This repo includes a `.pages.yml` file for **[Pages CMS](https://pagescms.org)**,
a free, open-source editor that turns `content.json` into plain web forms —
text boxes, photo pickers, add/remove buttons for lists — and saves changes
straight back to GitHub. Tinus doesn't need to know what GitHub or JSON is.

You can set this up yourself first to see how it works, then hand the login
over, or set it up directly under Tinus's own GitHub account — either order
is fine, since Pages CMS access and GitHub repo ownership are separate
things.

1. Go to [app.pagescms.org](https://app.pagescms.org).
2. Click **Sign in with GitHub** and authorize it.
3. The first time, it asks to install the **Pages CMS GitHub App**. Choose
   the account that owns the repository, and either give it access to **all
   repositories** or select just `sumba-with-tinus`.
4. Back in Pages CMS, click the repository to open it. It reads `.pages.yml`
   automatically and shows a sidebar with sections: **Site content**,
   **Contact details**, **Trips & transfers**, **Places**, **About the
   guide**, **Guest reviews**, **Good to know**, and **Plan your trip**.
5. Click into any section, fill in a field (a price, his WhatsApp number, a
   bio), and click **Save**. That writes straight to `content.json` on
   GitHub as a commit.
6. GitHub Pages picks up the change and redeploys automatically, usually
   within a minute. Refresh the live site to see it.

If you'd rather skip Pages CMS entirely and just relay changes from Tinus
yourself, you can edit `content.json` and upload new files to `images/`
directly on github.com — no CMS needed, just more fiddly with raw JSON.

## 5. Hand control over to Tinus

Two separate handoffs happen here: who can edit content (Pages CMS /
GitHub access) and who owns the repository (billing and admin control,
though there's no billing on the free tier). Do them in this order:

1. **Get Tinus a GitHub account.** Same as step 1 — he can do this himself,
   or you can create it and hand him the login, then have him change the
   password.
2. **Add him as a collaborator** so he can log into Pages CMS and edit
   right away, without waiting for full ownership transfer:
   - In the repo, **Settings → Collaborators** → **Add people**.
   - Enter his GitHub username or email and send the invite. He accepts it
     from his GitHub notifications or email.
   - He can now sign into [app.pagescms.org](https://app.pagescms.org) with
     his own GitHub account and edit the same way described above.
3. **Transfer repository ownership**, once you're ready to step away
   entirely:
   - **Settings → General**, scroll to the bottom "Danger Zone".
   - Click **Transfer ownership**, type the repository name to confirm, and
     enter Tinus's GitHub username as the new owner.
   - He'll get an email to accept the transfer. Once accepted, it's fully
     his — the GitHub Pages site and its URL keep working without any
     changes needed.
4. If he ever wants to move the Pages CMS GitHub App install to his own
   account instead of yours, he can do that from his GitHub **Settings →
   Applications → Installed GitHub Apps** after he owns the repo.

## 6. What Tinus should fill in

Open `content.json` (or the matching fields in Pages CMS) and look for:
- Empty `"value"` fields under **Trips & transfers** — prices, duration, what's included.
- `contact.whatsapp` — his WhatsApp number with country code, digits only
  (e.g. `6281234567890`). This also powers the floating WhatsApp button,
  which stays hidden until a number is added.
- `about.text` and `about.photo` — a short bio and a photo of himself.
- Anything else he wants to add: more photos per place group, guest reviews
  (the `reviews` list is empty and the section hides itself until it isn't),
  prices, or extra "Good to know" notes.

## Previewing changes locally (optional)

Opening `index.html` directly by double-clicking it won't load
`content.json` (browsers block that for local files). To preview locally,
run a tiny local server from this folder and open the printed address:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just push to GitHub and check the Pages URL — that always works.

## Troubleshooting

- **Site loads with no styling / plain text only.** `index.html` is probably
  sitting inside an extra folder in the repo. Open the repo's file list on
  github.com — you should see `index.html`, `style.css`, etc. directly
  listed, not nested one level deeper.
- **`.pages.yml` seems missing from the repo.** Most file managers hide
  dot-files. On github.com, use **Add file → Upload files** and drag the
  file in directly, or check "show hidden files" in your computer's file
  browser before dragging the folder contents over.
- **Pages CMS doesn't show the repository.** The GitHub App install needs
  access to it specifically — go to your GitHub **Settings → Applications →
  Installed GitHub Apps → Pages CMS → Configure**, and add the repository
  under "Repository access".
- **Changes saved in Pages CMS don't appear on the live site.** GitHub Pages
  usually redeploys within a minute; check the repo's **Actions** tab (or
  the small green checkmark near the latest commit) to see if a deployment
  is still running. A hard refresh (Ctrl/Cmd+Shift+R) also helps if your
  browser cached the old version.

## Photo credits

All photos are the ones Tinus shared. They've been resized and had their
embedded location data removed before publishing.
