import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { HamburgerMenu } from '../components/HamburgerMenu';

// A24 x MINOR PLANET NYC
import a24_1 from '../../imports/A24_Planet_NYC_Individuals0013_copy-1.jpg';
import a24_2 from '../../imports/A24_Planet_NYC_Individuals0017_copy-1.jpg';
import a24_3 from '../../imports/A24_Planet_NYC_Individuals0022_copy-1.jpg';
import a24_4 from '../../imports/A24_Planet_NYC_Individuals0026_copy-1.jpg';
import a24_5 from '../../imports/A24_Planet_NYC_Individuals0034_copy-1.jpg';
import a24_6 from '../../imports/A24_Planet_NYC_Individuals0039_copy-1.jpg';
import a24_7 from '../../imports/A24_PLANETNYC_INDIVIDUAL20251229_15130135_copy-1.jpg';
import a24_8 from '../../imports/A24_PLANETNYC_INDIVIDUAL20251229_15425804_copy-1.jpg';

// ALICE
import alice_1 from '../../imports/ALICE_SELECTED_copy__copy.jpg';
import alice_2 from '../../imports/ALICE_SELECTED0017_copy_3.jpg';
import alice_3 from '../../imports/ALICE_SELECTED0029_copy_2.jpg';

// ALL MADE
import allMade_1 from '../../imports/975-16-08_1-1.jpg';
import allMade_2 from '../../imports/975-5-02.jpg';
import allMade_3 from '../../imports/975-6-15_1-1.jpg';
import allMade_4 from '../../imports/975-6-19_1-1.jpg';
import allMade_5 from '../../imports/975-6-31_1-1.jpg';
import allMade_6 from '../../imports/975-7-27_1-1.jpg';
import allMade_7 from '../../imports/975-11-27_1-1.jpg';
import allMade_8 from '../../imports/975-15-17_1-1.jpg';
import allMade_9 from '../../imports/975-15-30_1-1.jpg';
import allMade_10 from '../../imports/975-17-25_1-1.jpg';

// CAFE TROPICAL
import cafeTropical_1 from '../../imports/CAFETROPICAL_EYESCREAM_INDIVIDUALS030_copy.jpg';
import cafeTropical_2 from '../../imports/000163980032.jpg';
import cafeTropical_3 from '../../imports/000163990033_copy-1.jpg';
import cafeTropical_4 from '../../imports/000163990035.jpg';
import cafeTropical_5 from '../../imports/000164000033.jpg';
import cafeTropical_6 from '../../imports/CAFETROPICAL_EYESCREAM_INDIVIDUALS032.jpg';
import cafeTropical_7 from '../../imports/eyescream_fim_individual20260511_21280016_copy.jpg';

// COTODAMA
import cotodama_1 from '../../imports/RAW_0703-1.jpg';
import cotodama_2 from '../../imports/RAW_0564-1.jpg';
import cotodama_3 from '../../imports/RAW_0629-1.jpg';
import cotodama_4 from '../../imports/RAW_0723-1.jpg';
import cotodama_5 from '../../imports/RAW_0753-1.jpg';


// FIRME ATELIER
import firme_1 from '../../imports/firme_new_1.jpg';
import firme_2 from '../../imports/firme_new_5_copy.jpg';
import firme_3 from '../../imports/firme_new_APRON_ALFONSO_INDIVIDUALS12_copy.jpg';
import firme_4 from '../../imports/firme_new_APRON_MANNY_INDIVIDUALS07_copy.jpg';
import firme_5 from '../../imports/firme_new_hyak947-018_copy.jpg';
import firme_6 from '../../imports/firme_new_papphet_20250803_16231493_copy.jpg';
import firme_7 from '../../imports/firme_new_papphet_20250803_16305611_copy.jpg';
import firme_8 from '../../imports/firme_new_papphet_20250803_16334635_copy.jpg';
import firme_9 from '../../imports/firme_new_papphet_20250803_16413358_copy.jpg';
import firme_10 from '../../imports/firme_new_papphet_20250803_16513155_copy.jpg';

