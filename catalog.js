/* ──────────────────────────────────────────────────────────────
   VAISHALI S — shared product catalog (frontend demo data)
   Used by product.html, checkout pages, and collection grids.
   price = base value in INR. img/img2/img3 from the live CDN.
   ────────────────────────────────────────────────────────────── */
const IMG = {
  amber:  'https://www.vaishali-s.com/cdn/shop/files/VS_L2_i2copy2.jpg?v=1753797090&width=1200',
  gold:   'https://www.vaishali-s.com/cdn/shop/files/SAT65.jpg?v=1721307756&width=1200',
  silk:   'https://www.vaishali-s.com/cdn/shop/files/IMG_7953_1.jpg?v=1742817036&width=1200',
  sari:   'https://www.vaishali-s.com/cdn/shop/files/SAT23.jpg?v=1721305009&width=1200',
  trous:  'https://www.vaishali-s.com/cdn/shop/files/SAT09.jpg?v=1721300228&width=1200',
  pants:  'https://www.vaishali-s.com/cdn/shop/files/DSC_4066_1.jpg?v=1730959242&width=1200',
  gown:   'https://www.vaishali-s.com/cdn/shop/files/IMG_4201.jpg?v=1721305390&width=1200',
  abyss:  'https://www.vaishali-s.com/cdn/shop/files/IMG_8543.jpg?v=1724929953&width=1200'
};

