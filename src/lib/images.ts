/**
 * Real photography used for brand/atmosphere imagery (architecture, craft,
 * texture) — all free-to-use under the Unsplash License. Product-specific
 * imagery (Shop grid, Product gallery, Lookbook, Featured Edit) intentionally
 * stays on the placeholder ImageSlot texture instead of using one of these,
 * because showing an unrelated real photo as if it were "Komal Tara" or any
 * other SKU would misrepresent what the actual garment looks like. Swap those
 * in once real product photography exists — see README.
 *
 * Helper `u()` appends Unsplash's own resizing params so images load at a
 * sensible size instead of the full-resolution original.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  archway: u("photo-1649878920043-785e8410536d"), // marble archway, Alwar, Rajasthan
  doorway: u("photo-1611369810713-0ae05461c709"), // heritage doorway, Bharatpur, Rajasthan
  carvedDoor: u("photo-1758416835960-a76095724b32"), // ornate carved wooden double doors
  tilePattern: u("photo-1718463383723-9a5f52707e75"), // ornate architectural tile pattern
  palaceInterior: u("photo-1665910690884-e33a1ffb7bf9"), // Mysore Palace columns & ceiling
  threads: u("photo-1760328715296-9714daa8a737"), // hand-worked thread / loom close-up
  marigold: u("photo-1705475388142-a2700c4caeb5"), // marigold garlands
  // Random fabric/textile stand-ins for product photography (see README —
  // swap for real product shoots when available).
  silkPurple: u("photo-1617157458504-d053be085fa5"), // purple/teal silk texture close-up
  fabricKnit: u("photo-1636715986446-d58f0f9b3916"), // pale grey woven fabric texture
  silkSilver: u("photo-1631663026562-1f55f0ecac3e"), // silver silk in afternoon light
} as const;

export type ImageKey = keyof typeof IMAGES;