// GEEKS RULE x SEGA
import geeks_1 from '../../imports/geeks_rule_sega_scan_01.jpg';
import geeks_2 from '../../imports/geeks_rule_sega_scan_03.jpg';
import geeks_3 from '../../imports/geeks_rule_sega_scan_04.jpg';
import geeks_4 from '../../imports/geeks_rule_sega_scan_09.jpg';
import geeks_5 from '../../imports/geeks_rule_sega_scan_12.jpg';
import geeks_6 from '../../imports/geeks_rule_sega_scan_17.jpg';
import geeks_7 from '../../imports/geeks_rule_sega_scan_19.jpg';
import geeks_8 from '../../imports/geeks_rule_sega_scan_20.jpg';

// GRAMICCI
import gramicci_1 from '../../imports/gramicci_new_000211110006_copy.jpg';
import gramicci_2 from '../../imports/gramicci_new_000211110016_copy.jpg';
import gramicci_3 from '../../imports/gramicci_new_000211110030_copy.jpg';
import gramicci_4 from '../../imports/gramicci_new_000211120011_copy.jpg';
import gramicci_5 from '../../imports/gramicci_new_000211120021_copy.jpg';
import gramicci_6 from '../../imports/gramicci_new_000211120030_copy.jpg';
import gramicci_7 from '../../imports/gramicci_new_000211130005_copy.jpg';
import gramicci_8 from '../../imports/gramicci_new_000211130022_copy.jpg';
import gramicci_9 from '../../imports/gramicci_new_000211140011_copy.jpg';
import gramicci_10 from '../../imports/gramicci_new_000211140019_copy.jpg';
import gramicci_11 from '../../imports/gramicci_new_000211140034_copy.jpg';
import gramicci_12 from '../../imports/gramicci_new_R1-06743-006A_copy.jpg';
import gramicci_13 from '../../imports/gramicci_new_R1-06743-030A_copy.jpg';
import gramicci_14 from '../../imports/gramicci_new_R1-06743-035A_copy.jpg';

// KODAK
import kodak_1 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL56_copy_3.jpg';
import kodak_2 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL71_copy_3.jpg';
import kodak_3 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL78_copy_3.jpg';
import kodak_4 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL90_copy_4.jpg';
import kodak_5 from '../../imports/GINNY_KODAK_BTS_INDIVIDUAL91_copy_3.jpg';
import kodak_6 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS13_copy.jpg';
import kodak_7 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS16_copy.jpg';
import kodak_8 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS18_copy.jpg';
import kodak_9 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS19_copy.jpg';
import kodak_10 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS20_copy.jpg';
import kodak_11 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS22_copy.jpg';
import kodak_12 from '../../imports/GINNY_KODAK_PRINT_SCAN_INDIVIDUALS25_copy.jpg';

// OYAKAWA
import oyakawa_1 from '../../imports/oyakawa_new_RAW6389_Enhanced_NR.jpg';
import oyakawa_2 from '../../imports/oyakawa_new_RAW6472_Enhanced_NR.jpg';
import oyakawa_3 from '../../imports/oyakawa_new_RAW6496_Enhanced_NR.jpg';
import oyakawa_4 from '../../imports/oyakawa_new_RAW6539_Enhanced_NR.jpg';
import oyakawa_5 from '../../imports/oyakawa_new_RAW6562_Enhanced_NR.jpg';
import oyakawa_6 from '../../imports/oyakawa_new_RAW6594_Enhanced_NR.jpg';
import oyakawa_7 from '../../imports/oyakawa_new_RAW6620_Enhanced_NR.jpg';
import oyakawa_8 from '../../imports/oyakawa_new_RAW6790_Enhanced_NR.jpg';
import oyakawa_9 from '../../imports/oyakawa_new_25050701_2_copy.jpg';
import oyakawa_10 from '../../imports/oyakawa_new_25050701_copy.jpg';
import oyakawa_11 from '../../imports/oyakawa_new_25050701_b7f67ff_copy.jpg';
import oyakawa_12 from '../../imports/oyakawa_new_25050701_d473332_copy.jpg';
import oyakawa_13 from '../../imports/oyakawa_new_25050701_e08530a_copy.jpg';
import oyakawa_14 from '../../imports/oyakawa_new_img20250506_17264049_copy.jpg';
import oyakawa_15 from '../../imports/oyakawa_new_instagram_07.jpg';

