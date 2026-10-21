# Vocab Cage phone app: how to install

This folder is the offline phone app. Put it on GitHub Pages once (free). Then add it to your iPhone home screen, where it works with no signal.

## 1. Put the app on GitHub Pages (about 5 minutes, on your PC)

1. Sign in at https://github.com and click **New repository** (the green button or the + menu).
2. Name it `vocab-cage`. Choose **Public**, which free GitHub Pages needs. The code contains none of your words. Click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Open this folder (`K:\UsefulTools\Vocabulary\offline-app`) in File Explorer. Select **everything inside it**: `index.html`, `sw.js`, `manifest.webmanifest` and the `icons` folder. Drag them onto the GitHub page. Keep the `icons` folder as a folder.
5. Click **Commit changes**.
6. Go to the repository's **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
7. Wait 1–2 minutes and refresh that page. It shows your address: `https://YOUR-USERNAME.github.io/vocab-cage/`.

## 2. Install it on your iPhone

1. Open the address in **Safari**. It must be Safari, not Chrome.
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open **Vocab Cage** from the home screen once while you have signal, so it can save itself for offline use.
4. To test it, turn on Airplane Mode and open the app again. It should open normally.

## 3. Moving words before and after a trip

**Before you fly (online app on claude.ai → phone):**
1. In the online app, tap the settings button (top right), then **Save backup file**. On iPhone, choose **Save to Files**.
   - Or tap **Copy as text**.
2. In the phone app, open the settings button, then **Import**. Choose the file, or paste the text and tap **Import pasted text**.

**On the plane:** review, quiz, browse roots, and look up new words. New words get a quick breakdown from the built-in roots list and are saved as **drafts**.

**After you land (phone → online app):**
1. In the phone app, open settings and tap **Share backup file**, then **Save to Files**. You can also tap **Copy as text**.
2. In the online app, open settings and **Import** the file or text. Words are merged: nothing is duplicated, the newer card is kept, and the most recent review progress wins.
3. Tap **Complete drafts with AI** to fill in meanings, examples and full breakdowns.

## Updating the app later (you already have it on GitHub)

1. On your PC, open your `vocab-cage` repository on github.com.
2. Click **Add file → Upload files**.
3. From `K:\UsefulTools\Vocabulary\offline-app`, drag in **everything**: `index.html`, `sw.js`, `manifest.webmanifest`, and the `icons` and `vendor` folders. Files with the same name replace the old ones. `vendor` is new since the printable word list, so make sure it goes in as a folder.
4. Click **Commit changes**. Wait 1–2 minutes (the repository's **Actions** tab shows a green tick when the site has updated).
5. On your iPhone, open Vocab Cage from the home screen **with signal**, wait a few seconds, then close it fully (swipe it away) and open it again. The new version shows from then on.
6. Your words stay on the phone through updates. Saving a backup first (settings button → **Share backup file**) is still a good habit.

## Good to know

- Words in the phone app live only on that phone. Save a backup now and then, because iPhone can clear data for web apps that haven't been opened for a few weeks.
- AI lookups work only in the online app on claude.ai. They use your Claude account, so there's no extra cost.