const CATALOG = {
  /* ── KINTSUGI — F/W 2025 ── */
  'amber-cluster-corded-dress': {
    collection:'kintsugi', collectionName:'Kintsugi — F/W 2025',
    name:'Amber Cluster Corded Dress', price:322000, badge:'New',
    img:IMG.amber, img2:IMG.gold, img3:IMG.silk,
    short:'A sculptural corded dress in amber tones, its surface tracing fault lines mended in gold — the philosophy of kintsugi made wearable.',
    long:'A sculptural corded dress built from hundreds of hand-twisted cords in graduated amber tones. Each seam is finished with gold thread that traces the garment’s fault lines, echoing the Japanese art of repair the collection is named for. Cut to move with the body while holding its architectural silhouette.'
  },
  'gold-fault-line-draped-gown': {
    collection:'kintsugi', collectionName:'Kintsugi — F/W 2025',
    name:'Gold Fault Line Draped Gown', price:285000, badge:'New',
    img:IMG.gold, img2:IMG.amber, img3:IMG.sari,
    short:'A floor-sweeping draped gown veined with hand-laid gold zari, mapping the beauty of the mended break.'
  },
  'kintsugi-asymmetric-silk-wrap': {
    collection:'kintsugi', collectionName:'Kintsugi — F/W 2025',
    name:'Kintsugi Asymmetric Silk Wrap', price:156000, badge:'New',
    img:IMG.silk, img2:IMG.amber, img3:IMG.gold,
    short:'An asymmetric wrap in handwoven Murshidabad silk, gold seams crossing the body like rivers of light.'
  },
  'lacquer-seam-murshidabad-sari': {
    collection:'kintsugi', collectionName:'Kintsugi — F/W 2025',
    name:'Lacquer Seam Murshidabad Sari', price:98000, badge:'New',
    img:IMG.sari, img2:IMG.gold, img3:IMG.silk,
    short:'A handwoven Murshidabad silk sari with lacquered gold borders — heritage weaving in the kintsugi palette.'
  },

  /* ── SATORI — F/W 2024 ── */
  'asymmetrical-corded-trousers': {
    collection:'satori', collectionName:'Satori — F/W 2024',
    name:'Asymmetrical Corded Trousers', price:46000,
    img:IMG.trous, img2:IMG.pants, img3:IMG.gown,
    short:'Architecturally corded trousers with an asymmetric waist — quiet structure for everyday couture.'
  },
  'asymmetrical-pants': {
    collection:'satori', collectionName:'Satori — F/W 2024',
    name:'Asymmetrical Pants', price:101500,
    img:IMG.pants, img2:IMG.trous, img3:IMG.gown,
    short:'Fluid wide-leg pants with an asymmetric pleated panel, handwoven in natural-fibre khadi.'
  },
  'satori-void-draped-gown': {
    collection:'satori', collectionName:'Satori — F/W 2024',
    name:'Satori Void Draped Gown', price:178000,
    img:IMG.gown, img2:IMG.trous, img3:IMG.pants,
    short:'A meditative draped gown in deep ink, its folds shaped to hold stillness — the moment of sudden awakening.'
  },
  'contemplation-structured-coat': {
    collection:'satori', collectionName:'Satori — F/W 2024',
    name:'Contemplation Structured Coat', price:245000,
    img:IMG.gold, img2:IMG.gown, img3:IMG.trous,
    short:'A structured handwoven coat with sculptural shoulders, built for presence and pause.'
  },

  /* ── I AM NATURE — S/S 2024 ── */
  'botanical-weave-column-dress': {
    collection:'i-am-nature', collectionName:'I Am Nature — S/S 2024',
    name:'Botanical Weave Column Dress', price:134000,
    img:IMG.pants, img2:IMG.silk, img3:IMG.amber,
    short:'A slim column dress whose handwoven surface blooms with botanical forms emerging from the cloth itself.'
  },
  'verdant-draped-kurta-set': {
    collection:'i-am-nature', collectionName:'I Am Nature — S/S 2024',
    name:'Verdant Draped Kurta Set', price:67000,
    img:IMG.silk, img2:IMG.pants, img3:IMG.gown,
    short:'A draped kurta and trouser set in living greens, hand-finished with raw textile fringing.'
  },
  'natural-form-gown': {
    collection:'i-am-nature', collectionName:'I Am Nature — S/S 2024',
    name:'Natural Form Gown', price:223000,
    img:IMG.amber, img2:IMG.silk, img3:IMG.pants,
    short:'A flowing gown that moves like a tree in wind — pleated silk catching light like water.'
  },
  'forest-floor-silk-sari': {
    collection:'i-am-nature', collectionName:'I Am Nature — S/S 2024',
    name:'Forest Floor Silk Sari', price:118000,
    img:IMG.gown, img2:IMG.silk, img3:IMG.amber,
    short:'A handwoven silk sari in moss and earth tones, textured like the forest floor underfoot.'
  },

  /* ── ABYSS — S/S 2023 ── */
  'abyss-deep-draped-gown': {
    collection:'abyss', collectionName:'Abyss — S/S 2023',
    name:'Abyss Deep Draped Gown', price:195000,
    img:IMG.abyss, img2:IMG.trous, img3:IMG.sari,
    short:'A deep-sea draped gown whose architectural folds move like currents under pressure — weightless yet dense.'
  },
  'oceanic-structured-cape-coat': {
    collection:'abyss', collectionName:'Abyss — S/S 2023',
    name:'Oceanic Structured Cape Coat', price:268000,
    img:IMG.trous, img2:IMG.abyss, img3:IMG.sari,
    short:'A structured cape coat with sweeping handwoven volume, inspired by the luminescence of the deep.'
  },
  'depth-chanderi-sari': {
    collection:'abyss', collectionName:'Abyss — S/S 2023',
    name:'Depth Chanderi Sari', price:89000,
    img:IMG.sari, img2:IMG.abyss, img3:IMG.trous,
    short:'A featherlight Chanderi sari in oceanic blue-black, woven by master artisans in Madhya Pradesh.'
  },
  'abyss-column-kurta': {
    collection:'abyss', collectionName:'Abyss — S/S 2023',
    name:'Abyss Column Kurta', price:54000,
    img:IMG.abyss, img2:IMG.sari, img3:IMG.trous,
    short:'A clean column kurta in deep indigo handloom — the collection’s quietest, most wearable piece.'
  },

  /* ── ANAHATA — BRIDAL 2026 ── */
  'anahata-ivory-draped-veil-gown': {
    collection:'anahata', collectionName:'Anahata — Bridal 2026',
    name:'Anahata Ivory Draped Veil Gown', price:485000, badge:'New',
    img:IMG.trous, img2:IMG.silk, img3:IMG.gown,
    short:'An ivory bridal gown sculpted as an embrace, with a flowing handwoven veil — love translated into form.'
  },
  'crystal-bridal-cape-ensemble': {
    collection:'anahata', collectionName:'Anahata — Bridal 2026',
    name:'Crystal Bridal Cape Ensemble', price:342000, badge:'New',
    img:IMG.sari, img2:IMG.silk, img3:IMG.gown,
    short:'A two-piece bridal ensemble with a crystal-traced cape, echoing the unstruck sound of Anahata.'
  },

  /* ── NAAD — BRIDAL 2025 ── */
  'naad-crimson-bridal-lehenga': {
    collection:'naad-bridal', collectionName:'Naad — Bridal 2025',
    name:'Naad Crimson Bridal Lehenga', price:545000,
    img:IMG.gold, img2:IMG.amber, img3:IMG.sari,
    short:'A crimson-and-gold bridal lehenga vibrating with the energy of celebration — handwoven silk mapping constellations in embroidery.'
  },
  'naad-floral-embroidered-sari': {
    collection:'naad-bridal', collectionName:'Naad — Bridal 2025',
    name:'Naad Floral Embroidered Sari', price:298000,
    img:IMG.amber, img2:IMG.gold, img3:IMG.silk,
    short:'A hand-embroidered bridal sari where floral motifs bloom across handwoven silk — sound becoming form.'
  },

  /* ── KINTSUGI PRÊT — F/W 2025 ── */
  'kintsugi-pret-draped-jacket': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'Kintsugi Pret Draped Jacket', price:115000, badge:'New',
    img:IMG.silk, img2:IMG.amber, img3:IMG.gold,
    short:'A draped jacket bringing the couture philosophy of Kintsugi into everyday luxury — same loom, easier wear.'
  },
  'gold-seam-pleated-trouser-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'Gold Seam Pleated Trouser Set', price:78000, badge:'New',
    img:IMG.pants, img2:IMG.silk, img3:IMG.amber,
    short:'A pleated top-and-trouser set seamed in gold thread — structured ease for the modern wardrobe.'
  },

  /* ── ANCESTRAL THREADS — S/S 2023 ── */
  'ancestral-blue-fan-silk-dress': {
    collection:'ancestral-threads', collectionName:'Ancestral Threads — S/S 2023',
    name:'Ancestral Blue Fan Silk Dress', price:212000,
    img:IMG.sari, img2:IMG.abyss, img3:IMG.gold,
    short:'A cobalt silk dress with a hand-pleated fan bodice, presented at Milan Ready to Wear.'
  },
  'milan-structured-cape': {
    collection:'ancestral-threads', collectionName:'Ancestral Threads — S/S 2023',
    name:'Milan Structured Cape', price:168000,
    img:IMG.abyss, img2:IMG.sari, img3:IMG.gold,
    short:'A structured handwoven cape carrying India’s craft heritage onto the global runway.'
  }
};

if (typeof window !== 'undefined') window.CATALOG = CATALOG;