// JANE
import jane_1 from '../../imports/jane_260622202895010026_copy_2.jpg';
import jane_2 from '../../imports/jane_260622202895020021_copy_2.jpg';
import jane_3 from '../../imports/jane_260622202895020036_copy_2.jpg';
import jane_4 from '../../imports/jane_260622202895030025_copy_2.jpg';
import jane_5 from '../../imports/jane_260622202895030028_copy_2.jpg';
import jane_6 from '../../imports/jane_260622202895050012_copy_2.jpg';
import jane_7 from '../../imports/jane_260622202895050023_copy_2.jpg';
import jane_8 from '../../imports/jane_260622202895050024_copy_2.jpg';
import jane_9 from '../../imports/jane_260622202895060006_copy_2.jpg';
import jane_10 from '../../imports/jane_260622202895060011_copy_2.jpg';
import jane_11 from '../../imports/jane_260622202895070009_copy_2.jpg';
import jane_12 from '../../imports/jane_260622202895070012_copy_2.jpg';
import jane_13 from '../../imports/jane_260622202895070014_copy_2.jpg';
import jane_14 from '../../imports/jane_260622202895070023_copy_2.jpg';
import jane_15 from '../../imports/jane_260622202895070026_copy_2.jpg';

// INK NO WORLD
import inkNoWorld_1 from '../../imports/EYESCREAM_INC_PRINT_copy-1.jpg';
import inkNoWorld_2 from '../../imports/EYESCREAM_INC_PRINT0001_copy-1.jpg';
import inkNoWorld_3 from '../../imports/EYESCREAM_INC_PRINT0006_copy-1.jpg';
import inkNoWorld_4 from '../../imports/EYESCREAM_INC_PRINT0008_copy-1.jpg';
import inkNoWorld_5 from '../../imports/EYESCREAM_INC_PRINT0009_copy-1.jpg';
import inkNoWorld_6 from '../../imports/EYESCREAM_INC_SCAN11_copy-1.jpg';
import inkNoWorld_7 from '../../imports/EYESCREAM_INC_SCAN12_copy-1.jpg';

// OZZIE
import ozzie_1 from '../../imports/EYESCREAM_OZZIE_DECEMBER20251226_20422009-1.jpg';
import ozzie_2 from '../../imports/EYESCREAM_OZZIE_DECEMBER-1.jpg';
import ozzie_3 from '../../imports/EYESCREAM_OZZIE_DECEMBER0010-1.jpg';
import ozzie_4 from '../../imports/EYESCREAM_OZZIE_DECEMBER0015-1.jpg';

// THE KID LAROI
import kidLaroi_1 from '../../imports/the_kid_laroi_IMGP1532.jpg';
import kidLaroi_2 from '../../imports/the_kid_laroi_P1500115.jpg';
import kidLaroi_3 from '../../imports/the_kid_laroi_P1500223.jpg';
import kidLaroi_4 from '../../imports/the_kid_laroi_P1510552.jpg';
import kidLaroi_5 from '../../imports/the_kid_laroi_P1510618.jpg';
import kidLaroi_6 from '../../imports/the_kid_laroi_P1510621.jpg';

// YUTO HORIGOME
import yutoHorigome_1 from '../../imports/yuto_horigome_01.jpg';
import yutoHorigome_2 from '../../imports/yuto_horigome_02.jpg';
import yutoHorigome_3 from '../../imports/yuto_horigome_03.jpg';
import yutoHorigome_4 from '../../imports/yuto_horigome_04.jpg';
import yutoHorigome_5 from '../../imports/yuto_horigome_05.jpg';
import yutoHorigome_6 from '../../imports/yuto_horigome_06.jpg';
import yutoHorigome_7 from '../../imports/yuto_horigome_07.jpg';
import yutoHorigome_8 from '../../imports/yuto_horigome_08.jpg';
import yutoHorigome_9 from '../../imports/yuto_horigome_09.jpg';
import yutoHorigome_10 from '../../imports/yuto_horigome_10.jpg';
import yutoHorigome_11 from '../../imports/yuto_horigome_260908268222020026.jpg';
import yutoHorigome_12 from '../../imports/yuto_horigome_260908268222020028.jpg';
import yutoHorigome_13 from '../../imports/yuto_horigome_260908268222020029.jpg';
import yutoHorigome_14 from '../../imports/yuto_horigome_260908268222020034.jpg';
import yutoHorigome_15 from '../../imports/yuto_horigome_260911268222030002.jpg';
import yutoHorigome_16 from '../../imports/yuto_horigome_260911268222030012.jpg';
import yutoHorigome_17 from '../../imports/yuto_horigome_260911268222030016.jpg';
import yutoHorigome_18 from '../../imports/yuto_horigome_260911268222030018.jpg';
import yutoHorigome_19 from '../../imports/yuto_horigome_260911268222030020.jpg';
import yutoHorigome_20 from '../../imports/yuto_horigome_260911268222030023.jpg';
import yutoHorigome_21 from '../../imports/yuto_horigome_260911268222030036.jpg';

