# Wistia Embeds - Vanilla HTML5 Example

This is a vanilla HTML5 + CSS3 + JavaScript version of the Wistia embeds demonstration project. It showcases three different types of Wistia embeds:

1. **Webinar Embeds** (`index.html`) - Demonstrates embedding Wistia Webinars
2. **Video Embeds** (`video.html`) - Shows two methods: manual embed and React package placeholder
3. **Channel Embeds** (`channel.html`) - Shows two methods: manual embed and React package placeholder

## Files Structure

```
├── index.html          # Homepage with Webinar embed
├── video.html          # Video embeds page
├── channel.html        # Channel embeds page
├── styles.css          # Shared stylesheet
├── script.js           # Shared JavaScript
└── README.md           # This file
```

## Usage

1. Open `index.html` in a web browser to view the Webinar embeds page
2. Navigate between pages using the navigation links
3. Replace placeholder IDs with your actual Wistia media IDs:
   - `YOUR_WEBINAR_ID` - Your Wistia Webinar ID
   - `YOUR_VIDEO_ID` - Your Wistia Video ID
   - `verai4y6qm` - Replace with your Channel ID (currently using example ID)

## Embed Methods

### Webinar Embed
Uses an iframe embed. Replace the `src` URL with your actual webinar embed URL.

### Video Embed (Manual)
Uses Wistia's async embed script with a div container. The video ID is specified in the `wistia_async_` class.

### Channel Embed (Manual)
Uses Wistia's channel embed script. The channel ID is specified in the `wistia_async_` class.

### React Package Placeholders
The React package sections show placeholders and code examples for how you would implement these using `@wistia/react-embeds` in a React application.

## Customization

- **Styling**: Edit `styles.css` to customize the appearance
- **Functionality**: Add JavaScript to `script.js` for any interactive features
- **Content**: Update the HTML files to match your content and embed IDs

## Browser Support

This example uses modern HTML5, CSS3, and JavaScript features. It should work in all modern browsers (Chrome, Firefox, Safari, Edge).

## Notes

- The channel embed uses an example channel ID (`verai4y6qm`) from the original Next.js example
- Replace all placeholder IDs with your actual Wistia media IDs
- The React package sections are informational only - this is a vanilla HTML example

