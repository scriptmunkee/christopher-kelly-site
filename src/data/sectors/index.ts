// Every sector page built with SectorPage.astro. Adding a page: create its content
// file here, add it to this list, and add its { t, href } to `sectors` in ../services.ts.
import type { SectorPageData } from '../../lib/sector';
import { solicitors } from './solicitors';
import { fintech } from './fintech';
import { dentists } from './dentists';
import { insurance } from './insurance';
import { techStartups } from './tech-startups';
import { startups } from './startups';
import { medical } from './medical';
import { ecommerce } from './ecommerce';
import { saas } from './saas';
import { trades } from './trades';
import { construction } from './construction';
import { localServices } from './local-services';

export const sectorPages: SectorPageData[] = [
  solicitors, fintech, dentists, insurance, techStartups, startups,
  medical, ecommerce, saas, trades, construction, localServices,
];