// XLARGE x RHC
import xlargeRhc_1 from '../../imports/xlarge_rhc_RAW_5735_Edit_copy_3.jpg';
import xlargeRhc_2 from '../../imports/xlarge_rhc_RAW_5911_Edit_copy.jpg';
import xlargeRhc_3 from '../../imports/xlarge_rhc_RAW_5922_copy.jpg';
import xlargeRhc_4 from '../../imports/xlarge_rhc_RAW_6206_copy.jpg';

// KIDS
import kids_1 from '../../imports/kids_000211150005_copy.jpg';
import kids_2 from '../../imports/kids_AVALON_KIDS_2026043.jpg';
import kids_3 from '../../imports/kids_AVALON_KIDS_2026045.jpg';
import kids_4 from '../../imports/kids_AVALON_KIDS_2026053.jpg';
import kids_5 from '../../imports/kids_AVALON_KIDS_2026057.jpg';
import kids_6 from '../../imports/kids_AVALON_KIDS_2026058.jpg';
import kids_7 from '../../imports/kids_AVALON_KIDS_2026059.jpg';
import kids_8 from '../../imports/kids_AVALON_KIDS_2026061.jpg';
import kids_9 from '../../imports/kids_E100scan20250827_22331015_copy.jpg';
import kids_10 from '../../imports/kids_E100scan20250827_22435225_copy.jpg';
import kids_11 from '../../imports/kids_E100scan20250827_22544620_copy.jpg';
import kids_12 from '../../imports/kids_E100scan20250827_22564869_copy.jpg';
import kids_13 from '../../imports/kids_kubo_20250102_00213_copy.jpg';
import kids_14 from '../../imports/kids_kubo_20250102_00214_copy_4.jpg';
import kids_15 from '../../imports/kids_kubo_20250102_00217_copy.jpg';
import kids_16 from '../../imports/kids_NAVI_BEACH_2026087.jpg';
import kids_17 from '../../imports/kids_NAVI_BEACH_2026091.jpg';
import kids_18 from '../../imports/kids_NAVI_BEACH_2026094.jpg';
import kids_19 from '../../imports/kids_NAVI_BEACH_2026097.jpg';
import kids_20 from '../../imports/kids_NAVI_BEACH_2026098.jpg';
import kids_21 from '../../imports/kids_NAVI_BEACH_2026101_1.jpg';
import kids_22 from '../../imports/kids_NAVI_BEACH_2026101.jpg';
import kids_23 from '../../imports/kids_R1-08711-0018.jpg';
import kids_24 from '../../imports/kids_R1-08983-0021_copy.jpg';
import kids_25 from '../../imports/kids_R1-08983-0034_copy.jpg';
import kids_26 from '../../imports/kids_R1-09450-0001_copy.jpg';
import kids_27 from '../../imports/kids_R1-09450-0016_copy.jpg';
import kids_28 from '../../imports/kids_R1-09450-0032_copy.jpg';

