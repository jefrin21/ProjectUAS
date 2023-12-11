document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const cardContainer3 = document.getElementById("cardContainer3");
  const buttonRp = document.querySelector(".bagiankanan"); // Seleksi button "Rp 0"
  let totalValue = 0; // Inisialisasi total nilai

  // Set nilai awal pada button "Rp 0"
  buttonRp.textContent = `Rp ${totalValue.toFixed(2)}`;

  const cardData = [
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/flipk-nife-doppler-sapphire.webp",
      alt: "Classified",
      text: "$ 615.52",
      link: "#flip-doppler-sapphire.html",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/ak-47-panthera-onca.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/awp-boom.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/awp-silk-tiger.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/glock-18-twilight-galaxy.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/m4a1-blue-phosphor.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/m4a1-hot-rod.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/m4a1-s-atomic-alloy.png",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/mp5-sd-oxide-oasis.webp",
      alt: "Classified",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/aug-storm.webp",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/famas-colony.png",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/mag-7-seabird.webp",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/mp7-army-racon.webp",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/nova-sand-dune.webp",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/p250-mint-kimono.png",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/pp-bizon-bamboo-print.webp",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/sg-553-barricade.png",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/tec-9-groundwater.png",
      alt: "Consumer",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/ak-47-fire-serpent.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/ak-47-vulcan.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/awp-medusa.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/bayonet-doppler-black-pearl.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/flip-knife-doppler-sapphire.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/karambit-fade.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/m9-bayonet-gamma-doppler-phase-4.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/navaja-knife-doppler-ruby.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Covert/shadow-daggers-doppler-sapphire.webp",
      alt: "Covert",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/awp-dun-in-leo.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/desert-eagle-midnight-storm.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/desert-eagle-night.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/five-seven-candy-apple.webp",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/m4a1-s-moss-quartz.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/mag-7-chainmail.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/nova-green-apple.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/p250-crimson-kimono.webp",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/up-s-pathfinder.png",
      alt: "IndustrialGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/ak-47-black-laminate.webp",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/awp-snake-camo.webp",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/mac-10-copper-borre.png",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/mp9-dark-age.webp",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/ump-45-minotaur-labyrinth.png",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/ump-45-minotaur-labyrinth.png",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/usp-s-blueprint.webp",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/xm1014-frost-borre.png",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/mp9-hot-rod.png",
      alt: "MilSpecGrade",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/desert-eagle-blaze.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/desert-eagle-crimson-web.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/famas-prime-cospiracy.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/five-seven-berries-and-cherries.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/five-seven-case-hardened.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/glock-18-dragon-tatto.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/glock-18-fade.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/m4a4-red-ddpat.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/ump-45-crime-scene.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/ak-47-bloodsport.webp",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/Ak-47-case-hardened.webp",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/aug-bengal-tiger.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/aug-sand-storm.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/famas-prime-conspiracy.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/galil-ar-dusk-ruins.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/galil-ar-phoenix-blacklight.webp",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/m4a1-s-blue-phospor.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/m4a4-asiimov.webp",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/m4a4-temukau.webp",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/sg-553-hypnotic.png",
      alt: "AssaultRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/hand-wraps-caution.png",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/hand-wraps-leather.png",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/moto-gloves-cool-mint.png",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/moto-gloves-finish-line.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/specialist-gloves-emerald-web.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/specialist-gloves-fade.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/sport-gloves-big-game.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/sport-gloves-nocts.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/sport-gloves-vice.webp",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/hand-wraps-badlands.png",
      alt: "Gloves",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/m249-downtown.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mac-10-case-hardened.webp",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mag-7-chainmail.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mp5-sd-oxide-oasis.webp",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mp7-abyssal-appation.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mp9-pandora's-box.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/negev-power-loader.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/nova-hyper-beast.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/p90-astral-jormungandr.webp",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/pp-bizon-judgement-of-anubis.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/sawed-off-the-kraken.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/xm1014-tranquility.png",
      alt: "Mid-tier",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/cz75-auto-yellow-jacket.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/desert-eagle-blaze.webp",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/desert-eagle-code-red.webp",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/dual-berettes-emerald.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/five-seven-case-hardened.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/glock-18-fade.webp",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/p250-apep's-curse.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/p2000-ocean-foam.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/r8-revolver-fade.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/tec-9-divimator.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/usp-s-kill-confirmed.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Pistol/usp-s-the-traitor.png",
      alt: "Pistol",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/awp-asiimov.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/awp-containment-breach.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/awp-fade.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/g3gs1-flux.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/g3sg1-arctic-camo.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/g3sg1-violet-murano.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/scar-20-bloodsport.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/scar-20-cardiac.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/scar-20-cyrex.webp",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/SSG-06-death-strike.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/ssg-08-dragonfire.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/ssg-08-turbo-peek.png",
      alt: "SniperRifles",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/bowie-knife-fade.png",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/butterfly-knife-lore.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/falchion-knife-doppler-phase.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/flipk-nife-doppler-sapphire.webpg",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/huntsman-knife-slaughter.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/karambit-gamma-doppler-phase-1.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/navaja-knife-doppler-ruby.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/shadow-daggers-doppler-sapphire.webp",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/skeleton-knife-case-hardened.png",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Knives/stiletto-knife-slaughter.png",
      alt: "Knives",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/desert-eagle-blaze.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/famas-prime-cospiracy.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/five-seven-berries-and-cherries.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/five-seven-case-hardened.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/glock-18-dragon-tatto.png",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/glock-18-fade.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/m4a4-red-ddpat.webp",
      alt: "Restricted",
      text: "$ 615.52",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Restricted/ump-45-crime-scene.png",
      alt: "Restricted",
      text: "$ 615.52",
    },

    // Add more card data as needed
  ];

  const typeDropdown = document.getElementById("typeDropdown");

  typeDropdown.addEventListener("click", function () {
    const selectedType = this.textContent.toLowerCase();
    filterCardsByType(selectedType);
  });

  function filterCardsByType(selectedType) {
    const allCards = document.querySelectorAll(".col-4");
    allCards.forEach((card) => {
      const cardType = card.querySelector(".card-img-top").alt.toLowerCase();

      // Check if the card matches the selected type
      const showCard = cardType === selectedType || selectedType === "all";

      // Show or hide the card based on the filter result
      card.style.display = showCard ? "block" : "none";
    });
  }

  cardData.forEach((card) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col-4 mt-3";
    cardColumn.style.cursor = "pointer"; // Set cursor property to pointer

    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.width = "200px"; // Set the width of the card
    cardElement.style.height = "230px"; // Set the height of the card
    cardElement.style.position = "relative"; // Set position to relative for absolute positioning inside
    cardElement.style.backgroundColor = "#282633"; // Set the background color
    cardElement.style.boxShadow =
      "10px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.cursor = "pointer";

    const cardImage = document.createElement("img");
    cardImage.src = card.imageSrc;
    cardImage.alt = card.alt;
    cardImage.className = "card-img-top";
    cardImage.style.width = "75%"; // Make the image fill the entire width
    cardImage.style.position = "absolute";
    cardImage.style.top = "0"; // Position the image at the top
    cardImage.style.left = "50%"; // Center the image horizontally
    cardImage.style.transform = "translateX(-50%)"; // Center the image horizontally

    const cardBody = document.createElement("div");
    cardBody.className = "cardbody";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = card.text;
    cardText.style.position = "absolute";
    cardText.style.top = "70%"; // Center the text vertically
    cardText.style.left = "26%"; // Center the text horizontally
    cardText.style.transform = "translate(-50%, -50%)"; // Center the text both vertically and horizontally
    cardElement.style.boxShadow =
      " 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.color = "#fff"; // Set the button text color
    cardElement.style.fontSize = "18px";
    cardElement.style.fontWeight = "bold";

    const cardButton = document.createElement("a");
    cardButton.className = "btn btn-warning";
    cardButton.textContent = "🛒Trade🛒";
    cardButton.style.backgroundColor = "#ffcc00"; // Set the button background color
    cardButton.style.color = "#333"; // Set the button text color
    cardButton.style.position = "absolute";
    cardButton.style.bottom = "10px"; // Adjust the bottom position as needed
    cardButton.style.left = "50%"; // Center the button horizontally
    cardButton.style.transform = "translateX(-50%)"; // Center the button horizontally
    cardButton.style.width = "90%"; // Set the height of the card
    cardButton.style.fontWeight = "bold";

    cardButton.addEventListener("click", function () {
      const currentContainer = this.closest(".row"); // Get the current container

      // Add hover effect
      cardColumn.addEventListener("mouseover", function () {
        cardElement.style.transform = "scale(1.05)"; // Scale up the card on hover
        cardElement.style.backgroundColor = "#3a3f4a"; // Change background color on hover
      });

      cardColumn.addEventListener("mouseout", function () {
        cardElement.style.transform = "scale(1)"; // Reset the scale on mouse out
        cardElement.style.backgroundColor = "#282633"; // Reset background color on mouse out
      });

      if (currentContainer === cardContainer) {
        // Check if there are less than 6 cards in cardContainer3
        if (cardContainer3.childElementCount < 6) {
          // Move the card from cardContainer to cardContainer3
          cardColumn.remove();
          cardContainer3.appendChild(cardColumn);

          // Update total value
          totalValue += parseFloat(
            card.text.replace("$ ", "").replace(",", "")
          );
          buttonRp.textContent = `Rp ${totalValue.toFixed(2)}`;
        } else {
          // Handle maximum card limit in cardContainer3
          alert("🌟 Maximum Trade Item is 6 🌟");
        }
      } else if (currentContainer === cardContainer3) {
        // Move the card back from cardContainer3 to cardContainer
        cardColumn.remove();
        cardContainer.appendChild(cardColumn);

        // Update total value
        totalValue -= parseFloat(card.text.replace("$ ", "").replace(",", ""));
        buttonRp.textContent = `Rp ${totalValue.toFixed(2)}`;
      }
    });

    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardBody);
    cardColumn.appendChild(cardElement);
    cardContainer.appendChild(cardColumn);
  });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remova("select-clicked");
      caret.classList.remova("caret-rotate");
      menu.classList.remova("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer2");
  const cardContainer4 = document.getElementById("cardContainer4");
  const buttonRp = document.querySelector(".bagiankiri"); // Seleksi button "Rp 0"
  let totalValue = 0; // Inisialisasi total nilai

  // Sample card data
  const cardData = [
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/Classified/ak-47-case-hardened.webp",
      alt: "Card 1 Image",
      text: "$ 615.52",
      link: "../ProjectUAS/flipknife-doppler-sapphire.html",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/ConsumerGrade/aug-storm.webp",
      alt: "Card 2 Image",
      text: "$ 24.86",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/IndustrialGrade/up-s-pathfinder.png",
      alt: "Card 3 Image",
      text: "$ 32.31",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/rarity/MilSpecGrade/mp9-dark-age.webp",
      alt: "Card 4 Image",
      text: "$ 106.62",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/AssaultRifles/m4a4-temukau.webp",
      alt: "Card 5 Image",
      text: "$ 101.61",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Gloves/bloodhound-gloves-bronzed.webp",
      alt: "Card 6 Image",
      text: "$ 1,035.50 ",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/knives/bowie-knife-fade.png",
      alt: "Card 7 Image",
      text: "$ 761",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/m249-downtown.png",
      alt: "Card 8 Image",
      text: "$ 5.32",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/Mid-tier/mac-10-case-hardened.webp",
      alt: "Card 9 Image",
      text: "$ 113.09",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/pistol/cz75-auto-yellow-jacket.png",
      alt: "Card 10 Image",
      text: "$ 45.56",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/awp-asiimov.png",
      alt: "Card 11 Image",
      text: "$ 180.37",
    },
    {
      imageSrc:
        "../ProjectUAS/asset/img/TradeSkin/type/SniperRifles/awp-fade.png",
      alt: "Card 12 Image",
      text: "$ 6 448.30",
    },
    // Add more card data as needed
  ];

  cardData.forEach((card) => {
    const cardColumn = document.createElement("div");
    cardColumn.className = "col-4 mt-3";
    cardColumn.style.cursor = "pointer"; // Set cursor property to pointer

    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.width = "200px"; // Set the width of the card
    cardElement.style.height = "230px"; // Set the height of the card
    cardElement.style.position = "relative"; // Set position to relative for absolute positioning inside
    cardElement.style.backgroundColor = "#282633"; // Set the background color
    cardElement.style.boxShadow =
      "10px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.cursor = "pointer";

    const cardImage = document.createElement("img");
    cardImage.src = card.imageSrc;
    cardImage.alt = card.alt;
    cardImage.className = "card-img-top";
    cardImage.style.width = "75%"; // Make the image fill the entire width
    cardImage.style.position = "absolute";
    cardImage.style.top = "0"; // Position the image at the top
    cardImage.style.left = "50%"; // Center the image horizontally
    cardImage.style.transform = "translateX(-50%)"; // Center the image horizontally

    const cardBody = document.createElement("div");
    cardBody.className = "cardbody";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = card.text;
    cardText.style.position = "absolute";
    cardText.style.top = "70%"; // Center the text vertically
    cardText.style.left = "26%"; // Center the text horizontally
    cardText.style.transform = "translate(-50%, -50%)"; // Center the text both vertically and horizontally
    cardElement.style.boxShadow =
      " 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"; // Add box-shadow
    cardElement.style.border = "1px solid transparent"; // Add border
    cardElement.style.color = "#fff"; // Set the button text color
    cardElement.style.fontSize = "18px";
    cardElement.style.fontWeight = "bold";

    const cardButton = document.createElement("a");
    cardButton.href = "#";
    cardButton.className = "btn btn-warning";
    cardButton.textContent = "🛒Trade🛒";
    cardButton.style.backgroundColor = "#ffcc00"; // Set the button background color
    cardButton.style.color = "#333"; // Set the button text color
    cardButton.style.position = "absolute";
    cardButton.style.bottom = "10px"; // Adjust the bottom position as needed
    cardButton.style.left = "50%"; // Center the button horizontally
    cardButton.style.transform = "translateX(-50%)"; // Center the button horizontally
    cardButton.style.width = "90%"; // Set the height of the card
    cardButton.style.fontWeight = "bold";

    // Add hover effect
    cardColumn.addEventListener("mouseover", function () {
      cardElement.style.transform = "scale(1.05)"; // Scale up the card on hover
      cardElement.style.backgroundColor = "#3a3f4a"; // Change background color on hover
    });

    cardColumn.addEventListener("mouseout", function () {
      cardElement.style.transform = "scale(1)"; // Reset the scale on mouse out
      cardElement.style.backgroundColor = "#282633"; // Reset background color on mouse out
    });

    cardButton.addEventListener("click", function () {
      const currentContainer = cardColumn.closest(".row"); // Get the current container

      if (currentContainer === cardContainer2) {
        // Check if there are less than 6 cards in cardContainer4
        if (cardContainer4.childElementCount < 6) {
          // Move the card from cardContainer2 to cardContainer4
          cardColumn.remove();
          cardContainer4.appendChild(cardColumn);

          // Update total value
          totalValue += parseFloat(
            card.text.replace("$ ", "").replace(",", "")
          );
          buttonRp.textContent = `Rp ${totalValue.toFixed(2)}`;
        } else {
          // Handle maximum card limit in cardContainer4
          alert("🌟 Maximum Trade Item is 6 🌟");
        }
      } else if (currentContainer === cardContainer4) {
        // Move the card back from cardContainer4 to cardContainer2
        cardColumn.remove();
        cardContainer2.appendChild(cardColumn);

        // Update total value
        totalValue -= parseFloat(card.text.replace("$ ", "").replace(",", ""));
        buttonRp.textContent = `Rp ${totalValue.toFixed(2)}`;
      }
    });

    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardBody);
    cardColumn.appendChild(cardElement);
    cardContainer.appendChild(cardColumn);
  });
});

$(document).ready(function () {
  $(".menu .filter-box").click(function () {
    $(this).toggleClass("active");
  });
});

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Toggle Navbar Menu on Burger Click
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Closed Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 769) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
    }
  }
});
