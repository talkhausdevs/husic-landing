
# HÜSIC 🎶

Welcome to the full source code for **HÜSIC**, a bold, neon-lit music platform built for both artists and fans. This is your all-in-one destination to upload, distribute, stream, and connect.

---

## 🌐 Live Features

### 🔊 For Artists
- Personal dashboards (stats, uploads, revenue, profile)
- Artist profile pages with verified badge support
- Upload music, manage drafts, and distribute to Spotify, Apple Music, and more
- Smart link generator for sharing tracks
- Real-time fan messaging system via Firebase
- Checkout page for paid plans (Starter, Pro, Premium)

### 👥 For Fans
- Browse artists, playlists, and music videos
- Real-time chat with artists (from artist profile via “Send Message” button)
- Clean, modern homepage with pricing info and team founders

---

## 📁 Pages Included

| Page | Description |
|------|-------------|
| `index.html` | Homepage with hero section, pricing, shimmer text, and founders |
| `browse.html` | Discover artists, playlists, and music |
| `artist.html` | Artist profile with discography, smart link, and 💬 chat button |
| `chat.html` | Fan → artist messaging page |
| `dashboard.html` | Artist dashboard with stats, revenue, profile management |
| `messages.html` | DM inbox for artists w/ typing indicators and verified badges |
| `upload.html` | Upload page w/ drag & drop, metadata, and distribution toggle |
| `settings.html` | Artist account settings page |
| `signup.html` | Sign-up with Firebase Auth |
| `login.html` | Login with Firebase Auth |
| `smartlink.html` | Music smart link generator |
| `checkout.html` | Subscription page for plan selection |
| `artist-dashboard.html` | Additional dashboard section for artist-exclusive tools |

---

## 🛠 Tech Stack
- **HTML/CSS/JS** with Tailwind
- **Firebase Auth + Firestore** for real-time data and user auth
- Minimal vanilla JavaScript, no frameworks required

---

## 🔐 Firebase Setup
To activate messaging and user auth:
1. Create a Firebase project
2. Enable Authentication (Email/Password)
3. Enable Firestore
4. Replace Firebase config in each page (`firebaseConfig` block)

---

Built with 💙 by Roosevelt & Team HÜSIC  
*“It Hits Different.”*