// NAVI
import navi_1 from '../../imports/navi_000128500021_copy.jpg';
import navi_2 from '../../imports/navi_black_and_white_20250920_15060556_copy.jpg';
import navi_3 from '../../imports/navi_black_and_white_20250920_16161501_copy.jpg';
import navi_4 from '../../imports/navi_black_and_white_20250920_16165341_copy.jpg';
import navi_5 from '../../imports/navi_black_and_white_20250920_16184241_copy.jpg';
import navi_6 from '../../imports/navi_FILM_BW_INDIVIDUALS048_copy.jpg';
import navi_7 from '../../imports/navi_FILM_BW_INDIVIDUALS049_copy.jpg';
import navi_8 from '../../imports/navi_FILM_BW_INDIVIDUALS051_copy.jpg';
import navi_9 from '../../imports/navi_img20250506_18200278_copy.jpg';
import navi_10 from '../../imports/navi_black_and_white_20250929_21184032_copy.jpg';
import navi_11 from '../../imports/navi_black_and_white_20250929_21323523_copy.jpg';
import navi_12 from '../../imports/navi_black_and_white_20250929_21415352_copy.jpg';
import navi_13 from '../../imports/navi_black_and_white_20250929_21574432_copy.jpg';
import navi_14 from '../../imports/navi_print_1_6.jpg';
import navi_15 from '../../imports/navi_scan_20250901_00112412_copy.jpg';
import navi_16 from '../../imports/navi_NAVI_BEACH_2026065.jpg';
import navi_17 from '../../imports/navi_NAVI_BEACH_2026067.jpg';
import navi_18 from '../../imports/navi_NAVI_BEACH_2026072.jpg';
import navi_19 from '../../imports/navi_NAVI_BEACH_2026075.jpg';
import navi_20 from '../../imports/navi_NAVI_BEACH_2026076.jpg';
import navi_21 from '../../imports/navi_NAVI_BEACH_2026082.jpg';
import navi_22 from '../../imports/navi_NAVI_BEACH_2026084.jpg';
import navi_23 from '../../imports/navi_NAVI_BEACH_2026085.jpg';
import navi_24 from '../../imports/navi_NAVI_BEACH_2026096.jpg';

// FR2
import fr2_1 from '../../imports/fr2_260502167712010013_copy.jpg';
import fr2_2 from '../../imports/fr2_260502167712010034_copy.jpg';
import fr2_3 from '../../imports/fr2_260502167712020019_copy.jpg';
import fr2_4 from '../../imports/fr2_260504167708010004_copy.jpg';
import fr2_5 from '../../imports/fr2_260504167708010033_copy.jpg';

// JULY 4TH
import july4th_1 from '../../imports/july_4th_R1-08744-0000_copy.jpg';
import july4th_2 from '../../imports/july_4th_R1-08744-0004_copy.jpg';
import july4th_3 from '../../imports/july_4th_R1-08744-0020_copy.jpg';
import july4th_4 from '../../imports/july_4th_R1-08744-0021_copy.jpg';
import july4th_5 from '../../imports/july_4th_R1-08745-0007_copy.jpg';
import july4th_6 from '../../imports/july_4th_superchief_gallery_selected_photo_copy.jpg';

