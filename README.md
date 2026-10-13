# Hakili Dayɛlin

- Proverbes : `app/data/proverbs.json` (champs bm [bambara latin], fr, en)
- Traductions : `locales/{fr,en,bm}.json` (bm = bambara en écriture latine ; le français sert de repli)
- Déploiement : `.github/workflows/deploy.yml` (secrets EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY)
- Template EmailJS : variables {{from_name}}, {{reply_to}}, {{type}}, {{message}}

```bash
rm -rf .nuxt node_modules package-lock.json
npm install
# cp .env.example .env 
npm run dev
# clean start
$ rm -rf .nuxt .output node_modules/.cache node_modules/.vite
$ npx nuxt prepare && npm run dev
```
