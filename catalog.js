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
  'the-fable-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Fable Set', price:32500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_12f4eb6c-58c0-4e24-97bb-ca3653909563.jpg?v=1768045377', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_0eccc858-b6dd-482e-8853-92c56520f9ce.jpg?v=1768045377', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/4_8e6e2259-b8ef-4ac1-af88-e978072731ca.jpg?v=1768045377',
    short:'The Fable Corded Dress and Shirt Set is defined by refined texture and precise detailing.',
    long:'The Fable Corded Dress and Shirt Set is defined by refined texture and precise detailing. Designed with a clean, elongated silhouette, the ensemble focuses on craftsmanship and form. Crafted in silk by silk, the corded dress features linear cording that adds structure and depth.'
  },
  'the-aristo-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Aristo Set', price:75500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_aed2451d-8d4c-4727-a5a3-88a71a9781a1.jpg?v=1768043073', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_ffd594ca-4c7b-44d7-9e59-735ed34c93a1.jpg?v=1768043074', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_3d16e0e2-9840-4324-acda-6859b94dc889.jpg?v=1768043073',
    short:'The Aristo Set is a sharp, contemporary co-ord designed for modern dressing.',
    long:'The Aristo Set is a sharp, contemporary co-ord designed for modern dressing. Tailored to perfection, the ensemble balances clean lines with a strong, structured silhouette. Crafted in rich Chettinad silk, the Aristo Set features elegant golden stripe detailing that adds depth and visual interest.'
  },
  'the-aureum-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Aureum Set', price:79000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_39e6ac55-7f77-44ff-a98c-a1d506a1c4b0.jpg?v=1768041858', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_f1ec917a-e6e6-4678-8fe2-30933a7e4fbd.jpg?v=1768041858', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_c13f441b-9b1b-45f4-a70f-d18e4cef38e9.jpg?v=1768041858',
    short:'The Aureum Set is a timeless expression of sharp tailoring and understated luxury.',
    long:'The Aureum Set is a timeless expression of sharp tailoring and understated luxury. Designed for a structured yet effortless silhouette, this co-ord blends heritage craftsmanship with a modern sensibility. Crafted in rich Chettinad silk, the Aureum Set features elegant golden stripe detailing that adds subtle depth and character.'
  },
  'the-aris-jacket': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Aris Jacket', price:52000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_f879eacd-d358-4857-8d2b-742a72f3a5a2.jpg?v=1768036398', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/709.jpg?v=1768036398', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_f0e5e08f-db15-4200-b36d-a72be2149ae7.jpg?v=1768036398',
    short:'The Aris Jacket is a refined expression of tailored elegance.',
    long:'The Aris Jacket is a refined expression of tailored elegance. Designed with a structured silhouette, this piece seamlessly blends the formality of a jacket, creating a timeless yet contemporary look. Crafted in rich Khunn, the dress features classic jacket detailing with a clean lapel and a belted waist that enhances the silhouette.'
  },
  'the-ombra-dress': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Ombra Dress', price:73000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_726253ca-a9a2-4127-bd69-e75822ed0d4d.jpg?v=1768031687', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_ab50538f-edb4-420f-9be1-65ff1f4f5643.jpg?v=1768031687', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_cc49f665-a0d3-411a-8b44-829a14aefa68.jpg?v=1768031687',
    short:'This Corded Asymmetrical Dress is a bold expression of sculptural elegance.',
    long:'This Corded Asymmetrical Dress is a bold expression of sculptural elegance. Designed with a clean, fitted upper silhouette, the dress draws attention to its intricate surface detailing. The standout feature lies in the corded construction, which flows seamlessly into an asymmetrical hemline, creating movement and visual depth crafted in silk by silk.'
  },
  'the-harbour-blazer': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Harbour Blazer', price:33500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_dca85170-41a7-446d-aa48-7326c9e4e05a.jpg?v=1768029508', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_b5a7350f-424f-4455-942b-be85ded07aa5.jpg?v=1768029508', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/45_e2733c20-b2b0-4479-a234-90e77d6c3e1d.jpg?v=1768029508',
    short:'The Harbour Blazer and Corded Vest Set is a modern interpretation of tailored elegance.',
    long:'The Harbour Blazer and Corded Vest Set is a modern interpretation of tailored elegance. Designed with sharp lines and thoughtful layering, this ensemble brings together structure, texture, and refined craftsmanship. The corded vest and pants are crafted in Metallic Khunn, with intricate cotton cording on the vest adding depth and dimension.'
  },
  'the-crest-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Crest Set', price:60000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_c6ccaf15-0fba-4f29-8775-590462e8aa34.jpg?v=1768027810', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_1ba1ff01-2ece-480c-9a04-371db3adc769.jpg?v=1768027810', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_4cdb30d7-c4a7-4a8d-9605-c9c5c4f7b8ad.jpg?v=1768027810',
    short:'The Crest Dress and Jacket Set is a striking blend of craftsmanship and modern elegance.',
    long:'The Crest Dress and Jacket Set is a striking blend of craftsmanship and modern elegance. Designed to make a subtle statement, this ensemble brings together rich textures and thoughtful detailing. Crafted in a refined mix of silk by silk and Khunn, the crest dress features intricate embroidery that adds depth and character to the silhouette.'
  },
  'the-aurora-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Aurora Set', price:44000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_81ac17d2-023f-41c1-afb9-4f5e3bb48724.jpg?v=1767955664', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_031d0370-14b0-4478-a6ac-6b5e8ee7affb.jpg?v=1767955664', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_eae15f3d-7899-4662-ab70-b753350e7844.jpg?v=1767955664',
    short:'The Aurora Jacket and Top Set with Corded Skirt is a refined composition of texture and elegance.',
    long:'The Aurora Jacket and Top Set with Corded Skirt is a refined composition of texture and elegance. Designed with thoughtful layering, this ensemble balances structure and fluidity for a timeless yet contemporary look. The Aurora jacket, crafted in Murshidabad Silk, features delicate mushroom embroidery, adding a signature handcrafted touch.'
  },
  'the-limea-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Limea Set', price:18000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_b7d2c1d8-b6e8-4a37-823e-f3c878a2642a.jpg?v=1767945079', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_eb1d6db1-8fc1-4e18-a7fc-bf4de692f24c.jpg?v=1767945079', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_e470a4bf-d969-4c90-90d7-597701bb27eb.jpg?v=1767945079',
    short:'The Limea Jacket with Corded Bustier and Skirt is a striking blend of texture and modern elegance.',
    long:'The Limea Jacket with Corded Bustier and Skirt is a striking blend of texture and modern elegance. Crafted in Murshidabad Silk, this ensemble highlights artisanal craftsmanship through thoughtful layering and detail. The jacket features delicate mushroom embroidery, adding structure and refinement, while the corded bustier and corded skirt bring depth and dimension through intricate cording.'
  },
  'the-gleam-glint-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Gleam & Glint Set', price:62500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_0f66742b-57ad-4aa4-abe5-e9ddf019e0f9.jpg?v=1767943141', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_3d001526-09fc-49c1-a25c-bf88225db39e.jpg?v=1767943141', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_384a9418-3eac-41d3-a6f4-976c13817547.jpg?v=1767943141',
    short:'The Gleam Top and Glint Skirt Set is an elegant expression of understated luxury.',
    long:'The Gleam Top and Glint Skirt Set is an elegant expression of understated luxury. Designed with clean lines and thoughtful detailing, this ensemble brings together softness, structure, and timeless appeal. Crafted in fluid silk by silk, the Gleam top features a graceful boat neckline that enhances its refined silhouette.'
  },
  'the-meadow-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Meadow Set', price:39500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_0e15c530-6d79-4b8d-aa56-20e40aaaea85.jpg?v=1767941268', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_3300dd51-e2b0-4715-9ea0-fa6f17d13a4b.jpg?v=1767941268', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_ba173423-dce9-41f0-b347-1ed5a3b6625a.jpg?v=1767941268',
    short:'The Meadow Jacket & Dress Set is a refined blend of structure and softness.',
    long:'The Meadow Jacket & Dress Set is a refined blend of structure and softness. Designed for effortless layering, this ensemble brings together rich textures and thoughtful detailing for a timeless yet contemporary look. The Meadow dress is crafted in Khunn, offering a grounded, artisanal base, while the Meadow jacket is made in luxurious silk by silk.'
  },
  'the-breeze-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Breeze Set', price:35000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/vaishalis1555.jpg?v=1767878250', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_13147407-f3c7-4651-9f88-e680115c5662.jpg?v=1767879509', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_de18a803-2f1b-4e83-a9f6-6345dfac20bd.jpg?v=1767879509',
    short:'The Breeze Corded Dress and Eminence Jacket Set is a statement of modern elegance and fluid movement.',
    long:'The Breeze Corded Dress and Eminence Jacket Set is a statement of modern elegance and fluid movement. Crafted in luxurious silk by silk, this ensemble blends structure with softness for a refined, elevated look. The Breeze dress features intricate cotton cording, adding depth and texture, echoed across the Eminence jacket for a cohesive finish.'
  },
  'the-coraline-dress': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Coraline Dress', price:128500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_1317c9b0-80c6-42e5-b525-11b0e9fd08b4.jpg?v=1767873430', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_71767acf-65b0-4234-9976-560895dd79f0.jpg?v=1767873430', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_9a0933d3-9467-40c8-87af-302ba3c66c0f.jpg?v=1767873430',
    short:'The Coraline Dress is a striking expression of handcrafted artistry in rich Murshidabad silk.',
    long:'The Coraline Dress is a striking expression of handcrafted artistry, meticulously crafted from rich Murshidabad silk and finished with a soft cotton lining for enhanced comfort. Intricately detailed with coral-inspired embroidery and sculptural cording, the dress gains depth and dimension, elevating its refined silhouette. Designed in a graceful below-the-knee length, it offers a balanced interplay of structure and fluidity.'
  },
  'the-echo-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Echo Set', price:48000,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_26bcc63a-0e26-411c-874c-5c2c95f734b8.jpg?v=1767870689', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/45_38d1f2ea-7c88-4cfd-a6d0-4c314b41bbac.jpg?v=1767870689', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_6bdbde33-b1ba-44c1-9348-b10ab36dad32.jpg?v=1767870689',
    short:'The Echo Cape Set is a reimagined interpretation of the signature Infinity Cape.',
    long:'The Echo Cape Set is a reimagined interpretation of the signature Infinity Cape, designed with a fresh, contemporary sensibility. Thoughtfully structured, it brings together elegance and ease in a modern silhouette. The Echo cape features a refined collared neckline and is detailed with delicate mushroom embroidery, adding a subtle handcrafted element.'
  },
  'the-solenne-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Solenne Set', price:33500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_452461b4-0d86-4f56-a0fd-45c675e56743.jpg?v=1767867598', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/5_1e403a2a-f026-4551-8157-0c258a55a58d.jpg?v=1767867598', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_ce6d09c4-aec7-43fd-b5d5-ac96e7e0f3ef.jpg?v=1767867598',
    short:'The Solenne checkered Murshidabad jacket features delicate embroidery and a modern asymmetric hem.',
    long:'The Solenne checkered Murshidabad jacket features delicate embroidery on the outer layer, while an asymmetric hem adds a modern, contemporary touch. Tailored straight pants complete the look with clean, polished lines. This versatile set beautifully balances classic craftsmanship with everyday sophistication.'
  },
  'the-eden-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Eden Set', price:26500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/45_5aafedf9-e6fc-443c-bc0d-43a06c1b8210.jpg?v=1767860363', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_995f75b4-7ad9-4151-a5f5-ebd344f1a33a.jpg?v=1767860364', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_f1593f5d-3b84-4674-a434-1bb24b7a332c.jpg?v=1767860364',
    short:'The Eden Dress and Shirt Set embodies effortless, layered elegance.',
    long:'The Eden Dress and Shirt Set embodies effortless, layered elegance, designed for a refined yet contemporary wardrobe. Crafted with thoughtful detailing, this ensemble brings together structure and ease in a timeless silhouette. The Eden dress features a fitted upper and is crafted from soft khadi, offering a breathable and comfortable fit.'
  },
  'the-ripple-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Ripple Set', price:53500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1_052105d1-b6fe-4170-848c-20cf818b7004.jpg?v=1767859057', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_d8f56226-a0fc-434c-9d23-357981577f9a.jpg?v=1767859057', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3_e875bc40-eaf3-4471-abf9-c15cd74f720a.jpg?v=1767859057',
    short:'The Ripple Top and Serene Skirt Set embodies contemporary elegance rooted in craftsmanship.',
    long:'The Ripple Top and Serene Skirt Set embodies contemporary elegance rooted in craftsmanship. The sleeveless Ripple Top is meticulously crafted from the finest khadi, elevated with sculptural corded detailing made entirely from cotton. The Serene Skirt is fashioned from breathable khadi and delicately enhanced with subtle threadwork.'
  },
  'the-liora-set': {
    collection:'kintsugi-pret', collectionName:'Kintsugi Prêt — F/W 2025',
    name:'The Liora Set', price:46500,
    img:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/1.jpg?v=1767855697', img2:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/3.jpg?v=1767855697', img3:'https://cdn.shopify.com/s/files/1/0574/4449/9629/files/2_da0d94de-f307-42a2-bb5d-0f3487ad2a9b.jpg?v=1767855697',
    short:'The Liora Top and Skirt Set features a two-layered top in silk-by-silk and Chanderi.',
    long:'The Liora Top and Skirt Set features a two-layered top with an inner silk-by-silk layer and an outer Chanderi layer. The inner layer is detailed with pin tucks for subtle texture, while the outer layer is finished with delicate mushroom embroidery. The look is completed with a softly flowing corded silk skirt, creating a refined, elegant silhouette.'
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