const projects = [
  {
    id: 'a24-minor-planet',
    name: 'A24 x MINOR PLANET NYC',
    images: [a24_5, a24_1, a24_2, a24_3, a24_4, a24_6, a24_7, a24_8]
  },
  {
    id: 'all-made',
    name: 'ALL MADE',
    images: [allMade_1, allMade_2, allMade_3, allMade_4, allMade_5, allMade_6, allMade_7, allMade_8, allMade_9, allMade_10]
  },
  {
    id: 'cafe-tropical',
    name: 'CAFE TROPICAL',
    images: [cafeTropical_7, cafeTropical_1, cafeTropical_2, cafeTropical_3, cafeTropical_4, cafeTropical_5, cafeTropical_6]
  },
  {
    id: 'cotodama',
    name: 'COTODAMA',
    images: [cotodama_1, cotodama_2, cotodama_3, cotodama_4, cotodama_5]
  },
  {
    id: 'firme-atelier',
    name: 'FIRME ATELIER',
    images: [firme_7, firme_1, firme_2, firme_3, firme_4, firme_5, firme_6, firme_8, firme_9, firme_10]
  },
  {
    id: 'geeks-rule-sega',
    name: 'GEEKS RULE x SEGA',
    images: [geeks_7, geeks_1, geeks_2, geeks_3, geeks_4, geeks_5, geeks_6, geeks_8]
  },
  {
    id: 'gramicci',
    name: 'GRAMICCI',
    images: [gramicci_7, gramicci_1, gramicci_2, gramicci_3, gramicci_4, gramicci_5, gramicci_6, gramicci_8, gramicci_9, gramicci_10, gramicci_11, gramicci_12, gramicci_13, gramicci_14]
  },
  {
    id: 'kodak',
    name: 'KODAK',
    images: [kodak_7, kodak_1, kodak_2, kodak_3, kodak_4, kodak_5, kodak_6, kodak_8, kodak_9, kodak_10, kodak_11, kodak_12]
  },
  {
    id: 'oyakawa',
    name: 'OYAKAWA',
    images: [oyakawa_2, oyakawa_1, oyakawa_3, oyakawa_4, oyakawa_5, oyakawa_6, oyakawa_7, oyakawa_8, oyakawa_9, oyakawa_10, oyakawa_11, oyakawa_12, oyakawa_13, oyakawa_14, oyakawa_15]
  },
  {
    id: 'jane',
    name: 'JANE',
    images: [jane_14, jane_1, jane_2, jane_3, jane_4, jane_5, jane_6, jane_7, jane_8, jane_9, jane_10, jane_11, jane_12, jane_13, jane_15]
  },
  {
    id: 'the-kid-laroi-saint-michel',
    name: 'THE KID LAROI',
    images: [kidLaroi_4, kidLaroi_1, kidLaroi_2, kidLaroi_3, kidLaroi_5, kidLaroi_6]
  },
  {
    id: 'yuto-horigome',
    name: 'YUTO HORIGOME',
    images: [yutoHorigome_11, yutoHorigome_1, yutoHorigome_2, yutoHorigome_3, yutoHorigome_4, yutoHorigome_5, yutoHorigome_6, yutoHorigome_7, yutoHorigome_8, yutoHorigome_9, yutoHorigome_10, yutoHorigome_12, yutoHorigome_13, yutoHorigome_14, yutoHorigome_15, yutoHorigome_16, yutoHorigome_17, yutoHorigome_18, yutoHorigome_19, yutoHorigome_20, yutoHorigome_21]
  },
  { id: 'alice', name: 'ALICE', images: [alice_1, alice_2, alice_3] },
  { id: 'xlarge-rhc', name: 'XLARGE x RHC', images: [xlargeRhc_3, xlargeRhc_1, xlargeRhc_2, xlargeRhc_4] },
  { id: 'navi', name: 'NAVI', images: [navi_3, navi_1, navi_2, navi_4, navi_5, navi_6, navi_7, navi_8, navi_9, navi_10, navi_11, navi_12, navi_13, navi_14, navi_15, navi_16, navi_17, navi_18, navi_19, navi_20, navi_21, navi_22, navi_23, navi_24] },
  { id: 'fr2', name: 'FR2', images: [fr2_4, fr2_1, fr2_2, fr2_3, fr2_5] },
  { id: 'july-4th', name: 'JULY 4TH', images: [july4th_6, july4th_1, july4th_2, july4th_3, july4th_4, july4th_5] },
  { id: 'kids', name: 'KIDS', images: [kids_4, kids_1, kids_2, kids_3, kids_5, kids_6, kids_7, kids_8, kids_9, kids_10, kids_11, kids_12, kids_13, kids_14, kids_15, kids_16, kids_17, kids_18, kids_19, kids_20, kids_21, kids_22, kids_23, kids_24, kids_25, kids_26, kids_27, kids_28] },
  { id: 'ink-no-world', name: 'INK NO WORLD', images: [inkNoWorld_1, inkNoWorld_2, inkNoWorld_3, inkNoWorld_4, inkNoWorld_5, inkNoWorld_6, inkNoWorld_7] },
  { id: 'ozzie', name: 'OZZIE', images: [ozzie_1, ozzie_2, ozzie_3, ozzie_4] },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isEmpty = project.images.length === 0;

  const inner = isEmpty ? (
    <div
      className="block relative overflow-hidden cursor-default w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-full h-full bg-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-black text-sm md:text-base tracking-widest text-center px-3 font-light transition-all duration-400"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0px)' : 'translateY(10px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }}
        >
          {project.name}
        </span>
      </div>
    </div>
  ) : (
    <Link
      to={`/photography/${project.id}`}
      className="block relative overflow-hidden cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => sessionStorage.setItem('photo_scroll', String(window.scrollY))}
    >
      <img
        src={project.images[0]}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(0,0,0,0.63)', opacity: hovered ? 1 : 0 }}
      >
        <span className="text-white text-sm md:text-base tracking-widest text-center px-3 font-light">
          {project.name}
        </span>
      </div>
    </Link>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ aspectRatio: '2/3' }}
    >
      {inner}
    </motion.div>
  );
}

export function PhotographyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const restored = useRef(false);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;
    const saved = sessionStorage.getItem('photo_scroll');
    if (saved) {
      window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' });
      sessionStorage.removeItem('photo_scroll');
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="pt-28 md:pt-32 px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
