export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window?.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action,
  { event_category, event_label, value, non_interaction }
) => {
  if (typeof window?.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category,
      event_label,
      value,
      non_interaction,
    });
  }
};
