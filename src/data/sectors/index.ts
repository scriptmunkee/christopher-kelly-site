// Every sector page built with SectorPage.astro. Adding a page: create its content
// file here, add it to this list, and add its { t, href } to `sectors` in ../services.ts.
import type { SectorPageData } from '../../lib/sector';
import { solicitors } from './solicitors';
import { fintech } from './fintech';
import { dentists } from './dentists';

export const sectorPages: SectorPageData[] = [solicitors, fintech, dentists];
