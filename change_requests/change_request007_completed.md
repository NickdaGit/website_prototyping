# Change Request 007 — Completed

## Summary

Added Nicholas's photo and video to the about page and his bio page.

## Changes Made

1. **about.html** — Updated the Nicholas founder card image from `/images/GUNTHER2.JPG` to `/images/nicholas01.jpg`.

2. **nicholas.html** — Replaced the "Video coming soon" placeholder with an actual `<video>` element pointing to `/videos/nicholas_about.mp4`. The video uses `controls` (viewer must click play), no `autoplay`, no `loop`, no `muted` — so it plays once per initiation with sound. Also removed the now-unused `.video-placeholder` CSS.

## Files Modified

| File | Change |
|------|--------|
| `about.html` | Nicholas card image updated to `nicholas01.jpg` |
| `nicholas.html` | Video placeholder replaced with `<video>` element; unused CSS removed |
