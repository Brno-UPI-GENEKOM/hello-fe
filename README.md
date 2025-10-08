# Hello Frontend (Angular)

Angular frontend application that displays the current time from the backend API.

## Setup

```bash
npm install
```

## Development

```bash
npm start
```

Navigate to `http://localhost:4200/`

## Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/hello-fe/browser` directory.

## Deployment to Render

1. **Create a new Static Site** on Render
2. **Connect** the `hello-fe` repository
3. **Configure build settings:**
   - Build command: `npm ci && npm run build`
   - Publish directory: `dist/hello-fe/browser`
4. **Deploy** the site

### Environment Configuration

The application uses a runtime configuration file (`env.js`) to set the backend URL without rebuilding. 

To update the backend URL on Render:
1. Go to your Static Site → **Settings** → **Static site** → **Environment**
2. Under **"Static site overrides"**, add/replace the `env.js` file
3. Update `BACKEND_URL` to point to your backend (e.g., `https://hello-be.onrender.com`)

Example `env.js`:
```javascript
window.env = { BACKEND_URL: "https://hello-be.onrender.com" };
```
