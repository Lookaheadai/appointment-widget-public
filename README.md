# Lookahead Widget

## How to Add to Your Website?

> You need to have a business set up with Lookahead.

Once that's done, you can start accepting appointments directly from your website by embedding our widget.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.jsdelivr.net/gh/Lookaheadai/appointment-widget-public/dist/style.css"
/>

<script type="module">
  import register from "https://cdn.jsdelivr.net/gh/Lookaheadai/appointment-widget-public/dist/lookahead-widget.js";
  register();
</script>

<lookahead-widget email="business-email@example.com"></lookahead-widget>
```

Copy and paste the code above into the relevant place (usually inside the `<body></body>` tags). Then, replace the placeholder email with the email you registered with Lookahead.
